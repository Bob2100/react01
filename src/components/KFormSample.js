import React, { Component } from 'react'

function kFromCreate(Comp) {
  return class extends Component {

    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }

    decorateField = (InputComp, field, option) => {
      this.options[field] = option;
      return (
        <div>
          {
            React.cloneElement(InputComp, {
              name: field,
              value: this.state[field] || '',
              onChange: this.changeHandler
            })
          }
        </div>
      );
    }

    changeHandler = e => {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        <Comp {...this.props} decorateField={this.decorateField} value={this.state}></Comp>
      )
    }
  }
}


@kFromCreate
class KFormSample extends Component {

  constructor(props) {
    super(props);
  }

  submit = () => {
    console.log(this.props['value']);
  }

  render() {
    const { decorateField } = this.props;
    return (
      <div>
        {
          decorateField(<input type="text" />, 'username', {
            rules: [
              { required: true, message: '请输入用户名！' },
              { min: 3, message: '至少3位' },
              { max: 6, message: '至多6位' }
            ]
          })
        }
        {
          decorateField(<input type="password" />, 'password', {
            rules: [
              { required: true, message: '请输入密码！' },
              { min: 6, message: '至少6位' },
              { max: 12, message: '至多12位' }
            ]
          })
        }
        <button onClick={this.submit}>登录</button>
      </div>
    )
  }
}

export default KFormSample
