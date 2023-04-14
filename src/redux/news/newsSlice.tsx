import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { axios } from '../axiosInstance';
import axios from 'axios'
import { Config } from '../../../config';
interface INewsState {
    isLoading: boolean,
    error: any,
    newsListData: any[],
    searchNewsData: any,
    newsMessage: string
}


export const initialState: INewsState = {
    isLoading: false,
    error: null,
    newsListData: [],
    searchNewsData:[],
    newsMessage: ""
}

export const onNewsList = createAsyncThunk('news/onNewsList', async () => {
    try {
        const newsCountry= localStorage.getItem(`country_code`) ?? "gb" ;
        const response = await axios.get(`${Config.BACKEND_URL}?country=${newsCountry}&apiKey=${Config.API_KEY}`)
        return response;
    } catch (err) {
        console.log(err);
        throw err
    }
})

export const searchNews = createAsyncThunk('news/searchNews', async (data:any) => {

    try {
        const newsCountry= localStorage.getItem(`country_code`) ?? "gb" 

        const response = await axios.get(`${Config.BACKEND_URL}?country=${newsCountry}&apiKey=${Config.API_KEY}&q=${data}`)
        return response;
    } catch (err) {
        return err
    }
})
// export const getNews = createAsyncThunk('news/getNews',async()=>{
//     const newsCountry= localStorage.getItem(`country_code`) ?? "gb" ;
//     const response = await axios.get(`${process.env.BACKEND_URL}?country=${newsCountry}&apiKey=${process.env.API_KEY}`)
//         return response;
// })



export const newsSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        resetNewsSlice:(state)=>{
            state.newsMessage = "";
            state.error = "";
            state.searchNewsData= null
        },
    },
    extraReducers: (builder) => {
        builder.addCase(onNewsList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            state.newsMessage = "";
        });
        builder.addCase(onNewsList.fulfilled, (state, { payload }: any) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.newsListData = payload?.data;
            state.newsMessage = "";
        });
        builder.addCase(onNewsList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action?.error?.message;
            state.newsMessage = "";
        });
        builder.addCase(searchNews.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(searchNews.fulfilled, (state, { payload }: any) => {
            state.isLoading = false;
            state.error = payload?.data?.error;
            state.searchNewsData = payload?.data;
        });
        builder.addCase(searchNews.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action?.error?.message;
        });

    }

})
export const { resetNewsSlice } = newsSlice.actions
export default newsSlice.reducer;