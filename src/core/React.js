function React() {
  let cursor = 0; // 훅 호출 순서를 위한 커서
  const hooks = []; // 각 훅의 저장소
  let root;
  let rootComponent;

  function useState(initial) {
    const idx = cursor++; // 이번 훅의 고정 인덱스
    if (hooks[idx] === undefined) hooks[idx] = initial;

    const state = hooks[idx];

    const setState = (next) => {
      const nextValue = typeof next === "function" ? next(hooks[idx]) : next;
      if (Object.is(nextValue, hooks[idx])) return; // 변경 없음이면 스킵(선택)
      hooks[idx] = nextValue;
      render(); // 리렌더
    };

    return [state, setState];
  }

  function render(initRoot, initRootComponent) {
    // 초기 설정
    if (initRoot && initRootComponent) {
      root = initRoot;
      rootComponent = initRootComponent;
    }
    // 매 렌더마다 훅 커서를 0으로 리셋
    cursor = 0;

    // 동일한 경로로 렌더(초기/재렌더 모두)
    root.innerHTML = rootComponent();
  }

  return { render, useState };
}

export const { render, useState } = React();
