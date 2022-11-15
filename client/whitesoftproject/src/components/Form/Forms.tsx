import * as React from 'react'
import { Form, IFields, required, isEmail, maxLength } from './FormData'
import { Field } from './Fields'
import { Countries } from '../countries/indext'

export const Forms: React.FC = () => {

  const fields: IFields = {
    name: {
      id: "name",
      label: "Name",
      validation: { rule: required }
    },
    email: {
      id: "email",
      label: "Email",
      validation: { rule: isEmail }
    },
    country: {
      id: "country",
      label: "country",
      validation: { rule: required }
    }
  }

  return (
    <Form
      action="http://localhost:4351/api/contact-us"
      fields={fields}
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            WhiteSoft Test 
          </div>
          <Field {...fields.name} />
          <Field {...fields.email} />
          <Countries />
        </React.Fragment>
      )}
      />
  )
}

export default Forms;