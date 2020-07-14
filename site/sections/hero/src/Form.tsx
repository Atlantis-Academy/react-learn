import React from 'react'
import { BorderInput, FormStyle, InputForm, InputText } from '../../../ui/FormStyle'
import { injectIntl } from 'react-intl'
import { Button } from '../../../ui/Button'
import messages from '../../../ui/text/Messages'
import { Box } from '../../../ui/layout/Box2'

//todo: add state

const Form = ({intl}: any) => {

  return (

    <FormStyle>
      <Box height='40px' />
      <InputText>{intl.formatMessage(messages.hero.form.name)}</InputText>
      <BorderInput>
        <InputForm
          type='text'
          name='name'
        />
      </BorderInput>
      <Box height='20px' />
      <InputText>{intl.formatMessage(messages.hero.form.job)}</InputText>
      <BorderInput>
        <InputForm
          type='text'
          name='job'
        />
      </BorderInput>
      <Box height='20px' />
      <InputText>{intl.formatMessage(messages.hero.form.phone)}</InputText>
      <BorderInput>
        <InputForm
          type='text'
          name='phone'
        />
      </BorderInput>
      <Box height='20px' />
      <InputText>{intl.formatMessage(messages.hero.form.email)}</InputText>
      <BorderInput>
        <InputForm
          type='text'
          name='email'

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
