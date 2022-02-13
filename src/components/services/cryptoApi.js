import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {

};
const createRequest = (url) => ({url, headers: cryptoApiHeaders});
const baseUrl = ('https://coinranking1.p.rapidapi.com')

const coinId = ('Qwsogvtv82FCd+bitcoin-btc', 'razxDUgYGNAdQ+ethereum-eth', 'zNZHO_Sjf+solana-sol')

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest( 
                `/coins?limit=${count}`)
            }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
        })
        }),
    })


export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;
