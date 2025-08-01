import { useState } from "../core/React.js";

const SimpleCount = () => {
  const [count, setCount] = useState(0);

  window.increase = () => setCount(count + 1);
  window.decrease = () => setCount(count - 1);

  return `
  <div class="container">
    <h1>${count}</h1>
    <div class="buttons">
      <button onClick="increase()">+</button>
      <button onClick="decrease()">-</button>
    </div>
  </div>`;
};

export default SimpleCount;
