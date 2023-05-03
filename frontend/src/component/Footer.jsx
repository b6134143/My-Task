import React from "react";
import { Layout, Col, Row, Space } from "antd";
import { createFromIconfontCN } from '@ant-design/icons';
const { Footer } = Layout;
function SiteFooter() {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });

    return (
        <div >
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Footer style={{ textAlign: 'center', backgroundColor: '#000000', color: '#FFFFFF', height: '60px', marginTop: '60px', padding: '1px' }}>
                    <h2><Row>
                        <Col span={8}>ข้อมูลบริษัท</Col>
                        <Col span={8}>ช่วยเหลือและสนับสนุน</Col>
                        <Col span={8}>ฝ่ายบริการ</Col>
                    </Row></h2>
                </Footer>
            </Col>
            <Footer style={{ textAlign: 'center', padding: '5px', backgroundColor: '#000000', color: '#FFFFFF' }}>
                <Row>
                    <Col span={8}>การเข้าร่วม</Col>
                    <Col span={8}>การจัดส่ง</Col>
                    <Col span={8}>ติดต่อเรา</Col>
                </Row>
            </Footer>

            <Footer style={{ textAlign: 'center', padding: '5px', backgroundColor: '#000000', color: '#FFFFFF' }}>
                <Row>
                    <Col span={8}>เกี่ยวกับ</Col>
                    <Col span={8}>ส่งคืนสินค้า</Col>
                    <Col span={8}>การชำระเงิน</Col>
                </Row>
            </Footer>

            <Footer style={{ textAlign: 'center', padding: '5px', backgroundColor: '#000000', color: '#FFFFFF' }}>
                <Row>
                    <Col span={8}>ความรับผิดชอบต่อสังคม</Col>
                    <Col span={8}>การสั่งซื้อสินค้า</Col>
                    <Col span={8}>คะแนนโบนัส</Col>
                </Row>
            </Footer>

            <Footer style={{ textAlign: 'center', padding: '5px', backgroundColor: '#000000', color: '#FFFFFF' }}>
                <Row>
                    <Col span={8}>สายอาชีพ</Col>
                    <Col span={8}>คู่มือไซต์</Col>
                    <Col span={8}>
                        <Space>
                            <IconFont type="icon-tuichu" />
                            <IconFont type="icon-facebook" />
                            <IconFont type="icon-twitter" />
                        </Space>
                    </Col>
                </Row>
            </Footer>

            <Footer style={{ textAlign: 'center', padding: '5px', backgroundColor: '#000000', color: '#FFFFFF' }}>
                <Row>
                    <Col span={8}>บล็อกเกอร์แฟชั่น</Col>
                    <Col span={8}>วิธีติดตามสถานะสินค้า</Col>
                </Row>
            </Footer>
        </div>
    )
}
export default SiteFooter