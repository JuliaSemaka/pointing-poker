import React from 'react'
import './ConnectToLobby.scss'
import { Field, reduxForm } from 'redux-form'
import { RenderField, Button, ModalWindow, Switch, Avatar } from '..';
import { EButtonStyle } from '../UI/ui.module';

const ConnectToLobbyForm = ({ ...props }: any) => {
  const { label, handleCloseModal, handleStartGame } = props;
  return (
    <ModalWindow handleClick={handleCloseModal}>
      <div className="modal-connect-lobby">
        <div>
          <h3>
            Connect to Lobby
          </h3>

          <label htmlFor="switch">
            Connect as Observer
            <Field
              name="switch"
              id="switch"
              component={Switch}
            />
          </label>

        </div>
        <div className="modal-connect-lobby-item">
          <label htmlFor="firstName">
            Your first name:
            <Field
              name="firstName"
              component={RenderField}
              // className="main-lobby-url"
              placeholder="Type your first name"
            />
          </label>
        </div>
        <div className="modal-connect-lobby-item">
          <label htmlFor="lastName">
            Your last name:
            <Field
              name="lastName"
              component={RenderField}
              // className="main-lobby-url"
              placeholder="Type your last name"
            />
          </label>
        </div>
        <div className="modal-connect-lobby-item">
          <label htmlFor="jobPosition">
            Your job position:
            <Field
              name="jobPosition"
              component={RenderField}
              className="main-lobby-url"
              placeholder="Type your job position"
            />
          </label>
        </div>
        <div className="modal-connect-lobby-item">
          <label htmlFor="image">
            Image:
            <Field
              name="image"
              component={RenderField}
              type="file"
            />
            <Button text="Button" handleClick={handleStartGame} />
            <Avatar />
          </label>
        </div>

        <div className="modal-connect-lobby-item">
          <Button text="Confirm" handleClick={handleStartGame} />
          <Button
            text="Cancel"
            handleClick={handleCloseModal}
            style={EButtonStyle.light}
          />
        </div>
      </div>
    </ModalWindow>
  )
}
export const ConnectToLobby = reduxForm({ form: 'connectToLobbyModal' })(ConnectToLobbyForm)
export default ConnectToLobby
