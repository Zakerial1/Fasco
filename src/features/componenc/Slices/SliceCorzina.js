import React from "react";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: 'idle',
    itemCorzina: []

}
export const corzina = createSlice({
    name: 'corzina',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        size: (state, action) => {
            let element = state.itemCorzina.findIndex((item) => { return item.id == action.payload.id })
        if (state.itemCorzina[element] == undefined) {
                state.itemCorzina.push(action.payload);
                return ;
            }
            if (state.itemCorzina[element].color == action.payload.color && state.itemCorzina[element].size == action.payload.size) {
                state.itemCorzina[element].quantityArr += action.payload.quantityArr;
                return;
            }
            state.itemCorzina.push(action.payload);

        },
        colorSelect: (state, action) => {
            state.itemCorzina.color = action.payload;
        },
        deletItem: (state, action) => {
            // state.itemCorzina += action.payload;
            // state.itemCorzina.splice(action.payload)
            console.log(state.itemCorzina);
            state.itemCorzina = state.itemCorzina.filter((item,index)=>{
                return index !== action.payload;
            })
            console.log(action.payload);
        },
        quantityPlus: (state, action) => {
            state.itemCorzina[action.payload.index].quantityArr += action.payload.quantityArr;
        },
        quantityMinus:(state, action) =>{
            if (state.itemCorzina[action.payload.index].quantityArr<1) {
                return
            }
            state.itemCorzina[action.payload.index].quantityArr -= action.payload.quantityArr;
        }
    },
    // quantityPlus: (state, action) => {
    //     state.arr.quantityArr = action.payload;
    // }
}
)
export const selectItemCorzina = (state) => state.corzina.itemCorzina;
export const { additionItem, size, colorSelect, deletItem, quantityPlus,quantityMinus } = corzina.actions;
export default corzina.reducer;

