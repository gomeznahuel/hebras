import { useState } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  class Counter {
    constructor(count) {
      this.count = count;
    }

    add() {
      setCount(this.count + 1);
    }

    subtract() {
      setCount(this.count - 1);
    }
  }

  const counter = new Counter(count);

  return { count, setCount, counter };
};

export default useCounter;
