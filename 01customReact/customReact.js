function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type)

  // domElement.innerHTML = reactElement.content
  // domElement.setAttribute('href', reactElement.props.href)
  // domElement.setAttribute('target', reactElement.props.target)

  // container.appendChild(domElement)

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.content;
  for (const prop in reactElement.props) {
    if (prop === 'content') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  content: "click me to go google.com",
};
const root = document.querySelector("#root");

customRender(reactElement, root);
