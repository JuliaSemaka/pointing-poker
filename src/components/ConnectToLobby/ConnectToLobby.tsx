import { Input, Typography, Form, Switch, Button, Avatar, Upload } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import React from 'react'

import './ConnectToLobby.css'

interface ConnectToLobbyProps {
  label: string,
  name: string
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

export const ConnectToLobby: React.FC<ConnectToLobbyProps> = ({ label, name, ...props }: ConnectToLobbyProps) => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Typography.Title level={3}>
        {label}
      </Typography.Title>

      <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} layout={'vertical'}>
        <Form.Item name="switch" label="Connect as Observer" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item name={['user', 'name']} label="Your first name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'lastName']} label="Your last name">
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'jobPosition']} label="Your job position">
          <Input />
        </Form.Item>
        <Form.Item
          name="upload"
          label="Choose file"
          valuePropName="fileList"
          // getValueFromEvent={normFile}
          // extra="longgggggggggggggggggggggggggggggggggg"
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
              Download
            </Button>
            {/* <Button icon={<UploadOutlined />}>Click to upload</Button> */}
          </Upload>
        </Form.Item>
        <Avatar size={64} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{name}</Avatar>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Confirm
          </Button>
          <Button>Cancel</Button>
        </Form.Item>
      </Form>

      {/* <form action="">
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
      </form> */}
    </>
  )
}

export default ConnectToLobby
