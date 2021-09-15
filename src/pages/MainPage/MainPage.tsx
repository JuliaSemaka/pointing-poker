import React from 'react'
import { Field, reduxForm } from 'redux-form'
import type { FormProps } from 'redux-form'
import { ERenderFieldType, EType, IRenderField } from '../../components/UI/ui.module';
import logo from './PokerPlanningTitle.png'
import './MainPage.scss';
import { Button } from '../../components/UI/Button/Button';
import { RenderField } from '../../components/UI/RenderField/RenderField';

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
const MainForm: React.FC = ({ id, error }: any): JSX.Element => {
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
            <Button
              text="Start New Game"
              isClick={() => console.log('start new game')}
            />
          </div>
          OR:
          Connect to lobby by ID:
          <form onSubmit={handleSubmit} className="main-connect-to-lobby">
            <RenderField
              type={EType.text}
              meta={{}}
              disabled={false}
            />
            <Button
              text="Connect"
              isClick={() => console.log('start new game')}
              isDisabled={false}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export const MainPage = reduxForm({ form: 'connectToLobby' })(MainForm)
export default MainPage
