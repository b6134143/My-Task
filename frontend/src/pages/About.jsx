import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Image, Button, Space } from 'antd';
import { Link } from "react-router-dom";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/87")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ marginTop: 50 }}>
      {data ? (
        <Col xs={24} sm={24} md={12} lg={8} xl={6} span={5} align="middle">
          <Space direction="vertical" size={16} style={{ marginTop: '80px' }} >
            <Card
              hoverable
              title={data.title}
              style={{ width: 250 }}
            >
              <Image width={200} src={data.thumbnail} />
              <p>Price: {data.price} $</p>

              <Link to={{ pathname: `/Api1/${data.id}`, state: { product: data } }}>
                <Button type="primary" size="small" style={{ background: '#000000', color: '#FFFFFF' }} onClick={() => console.log(data.id)}> 
                  รายละเอียดสินค้า
                </Button>
              </Link>
            </Card>
          </Space>
        </Col>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default About;
