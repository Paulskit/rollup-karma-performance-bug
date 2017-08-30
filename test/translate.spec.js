import { translate } from '../src/translate';

describe('common/translate', function () {
    it('translate should return result for empty args', function () {
        expect(translate()).toBe('translate(0,0)');
    });

    it('translate should return result for x only', function () {
        expect(translate(34.54)).toBe('translate(34.54,0)');
    });

    it('translate should return result for y only', function () {
        expect(translate(null, 34.54)).toBe('translate(0,34.54)');
    });

    it('translate should return result for both args', function () {
        expect(translate(3, 4)).toBe('translate(3,4)');
    });

    it('translate should return result for array args', function () {
        expect(translate([5, 6])).toBe('translate(5,6)');
    });

    it('translate should return result for array args with x only', function () {
        expect(translate([54])).toBe('translate(54,0)');
    });

    it('translate should return result for array args with y only', function () {
        expect(translate([null, 6])).toBe('translate(0,6)');
    });
});