import React from 'react';
import { List, Card, Typography } from 'antd';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const News = () => {
  const newsItems = [
    {
      title: 'Innovatech VR Pro Launch Date Announced',
      date: 'June 15, 2024',
      description:
        'We are excited to announce that the official launch date for the Innovatech VR Pro is June 15, 2024. Get ready to experience the future of virtual reality!',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RJ7_IEz_FDfV8tT_e3ZUrwkRgzqRzuGJsA&s',
    },
    {
      title: 'Pre-Order Now Available',
      date: 'May 20, 2024',
      description:
        'Pre-order the Innovatech VR Pro now and be among the first to experience its groundbreaking features. Limited quantities available!',
      imageUrl:
        'https://media.licdn.com/dms/image/D4E22AQHMvFLEZw5i7A/feedshare-shrink_800/0/1710798357733?e=2147483647&v=beta&t=146ZqFQ7P7Leq2cAIRG09JsFDXdF7yUhdCsBVVJfC_o',
    },
    // Add more news items as needed
  ];

  return (
    <div className="news" style={{ textAlign: 'center' }}>
      <Title level={2} style={{ marginBottom: '30px' }}>
        Latest News
      </Title>
      <List
        grid={{ gutter: 24, column: 3 }}
        dataSource={newsItems}
        renderItem={(item, index) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: 300, marginBottom: '20px' }}
              cover={<img alt="News" src={item.imageUrl} />}
            >
              <Meta title={item.title} description={item.description} />
              <Paragraph style={{ marginTop: '10px', fontSize: '12px' }}>{item.date}</Paragraph>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default News;
