import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: 'idle',
    commentArr: []
    
}
export const comment = createSlice({
    name: 'comment',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        createComment:(state,action)=>{
            state.commentArr.text = (action.payload);
        },
        commentName:(state,action)=>{
            state.commentArr.push(action.payload);
        }
        
    }
})

 export const createComments = (state) => state.comment.commentArr;
export const {createComment,commentName} = comment.actions;
export default comment.reducer;