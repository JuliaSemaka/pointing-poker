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
  handleRemoveMember,
}) => (
  <div className="chat">
    <div className={`chat-scroll ${!chatMessage.length && 'chat-center'}`}>
      {!chatMessage.length && <div className="text">Chat is empty</div>}
      {chatMessage.map(({ userData, message }, index) => (
        <div className="chat-line" key={index}>
          <MemberCard
            firstName={userData.firstName}
            lastName={userData.lastName}
            position={userData.jobTitle}
            isRemove={true}
            handleRemoveMember={handleRemoveMember}
            isSmall={true}
          />
          <div className="chat-message">
            <p className="text text-chat">{message}</p>
          </div>
        </div>
      ))}
    </div>
    <form className="chat-input" onSubmit={sendMessageChat}>
      <Field name="chatMessage" component={RenderField} label="ChatMessage" />
      <Button text="Send" handleClick={sendMessageChat} />
    </form>
  </div>
);

export const Chat = reduxForm<any, IChat>({ form: 'chat' })(ChatForm);
