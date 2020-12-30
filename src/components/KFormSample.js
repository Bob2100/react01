import React, { Component } from 'react'
import { LockOutlined, UserOutlined } from "@ant-design/icons";

class KFormItem extends Component {
  render() {
    return (
      <div className="form-item">
        {this.props.children}
        {this.props.validateStatus === 'error' && <span style={{ color: 'red' }}>{this.props.help}</span>}
      </div>
    )
  }
}

class Input extends Component {
  render() {
    return (
      <div>
        {this.props.prefix}
        <input {...this.props} />
      </div>
    )
  }
}

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
              onChange: this.changeHandler,
              onFocus: this.focusHandler
            })
          }
        </div>
      );
    }

    focusHandler = e => {
      const fieldName = e.target.name;
      this.setState({
        [`${fieldName}Focused`]: true
      });
    }

    getFieldError = fieldName => {
      return this.state[`${fieldName}Message`];
    }

    isFieldTouched = fieldName => {
      return !!this.state[`${fieldName}Focused`]
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
      const ruleNames = {
        required: 'required',
        min: 'min',
        max: 'max'
      };

      const hasError = rules.some(rule => {
        const ruleName = Object.keys(rule).filter(key => ruleNames.hasOwnProperty(key))[0];
        const ruleValue = rule[ruleName];
        const fieldValue = this.state[fieldName];
        let hasError = false;

        switch (ruleName) {
          case ruleNames.required:
            hasError = ruleValue && !fieldValue;
            break;
          case ruleNames.min:
            hasError = fieldValue.length < ruleValue;
            break;
          case ruleNames.max:
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
        <Comp {...this.props} decorateField={this.decorateField} value={this.state} validate={this.validate}
          isFieldTouched={this.isFieldTouched} getFieldError={this.getFieldError}
        ></Comp>
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
    this.props.validate(success => {
      if (success) {
        console.log(this.props['value']);
        alert('校验成功，提交登录');
      } else {
        alert('校验失败');
      }
    })
  }

  render() {
    const { decorateField, isFieldTouched, getFieldError } = this.props;
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div>
        <KFormItem validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {
            decorateField(<Input type="text" prefix={<UserOutlined />} />, 'username', {
              rules: [
                { required: true, message: '请输入用户名！' },
                { min: 3, message: '至少3位' },
                { max: 6, message: '至多6位' }
              ]
            })
          }
        </KFormItem>
        <KFormItem validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {
            decorateField(<Input type="password" prefix={<LockOutlined />} />, 'password', {
              rules: [
                { required: true, message: '请输入密码！' },
                { min: 6, message: '至少6位' },
                { max: 12, message: '至多12位' }
              ]
            })
          }
        </KFormItem>

        <button onClick={this.submit}>登录</button>
      </div>
    )
  }
}

export default KFormSample
