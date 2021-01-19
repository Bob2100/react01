
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
    return createClassComp(vnode);
  }

  if (vtype == 3) {
    return createFunctionComp(vnode);
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
    node.appendChild(initVNode(child));
  });
  return node
}
function createClassComp(vnode) {
  const { type, props } = vnode;
  const comp = new type(props);
  const newNode = comp.render();
  return initVNode(newNode);
}
function createFunctionComp(vnode) {
  const { type, props } = vnode;
  const newNode = type(props);
  return initVNode(newNode);
}