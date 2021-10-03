import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button } from '../UI/Button/Button';
import { ModalWindow } from '../UI/ModalWindow/ModalWindow';
import { RenderField } from '../UI/RenderField/RenderField';
import { Select } from '../UI/Select/Select';
import { EButtonStyle, EButtonType } from '../UI/ui.module';
import './CreateIssueModal.scss';

export interface ICreateIssueModal {
  handleCloseModal: (event?: boolean | React.MouseEvent<Element, MouseEvent>) => void;
  handleSubmit?: () => void;
  submitting?: boolean;
}

const isRequired = (value: undefined | string) =>
  value ? undefined : 'Required';

const CreateIssueModal: React.FC<
  ICreateIssueModal & InjectedFormProps<any, ICreateIssueModal>
> = ({ handleCloseModal, handleSubmit, submitting }) => {
  const arrayOptions = ['Low', 'Middle', 'Hight'];

  return (
    <ModalWindow handleClick={handleCloseModal}>
      <form className="create-issue" onSubmit={handleSubmit}>
        <h2 className="text text-title create-issue__title">Create Issue</h2>
        <div className="create-issue__row">
          <p className="text text-ruda">Title:</p>
          <Field name="title" component={RenderField} validate={[isRequired]} />
        </div>
        <div className="create-issue__row">
          <p className="text text-ruda">Link:</p>
          <Field name="link" component={RenderField} validate={[isRequired]} />
        </div>
        <div className="create-issue__row">
          <p className="text text-ruda">Priority:</p>
          <Select options={arrayOptions} name={'priority'} />
        </div>
        <div className="create-issue__block">
          <Button
            text="Yes"
            isDisabled={submitting}
            handleClick={handleSubmit}
            type={EButtonType.submit}
          />
          <Button
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
