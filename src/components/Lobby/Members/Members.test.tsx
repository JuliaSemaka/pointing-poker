import React from 'react';
import { render } from '@testing-library/react';
import { Members } from './Members';
import { IUsers } from '../../../pages/pages.module';

test('show members', () => {
  const text='Members:';
  const myId = '1111';
  const dealerId = '0000';
  const members: IUsers[] = []
  const handleClick = () => {
    return;
  };
  const { getByText } = render(
    <Members myId={myId} dealerId={dealerId} members={members} handleRemoveMember={handleClick} />,
  )
  expect(getByText(text)).toBeInTheDocument()
});
