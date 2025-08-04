import { useState } from "../core/React.js";

const SimpleCount = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  window.increase = (type) => {
    if (type === "count1") setCount1(count1 + 1);
    else setCount2(count2 + 1);
  };
  window.decrease = (type) => {
    if (type === "count1") setCount1(count1 - 1);
    else setCount2(count2 - 1);
  };

  return `
  <div class="container">
    <h1>Item 1</h1>
    <h1>${count1}</h1>
    <div class="buttons">
      <button onClick="increase('count1')">+ 1</button>
      <button onClick="decrease('count1')">- 1</button>
    </div>
    
    <br />

    <h1>Item 2</h1>
    <h1>${count2}</h1>
    <div class="buttons">
      <button onClick="increase('count2')">+ 1</button>
      <button onClick="decrease('count2')">- 1</button>
    </div>
  </div>`;
};

export default SimpleCount;
