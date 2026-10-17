import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { fileExtension } from '../../problems/02-strings/043-file-extension.js';

describe('043 file extension', () => {
  it('fileExtension("report.final.pdf") → "pdf"', () => assert.equal(fileExtension('report.final.pdf'), 'pdf'));
  it('fileExtension("photo.JPG") → "JPG"', () => assert.equal(fileExtension('photo.JPG'), 'JPG'));
  it('fileExtension("README") → ""', () => assert.equal(fileExtension('README'), ''));
  it('fileExtension("archive.tar.gz") → "gz"', () => assert.equal(fileExtension('archive.tar.gz'), 'gz'));
  it('fileExtension("a.b") → "b"', () => assert.equal(fileExtension('a.b'), 'b'));
});
