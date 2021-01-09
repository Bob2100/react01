const initialState = {
  isLogin: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'login':
      return { isLogin: true }

    default:
      return state
  }
}

// for thunk
// export function login() {
//   return (dispatch) => {
//     // 模拟异步登录
//     setTimeout(() => {
//       dispatch({ type: 'login' });
//     }, 1000);
//   }
// }

export function login() {
  return { type: 'login_request' }
}
