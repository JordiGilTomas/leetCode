// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result: ListNode;
    let head1: ListNode;
    let head2: ListNode;
    let headResult: ListNode;

    let acc = 0;
    let first = true;

    head1 = l1;
    head2 = l2;

    while (head1 || head2) {
      let sumnum = this.sumValues(head1, head2, acc);
      acc = 0;

      if (sumnum > 9) {
        acc = 1;
        sumnum -= 10;
      }

      if (first) {
        result = new ListNode(sumnum);
        headResult = result;
        first = false;
      } else {
        headResult.next = new ListNode(sumnum);
        headResult = headResult.next;
      }

      head1 = head1?.next;
      head2 = head2?.next;
    }
    if (acc) headResult.next = new ListNode(acc);

    return result;
  }

  static sumValues(head1: ListNode, head2: ListNode, acc: number): number {
    return (head1?.val ?? 0) + (head2?.val ?? 0) + acc;
  }
}

export default ListNode;
