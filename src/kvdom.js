
export function createVNode(vtype, type, props) {
  const vnode = {
    vtype, type, props
  }
  return vnode;
}

export function initVNode(vnode) {
  const { vtype } = vnode;
  if (!vtype) {
    return document.createTextNode(vnode);
  }

  if (vtype == 1) {
    return createElement(vnode);
  }

  if (vtype == 2) {
    return createClassComp();
  }

  if (vtype == 3) {
    return createFunctionComp();
  }
}

function createElement(vnode) {
  const { type, props } = vnode;
  const node = document.createElement(type);
  const { key, children, ...rest } = props;
  Object.keys(rest).forEach(attr => {
    if (attr == 'className') {
      node.setAttribute('class', rest[attr]);
    } else {
      node.setAttribute(attr, rest[attr]);
    }
  });
  children.forEach(child => {
    const childNode = initVNode(child);
    if (childNode) {
      node.appendChild(childNode);
    }
  });
  return node
}
function createClassComp() {
  return null
}
function createFunctionComp() {
  return null
}