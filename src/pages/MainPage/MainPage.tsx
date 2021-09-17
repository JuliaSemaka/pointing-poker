import React from 'react'
import { Field, reduxForm } from 'redux-form'
import logo from './PokerPlanningTitle.png'
import './MainPage.scss';
import { Button } from '../../components/UI/Button/Button';
import { RenderField } from '../../components/UI/RenderField/RenderField';

type ValidationFunc<T> = (value: T) => void | string

const isValid: void = undefined
export const isRequired: ValidationFunc<any> = value => (value ? isValid : 'Required')

const MainForm: React.FC = ({ handleSubmit, handleStartGame }: any): JSX.Element => {
  return (
    <div className="main-page-wrapper">
      <div className="main-page-container">
        <div className="main-page-logo-image">
          <img src={logo} />
        </div>
        <div className="main-page-start">
          <span className="text text-big text-dark-green">Start your planning:</span>
          <div className="main-page-create-session">
            <span className="text">Create session:</span>
            <Button
              text="Start New Game"
              handleClick={handleStartGame}
            />
          </div>
          <span className="text text-big text-dark-green">OR:</span>
          <span className="text"> Connect to lobby by
            <span className="text text-kick text-dark-green text-bold">ID:</span>
          </span>
          <form onSubmit={handleSubmit} className="main-page-connect-to-lobby">
            <Field
              name="name1"
              component={RenderField}
              className="main-lobby-url"
              placeholder="Type lobby ID"
              validate={[isRequired]}
            />
            <Button
              text="Connect"
              handleClick={handleSubmit}
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
