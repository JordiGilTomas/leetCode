import maxArea from "../exercises/011_container_with_most_water";

describe(`Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
    n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
    Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
    Notice that you may not slant the container.`, () => {
  let x: number[];
  let expected: number;

  it("[1, 8, 6, 2, 5, 4, 8, 3, 7]", () => {
    x = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expected = 49;
    expect(maxArea(x)).toBe(expected);
  });

  it("[1, 1]", () => {
    x = [1, 1];
    expected = 1;
    expect(maxArea(x)).toBe(expected);
  });

  it("[[4,3,2,1,4]]", () => {
    x = [4, 3, 2, 1, 4];
    expected = 16;
    expect(maxArea(x)).toBe(expected);
  });

  it("[1, 2, 1]", () => {
    x = [1, 2, 1];
    expected = 2;
    expect(maxArea(x)).toBe(expected);
  });

  it("[1, 2]", () => {
    x = [1, 2];
    expected = 1;
    expect(maxArea(x)).toBe(expected);
  });
});
