// src/AboutUs.js

import React from 'react';
import { Layout, Row, Col, Typography, Card, Avatar } from 'antd';
import { TeamOutlined, RocketOutlined, HeartOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import './AboutUs.scss';

const { Title, Paragraph } = Typography;
const { Meta } = Card;
const { Content } = Layout;

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    avatar:
      'https://s3.amazonaws.com/media.mixrank.com/profilepic/fec0684d2748e607f9a91466226b11d2',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    avatar:
      'https://s3.amazonaws.com/media.mixrank.com/profilepic/a34b2e416246da36059f4619b835ea67',
  },
  {
    name: 'Mike Johnson',
    position: 'COO',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYRqw11RNzH6X5sjEfW6cS5J8wZ4bIsBClSokVG38A_6eqgpq1UHghxo4c6Vb_-rvKK0&usqp=CAU',
  },
];

const AboutUs = () => {
  return (
    <Layout className="about-us-layout">
      <Content className="about-us-content">
        <Row gutter={[16, 16]} className="about-us-section">
          <Col span={24}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title level={2} className="about-us-title">
                About Us
              </Title>
              <Paragraph className="about-us-text">
                Innovatech Solutions is a cutting-edge technology company specializing in developing
                and selling advanced gadgets and devices. Our latest product, Innovatech VR Pro,
                offers state-of-the-art virtual reality experiences.
              </Paragraph>
            </motion.div>
          </Col>
        </Row>
        <Row gutter={[16, 16]} className="about-us-section">
          <Col span={24} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="about-us-card">
                <RocketOutlined className="about-us-icon" />
                <Meta
                  title="Our Mission"
                  description="To revolutionize the technology industry with innovative and reliable products that enhance everyday life."
                />
              </Card>
            </motion.div>
          </Col>
          <Col span={24} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="about-us-card">
                <HeartOutlined className="about-us-icon" />
                <Meta
                  title="Our Vision"
                  description="To be a global leader in technology innovation, delivering exceptional value to our customers and stakeholders."
                />
              </Card>
            </motion.div>
          </Col>
          <Col span={24} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="about-us-card">
                <TeamOutlined className="about-us-icon" />
                <Meta
                  title="Our Values"
                  description="Innovation, integrity, and customer satisfaction are at the core of everything we do."
                />
              </Card>
            </motion.div>
          </Col>
        </Row>
        <Row gutter={[16, 16]} className="about-us-section">
          <Col span={24}>
            <Title level={3} className="about-us-subtitle">
              Meet Our Team
            </Title>
          </Col>
          {teamMembers.map((member, index) => (
            <Col key={index} span={24} sm={12} md={8}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className="about-us-team-card"
                  cover={<img alt={member.name} src={member.avatar} />}
                >
                  <Meta
                    avatar={<Avatar src={member.avatar} />}
                    title={member.name}
                    description={member.position}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default AboutUs;
