function createElement(type, props, ...children) {
  // console.log(arguments);
  props.children = children;
  console.log(type, props);
  return { type, props }
}

export default { createElement };