const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('MAIN TEST CASES', () => {
  // test('test case 1', () => {
  //   expect(timeWord('00:00')).toBe('midnight');
  // });

  // test('test case 2', () => {
  //   expect(timeWord('00:12')).toBe('twelve twelve am');
  // });

  test('test case 3', () => {
    expect(timeWord('01:00')).toBe("one o'clock");
  });

  test('test case 4', () => {
    expect(timeWord('06:01')).toBe('six oh one am');
  });

  test('test case 5', () => {
    expect(timeWord('06:10')).toBe('six ten am');
  });

  test('test case 6', () => {
    expect(timeWord('06:18')).toBe('six eighteen am');
  });

  test('test case 7', () => {
    expect(timeWord('06:30')).toBe('six thirty am');
  });

  test('test case 8', () => {
    expect(timeWord('10:34')).toBe('ten thirty four am');
  });

  // test('test case 9', () => {
  //   expect(timeWord('12:00')).toBe('noon');
  // });

  // test('test case 10', () => {
  //   expect(timeWord('12:09')).toBe('twelve oh nine pm');
  // });

  // test('test case 11', () => {
  //   expect(timeWord('23:23')).toBe('eleven twenty three pm');
  // });
})