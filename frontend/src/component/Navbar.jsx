import { Menu, Dropdown, Space, AutoComplete, Input, Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
function Navbar() {

    return (

        <div className="Navbar">

            <Menu mode="horizontal" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>

                <Avatar size={45} icon={<UserOutlined />} style={{ marginLeft: '20px' }} />

                <Menu.Item key="Home">
                    <a href='/'>หน้าแรก</a>
                </Menu.Item>

                <Menu.Item key="About">
                    <a href='/About'>API</a>
                </Menu.Item>

                <Menu.Item key="CreateProduct">
                    <a href='/CreateProduct'>เพิ่มสินค้า</a>
                </Menu.Item>

                <Menu.Item key="Contact">
                    <a href='/Contact'>ติดต่อเรา</a>
                </Menu.Item>

            </Menu>
        </div>


    );
}
export default Navbar