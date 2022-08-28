class LinkedList {
  #head;

  constructor(head = null) {
    this.#head = head;
  }

  append(value, curr = this.#head) {
    if (!this.#head) this.#head = new Node(value);
    else if (!curr.next) curr.next = new Node(value);
    else this.append(value, curr.next);
  }

  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  size(curr = this.#head) {
    if (!curr) return 0;
    else return 1 + this.size(curr.next);
  }

  head() {
    return this.#head;
  }

  tail(curr = this.#head) {
    if (!this.#head) return null;
    else if (!curr.next) return curr;
    else return this.tail(curr.next);
  }

  at(index, curr = this.#head) {
    if (index === 0) return curr;
    else return this.at(index - 1, curr.next);
  }

  pop(curr = this.#head) {
    if (!this.#head || !this.#head?.next) this.#head = null;
    else if (!curr.next?.next) curr.next = null;
    else this.pop(curr.next);
  }

  contains(value, curr = this.#head) {
    if (!curr) return false;
    else if (curr?.value === value) return true;
    else return this.contains(value, curr.next);
  }

  find(value) {
    let curr = this.#head;
    let index = 0;
    while (curr) {
      if (curr.value === value) return index;
      curr = curr.next;
      index += 1;
    }
    return null;
  }

  // ( value ) -> ( value ) -> ( value ) -> null
  toString(curr = this.#head) {
    if (!curr) return "null";
    else return `( ${curr.value} ) -> ${this.toString(curr.next)}`;
  }

  insertAt(value, index) {
    let prev = null;
    let curr = this.#head;
    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.next;
    }
    if (prev) prev.next = new Node(value, curr);
    else this.#head = new Node(value, curr);
  }

  removeAt(index) {
    let prev = null;
    let curr = this.#head;
    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.next;
    }

    if (prev) prev.next = prev.next?.next || null;
    else this.#head = this.#head?.next || null;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
