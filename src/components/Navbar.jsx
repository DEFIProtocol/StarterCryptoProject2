import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { SettingOutlined, AppstoreOutlined, HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import icon from '../images/cryptocurrency.png';

const { SubMenu } = Menu;

const handleClick = (e) => {
    console.log('click', e);
}

const Navbar = () => {
    const [ activeMenu, setActiveMenu ] = useState(true);
    const [screenSize, setScreenSize ] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();
    },[])

    useEffect (() => {
        if(screenSize < 760) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])

  return (
    <div className = "nav-container">
      <div className = "logo-container">
        <Avatar src = {icon} size="large"/>
        <Typography.Title level={2} className ="logo">
            <Link to="/">DAO Exchange</Link>
        </Typography.Title>
        <Button className ="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
            <MenuOutlined />
        </Button>
    </div>
    {activeMenu && (
    <Menu theme = "dark">

        <Menu.Item icon ={<HomeOutlined />}>
            <Link to ="/">Home</Link>
        </Menu.Item>

        <Menu.Item icon ={<MenuOutlined />}>
            <Link to ="/Cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>

        <SubMenu icon ={<AppstoreOutlined />} title ="About">
            <Menu.Item>
                <Link  to ="/contracts">Contracts</Link>
            </Menu.Item>
            <Menu.Item>
                <Link  to ="/Dao-Ex">Dao-Ex</Link>
            </Menu.Item>
        </SubMenu>

        <SubMenu icon ={<FundOutlined />} title= "Crypto Markets">
            <SubMenu key="Bitcoin" title ="Bitcoin">
                <Menu.Item title="bitcoin">
                    <Link to ="/btcDao">DAO</Link>
                </Menu.Item>
                <Menu.Item key="bitcoinStartup"> 
                    <Link to ="/btcStartups">Startups</Link>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="Ethereum" title = "Ethereum">
                <Menu.Item title="Ethereum">
                    <Link to ="/ethDao">DAO</Link>
                </Menu.Item>
                <Menu.Item key="ethereumStartup"> 
                    <Link to ="/ethStartups">Startups</Link>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="Solana" title ="Solana">
                <Menu.Item title="solana">
                    <Link to ="/solDao">DAO</Link>
                </Menu.Item>
                <Menu.Item key="solStartup"> 
                    <Link to ="/solStartups">Startups</Link>
                </Menu.Item>
            </SubMenu>
        </SubMenu>
        
        <SubMenu icon ={<MoneyCollectOutlined />} title="Crypto Exchange Rate">
            <Menu.Item>
                <Link to = "/crypto/Qwsogvtv82FCd">Bitcoin</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to = "/crypto/razxDUgYGNAdQ">Ethereum</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to = "/crypto/zNZHO_Sjf">Solana</Link>
            </Menu.Item>
        </SubMenu>

        <Menu.Item icon ={<BulbOutlined />} title ="News">
            <Link to ="/news">News</Link>
        </Menu.Item>

        <Menu.Item icon ={<SettingOutlined />} title ="Settings">
            <Link to ="/settings">Settings</Link>
        </Menu.Item>   

        <Button className ="login-button">
            <Link to = '/Login'>
            Login
            </Link>
        </Button>
        <Button className ="register-button">
            <Link to = '/Register'>
            Register
            </Link>
        </Button>
    </Menu>
    )}
  </div>
  )
};

export default Navbar;
