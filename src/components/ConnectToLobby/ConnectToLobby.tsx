import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from '../UI/Button/Button';
import { RenderField, ModalWindow, Switch, Avatar } from '..';
import { EButtonStyle, EButtonType } from '../UI/ui.module';

import './ConnectToLobby.scss';

const isRequired = (value: boolean) => (value ? undefined : 'Required');
const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

const ConnectToLobbyForm = ({ ...props }: any) => {
  const {
    title,
    handleSubmit,
    handleCloseModal,
    handleClickSwitch,
    handleUploadImage,
    avatar,
    isDealler,
  } = props;

  const gameTitle = isDealler ? (
    <div className="modal-connect-lobby-job">
      <label htmlFor="title" className="modal-connect-lobby__row">
        <span className="text text-bold">Title:</span>
        <Field
          name="title"
          component={RenderField}
          placeholder="Type your title"
        />
      </label>
    </div>
  ) : null;

  return (
    <ModalWindow handleClick={handleCloseModal}>
      <form onSubmit={handleSubmit} className="modal-connect-lobby">
        <div className="modal-connect-lobby-title">
          <h3 className="text text-title">{title}</h3>
          {!isDealler && (
            <label htmlFor="switch">
              <span className="text text-bold">Connect as Observer</span>
              <Field
                name="switch"
                handleClick={handleClickSwitch}
                component={Switch}
              />
            </label>
          )}
        </div>

        <div className="modal-connect-lobby-name">
          <label htmlFor="firstName" className="modal-connect-lobby__row">
            <span className="text text-bold">Your first name:</span>
            <Field
              name="firstName"
              component={RenderField}
              placeholder="Type your first name"
              validate={[isRequired, maxLength15]}
            />
          </label>
        </div>

        <div className="modal-connect-lobby-last-name">
          <label htmlFor="lastName" className="modal-connect-lobby__row">
            <span className="text text-bold">Your last name:</span>
            <Field
              name="lastName"
              component={RenderField}
              placeholder="Type your last name"
              validate={[isRequired, maxLength15]}
            />
          </label>
        </div>

        <div className="modal-connect-lobby-job">
          <label htmlFor="jobPosition" className="modal-connect-lobby__row">
            <span className="text text-bold">Your job position:</span>
            <Field
              name="jobPosition"
              component={RenderField}
              placeholder="Type your job position"
            />
          </label>
        </div>

        {gameTitle}

        <div className="modal-connect-lobby-image">
          <span className="text text-bold">Image:</span>
          <div className="modal-connect-lobby-file modal-connect-lobby__row">
            <Field
              name="image"
              component={RenderField}
              onChange={handleUploadImage}
              type="file"
            />
            <Avatar image={avatar} />
          </div>
        </div>
        <div className="modal-connect-lobby-buttons">
          <Button
            text="Confirm"
            handleClick={handleSubmit}
            style={EButtonStyle.dark}
            type={EButtonType.submit}
          />
          <Button
            text="Cancel"
            handleClick={handleCloseModal}
            style={EButtonStyle.light}
            type={EButtonType.reset}
          />
        </div>
      </form>
    </ModalWindow>
  );
};
export const ConnectToLobby = reduxForm({ form: 'connectToLobbyModal' })(
  ConnectToLobbyForm
);
export default ConnectToLobby;
