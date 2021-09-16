import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from '../../UI/Button/Button';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { RenderField } from '../../UI/RenderField/RenderField';

import './Chat.scss';

export const ChatForm: React.FC = () => {
  const handleSubmit = () => {
    return;
  };

  return (
    <div className="chat">
      <div className="chat-scroll">
        <div className="chat-line">
          <MemberCard
            firstName="Iaroslav"
            lastName="Silkin"
            position="backend developer"
            isRemove={true}
          />
          <div className="chat-message">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="chat-line">
          <MemberCard
            firstName="Ivan"
            lastName="Yatsko"
            position="web developer"
            isRemove={true}
          />
          <div className="chat-message">
            <p className="text">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="chat-line">
          <MemberCard
            firstName="Ivan"
            lastName="Yatsko"
            position="web developer"
            isRemove={true}
          />
          <div className="chat-message">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="chat-line">
          <MemberCard
            firstName="Iaroslav"
            lastName="Silkin"
            position="backend developer"
            isRemove={true}
          />
          <div className="chat-message">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="chat-line">
          <MemberCard
            firstName="Ivan"
            lastName="Yatsko"
            position="web developer"
            isRemove={true}
          />
          <div className="chat-message">
            <p className="text">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <Field name="chatMessage" component={RenderField} label="ChatMessage" />
        <Button text="Send" clickButton={handleSubmit} />
      </div>
    </div>
  );
};

export const Chat = reduxForm({ form: 'chat' })(ChatForm);
