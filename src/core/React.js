function React() {
  function render(rootComponent, root) {
    root.innerHTML = rootComponent();
  }

  return { render };
}

export const { render } = React();
