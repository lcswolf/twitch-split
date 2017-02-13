// escapeaoe/mrwaynz/theslowcss
import { expect } from 'chai';
import parseSplat from './parseSplat';

const tests = {
  'escapeaoe/mrwaynz/theslowcss': ['escapeaoe', 'mrwaynz', 'theslowcss'],
  'esc____oe/mrwaynz/theslowcss': ['esc____oe', 'mrwaynz', 'theslowcss'],
  'escAPEaoe/Mrwaynz/thESlowcss': ['escapeaoe', 'mrwaynz', 'theslowcss'],
  'es9999aoe/Mrwaynz/thESlowcss': ['es9999aoe', 'mrwaynz', 'theslowcss'],
  'escAPEaoe/Mrwaynz/th%Slowcss': [],
  '/mrwaynz/theslowcss': [],
  'escapeaoe/mrwaynz/': ['escapeaoe', 'mrwaynz'],
  'escapeaoe/mrwaynz/theslowcss/asdfasdfff': ['escapeaoe', 'mrwaynz', 'theslowcss'],
};

describe('parseSplat', () => {
  it('returns array from valid splat', () => {
    Object.entries(tests).forEach((pair) => {
      const testValue = pair[0];
      const expected = pair[1];
      expect(parseSplat(testValue)).to.deep.equal(expected, testValue);
    });
  });
});
