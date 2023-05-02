import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', 'f826710696mshb67fd82e3ecf232p139c13jsn7acf56ce7d55');
  
        return headers;
      },
    }),
    endpoints: (builder) => ({
     getTracks : builder.query({ query : () => '/charts/track'}),
     getRecomanded: builder.query({ query: () => 'songs/list-recommendations?key=484129036'}),
     getSongDetails: builder.query({ query: (songid) =>`/songs/get-details?key=${songid}`}),
     getSearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}`}),
     getArtistTracks: builder.query({ query: (artistId) => `/artists/get-summary?id=${artistId}`}),
    }),
  });
  

export const { useGetTracksQuery, useGetRecomandedQuery, useGetSearchQuery, useGetArtistTracksQuery, useGetSongDetailsQuery } = shazamApi;










// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://spotify23.p.rapidapi.com/tracks/',
//   params: {ids: '4WNcduiCmDNfmTEz7JvmLv'},
//   headers: {
//     'X-RapidAPI-Key': 'f826710696mshb67fd82e3ecf232p139c13jsn7acf56ce7d55',
//     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });