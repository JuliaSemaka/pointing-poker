import React from 'react'
import { Image, Typography, Button } from 'antd';
import { Field, reduxForm } from 'redux-form'
import type { FormProps } from 'redux-form'
import logo from './PokerPlanningTitle.png'
import './MainPage.scss';

interface Props {
  error?: string,
  id: string
}
const { Text } = Typography;

const validate = (values: { id: string }) => {
  const errors = { id: '' }
  if (!values.id) {
    errors.id = 'Required Id number'
  } else if (isNaN(Number(values.id))) {
    errors.id = 'Must be a number'
  }
  return errors
}


const renderField = ({ input, label, type, meta: { touched, error }, ...other }: any) => (
  <>
      <input {...input} {...other} placeholder={label} type={type} />
      <Button htmlType="submit" className="main-button">
        <Text className="main-button-text">Connect</Text>
      </Button>
    {touched && (error && <span><Text className="main-form-error">{error}</Text></span>)}
  </>
)

const MainForm = ({ id, error }: any): JSX.Element => {
  return (
    <div className="main-page-wrapper">
      <div className="main-container">
        <div className="main-logo-image">
          <Image src={logo} preview={false} />
        </div>

        <div className="main-page-start">
          <Text className="main-text">Start your planning:</Text>
          <div className="main-create-session">
            <Text className="main-subtext">Create session:</Text>
            <Button className="main-button">
              <Text className="main-button-text">Start new game</Text>
            </Button>
          </div>
          <Text className="main-text">OR:</Text>
          <Text className="main-subtext">Connect to lobby by ID:</Text>
          <form onSubmit={() => console.log(test)} className="main-connect-to-lobby">
            <Field 
            name="id" 
            type="number" 
            component={renderField} 
            className="main-lobby-url"
            placeholder="Type lobby ID" />
          </form>
        </div>
      </div>
    </div>
  )
}

export const MainPage = reduxForm({ form: 'connectToLobby' })(MainForm)
export default MainPage
