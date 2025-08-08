import { useState } from "../core/React.js";

let hasRun = true;

// Debounce를 적용하지 않으면 "rendered" 로그가 세번 표시됨
const SimpleDebounce = () => {
  const [count, setCount] = useState(0);

  if (hasRun) {
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    }, 1000);
    hasRun = false;
  }

  console.log("rendered");

  return `
  <div class="container">
    <h1>${count}</h1>
  </div>`;
};

export default SimpleDebounce;
