export function createVNode(vtype, type, props) {
  const vnode = {
    vtype, type, props
  }
  return vnode;
}