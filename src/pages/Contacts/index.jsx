import React from 'react';
import { Layout, Row, Col, Card, Typography, Image } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const ContactPage = () => {
  return (
    <Layout>
      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <Title>Contact Us</Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} md={12} lg={8}>
            <Card title="Main Office" bordered={false}>
              <Paragraph>
                <EnvironmentOutlined /> Address: 123 Main St, City, Country
              </Paragraph>
              <Paragraph>
                <MailOutlined /> Email: info@innovatech.com
              </Paragraph>
              <Paragraph>
                <PhoneOutlined /> Phone: +123 456 7890
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Card title="Branch Office" bordered={false}>
              <Paragraph>
                <EnvironmentOutlined /> Address: 456 Side St, City, Country
              </Paragraph>
              <Paragraph>
                <MailOutlined /> Email: branch@innovatech.com
              </Paragraph>
              <Paragraph>
                <PhoneOutlined /> Phone: +123 456 7891
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Card title="Support" bordered={false}>
              <Paragraph>
                <MailOutlined /> Email: support@innovatech.com
              </Paragraph>
              <Paragraph>
                <PhoneOutlined /> Phone: +123 456 7892
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <div className="map-container">
          <Image src="https://i.ibb.co/ZXhyZQx/2024-06-01-21-58-41.png" />
        </div>
      </Content>
    </Layout>
  );
};

export default ContactPage;
