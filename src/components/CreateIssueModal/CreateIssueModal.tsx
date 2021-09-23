import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button } from '../UI/Button/Button';
import { ModalWindow } from '../UI/ModalWindow/ModalWindow';
import { RenderField } from '../UI/RenderField/RenderField';
import { Select } from '../UI/Select/Select';
import { EButtonStyle } from '../UI/ui.module';
import './CreateIssueModal.scss';

export interface ICreateIssueModal {
  handleCloseModal: (value: boolean) => void;
}

const required = (value: undefined | string) =>
  value ? undefined : 'Required';

const CreateIssueModal: React.FC<
  ICreateIssueModal & InjectedFormProps<any, ICreateIssueModal>
> = ({ handleCloseModal, handleSubmit, submitting, pristine }) => {
  const arrayOptions = ['Low', 'Middle', 'Hight'];
  const handleOnSubmit = () => {

    handleSubmit
    handleCloseModal
  }

  return (
    <ModalWindow handleClick={handleCloseModal}>
      <form className="create-issue" onSubmit={handleSubmit} >
        <h2 className="text text-title create-issue__title">Create Issue</h2>
        <div className="create-issue__row">
          <p className="text text-ruda">Title:</p>
          <Field name="title" component={RenderField} validate={[required]} />
        </div>
        <div className="create-issue__row">
          <p className="text text-ruda">Link:</p>
          <Field name="link" component={RenderField} validate={[required]} />
        </div>
        <div className="create-issue__row">
          <p className="text text-ruda">Priority:</p>
          <Select options={arrayOptions} name={'priority'} />
        </div>
        <div className="create-issue__block">
          <Button
            text="Yes"
            isDisabled={submitting}
            handleClick={() => handleSubmit}
            typeButton="submit"
          />
          <Button
            isDisabled={pristine || submitting}
            text="No"
            handleClick={handleCloseModal}
            style={EButtonStyle.light}
          />
        </div>
      </form>
    </ModalWindow>
  );
};

export const CreateIssue = reduxForm<any, ICreateIssueModal>({
  form: 'createIssue',
})(CreateIssueModal);
