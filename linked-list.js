class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  append(value) {
    const node = new Node(value);

    if (this.#tail === null) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.nextNode = node;
      this.#tail = node;
    }

    this.#size++;
  }

  prepend(value) {
    const node = new Node(value, this.#head);
    this.#head = node;

    if (this.#tail === null) {
      this.#tail = node;
    }

    this.#size++;
  }

  size() {
    return this.#size;
  }

  head() {
    return this.#head === null ? undefined : this.#head.value;
  }

  tail() {
    return this.#tail === null ? undefined : this.#tail.value;
  }

  #nodeAt(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.#size) {
      return null;
    }

    let current = this.#head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    const node = this.#nodeAt(index);
    return node === null ? undefined : node.value;
  }

  pop() {
    if (this.#head === null) {
      return undefined;
    }

    const removed = this.#head;
    this.#head = removed.nextNode;

    if (this.#head === null) {
      this.#tail = null;
    }

    this.#size--;
    return removed.value;
  }

  contains(value) {
    return this.findIndex(value) !== -1;
  }

  findIndex(value) {
    let current = this.#head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    if (this.#head === null) {
      return "";
    }

    let result = "";
    let current = this.#head;

    while (current !== null) {
      result += "( " + current.value + " ) -> ";
      current = current.nextNode;
    }

    return result + "null";
  }

  // Extra credit
  insertAt(index, ...values) {
    if (!Number.isInteger(index) || index < 0 || index > this.#size) {
      throw new RangeError("Index " + index + " is out of bounds.");
    }

    if (values.length === 0) {
      return;
    }

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
      return;
    }

    if (index === this.#size) {
      values.forEach((value) => this.append(value));
      return;
    }

    const previous = this.#nodeAt(index - 1);
    const after = previous.nextNode;
    let current = previous;

    for (const value of values) {
      const node = new Node(value);
      current.nextNode = node;
      current = node;
      this.#size++;
    }

    current.nextNode = after;
  }

  removeAt(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.#size) {
      throw new RangeError("Index " + index + " is out of bounds.");
    }

    if (index === 0) {
      this.pop();
      return;
    }

    const previous = this.#nodeAt(index - 1);
    const removed = previous.nextNode;
    previous.nextNode = removed.nextNode;

    if (removed === this.#tail) {
      this.#tail = previous;
    }

    this.#size--;
  }
}