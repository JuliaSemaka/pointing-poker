import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Button } from '../../UI/Button/Button';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { RenderField } from '../../UI/RenderField/RenderField';
import { IChat } from '../../UI/ui.module';

import './Chat.scss';

export const ChatForm: React.FC<IChat & InjectedFormProps<any, IChat>> = ({
  sendMessageChat,
}) => (
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
      <Button text="Send" handleClick={sendMessageChat} />
    </div>
  </div>
);

export const Chat = reduxForm<any, IChat>({ form: 'chat' })(ChatForm);
