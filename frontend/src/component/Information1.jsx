import React from "react";
import { AntDesignOutlined, UserOutlined, CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Col, Row, Image, Checkbox, Avatar, Divider, Tooltip, Button, Space, InputNumber, Typography } from 'antd';
import b1 from './pic/b1.jpg';
import b11 from './pic/b11.jpg';
import b111 from './pic/b111.jpg';
import b1111 from './pic/b1111.jpg';
import b11111 from './pic/b11111.jpg';
function Information1() {
    const { Text, Link } = Typography;
    const onChange = (value) => {
        console.log('changed', value);
    };
    return (
        <div>
            <Row>
                <Col span={5} style={{ marginTop: '100px', marginLeft: '90px' }}>
                    <Image
                        width={400}
                        src={b1}
                    /></Col>
                <Col span={11} style={{ marginLeft: '200px', marginTop: '70px' }}>
                    <h1> เสื้อสวมหัวลายกราฟิกตัวอักษร </h1>
                    <h1 style={{ color: '#FF4500' }}> ฿250   <Text delete style={{ color: '#BEBEBE', fontSize: 25 }}>฿330</Text> <Button style={{ backgroundColor: '#000000' }} type="primary">-24%</Button></h1>
                    <h2> Color : </h2>
                    <Col span={20} >
                        <Checkbox value="สีขาว">
                            <Avatar
                                style={{ backgroundColor: '#DCDCDC', }}
                            >
                            </Avatar>
                        </Checkbox>

                        <Checkbox value="สีแดง">
                            <Avatar
                                style={{ backgroundColor: '#FF0000', }}
                            >
                            </Avatar>
                        </Checkbox>

                        <Checkbox value="สีฟ้า">
                            <Avatar
                                style={{ backgroundColor: '#0066FF', }}
                            >
                            </Avatar>
                        </Checkbox>

                        <Checkbox value="สีครีม">
                            <Avatar
                                style={{ backgroundColor: '#FFDAB9', }}
                            >
                            </Avatar>
                        </Checkbox>

                        <Checkbox value="สีน้ำตาล">
                            <Avatar
                                style={{ backgroundColor: '#8B4513' }}
                            >
                            </Avatar>
                        </Checkbox>

                        <Checkbox value="สีเขียว">
                            <Avatar
                                style={{ backgroundColor: '#00FF00' }}
                            >
                            </Avatar>
                        </Checkbox>
                    </Col>
                    <h2 style={{ marginTop: '40px' }}>Size / จำนวน : <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /><a style={{ marginLeft: '10px', color: '#000000' }}>ตัว</a></h2>
                    <Button style={{ width: 50 }}> XS </Button>
                    <Button style={{ width: 50, marginLeft: '10px' }}> S </Button>
                    <Button style={{ width: 50, marginLeft: '10px' }}> M </Button>
                    <Button style={{ width: 50, marginLeft: '10px' }}> L </Button>
                    <Button style={{ width: 50, marginLeft: '10px' }}> XL </Button>
                    <p><Button type="primary" style={{ backgroundColor: '#000000', width: 430, marginTop: '50px', fontSize: '29px', height: '50px' }}>ซื้อเลย</Button></p>
                    <p><Button type="primary" style={{ backgroundColor: '#DCDCDC', color: '#000000', width: 430 }}>เพิ่มเข้ารถเข็น</Button></p>
                </Col>
            </Row>

            <Row>
                <Col span={5}>
                    <Image style={{ marginTop: '10px', marginLeft: '90px' }}
                        width={70}
                        src={b11}
                    />
                    <Image style={{ marginTop: '10px', marginLeft: '130px' }}
                        width={70}
                        src={b111}
                    />
                    <Image style={{ marginTop: '10px', marginLeft: '170px' }}
                        width={70}
                        src={b1111}
                    />
                    <Image style={{ marginTop: '10px', marginLeft: '210px' }}
                        width={70}
                        src={b11111}
                    /></Col>
            </Row>
        </div>
    )
}

export default Information1