import { Menu, Dropdown, Space, AutoComplete, Input, Avatar, Image } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import zz1 from './pic/zz1.jpg';
function Navbar() {
    const [clicktoggle, setClicktoggle] = useState(false);
    const togglehem = (element) => {
        element.classList.toggle("change");
        console.log
        let myMenu = document.getElementById('myMenu');
        if (myMenu.className === 'menu-bar') {
            setClicktoggle(true)
            myMenu.className += ' menu-bar-active'
        } else {
            setClicktoggle(false)
            myMenu.className = 'menu-bar';
        }
    }

    return (

        <div className="Navbar">
            <div class='logo' style={{ marginLeft: '15px', color: '#FFD700', marginTop: '0px', fontSize: 20 }}>

                <span >
                    <Image
                        width={80}
                        src={zz1}
                    />
                </span>

            </div>

            <div className="menu-bar" id='myMenu'>

                {!clicktoggle ? (
                    <Menu mode="horizontal" style={{ backgroundColor: '#000000', color: '#ffffff', marginTop: '20px', fontSize: 20 }}>

                        <Menu.Item key="Home" style={{color:'#FFFFFF'}}>
                            <a href='/'>หน้าแรก</a>
                        </Menu.Item>

                        <Menu.Item key="About" style={{color:'#FFFFFF'}}>
                            <a href='/About'>API</a>
                        </Menu.Item>

                        <Menu.Item key="CreateProduct" style={{color:'#FFFFFF'}}>
                            <a href='/CreateProduct'>เพิ่มสินค้า</a>
                        </Menu.Item>

                        <Menu.Item key="Contact" style={{color:'#FFFFFF'}}>
                            <a href='/Contact'>ติดต่อเรา</a>
                        </Menu.Item>

                    </Menu>

                ) : (
                    <Menu mode='vertical' style={{ backgroundColor: '#000000', color: '#ffffff', marginTop: '90px', marginLeft: '-100px', fontSize: '20px' }}>

                        <Menu.Item key="Home" style={{color:'#FFFFFF'}}>
                            <a href='/'>หน้าแรก</a>
                        </Menu.Item>

                        <Menu.Item key="About" style={{color:'#FFFFFF'}}>
                            <a href='/About'>API</a>
                        </Menu.Item>

                        <Menu.Item key="CreateProduct" style={{color:'#FFFFFF'}}>
                            <a href='/CreateProduct'>เพิ่มสินค้า</a>
                        </Menu.Item>

                        <Menu.Item key="Contact" style={{color:'#FFFFFF'}}>
                            <a href='/Contact'>ติดต่อเรา</a>
                        </Menu.Item>

                    </Menu>
                )}

            </div>
            <div className='All-manu'>
            </div>

            < div class="ham-menu" onClick={(e) => togglehem(e.currentTarget)} style={{ marginTop: '25px' }}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div >

        </div>


    );
}
export default Navbar

