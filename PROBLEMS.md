# 100 Easy JavaScript Practice Problems

Tick the box when you finish one. Each line gives a function name and an example to test against.
Write the solution yourself first. Then try a second approach, such as a loop vs. `reduce`, or `Set` vs. `filter`.

**Source tags:** `CC` Codecademy · `PP` Placement Preparation · `JD` js-drills (w3resource-style) · `DG` DesignGurus · `CW` Codewars 8 kyu · `W3` w3resource · `LC` LeetCode 30 Days of JavaScript

---

## Basics & Numbers (1–20)

- [ ] 1. `greet(name)`: return (don't print) a greeting. `greet("Ada")` → `"Hello, Ada!"` · `PP` `CW`
- [ ] 2. Print the even numbers from 0 to 10 with a loop that would still work for 0–1,000,000. · `CC`
- [ ] 3. Print the 1–10 multiplication tables, written so a bigger range is a one-number change. · `CC`
- [ ] 4. `kmToMiles(km)`: `kmToMiles(10)` ≈ `6.21371` · `CC`
- [ ] 5. `celsiusToFahrenheit(c)`: `100` → `212`, `-40` → `-40` · `PP` `W3`
- [ ] 6. `evenOrOdd(n)`: `7` → `"odd"`, `0` → `"even"` · `PP`
- [ ] 7. `isDivisibleBy10(n)`: `30` → `true`, `35` → `false` · `CC`
- [ ] 8. `rectangleArea(length, width)`: `(4, 5)` → `20` · `PP`
- [ ] 9. `triangleArea(a, b, c)` with Heron's formula: `(5, 6, 7)` → `14.6969…` · `W3`
- [ ] 10. `maxOfThree(a, b, c)` without `Math.max`: `(3, 9, 4)` → `9` · `PP` `W3`
- [ ] 11. `opposite(n)`: `14` → `-14`, `-34` → `34`. What should `0` give? · `CW`
- [ ] 12. `calc(op, a, b)`: `("+", 2, 3)` → `5`, `("/", 8, 2)` → `4` · `CW`
- [ ] 13. `isLeapYear(year)`: `2000` → `true`, `1900` → `false`, `2024` → `true` · `W3` `JD`
- [ ] 14. `factorial(n)`: `5` → `120`, `0` → `1` · `PP` `DG` `JD`
- [ ] 15. `isPrime(n)`: `1` → `false`, `2` → `true`, `97` → `true` · `PP` `DG` `JD`
- [ ] 16. `reverseNumber(n)`: `32243` → `34223` · `JD`
- [ ] 17. `gcd(a, b)`: `(12, 18)` → `6` · `JD`
- [ ] 18. Sum of all multiples of 3 or 5 below 1000 → `233168` · `JD`
- [ ] 19. `factors(n)`: `12` → `[1, 2, 3, 4, 6, 12]` · `JD`
- [ ] 20. `diffFrom13(n)`: absolute difference from 13, doubled if `n > 13`. `10` → `3`, `20` → `14` · `W3`

## Strings (21–45)

- [ ] 21. `reverseString("hello")` → `"olleh"` · `PP` `DG` `JD`
- [ ] 22. `isPalindrome("racecar")` → `true` · `CC` `PP` `DG`
- [ ] 23. `isPalindromeLoose("Taco cat")` → `true` (ignore spaces and case) · `JD`
- [ ] 24. `removeSpaces(" a b  c ")` → `"abc"` · `CC`
- [ ] 25. `countVowels("Hello World")` → `3` · `CC` `PP` `JD`
- [ ] 26. `capitalize("javascript")` → `"Javascript"` · `JD`
- [ ] 27. `capitalizeWords("the quick brown fox")` → `"The Quick Brown Fox"` · `PP` `JD`
- [ ] 28. `longestWord("Web Development Tutorial")` → `"Development"` · `JD`
- [ ] 29. `alphabetize("webmaster")` → `"abeemrstw"` · `JD`
- [ ] 30. `charFrequency("banana")` → `{ b: 1, a: 3, n: 2 }` · `DG` `JD`
- [ ] 31. `firstNonRepeated("abacddbec")` → `"e"` · `JD`
- [ ] 32. `uniqueChars("aabbcd")` → `"abcd"` · `JD`
- [ ] 33. `repeatStr(3, "ab")` → `"ababab"` (try it without `.repeat`) · `CW` `JD`
- [ ] 34. `swapCase("The Quick")` → `"tHE qUICK"` · `JD`
- [ ] 35. `truncate("JavaScript", 4, "...")` → `"Java..."` · `JD`
- [ ] 36. `chunkString("abcdefg", 3)` → `["abc", "def", "g"]` · `JD`
- [ ] 37. `countSubstring("the cat and the hat", "the")` → `2` · `JD`
- [ ] 38. `slugify("Hello World, JS!")` → `"hello-world-js"` · `JD`
- [ ] 39. `ordinal(n)`: `1` → `"1st"`, `2` → `"2nd"`, `3` → `"3rd"`, `11` → `"11th"`, `22` → `"22nd"` · `JD`
- [ ] 40. `stripTags("<p>Hi <b>there</b></p>")` → `"Hi there"` · `JD`
- [ ] 41. `xo(str)`: same number of `x` and `o`? `"xxOo"` → `true`, `"xxxo"` → `false`, `"zzz"` → `true` · `CW`
- [ ] 42. `isNumeric(str)`: `" -12.5 "` → `true`, `"12a"` → `false` · `CW`
- [ ] 43. `fileExtension("report.final.pdf")` → `"pdf"` · `W3`
- [ ] 44. `rotateRight("w3resource", 3)` → `"rcew3resou"` · `W3`
- [ ] 45. `removeCharAt("hello", 1)` → `"hllo"` · `W3`

## Arrays (46–70)

- [ ] 46. `sumArray([1, 2, 3.5, -1])` → `5.5` · `CC` `PP` `DG` `JD`
- [ ] 47. `reverseArray([1, 2, 3])` → `[3, 2, 1]` (once mutating, once not) · `CC`
- [ ] 48. `sortAscending([10, 9, -1, 2.5, 100])` → `[-1, 2.5, 9, 10, 100]`. Hint: default `sort()` is lexicographic. · `CC` `PP`
- [ ] 49. `removeNegatives([3, -1, 0, -5, 8])` → `[3, 0, 8]` · `CC`
- [ ] 50. `maxInArray([-3, -1, -7])` → `-1` · `CC` `DG`
- [ ] 51. `removeDuplicates([1, 2, 2, 3, 1])` → `[1, 2, 3]` · `PP` `DG` `JD`
- [ ] 52. `mergeSorted([1, 3, 5], [2, 4, 6])` → `[1, 2, 3, 4, 5, 6]` (two pointers, no `sort`) · `DG`
- [ ] 53. `mergeUnique([1, 2, 3], [2, 3, 4])` → `[1, 2, 3, 4]` · `PP` `JD`
- [ ] 54. `squares([1, 2, 3])` → `[1, 4, 9]` · `PP`
- [ ] 55. `indexOfValue(arr, v)`: write your own `indexOf`, returning `-1` if missing · `PP`
- [ ] 56. `secondLargest([5, 1, 9, 9, 7])` → `7` (distinct values) · `PP` `JD`
- [ ] 57. `allEqual([2, 2, 2])` → `true` · `PP`
- [ ] 58. `sumAndProduct([1, 2, 3, 4])` → `{ sum: 10, product: 24 }` · `JD`
- [ ] 59. `mostFrequent([3, 1, 3, 2, 1, 3])` → `3` · `JD`
- [ ] 60. `findDuplicates([1, 2, 3, 2, 1, 4])` → `[1, 2]` · `JD`
- [ ] 61. `flatten([1, [2, [3, [4]]]])` → `[1, 2, 3, 4]` (then just one level) · `JD`
- [ ] 62. `difference([1, 2, 3, 4], [2, 4])` → `[1, 3]` · `JD`
- [ ] 63. `removeFalsy([0, 1, false, 2, "", 3, null, NaN])` → `[1, 2, 3]` · `JD`
- [ ] 64. `twoSum([2, 7, 11, 15], 9)` → `[0, 1]` · `JD`
- [ ] 65. `first(arr, n)` and `last(arr, n)`: `last([1, 2, 3, 4], 2)` → `[3, 4]` · `JD`
- [ ] 66. `fillArray(3, "x")` → `["x", "x", "x"]` · `JD`
- [ ] 67. `shuffle(arr)`: Fisher–Yates. Check that it keeps the same elements. · `JD`
- [ ] 68. `bubbleSort([5, 2, 9, 1])` → `[1, 2, 5, 9]` · `JD`
- [ ] 69. `chunk([1, 2, 3, 4, 5], 2)` → `[[1, 2], [3, 4], [5]]` · `LC`
- [ ] 70. `removeElement([1, 2, 3, 2], 2)` → `[1, 3]` · `JD`

## Objects (71–78)

- [ ] 71. `listKeys({ a: 1, b: 2 })` → `["a", "b"]` · `JD`
- [ ] 72. `deleteProp(obj, "b")`: remove a property and return the result · `JD`
- [ ] 73. `objectLength({ a: 1, b: 2, c: 3 })` → `3` · `JD`
- [ ] 74. `invert({ a: "x", b: "y" })` → `{ x: "a", y: "b" }` · `JD`
- [ ] 75. `toPairs({ a: 1, b: 2 })` → `[["a", 1], ["b", 2]]` · `JD`
- [ ] 76. Build a `circle` object with a `radius` and methods `area()` and `perimeter()` · `JD`
- [ ] 77. `isEmpty({})` → `true`, `isEmpty([])` → `true`, `isEmpty({ a: 1 })` → `false` · `LC`
- [ ] 78. `sortByTitle([{ title: "b" }, { title: "a" }])` → `a` first · `JD`

## Logic & Loops (79–88)

- [ ] 79. FizzBuzz for 1–100: print `Fizz`, `Buzz`, or `FizzBuzz` · `DG` `JD` `CW`
- [ ] 80. Loop 0–15 and print `"0 is even"`, `"1 is odd"`, … · `JD`
- [ ] 81. `grade(avg)`: 90+ → `A`, 80+ → `B`, 70+ → `C`, 60+ → `D`, else `F` · `JD` `W3`
- [ ] 82. Print a 5-row star triangle with nested loops · `JD`
- [ ] 83. `productSign(a, b, c)` → `"+"`, `"-"`, or `"0"` without multiplying · `JD`
- [ ] 84. `sortThree(a, b, c)` using only `if`/`else`: `(3, 1, 2)` → `[1, 2, 3]` · `JD`
- [ ] 85. `makeCoins(amount, coins)`: greedy. `(46, [25, 10, 5, 1])` → `[25, 10, 10, 1]` · `JD`
- [ ] 86. `leapYearsInRange(2000, 2020)` → `[2000, 2004, 2008, 2012, 2016, 2020]` · `JD`
- [ ] 87. `closestTo100(a, b)`: `(90, 105)` → `105`. Decide what a tie should do. · `W3`
- [ ] 88. `loves(petals)`: cycle through `"I love you"`, `"a little"`, `"a lot"`, `"passionately"`, `"madly"`, `"not at all"` · `CW`

## Functions & Closures (89–100)

These come from the LeetCode "30 Days of JavaScript" study plan and are good for learning closures and higher-order functions.

- [ ] 89. `createHelloWorld()` returns a function that always returns `"Hello World"` · `LC`
- [ ] 90. `createCounter(n)` returns a function giving `n`, `n+1`, `n+2`, … on each call · `LC`
- [ ] 91. `expect(val)` returns `{ toBe, notToBe }`. `expect(5).toBe(5)` → `true`; a failed check throws. · `LC`
- [ ] 92. `createCounter(init)` returns `{ increment, decrement, reset }` · `LC`
- [ ] 93. `map(arr, fn)`: write your own `Array.map` · `LC`
- [ ] 94. `filter(arr, fn)`: write your own `Array.filter` · `LC`
- [ ] 95. `reduce(arr, fn, init)`: write your own `Array.reduce` · `LC`
- [ ] 96. `compose([f, g, h])` returns `x => f(g(h(x)))` (empty list = identity) · `LC`
- [ ] 97. `argumentsLength(...args)` → number of args passed · `LC`
- [ ] 98. `once(fn)`: the wrapper runs `fn` on the first call and returns `undefined` after · `LC`
- [ ] 99. Add `Array.prototype.last()`: `[1, 2, 3].last()` → `3`, `[].last()` → `-1` · `LC`
- [ ] 100. `sleep(ms)` returns a Promise that resolves after `ms` milliseconds · `LC`

---

## Sources

- [Codecademy: 10 JavaScript code challenges for beginners](https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners)
- [Placement Preparation: JavaScript beginner exercises](https://www.placementpreparation.io/programming-exercises/javascript/beginners/)
- [devmountain/js-drills](https://github.com/devmountain/js-drills) (w3resource-style drills)
- [DesignGurus: beginner JavaScript coding challenges](https://designgurus.io/answers/detail/what-javascript-coding-challenges-are-perfect-for-beginners)
- [Dev.to: 12 beginner-friendly Codewars challenges in JS](https://Dev.to/stefirosca/12-beginner-friendly-codewars-challenges-in-js-4nfo)
- [w3resource: JavaScript basic exercises](https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php)
- [LeetCode: 30 Days of JavaScript announcement](https://leetcode.com/discuss/study-guide/3458761/day-4-30-days-of-lc-javascript-challenge)

**Notes:** Problem names and wording are condensed and sometimes merged across sources. Problems 89–100 follow the LeetCode plan's titles. I fetched problem names for some of them and filled in the rest from my own knowledge of the plan. Check LeetCode itself for exact statements and difficulty labels. Several community GitHub repos for that plan push a "Download Now" `.zip`. I avoided those.
