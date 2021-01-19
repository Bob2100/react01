import { createVNode } from './kvdom';

function createElement(type, props, ...children) {
  props.children = children;
  delete props.__source;
  delete props.__self;

  let vtype;
  if (typeof type == 'string') {
    vtype = 1;
  } else if (typeof type == 'function') {
    if (type.isClassComopnent) {
      vtype = 2;
    } else {
      vtype = 3;
    }
  }

  return createVNode(vtype, type, props);
}

export class Component {
  static isClassComopnent = true;
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState(state) {
    this.state = state;
  }
}

export default { createElement };