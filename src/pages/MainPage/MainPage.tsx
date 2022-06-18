import React from 'react';
import { Field, reduxForm } from 'redux-form';
import logo from './PokerPlanningTitle.png';
import './MainPage.scss';
import { Button } from '../../components/UI/Button/Button';
import { RenderField } from '../../components/UI/RenderField/RenderField';

type ValidationFunc<T> = (value: T) => void | string;

const isValid: void = undefined;
const isRequired: ValidationFunc<any> = (value) =>
  value ? isValid : 'Required';
const isValidId: ValidationFunc<any> = (value) =>
  value && !/^(?=.*[a-z])(?=.*[0-9])[a-z0-9]/i.test(value)
    ? 'Must be a valid ID'
    : undefined;

const MainForm: React.FC = ({
  handleSubmit,
  handleStartGame,
  thereIsId,
}: any): JSX.Element => {
  return (
    <div className="main-page-wrapper">
      <div className="main-page-container">
        <div className="main-page-logo-image">
          <img src={logo} />
        </div>
        <div className="main-page-start">
          <span className="text text-big text-dark-green">
            Start your planning:
          </span>
          <div className="main-page-create-session">
            <span className="text">Create session:</span>
            <Button text="Start New Session" handleClick={handleStartGame} />
          </div>
          <span className="text text-big text-dark-green main-page-or">
            OR:
          </span>
          <span className="text">
            {' '}
            Connect to lobby by
            <span className="text text-kick text-dark-green text-bold">
              {' '}
              ID:
            </span>
          </span>
          <form onSubmit={handleSubmit} className="main-page-connect-to-lobby">
            <Field
              name="lobbyId"
              component={RenderField}
              className="main-lobby-url"
              placeholder="Type lobby ID"
              validate={[isRequired, isValidId]}
            />
            <Button
              text="Connect"
              handleClick={handleSubmit}
              isDisabled={false}
            />
            {!thereIsId && (
              <div className="text text-error main-page-connect-to-lobby__error">
                There are no games with this Id
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export const MainPage = reduxForm({ form: 'connectToLobby' })(MainForm);
export default MainPage;
