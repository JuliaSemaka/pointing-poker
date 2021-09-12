import React from 'react'
import { Field, reduxForm } from 'redux-form'
import type { FormProps } from 'redux-form'
import logo from './PokerPlanningTitle.png'
import './MainPage.scss';

interface Props {
  error?: string,
  id: string
}
type ValidationFunc<T> = (value: T) => void | string

const validate = (values: { id: string }) => {
  const errors = { id: '' }
  if (!values.id) {
    errors.id = 'Required Id number'
  } else if (isNaN(Number(values.id))) {
    errors.id = 'Must be a number'
  }
  return errors
}
const isValid: void = undefined
export const isRequired: ValidationFunc<any> = value => (value ? isValid : 'Required')

const renderField = ({ input, placeholder, type, meta: { touched, error }, ...other }: any) => (
  <>
    <input {...input} {...other} placeholder={placeholder} type={type} />
    <button type="submit" className="main-button" disabled={!touched}>
      Connect
    </button>
    {touched && (error && <span>{error}</span>)}
  </>
)
const handleSubmit = (event: any) => {
  event.preventDefault();
  console.log('Form send')
}
const MainForm:React.FC = ({ id, error }: any): JSX.Element => {
  return (
    <div className="main-page-wrapper">
      <div className="main-container">
        <div className="main-logo-image">
          <img src={logo} />
        </div>

        <div className="main-page-start">
          Start your planning:
          <div className="main-create-session">
            Create session:
            <button className="main-button">
              Start new game
            </button>
          </div>
          OR:
          Connect to lobby by ID:
          <form onSubmit={handleSubmit} className="main-connect-to-lobby">
            <Field
              name="name1"
              type="string"
              component={renderField}
              className="main-lobby-url"
              placeholder="Type lobby ID"
              validate={[isRequired]}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export const MainPage = reduxForm({ form: 'connectToLobby'})(MainForm)
export default MainPage
