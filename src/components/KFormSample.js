import React, { Component } from 'react'

function kFromCreate(Comp) {
  return class extends Component {

    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }

    decorateField = (InputComp, fieldName, option) => {
      this.options[fieldName] = option;
      return (
        <div>
          {
            React.cloneElement(InputComp, {
              name: fieldName,
              value: this.state[fieldName] || '',
              onChange: this.changeHandler
            })
          }
          {
            this.state[`${fieldName}Message`] && (<p style={{ color: 'red' }}>{this.state[`${fieldName}Message`]}</p>)
          }
        </div>
      );
    }

    changeHandler = e => {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      }, () => {
        this.validateField(name);
      });
    }

    validateField = fieldName => {
      const rules = this.options[fieldName].rules;
      const hasError = rules.some(rule => {

        const ruleName = Object.keys(rule)[0];
        const ruleValue = rule[ruleName];
        const fieldValue = this.state[fieldName];
        let hasError = false;

        switch (ruleName) {
          case 'required':
            hasError = ruleValue && !fieldValue;
            break;
          case 'min':
            hasError = fieldValue.length < ruleValue;
            break;
          case 'max':
            hasError = fieldValue.length > ruleValue;
            break;
        }

        this.setState({
          [`${fieldName}Message`]: [hasError ? rule.message : '']
        });

        return hasError;
      });

      // 校验成功返回true
      return !hasError;
    }

    // 校验所有字段
    validate = callback => {
      const results = Object.keys(this.options).map(fieldName => this.validateField(fieldName));
      const success = results.every(result => result === true);
      callback(success);
    }

    render() {
      return (
        <Comp {...this.props} decorateField={this.decorateField} value={this.state} validate={this.validate}></Comp>
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
    this.props.validate(success => {
      if (success) {
        alert('校验成功，提交登录');
      } else {
        alert('校验失败');
      }
    })
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
