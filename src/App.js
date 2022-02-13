import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import { Navbar, Cryptocurrencies, Login, Register, Homepage, News, CryptoDetails } from './components'
import './App.css'

const App = () => {
  return ( 
    <div className = "app">
        <div className = "navbar">
            <Navbar />
        </div>
        <div className = "main">
            <Layout>
                <div className = "routes">
                <Routes>
                        <Route path ="/" element = {<Homepage />} />                  
                        <Route exact path ="/cryptocurrencies" element = {<Cryptocurrencies />} />
                        <Route exact path ="/news" element = {<News />} />
                        <Route exact path="/crypto/:coinId" element ={<CryptoDetails />} />
                        <Route exact path="/Login" element ={<Login />} />
                        <Route exact path="/Register" element ={<Register />} />

                    </Routes>
                </div> 
            </Layout>
        <div className = "footer" level = {5} style={{ color: 'white', textAlign: 'center'}}>
            <Typography.Title style={{ color: 'white'}}>
                Dao Exchange <br />
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to = "/">Home</Link>
                <Link to = "/news">News</Link>
            </Space>
            </div>
        </div>         
    </div>
  )
};

export default App;
