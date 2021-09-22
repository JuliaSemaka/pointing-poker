import React from 'react'
import './ConnectToLobby.scss'
import { Field, reduxForm } from 'redux-form'
import { Button } from '../UI/Button/Button';
import { RenderField, ModalWindow, Switch, Avatar } from '..';
import { EButtonStyle } from '../UI/ui.module';

const isRequired = (value: boolean) => value ? undefined : 'Required'
const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)

const ConnectToLobbyForm = ({ ...props }: any) => {
  const { 
    title, 
    handleCloseModal, 
    handleStartGame, 
    handleClickSwitch,
    handleUploadImage,
    avatar 
  } = props;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleStartGame();
  }

  return (
    <ModalWindow handleClick={handleCloseModal}>
      <form onSubmit={handleSubmit} className="modal-connect-lobby">
        <div className="modal-connect-lobby-title">
          <h3 className="text text-title">
            {title}
          </h3>

          <label htmlFor="switch">
            <span className="text text-bold">Connect as Observer</span>
            <Field
              name="switch"
              id="switch"
              handleClick={handleClickSwitch}
              component={Switch}
            />
          </label>

        </div>
        <div className="modal-connect-lobby-name">
          <label htmlFor="firstName">
            <span className="text text-bold">Your first name:</span>
            <Field
              name="firstName"
              component={RenderField}
              placeholder="Type your first name"
              validate={[ isRequired, maxLength15 ]}
            />
          </label>
        </div>
        <div className="modal-connect-lobby-last-name">
          <label htmlFor="lastName">
            <span className="text text-bold">Your last name:</span>
            <Field
              name="lastName"
              component={RenderField}
              placeholder="Type your last name"
              validate={[ maxLength15 ]}
            />
          </label>
        </div>
        <div className="modal-connect-lobby-job">
          <label htmlFor="jobPosition">
            <span className="text text-bold">Your job position:</span>
            <Field
              name="jobPosition"
              component={RenderField}
              placeholder="Type your job position"
            />
          </label>
        </div>
        <div className="modal-connect-lobby-image">
          <span className="text text-bold">Image:</span>
          <div className="modal-connect-lobby-file">
            <Field
              name="image"
              component={RenderField}
              onChange={handleUploadImage}
              type="file"
            />
            <Button text="Button" handleClick={handleUploadImage} />
          </div>
        </div>
        <div className="modal-connect-lobby-avatar">
          <Avatar image={avatar} />
        </div>
        <div className="modal-connect-lobby-buttons">
          <Button
            text="Confirm"
            handleClick={handleSubmit}
            style={EButtonStyle.dark}
          />
          <Button
            text="Cancel"
            handleClick={handleCloseModal}
            style={EButtonStyle.light}
          />
        </div>
      </form>
    </ModalWindow>
  )
}
export const ConnectToLobby = reduxForm({ form: 'connectToLobbyModal' })(ConnectToLobbyForm)
export default ConnectToLobby
