import React, { useEffect, useState } from 'react'
import { BorderInput, FormStyle, InputForm, InputText, InputTextBox } from '../../../ui/hero/FormStyle'
import { injectIntl } from 'react-intl'
import messages from './Messages'
import { Box } from '../../../ui/layout/NewBox'
import { Text } from '../../../ui/text/Text'
import { theme } from '../../../ui/theme'
import { Button } from '../../../ui/hero/Button'


const Form = ({intl}: any) => {

  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [end, setEnd] = useState('')

  const handleForm = (event: any) => {
    event.preventDefault()

    setName('')
    setJob('')
    setPhone('')
    setEmail('')

    if (name && job && phone && email) {
      setEnd(`${intl.formatMessage(messages.hero.form.formEnd)}`)

      console.log(name, job, phone, email)

    } else {
      setEnd(`${intl.formatMessage(messages.hero.form.formError)}`)
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setEnd('')
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [end])

  return (

    <FormStyle
      onSubmit={handleForm}
    >
      <Box
        display={'flex'}
        justify={'center'}
        alignItems={'center'}
        width={'320px'}
        height='18px'
      >
        <Text
          size={theme.fontSize.xs}
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
        border={'none'}
        bg={theme.colors.whiteBlue}
      >
        <Text themeText={'buttonText'}>
          {intl.formatMessage(messages.hero.formButton)}
        </Text>
      </Button>
    </FormStyle>

  )
}

export default injectIntl(Form)
