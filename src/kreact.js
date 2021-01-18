function createElement(type, props, ...children) {
  props.children = children;
  delete props.__source;
  delete props.__self;
  return { type, props }
}

export default { createElement };