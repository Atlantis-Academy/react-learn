import React from 'react'
import DivMargin from '../../../ui/layout/DivMargin'
import { FieldSetForm, FormStyle, InputForm, Legend } from '../../../ui/FormStyle'
import { injectIntl } from 'react-intl'
import { Button } from '../../../ui/Button'
import messages from '../../../ui/text/Messages'

//todo: add state

const Form = ({intl}: any) => {

  return (

    <FormStyle>
      <DivMargin height='40px' />
      <FieldSetForm>
        <Legend>{intl.formatMessage(messages.hero.form.name)}</Legend>
        <InputForm
          type='text'
          name='name'
        />
      </FieldSetForm>
      <DivMargin height='20px' />
      <FieldSetForm>
        <Legend>{intl.formatMessage(messages.hero.form.job)}</Legend>
        <InputForm
          type='text'
          name='job'
        />
      </FieldSetForm>
      <DivMargin height='20px' />
      <FieldSetForm>
        <Legend>{intl.formatMessage(messages.hero.form.phone)}</Legend>
        <InputForm
          type='text'
          name='phone'
        />
      </FieldSetForm>
      <DivMargin height='20px' />
      <FieldSetForm>
        <Legend>{intl.formatMessage(messages.hero.form.email)}</Legend>
        <InputForm
          type='text'
          name='email'

        />
      </FieldSetForm>
      <DivMargin height='20px' />
      <Button
        padding={'15px 116px'}
        border={'none'}
      >{intl.formatMessage(messages.hero.formButton)}</Button>
    </FormStyle>

  )
}


export default injectIntl(Form)
