class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBegning(key) {
        const newNode = new Node(key);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    insertAtTheEnd(key) {
        const newNode = new Node(key);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteFromBegning() {
        if (!this.head) {
            return 'List is Empty';
        } else if (!this.head.next) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }
    }

    deleteFromEnd() {
        if (!this.head) {
            return 'List is Empty';
        } else if (!this.head.next) {
            this.head = null;
        } else {
            let secondLast = this.head;
            while (secondLast.next.next) {
                secondLast = secondLast.next;
            }
            secondLast.next = null;
        }
    }

    deleteGivenValue(val) {
        if (!this.head) {
            return 'The List is Empty !';
        } else if (this.head.key == val) {
            this.head = this.head.next;
            return;
        } else {
            let current = this.head;
            while (current.next) {
                if (current.next.key == val) {
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }
            return 'Element Not Found in the list !';
        }
    }

    search(val) {
        let pos = 0;

        if (!this.head) {
            return 'List is empty !';
        } else {
            let current = this.head;
            while (current) {
                pos++;
                if (current.key == val) {
                    return `Element is present at position ${pos}`;
                }
                current = current.next;
            }
            return 'Element is not found in the list !';
        }
    }

    printList() {
        if (!this.head) {
            return 'List is Empty !';
        }

        let current = this.head;
        let str = '';
        while (current) {
            str += current.key + ' -> ';
            current = current.next;
        }
        return str + 'null';
    }
}

export default LinkedList;
