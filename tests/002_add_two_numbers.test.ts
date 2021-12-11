import ListNode from "../exercises/002_add_two_numbers";

test("constructor", () => {
  const node = new ListNode();
  expect(node.val).toStrictEqual(0);
});

test("sum values", () => {
  const l1 = new ListNode(0);
  const l2 = new ListNode(0);
  const acc = 1;
  expect(ListNode.sumValues(l1.next, l2.next, acc)).toStrictEqual(1);
});

test("[2,4,5] and [5.6.4]", () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  const expected = new ListNode(7, new ListNode(0, new ListNode(8)));

  expect(ListNode.addTwoNumbers(l1, l2)).toStrictEqual(expected);
});

test("[0] and [0]", () => {
  const l1 = new ListNode(0);
  const l2 = new ListNode(0);
  const expected = new ListNode(0);

  expect(ListNode.addTwoNumbers(l1, l2)).toStrictEqual(expected);
});

test("[9,9,9,9,9,9,9] and [9,9,9,9]", () => {
  const l1 = new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  );
  const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
  const expected = new ListNode(
    8,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
        )
      )
    )
  );

  expect(ListNode.addTwoNumbers(l1, l2)).toStrictEqual(expected);
});

test("big test", () => {
  const l1 = new ListNode(
    1,
    new ListNode(
      0,
      new ListNode(
        0,
        new ListNode(
          0,
          new ListNode(
            0,
            new ListNode(
              0,
              new ListNode(
                0,
                new ListNode(
                  0,
                  new ListNode(
                    0,
                    new ListNode(
                      0,
                      new ListNode(
                        0,
                        new ListNode(
                          0,
                          new ListNode(
                            0,
                            new ListNode(
                              0,
                              new ListNode(
                                0,
                                new ListNode(
                                  0,
                                  new ListNode(
                                    0,
                                    new ListNode(
                                      0,
                                      new ListNode(
                                        0,
                                        new ListNode(
                                          0,
                                          new ListNode(
                                            0,
                                            new ListNode(
                                              0,
                                              new ListNode(
                                                0,
                                                new ListNode(
                                                  0,
                                                  new ListNode(
                                                    0,
                                                    new ListNode(
                                                      0,
                                                      new ListNode(
                                                        0,
                                                        new ListNode(
                                                          0,
                                                          new ListNode(
                                                            0,
                                                            new ListNode(
                                                              0,
                                                              new ListNode(1)
                                                            )
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  const expected = new ListNode(
    6,
    new ListNode(
      6,
      new ListNode(
        4,
        new ListNode(
          0,
          new ListNode(
            0,
            new ListNode(
              0,
              new ListNode(
                0,
                new ListNode(
                  0,
                  new ListNode(
                    0,
                    new ListNode(
                      0,
                      new ListNode(
                        0,
                        new ListNode(
                          0,
                          new ListNode(
                            0,
                            new ListNode(
                              0,
                              new ListNode(
                                0,
                                new ListNode(
                                  0,
                                  new ListNode(
                                    0,
                                    new ListNode(
                                      0,
                                      new ListNode(
                                        0,
                                        new ListNode(
                                          0,
                                          new ListNode(
                                            0,
                                            new ListNode(
                                              0,
                                              new ListNode(
                                                0,
                                                new ListNode(
                                                  0,
                                                  new ListNode(
                                                    0,
                                                    new ListNode(
                                                      0,
                                                      new ListNode(
                                                        0,
                                                        new ListNode(
                                                          0,
                                                          new ListNode(
                                                            0,
                                                            new ListNode(
                                                              0,
                                                              new ListNode(1)
                                                            )
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );

  expect(ListNode.addTwoNumbers(l1, l2)).toStrictEqual(expected);
});
