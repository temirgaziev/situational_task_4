import React from 'react';
import { Form, Input } from 'antd';

const PaymentDetails = ({ form, onFinish }) => {
  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item
        label="Card Number"
        name="cardNumber"
        rules={[{ required: true, message: 'Please enter your card number' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Expiration Date"
        name="expiryDate"
        rules={[{ required: true, message: 'Please enter the expiration date' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="CVV"
        name="cvv"
        rules={[{ required: true, message: 'Please enter the CVV' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default PaymentDetails;
