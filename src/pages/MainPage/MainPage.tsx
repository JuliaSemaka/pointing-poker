import React from 'react'
import { Image, Layout, Typography, Row, Col, Button, Form, Input } from 'antd';
import logo from './PokerPlanningTitle.png'
import './MainPage.css';

interface MainPage {
  title: string,
}

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

export const MainPage: React.FC<MainPage> = ({ ...props }: MainPage) => {
  const { title } = props;
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content className="main-container">
          <Row>
            <Col span={16} offset={4} className="main-logo-image" >
              <Image src={logo} preview={false} />
            </Col>
          </Row>
          <Row>
            <Col span={16} offset={4}>
              <Row>
                <Col>
                  <Text className="main-text">Start your planning:</Text>
                </Col>
              </Row>
              <Row align="middle" >
                <Col span={10} >
                  <Text className="main-subtext">Create session:</Text>
                </Col>
                <Col span={14}>
                  <Button type="primary" className="main-button">
                    <Text className="main-button-text">Start new game</Text>
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col span={16} offset={4}>
                  <Text className="main-text">OR:</Text>
                </Col>
              </Row>
              <Row>
                <Text className="main-subtext">Connect to lobby by URL:</Text>
              </Row>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                <Row>
                  <Col span={10}>
                    <Form.Item
                      name="lobbyUrl"
                      rules={[{ required: true, message: 'Please input your lobby URL!' }]}
                    >
                      <Input className="main-lobby-url" />
                    </Form.Item>
                  </Col>
                  <Col span={14}>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="main-button">
                        <Text className="main-button-text">Connect</Text>
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}

export default MainPage
