import React from 'react';
import { Image, Input, Col, Row, Divider, Select, Space, Button, Upload, Cascader, InputNumber } from 'antd';
<Input placeholder="Basic usage" />;
import { UploadOutlined } from '@ant-design/icons';
import b6 from './pic/b6.jpg';
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
        <div>
            <Row>
                <Col span={12}><Image style={{ marginTop: '100px', marginLeft: '160px' }}
                    width={350}
                    src={b6}
                />
                    <Row style={{ marginTop: '37px', marginLeft: '300px' }}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Row>
                </Col>

                <Col span={12}>
                    <div style={{ display: 'flex', marginTop: '120px', alignItems: 'center' }}>
                        <p style={{ marginRight: '80px' }}>ชื่อสินค้า</p><Input placeholder=" " style={{ width: 400 }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
                        <p style={{ marginRight: '74px' }}>รหัสสินค้า</p><Input placeholder=" " style={{ width: 400 }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
                        <p style={{ marginRight: '55px' }}>ประเภทสินค้า</p><Cascader options={options} onChange={onChange} placeholder="กรุณาเลือก" />
                    </div>
                    <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
                        <p style={{ marginRight: '33px' }}>รายละเอียดสินค้า</p><TextArea style={{ width: 400 }} rows={4} placeholder="กรุณากรอก" maxLength={6} />
                    </div>
                    <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
                        <p style={{ marginRight: '70px' }}>ราคาสินค้า</p><Input placeholder=" " style={{ width: 400 }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
                        <p style={{ marginRight: '60px' }}>จำนวนสินค้า</p><InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                        <p style={{ marginLeft: '30px' }}>ตัว</p>
                    </div>
                    <Row>
                        <Col span={5}><Button type="primary" size={10} style={{ background: '#000000', Color: '#FFFFFF', marginLeft: '380px', marginTop: '20px' }}>
                            เพิ่มสินค้า
                        </Button></Col>
                        <Col span={5}><Button size={10} style={{ background: '#FFFFFF', Color: '#000000', marginLeft: '325px', marginTop: '20px' }}>
                            ล้าง
                        </Button></Col>
                    </Row>
                </Col>
            </Row>
        </div>

    );
}

export default CreateProduct