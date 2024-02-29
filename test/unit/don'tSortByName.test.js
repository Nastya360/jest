const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should not be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Волшебник изумрудного города",
        "Волшебник изумрудного города",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
    ]);
  });
});
