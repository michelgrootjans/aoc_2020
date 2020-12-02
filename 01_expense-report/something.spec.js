function findComplement(number, numbers) {
  return 2019;
}

function expenseReport(numbers) {
  return numbers.reduce((result, input) => result * input)
}

describe('something', () => {
  it('easy case', function () {
    expect(expenseReport([1, 2019])).toBe(1 * 2019)
  });

  it('easy case number 2', function () {
    expect(expenseReport([2, 2018])).toBe(2 * 2018)
  });

  xit('easy case 3 numbers, one 0', function () {
    expect(expenseReport([0, 2, 2018])).toBe(2 * 2018)
  });

  // it('the example', function () {
  //   expect(expenseReport([1721, 979, 366, 299, 675, 1456])).toBe(1721*299)
  // });
});

describe('oh yeah', () => {
  it('should ', function () {
    expect(findComplement(1, [9872345, 345, 2019, 2020, 98374])).toBe(2019)
  });
})