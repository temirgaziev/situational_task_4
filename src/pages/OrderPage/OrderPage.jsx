import React, { useState } from 'react';
import { Layout, Steps, Form, Input, Button, Typography, Row, Col, message } from 'antd';
import './OrderPage.scss';
import PaymentDetails from './PaymentDetail';
import OrderSummary from './OrderSummary';
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;
const { Title } = Typography;
const { Step } = Steps;

const OrderPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [orderDetails, setOrderDetails] = useState({});
  const handlePayment = () => {
    form.validateFields().then((values) => {
      setOrderDetails({ ...orderDetails, ...values });
      message.success('Payment Successful! Your order has been placed.');
      setCurrentStep(0);
      form.resetFields();
      navigate('/product-detail');
    });
  };

  const steps = [
    {
      title: 'Personal Information',
      content: (
        <Form
          layout="vertical"
          form={form}
          onFinish={(values) => {
            setOrderDetails({ ...orderDetails, ...values });
            setCurrentStep(1);
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Shipping Address',
      content: (
        <Form
          layout="vertical"
          form={form}
          onFinish={(values) => {
            setOrderDetails({ ...orderDetails, ...values });
            setCurrentStep(2);
          }}
        >
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: 'Please enter your city' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Postal Code"
            name="postalCode"
            rules={[{ required: true, message: 'Please enter your postal code' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => setCurrentStep(0)} style={{ marginRight: 8 }}>
              Previous
            </Button>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Payment Details',
      content: (
        <Form
          layout="vertical"
          form={form}
          onFinish={(values) => {
            setOrderDetails({ ...orderDetails, ...values });
            setCurrentStep(3);
          }}
        >
          <PaymentDetails />
          <Form.Item>
            <Button type="primary" onClick={() => setCurrentStep(1)} style={{ marginRight: 8 }}>
              Previous
            </Button>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Order Summary',
      content: (
        <div>
          <OrderSummary orderDetails={orderDetails} />
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <Content className="order-page">
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Title level={2} style={{ textAlign: 'center' }}>
              Place Your Order
            </Title>
            <Steps current={currentStep} style={{ width: '50vw', marginBottom: 40 }}>
              {steps.map((step) => (
                <Step key={step.title} title={step.title} />
              ))}
            </Steps>
            {steps[currentStep].content}
            {currentStep === steps.length - 1 && (
              <div style={{ textAlign: 'center', marginTop: 20 }}>
                <Button type="primary" onClick={handlePayment}>
                  Confirm Order & Pay
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default OrderPage;
