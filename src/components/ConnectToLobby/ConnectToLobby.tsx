import { Col, Row, Typography } from 'antd'
import React from 'react'

import './ConnectToLobby.css'

interface ConnectToLobbyProps {
  label: string,

}

export const ConnectToLobby: React.FC<ConnectToLobbyProps> = ({ label, ...props }: ConnectToLobbyProps) => {
  return (
    <>
    <Typography.Title level={3}>
      {label}
    </Typography.Title>

      <form action="">
        <label htmlFor="firstName">
          Your first name:
          <input type="text" name="firstName" id="firstName" />
        </label>
        <label htmlFor="lastName">
          Your last name:
          <input type="text" name="lastName" id="lastName" />
        </label>
        <label htmlFor="jobPosition">
          Your job position:
          <input type="text" name="jobPosition" id="jobPosition" />
        </label>
        <label htmlFor="jobPosition">
          Your job position:
          <input type="text" name="jobPosition" id="jobPosition" />
        </label>
      </form>
    </>
  )
}

export default ConnectToLobby
