function React() {
  let state;
  let root;
  let rootComponent;

  function useState(initState) {
    if (state === undefined) state = initState; // 초기값 세팅

    const setState = (newState) => {
      state = newState; // 새로운 상태로 업데이트
      render(); // 렌더링 실행
    };

    return [state, setState];
  }

  function render(initRoot = undefined, initRootComponent = undefined) {
    if (initRoot === undefined && initRootComponent === undefined)
      // 렌더링
      root.innerHTML = rootComponent();
    else {
      // 초기설정
      root = initRoot;
      rootComponent = initRootComponent;

      // 렌더링
      initRoot.innerHTML = initRootComponent();
    }
  }

  return { render, useState };
}

export const { render, useState } = React();
