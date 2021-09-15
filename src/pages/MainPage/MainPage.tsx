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

const handleStartGame = () => {
  return;
}
const handleSubmit = () => {
  return;
}
const MainForm: React.FC = ({ id, error }: any): JSX.Element => {
  const fieldProps = {
    name: "lobbyID",
    type: EType.text,
    className: "main-lobby-url",
    placeholder: "Type lobby ID",
    validate: [isRequired],
    disabled: false,
    meta: {}
  }
  return (
    <div className="main-page-wrapper">
      <div className="main-container">
        <div className="main-logo-image">
          <img src={logo} />
        </div>
        <div className="main-page-start">
          <span className="text text-big text-dark-green">Start your planning:</span>
          <div className="main-create-session">
            <span className="text">Create session:</span>
            <Button
              text="Start New Game"
              isClick={handleStartGame}
            />
          </div>
          <span className="text text-big text-dark-green">OR:</span>
          <span className="text"> Connect to lobby by <span className="text text-kick text-dark-green">ID:</span></span>
          <form onSubmit={handleSubmit} className="main-connect-to-lobby">
            <RenderField
              {...fieldProps}
            />
            <Button
              text="Connect"
              isClick={handleSubmit}
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
