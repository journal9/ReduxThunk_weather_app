import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState={
    'data':{
        'time':"",
        'temp':"",
        'humidity':"",
        // 'wind_kph':"",
        // 'condition':"",
        // 'name':"",
        // 'region':"",
        // 'country':""
    },
    'loading':false,
    'error':''
}

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const fetchWeather = createAsyncThunk('weather/details',(searchText)=>{
    return axios.get(`http://api.weatherapi.com/v1/current.json?key=237a285efb7c4011a55194530230910&q=${searchText}&aqi=no`)
    .then((response)=>response.data)
})

const weatherSlice = createSlice({
    name:'weather',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchWeather.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchWeather.fulfilled,(state,action)=>{
            state.data.time=action.payload.location.localtime
            state.data.temp=action.payload.current.feelslike_c
            state.data.humidity=action.payload.current.humidity
        })
        builder.addCase(fetchWeather.rejected,(state,action)=>{
            state.loading=false
            state.data={}
            state.error = action.error.message
        })
    }
    
})

export default weatherSlice.reducer;