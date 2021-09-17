import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Button } from '../../UI/Button/Button';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { RenderField } from '../../UI/RenderField/RenderField';
import { IChat } from '../../UI/ui.module';

import './Chat.scss';

export const ChatForm: React.FC<IChat & InjectedFormProps<any, IChat>> = ({
  sendMessageChat,
  chatMessage = [],
  handleRemoveMember
}) => (
  <div className="chat">
    <div className={`chat-scroll ${!chatMessage.length && 'chat-center'}`}>
      {!chatMessage.length && <div className="text">Chat is empty</div>}
      {chatMessage.map((item, index) => (
        <div className="chat-line" key={index}>
          <MemberCard
            firstName={item.userData.firstName}
            lastName={item.userData.lastName}
            position={item.userData.jobTitle}
            isRemove={true}
            handleRemoveMember={handleRemoveMember}
          />
          <div className="chat-message">
            <p className="text">{item.message}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="chat-input">
      <Field name="chatMessage" component={RenderField} label="ChatMessage" />
      <Button text="Send" handleClick={sendMessageChat} />
    </div>
  </div>
);

export const Chat = reduxForm<any, IChat>({ form: 'chat' })(ChatForm);
