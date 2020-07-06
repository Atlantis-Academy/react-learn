import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { ButtonForm, FieldSetForm, FormStyle, InputForm, Legend } from '../ui/FormStyle'
import { FormattedMessage } from 'react-intl'


class Form extends React.Component<any, any> {
  state = {
    inputName: '',
    inputPhone: '',
    inputEmail: '',
    inputJob: '',
    buttonValue: {
      name: '',
      phone: '',
      email: '',
      job: ''
    }
  }
  handleInputNameChange = ({target: {value = ''}}) => {
    this.setState({
      inputName: value
    })
  }
  handleInputPhoneChange = ({target: {value = ''}}) => {
    this.setState({
      inputPhone: value
    })
  }
  handleInputEmailChange = ({target: {value = ''}}) => {
    this.setState({
      inputEmail: value
    })
  }
  handleInputJobChange = ({target: {value = ''}}) => {
    this.setState({
      inputJob: value
    })
  }

  handleButton = (event: any) => {
    event.preventDefault()
    const {inputName, inputPhone, inputEmail, inputJob} = this.state
    this.setState({
      inputName: '',
      inputPhone: '',
      inputEmail: '',
      inputJob: '',
      buttonValue: {
        name: inputName,
        phone: inputPhone,
        email: inputEmail,
        job: inputJob
      }
    })
  }

  render() {
    const {inputName, inputPhone, inputEmail, inputJob, buttonValue} = this.state
    const {name, phone, email, job} = buttonValue
    console.log(name, phone, email, job)
    return (

      <FormStyle>
        <DivMargin height='30px' />
        <FieldSetForm>
          <Legend><FormattedMessage id={'hero.form.name'}/></Legend>
          <InputForm
            type='text'
            name='name'
            value={inputName}
            onChange={this.handleInputNameChange}
          />
        </FieldSetForm>
        <DivMargin height='8px' />
        <FieldSetForm>
          <Legend><FormattedMessage id={'hero.form.phone'}/></Legend>
          <InputForm
            type='text'
            name='phone'
            value={inputPhone}
            onChange={this.handleInputPhoneChange}
          />
        </FieldSetForm>
        <DivMargin height='8px' />
        <FieldSetForm>
          <Legend>Email</Legend>
          <InputForm
            type='text'
            name='email'
            value={inputEmail}
            onChange={this.handleInputEmailChange}
          />
        </FieldSetForm>
        <DivMargin height='8px' />
        <FieldSetForm>
          <Legend><FormattedMessage id={'hero.form.job'}/></Legend>
          <InputForm
            type='text'
            name='job'
            value={inputJob}
            onChange={this.handleInputJobChange}
          />
        </FieldSetForm>
        <DivMargin height='8px' />
        <ButtonForm onClick={this.handleButton}><FormattedMessage id={'hero.form.button'}/></ButtonForm>
      </FormStyle>

    );


  }
}


export default Form
