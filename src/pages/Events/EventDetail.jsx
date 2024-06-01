import React from 'react';
import { Layout, Row, Col, Carousel, Button, Typography, List, Table } from 'antd';
import { LeftOutlined, RightOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './ProductDetail.css'; // Import custom styles

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const product = {
  id: '1',
  name: 'Innovatech VR Pro',
  description:
    'The Innovatech VR Pro is a state-of-the-art virtual reality headset offering immersive experiences with advanced motion tracking, high-resolution displays, and built-in surround sound. Designed for both gaming enthusiasts and professionals, it delivers unparalleled performance and comfort. The headset features a wide field of view, ergonomic design for extended use, and wireless connectivity for seamless integration with your devices.',
  price: 499.99,
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxPk4KNkN-pqfLEtDkB-gZ1PJMwVQPu3TYA&s',
    'https://portal-shop.com/upload/iblock/40f/hengidl4q8150vzysys8gln8xtoypc00.png', // Replace with actual links
    'https://portal-shop.com/upload/iblock/180/y1ugazb12wnpvtdbxfvwo3519q46cwwj.png', // Replace with actual links
    'https://portal-shop.com/upload/iblock/40f/hengidl4q8150vzysys8gln8xtoypc00.png', // Replace with actual links
    'https://virtuality.club/images/product/2254/title/2254-7012.jpg',
    'https://static.insales-cdn.com/images/products/1/2382/619145550/309295964_3222861917966301_1136057610757704564_n.jpg',
    'https://static.insales-cdn.com/r/XtKBnW9Ei8Q/rs:fit:1000:0:1/q:100/plain/images/products/1/6017/728299393/image__7_.png@png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNove28PWb5sMV0X44g98Kn6j646X5JJi8jSnkgia4uXQOpJkrAjBcVlsOyoK7l2w53po&usqp=CAU',
    'https://www.istore.ua/upload/iblock/b1c/i49x6rx88tk7ulky6riszjdvfmvfttg8/QUEST_PRO_3_is.png',
  ],
  video: 'https://youtu.be/TX9qSaGXFyg?feature=shared',
  features: [
    '4K resolution',
    '120 Hz refresh rate',
    'Advanced motion tracking',
    'Built-in surround sound',
    'Ergonomic design',
    'Wide field of view',
    'Wireless connectivity',
  ],
  specifications: {
    resolution: '3840x2160',
    refreshRate: '120 Hz',
    tracking: '6 DoF (Degrees of Freedom)',
    audio: 'Built-in surround sound',
    connectivity: 'Wi-Fi, Bluetooth',
    batteryLife: '6 hours',
    weight: '600 grams',
  },
  releaseDate: '2024-06-15',
  category: 'VR Headset',
  rating: 4.8,
  reviews: 234,
  stock: 150,
  preOrderLink: '/order',
};
const columns = [
  {
    title: 'Feature',
    dataIndex: 'feature',
    key: 'feature',
  },
  {
    title: 'Specification',
    dataIndex: 'specification',
    key: 'specification',
  },
];
const dataSource = Object.entries(product.specifications).map(([key, value]) => ({
  key,
  feature: key,
  specification: value,
}));

const ProductDetail = () => {
  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24} md={12}>
            <Carousel
              autoplay
              autoplaySpeed={5000}
              dots={{ className: 'custom-dots' }}
              prevArrow={<LeftOutlined className="custom-carousel-button" />}
              nextArrow={<RightOutlined className="custom-carousel-button" />}
            >
              {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    style={{ width: '100%' }}
                  />
                </div>
              ))}
            </Carousel>
          </Col>
          <Col xs={24} md={12}>
            <Title level={2}>{product.name}</Title>
            <Paragraph>{product.description}</Paragraph>
            <Title level={4}>${product.price}</Title>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              size="large"
              href={product.preOrderLink}
            >
              Pre-Order Now
            </Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24}>
            <Title level={3}>Features</Title>
            <List
              dataSource={product.features}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>{item}</Typography.Text>
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24}>
            <Title level={3}>Specifications</Title>
            <Table columns={columns} dataSource={dataSource} pagination={false} />
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24}>
            <Title level={3}>Watch Video</Title>
            <iframe
              width="100%"
              height="315"
              src={product.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24}>
            <Title level={3}>Product Gallery</Title>
            <Row gutter={[16, 16]}>
              {product.images.map((image, index) => (
                <Col xs={12} md={6} key={index}>
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    style={{ width: '100%' }}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ProductDetail;
