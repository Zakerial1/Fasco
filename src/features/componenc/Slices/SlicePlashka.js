import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: 0,
    status: 'idle',
    page: 1,
    MinMax: {
        min: -1,
        max: -1
    },
    arr: ([{ name: 'Красная Шляпа', cost: 80, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Minimog', id: 1, color: "Red", size: 'M', quantityArr: 1 },
    { name: 'Платье', cost: 50, img: 'https://i.imgur.com/9vcp2n7.png', date: "", reiting: 0, brands: 'Minimog', id: 2, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Блузка', cost: 30, img: 'https://i.imgur.com/RRpDcrQ.png', date: "", reiting: 0, brands: 'Minimog', id: 3, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Юбка', cost: 40, img: 'https://i.imgur.com/TVEhwrI.png', date: "", reiting: 0, brands: 'Minimog', id: 4, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Джинсы', cost: 45, img: 'https://i.imgur.com/sQTZT7a.png', date: "", reiting: 0, brands: 'Retrolie', id: 5, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Пальто', cost: 80, img: 'https://i.imgur.com/9JeZcXT.png', date: "", reiting: 0, brands: 'Retrolie', id: 6, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Пиджак', cost: 35, img: 'https://i.imgur.com/rE87mKB.png', date: "", reiting: 0, brands: 'Retrolie', id: 7, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Брюки', cost: 55, img: 'https://i.imgur.com/Sqiu4ng.png', date: "", reiting: 0, brands: 'Retrolie', id: 8, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Топ', cost: 25, img: 'https://i.imgur.com/scqbcbC.png', date: "", reiting: 0, brands: 'Brook', id: 9, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Платье с блестками', cost: 120, img: 'https://i.imgur.com/gRAI1YC.png', date: "", reiting: 0, brands: 'Brook', id: 10, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Шорты', cost: 25, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Brook', id: 11, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Футболка', cost: 15, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Brook', id: 12, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Кеды', cost: 60, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Learts', id: 13, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Рубашка', cost: 45, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Learts', id: 14, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Пуховик', cost: 100, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Learts', id: 15, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Свитшот', cost: 40, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Learts', id: 16, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Спортивные штаны', cost: 50, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Vagabond', id: 17, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Туфли на каблуке', cost: 75, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Vagabond', id: 18, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Куртка', cost: 90, img: 'https://i.imgur.com/VlgXBs8.png', date: "", reiting: 0, brands: 'Vagabond', id: 19, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Сумка', cost: 60, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Abby', id: 20, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Шапка', cost: 20, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Abby', id: 21, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' },
    { name: 'Рюкзак', cost: 70, img: 'https://i.imgur.com/mAcLcc1.png', date: "", reiting: 0, brands: 'Abby', id: 22, color: ["#8DB4D2", "FF6C6C", " #FFD1DC"], size: 'M' }
    ]),
    Brands: 'All'
}
export const filter = createSlice({
    name: 'filtr',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        filtrMinCost: (state, action) => {
            state.MinMax.min = action.payload;
            console.log(action.payload)
        },
        filtrMaxCost: (state, action) => {
            state.MinMax.max = action.payload;
            console.log(action.payload)
        },
        filtrBrands: (state, action) => {
            state.Brands = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    }
})
export const { filtrMinCost, filtrMaxCost, filtrBrands, setPage } = filter.actions;
export const selectArr = (state) => state.filtr.arr;
export const selectMinMax = (state) => state.filtr.MinMax;
export const selectBrands = (state) => state.filtr.Brands;
export const selectPage = (state) => state.filtr.page;
export default filter.reducer;