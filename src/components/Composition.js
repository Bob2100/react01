import React, { Component } from 'react'

// dialog
function Dialog(props) {
  return (
    <div style={{ border: `4px solid ${props.color || 'blue'}` }}>
      {props.children}
      {props.button}
    </div>
  );
}

// wilcome dialog
function WelcomeDialog() {
  const btn = <button onClick={() => alert('clicked！')}>点击</button>
  return (
    <div>
      <Dialog color="red" button={btn}>
        <h1>组合组件</h1>
        <p>好用</p>
      </Dialog>
    </div>
  )
}

const api = {
  getUser: () => ({
    username: 'Bob',
    age: 18
  })
}

function Fetcher(props) {
  let user = api[props.name]();
  return props.children(user);
}

function FilterP(props) {
  return (
    <div>
      {
        React.Children.map(props.children, child => {
          console.log(child);
          if (child.type === 'p') {
            return child;
          }
        })
      }
    </div>
  )
}


export default class Composition extends Component {
  render() {
    return (
      <div>
        <WelcomeDialog></WelcomeDialog>
        {/* children的内容可以是任意表达式 */}
        <Fetcher name="getUser">
          {
            ({ username, age }) => (<p>{`${username}-${age}`}</p>)
          }
        </Fetcher>
        <FilterP>
          <h1>Hello</h1>
          <h2>Hello2</h2>
          <p>React is good</p>
          <div>
            haha

            <p>ppp</p>
          </div>
        </FilterP>
      </div>
    )
  }
}
