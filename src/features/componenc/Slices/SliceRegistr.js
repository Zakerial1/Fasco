import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: 0,
    status: 'idle',
    arrUser: [{ Passwort: '123', First_Name: '', Last_Name: '', email: '123', Phone_Number: '', id: '',imgUserIcon: 'https://i.imgur.com/fwWAahU.jpg' }],
    currentUser: { Passwort: '', First_Name: '', Last_Name: '', email: '', Phone_Number: '', id: '', imgUserIcon: 'https://i.imgur.com/fwWAahU.jpg' },
    autorizac:(false)
}
// export const incrementAsync = createAsyncThunk(
//     'counter/fetchCount',
//     async (amount) => {
//         const response = await axios.post('https://api.imgur.com/3/image', {
//             //...data
//         }, {
//             headers: {
//                 'Authorization': `Basic ${token}`
//             }
//         });
//         // The value we return becomes the `fulfilled` action payload
//         return response.data;
//     }
// );
export const autorization = createSlice({
    name: 'autorization',
    initialState,
    reducers: {
        addUser: (state, action) => {
            for (const iterator of state.arrUser) {
                if (iterator.email !== action.payload.email || iterator.Passwort !== action.payload.password) {
                    state.arrUser.push(action.payload);
                    state.currentUser = action.payload;
                    state.autorizac = true;
                    localStorage.setItem("user",JSON.stringify(state.currentUser));
                    break
                }
            }
        },
        login: (state, action) => {
            for (const iterator of state.arrUser) {
                if (iterator.email == action.payload.email || iterator.Passwort == action.payload.password) {
                    state.currentUser = iterator;
                    localStorage.setItem("user",JSON.stringify(iterator));
                    state.autorizac = true;
                    break
                }
            }
        },
        newLogin: (state, action) => {
            state.currentUser = action.payload;
            state.autorizac = true;
        },
        deleteUser:(state, action) =>{
            state.currentUser = '';
            state.autorizac = false;
            localStorage.setItem("user",'')
        }
    }
})

export const selectCurrentUser = (state) => state.autorization.currentUser;
export const selectarrUser = (state) => state.autorization.arrUser;
export const selectAutorizUser = (state) => state.autorization.autorizac;
export const { addUser, login, newLogin,deleteUser } = autorization.actions;
export default autorization.reducer;