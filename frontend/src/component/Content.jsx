import { Col, Row, Image, Button, Divider, Radio, Card, Space, Select, Dropdown } from 'antd';
import z1 from './pic/z1.jpg';
import z2 from './pic/z2.jpg';
import z4 from './pic/z4.jpg';
import z3 from './pic/z3.jpg';
import z5 from './pic/z5.jpg';
import z6 from './pic/z6.jpg';
import z7 from './pic/z7.jpg';
import z8 from './pic/z8.jpg';
import { DownloadOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
function Content() {
    const [size, setSize] = useState('large');

    return (
        <div className='container'>
            <Row gutter={[0, 16]} justify={"center"} style={{ marginTop: '110px' }}>

                <Col xs={24} sm={24} md={12} lg={8} xl={6} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }} >
                        <Card
                            hoverable
                            title="Gorilla Cookies Auto"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={z1}
                            />
                            <p>Price 13,00 € / seed</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                <a href='/Information1'>รายละเอียดสินค้า</a>
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={6} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="Banana Purple Punch Auto"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={z2}
                            />
                            <p>Price 13,00 € / seed</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={6} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="Strawberry Gorilla Auto"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={z3}
                            />
                            <p>Price 13,00 € / seed</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={6} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="Orange Sherbet Auto"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={z4}
                            />
                            <p>Price 13,00 € / seed</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>
            </Row>

            <Row justify={"center"} style={{ marginTop: '20px' }}>
                <Col xs={24} sm={24} md={12} lg={8} xl={6} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="Tropicana Cookies Auto"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={z5}
                            />
                            <p>Price 13,00 € / seed</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={6} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="Apricot Auto"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={z6}
                            />
                            <p>Price 13,00 € / seed</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={6} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="Wedding Cheesecake Auto"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={z7}
                            />
                            <p>Price 13,00 € / seed</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={6} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="Cinderella Auto"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={z8}
                            />
                            <p>Price 13,00 € / seed</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}
export default Content