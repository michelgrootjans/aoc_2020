function expenseReport(numbers) {
  return numbers[0] * numbers[1];
}

describe('something', () => {
  it('easy case', function () {
    expect(expenseReport([1, 2019])).toBe(1 * 2019)
  });

  it('easy case number 2', function () {
    expect(expenseReport([2, 2018])).toBe(2 * 2018)
  });

  // it('the example', function () {
  //   expect(expenseReport([1721, 979, 366, 299, 675, 1456])).toBe(1721*299)
  // });
});
