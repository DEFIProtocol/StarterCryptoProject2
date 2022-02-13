import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from './services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10: 25;
  const { data, isFetching } = useGetCryptosQuery(count);
  const cryptos =  data?.data?.coins

  
  if(isFetching) return 'Loading...'
  return (
    <>

      <Row gutter={[32,32]} className ="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg ={6} className ='crypto-card'>
            <Link key={currency.uuid} to = {`/crypto/${currency.uuid}`}>
              <Card 
                title = {`${currency.rank}.${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Price: {millify(currency.marketCap)}</p>
                  <p>Price: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}
export default Cryptocurrencies;
