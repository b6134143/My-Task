import React from "react";
import { QRCode } from 'antd';
function Contact() {

    return (
        <div>
            <h1><QRCode value="https://ant.design/" size={400} style={{ marginLeft: '500px',marginTop:'100px'}}/></h1>
        </div>
    )
}

export default Contact