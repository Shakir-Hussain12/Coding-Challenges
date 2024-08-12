class ListNode {
    constructor(val = 0) {
        this.val = val;
        this.next = null; // Points to the next node
    }
}

const findLength = (list) => {
    let i = 0;
    while(list.next != null) {
        i += 1
        list = list.next;
    }

    return i;
}

var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode();
    
    const len1 = findLength(l1);
    const len2 = findLength(l2);

    let carry = 0;
    let t1 = l1;
    let t2 = l2;
    let t3 = l3;
    let i = 0;

    while( i <= Math.max(len1, len2)) {
        let newNode = new ListNode()
        let res = 0;

        if ( i > len1 && len1 != len2) {
            res = t2.val + carry
            t2 = t2.next;
        } else if (i > len2 && len1 != len2) {
            res = t1.val + carry
            t1 = t1.next;
        } else {
            res = t1.val + t2.val + carry;
            t1 = t1.next;
            t2 = t2.next;
        }
        
        console.log(res)
        if (res >= 10) {
            res = res.toString();
            carry = Number(res[0]);
            t3.val = Number(res[1]);
        } else {
            carry = 0;
            t3.val = res;
        }
        
        if (i < Math.max(len1, len2)) {
            t3.next = newNode;
            t3 = t3.next;
        }
        i++;
    }

    if (carry > 0) {
        let newNode = new ListNode(carry);
        t3.next = newNode;
    }

    while(l3 != null) {
        console.log(l3.val)
        l3 = l3.next;
    }
};

function buildLinkedList(arr) {
    if (arr.length === 0) return null; // Return null for an empty array

    const head = new ListNode(arr[0]); // Create the head node
    let current = head;

    // Iterate over the array and create nodes
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]); // Create a new node and link it
        current = current.next; // Move to the next node
    }

    return head; // Return the head of the linked list
}

const l1 = [2,4,3];
const l2 = [5,6,4];

const linkedList1 = buildLinkedList(l1);
const linkedList2 = buildLinkedList(l2);

addTwoNumbers(linkedList1, linkedList2);