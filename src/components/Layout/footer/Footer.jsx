// src/Footer.js

import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import './footer.scss';
import { Link } from 'react-router-dom';

const { Footer } = Layout;
const { Title, Text } = Typography;

const InnovatechFooter = () => {
  return (
    <Footer className="footer">
      <div className="footer-content">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title level={4} style={{ color: 'white' }} className="footer-title">
                Innovatech Solutions
              </Title>
              <Text className="footer-text">
                Innovatech Solutions is a cutting-edge technology company specializing in developing
                and selling advanced gadgets and devices.
              </Text>
            </motion.div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title level={4} style={{ color: 'white' }} className="footer-title">
                Quick Links
              </Title>
              <ul className="footer-links">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/product-detail">Product</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </motion.div>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title level={4} style={{ color: 'white' }} className="footer-title">
                Follow Us
              </Title>
              <Space size="large">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookOutlined className="footer-icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined className="footer-icon" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined className="footer-icon" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined className="footer-icon" />
                </a>
              </Space>
            </motion.div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col span={24}>
            <Text className="footer-copyright">
              &copy; {new Date().getFullYear()} Innovatech Solutions. All rights reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default InnovatechFooter;
