import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Button } from '../../UI/Button/Button';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { RenderField } from '../../UI/RenderField/RenderField';
import { EButtonType, IChat } from '../../UI/ui.module';

import './Chat.scss';

export const ChatForm: React.FC<IChat & InjectedFormProps<any, IChat>> = ({
  myId,
  dealerId,
  handleSubmit,
  chatMessage = [],
  members,
  handleRemoveMember,
}) => (
  <div className="chat">
    <div className={`chat-scroll ${!chatMessage.length && 'chat-center'}`}>
      {!chatMessage.length && <div className="text">Chat is empty</div>}
      {chatMessage.map(({ idUser, message }, index) => (
        <div className="chat-line" key={index}>
          <MemberCard
            firstName={members.find(({ id }) => id === idUser)?.firstName}
            lastName={members.find(({ id }) => id === idUser)?.lastName}
            position={members.find(({ id }) => id === idUser)?.jobTitle}
            image={members.find(({ id }) => id === idUser)?.image}
            isRemove={
              members.find(({ id }) => id === idUser)?.id !== dealerId &&
              members.find(({ id }) => id === idUser)?.id !== myId
            }
            isMyCard={members.find(({ id }) => id === idUser)?.id === myId}
            handleRemoveMember={() => handleRemoveMember(idUser)}
            isSmall={true}
          />
          <div className="chat-message">
            <p className="text text-chat">{message}</p>
          </div>
        </div>
      ))}
    </div>
    <form className="chat-input" onSubmit={handleSubmit}>
      <Field name="chatMessage" component={RenderField} label="ChatMessage" />
      <Button
        text="Send"
        type={EButtonType.submit}
        handleClick={handleSubmit}
      />
    </form>
  </div>
);

export const Chat = reduxForm<any, IChat>({ form: 'chat' })(ChatForm);
