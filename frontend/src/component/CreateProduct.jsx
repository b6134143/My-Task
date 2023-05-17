import React from 'react';
import { Image, Input, Col, Row, Divider, Select, Space, Button, Upload, Cascader, InputNumber, Card } from 'antd';
<Input placeholder="Basic usage" />;
import { UploadOutlined } from '@ant-design/icons';
import { DownloadOutlined, UserOutlined } from '@ant-design/icons';
import z1 from './pic/z1.jpg';
import { useState } from 'react';
function CreateProduct() {
    const onChange = (value) => {
        console.log('changed', value);
    }
    const { TextArea } = Input;
    const options = [
        {
            value: '1',
            label: 'เสื้อผ้า',
        },
    ];
    return (
        <>
            <Row div={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} >
                    <div style={{ marginTop: '120px', display: 'flex', justifyContent: 'center' }} >
                        <Card
                            hoverable
                            title="รูปภาพ"
                            style={{
                                width: '250',
                                marginLeft: 'auto',  // กำหนด marginLeft เป็น 'auto'
                                marginRight: 'auto', // กำหนด marginRight เป็น 'auto'
                                textAlign: 'center'  // กำหนด textAlign เป็น 'center'
                            }}
                        >
                            <Image
                                width={200}
                                src={z1}
                            />
                            <p > อัพโหลดรูปภาพ </p>
                            <Row style={{ marginTop: '37px', marginLeft: '50px' }}>
                                <Button icon={<UploadOutlined />}> Upload </Button>
                            </Row>
                        </Card>
                    </div>
                </Col>

                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <div style={{ marginTop: '120px', width: '60%', padding: '20px', color: '#000000' }}>

                        <Row gutter={[16, 16]} justify={'center'}>

                            <Col xs={24} sm={24} md={24} lg={24} xl={4} >
                                <div style={{ marginTop: '5px' }}> ชื่อสินค้า </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={20} >
                                <Input placeholder=" " />
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={24} xl={4} >
                                <div style={{ marginTop: '5px' }}> รหัสสินค้า </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={20} >
                                <Input placeholder=" " />
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={24} xl={4} >
                                <div style={{ marginTop: '5px' }}>ประเภทสินค้า</div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={20} >
                                <Cascader options={options} onChange={onChange} placeholder="กรุณาเลือก" style={{ width: '100%' }} />
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={24} xl={4} >
                                <div style={{ marginTop: '5px' }}>รายละเอียดสินค้า</div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={20} >
                                <TextArea rows={4} placeholder="กรุณากรอก" maxLength={6} />
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={24} xl={4} >
                                <div style={{ marginTop: '5px' }}> ราคาสินค้า </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={20} >
                                <Input placeholder=" " />
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={24} xl={4} >
                                <div style={{ marginTop: '5px' }}> จำนวนสินค้า </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={20} style={{ display: 'flex', alignItems: 'center' }}>
                                <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                <div style={{ marginLeft: '30px' }}> เมล็ด </div>
                            </Col>

                        </Row>

                    </div>

                </Col>

            </Row>
        </>

    );
}

export default CreateProduct
