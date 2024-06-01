import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const OrderSummary = ({ orderDetails }) => {
  return (
    <div>
      <Title level={3}>Order Summary</Title>
      <Divider />
      <Paragraph>Name: {orderDetails.name}</Paragraph>
      <Paragraph>Email: {orderDetails.email}</Paragraph>
      <Paragraph>Address: {orderDetails.address}</Paragraph>
      <Paragraph>City: {orderDetails.city}</Paragraph>
      <Paragraph>Postal Code: {orderDetails.postalCode}</Paragraph>
      <Paragraph>Card Number: ***</Paragraph>
      <Paragraph>Expiration Date: ***</Paragraph>
      <Paragraph>CVV: ***</Paragraph>
    </div>
  );
};

export default OrderSummary;
