import React from "react";
import { QRCode, Col, Row } from 'antd';
function Contact() {

    return (
        <div>
            <Row>

                <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                    <QRCode value="https://ant.design/" style={{ marginLeft: '500px', marginTop: '120px', width: 'auto', height: '800px' }} />
                </Col>

            </Row>
        </div>
    )
}

export default Contact