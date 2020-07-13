import React from 'react'
import { BorderInput, FormStyle, InputForm, InputText, InputTextBox } from '../../../ui/FormStyle'
import { injectIntl } from 'react-intl'
import { Button } from '../../../ui/Button'
import messages from '../../../ui/text/Messages'
import { Box } from '../../../ui/layout/Box2'
import { Text } from '../../../ui/text/Text'
import theme from '../../../ui/theme/Theme'

//todo: add state

const Form = ({intl}: any) => {

  const [name, setName] = React.useState("")
  const [job, setJob] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [end, setEnd]=React.useState('')

  const handleForm = (event: any) => {
    event.preventDefault()

    console.log(name, job, phone, email)

    setName('')
    setJob('')
    setPhone('')
    setEmail('')
    if(name && job && phone && email){
      setEnd(`Спасибо, ${name}! Мы скоро с вами свяжемся!`)
    } else {
      setEnd('Необходимо заполнить поля формы!')
    }
    setTimeout(()=>{
      setEnd('')
    }, 3000)

  }


  return (

    <FormStyle onSubmit={handleForm}>
      <Box
        display={'flex'}
        justify={'center'}
        alignItems={'center'}
        width={'320px'}
        height='40px'>
        <Text
          size={'16px'}
          color={theme.colors.white}
        >{end}</Text>
      </Box>
      <InputTextBox>
        <InputText>{intl.formatMessage(messages.hero.form.name)}</InputText>
      </InputTextBox>
      <BorderInput>
        <InputForm
          type='text'
          name='name'
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </BorderInput>
      <Box height='20px' />
      <InputTextBox>
        <InputText>{intl.formatMessage(messages.hero.form.job)}</InputText>
      </InputTextBox>
      <BorderInput>
        <InputForm
          type='text'
          name='job'
          onChange={event => setJob(event.target.value)}
          value={job}
        />
      </BorderInput>
      <Box height='20px' />
      <InputTextBox>
        <InputText>{intl.formatMessage(messages.hero.form.phone)}</InputText>
      </InputTextBox>
      <BorderInput>
        <InputForm
          type='text'
          name='phone'
          onChange={event => setPhone(event.target.value)}
          value={phone}
        />
      </BorderInput>
      <Box height='20px' />
      <InputTextBox>
        <InputText>{intl.formatMessage(messages.hero.form.email)}</InputText>
      </InputTextBox>
      <BorderInput>
        <InputForm
          type='text'
          name='email'
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
      </BorderInput>
      <Box height='20px' />
      <Button
        padding={'15px 116px'}
        border={'none'}
      >{intl.formatMessage(messages.hero.formButton)}</Button>
    </FormStyle>

  )
}


export default injectIntl(Form)
