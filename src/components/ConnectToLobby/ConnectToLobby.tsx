import React from 'react'
import './ConnectToLobby.scss'
import { Field, reduxForm } from 'redux-form'
import { Switch } from '../UI/Switch/Switch';

interface ConnectToLobbyProps {
  label: string,
  name: string,
  lastName: string,
  jobPosition: string,
  defaultNameForImage: string,
}

const ConnectToLobbyForm = ({ ...props }: any) => {
  const { label, name, lastName, jobPosition, defaultNameForImage } = props;
  return (
    <div className="modal-connect-to-lobby">
      <h3>
        {label}
      </h3>

      <Field
        name="switch"
        id="switch"
        component={Switch}
      />
      

      {/* 
      <Form {...formItemLayout} name="nest-messages" validateMessages={validateMessages} layout={'vertical'} >
        <Form.Item name="switch" label="Connect as Observer" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item name={['user', 'name']} label="Your first name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input defaultValue={name} placeholder="Input your name" />
        </Form.Item>
        <Form.Item name={['user', 'lastName']} label="Your last name">
          <Input defaultValue={lastName} placeholder="Input your last name" />
        </Form.Item>
        <Form.Item name={['user', 'jobPosition']} label="Your job position">
          <Input defaultValue={jobPosition} placeholder="Input your job position" />
        </Form.Item>
        <div className="form-avatar">
          <Avatar size={64} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{defaultNameForImage}</Avatar>

          <Form.Item
            name="upload"
            label="Choose file"
            valuePropName="fileList"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
                <Typography.Text>Download</Typography.Text>
              </Button>
            </Upload>
          </Form.Item>
        </div>

        <Form.Item >
          <div className="form-buttons">
            <Button type="primary" htmlType="submit">
              <Typography.Text>Confirm</Typography.Text>
            </Button>

            <Button>
              <Typography.Text>Cancel</Typography.Text>
            </Button>
          </div>
        </Form.Item>
      </Form> */}
    </div>
  )
}
export const ConnectToLobby = reduxForm({ form: 'connectToLobbyModal' })(ConnectToLobbyForm)
export default ConnectToLobby
