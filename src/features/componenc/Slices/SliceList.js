import React from "react";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: 'idle',
    contentList: [
        {text:"Чем мы можем вам помочь?",date:new Date()}
    ]

}
export const list = createSlice({
    name: 'list',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        
        downloadList:(state, action) =>{
            state.contentList.push(action.payload);
        }

    },
    // quantityPlus: (state, action) => {
    //     state.arr.quantityArr = action.payload;
    // }
}
)
export const selectList = (state) => state.list.contentList;
export const { downloadList } = list.actions;
export default list.reducer;

