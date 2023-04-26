import { Col, Row, Image, Button, Divider, Radio, Card, Space } from 'antd';
import b1 from './pic/b1.jpg';
import b2 from './pic/b2.jpg';
import b3 from './pic/b3.jpg';
import b4 from './pic/b4.jpg';
import b5 from './pic/b5.jpg';
import b6 from './pic/b6.jpg';
import b7 from './pic/b7.jpg';
import b8 from './pic/b8.jpg';
import { DownloadOutlined } from '@ant-design/icons';
import { useState } from 'react';
function Content() {
    const [size, setSize] = useState('large');

    return (
        <div>
            <Row justify={"center"} style={{ marginTop: '80px' }}>

                <Col span={5} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }} >
                        <Card
                            hoverable
                            title="เสื้อสวมหัวลายกราฟิกตัวอักษร"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={b1}
                            />
                            <p>ราคา 250 บาท</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                <a href='/Information1'>รายละเอียดสินค้า</a>
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col span={5} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="เสื้อยืด ทูโทนลายการ์ตูน"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={b2}
                            />
                            <p>ราคา 180 บาท</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col span={5} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="เสื้อยืดมัดย้อม โครงกระดูก"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={b4}
                            />
                            <p>ราคา 300 บาท</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col span={5} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="เสื้อยืด ลายคลื่น"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={b3}
                            />
                            <p>ราคา 150 บาท</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>
            </Row>

            <Row justify={"center"} style={{ marginTop: '20px' }}>
                <Col span={5} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="หญิง เสื้อครอปไฟรูปผีเสื้อ"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={b5}
                            />
                            <p>ราคา 170 บาท</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col span={5} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="เสื้อยืด พิมพ์"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={b6}
                            />
                            <p>ราคา 150 บาท</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col span={5} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="เสื้อสวมหัวลายผีเสื้อ"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={b7}
                            />
                            <p>ราคา 260 บาท</p>
                            <p><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF' }}>
                                รายละเอียดสินค้า
                            </Button></p>
                        </Card>
                    </Space>
                </Col>

                <Col span={5} align="middle">
                    <Space direction="vertical" size={16} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            title="เสื้อยืดลายอักษร&รถยนต์"
                            style={{
                                width: 250,
                            }}
                        >
                            <Image
                                width={200}
                                src={b8}
                            />
                            <p>ราคา 150 บาท</p>
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