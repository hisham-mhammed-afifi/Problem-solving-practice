// Runs `fn` while the given built-ins are replaced by functions that throw,
// then restores them. Used by tests whose problem says "don't use X".
//
//   withForbidden([[Math, 'max']], () => maxOfThree(3, 9, 4));
//
// Only call the solution inside `fn`; run assertions on the returned value afterwards.

function label(target, key) {
  if (target === Math) return `Math.${key}`;
  if (typeof target === 'function') return `${target.name}.${key}`;
  return `${target.constructor.name}.prototype.${key}`;
}

export function withForbidden(targets, fn) {
  const saved = targets.map(([target, key]) => [target, key, Object.getOwnPropertyDescriptor(target, key)]);

  for (const [target, key] of saved) {
    Object.defineProperty(target, key, {
      configurable: true,
      writable: true,
      value() {
        throw new Error(`Rule broken: don't use ${label(target, key)}`);
      },
    });
  }

  try {
    return fn();
  } finally {
    for (const [target, key, descriptor] of saved) {
      Object.defineProperty(target, key, descriptor);
    }
  }
}
