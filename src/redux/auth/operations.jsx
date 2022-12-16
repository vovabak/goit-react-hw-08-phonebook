import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const authHeader = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
}


export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {    
    try {
        const response = await axios.post("/users/signup", credentials);
        authHeader.set(response.data.token);
        return response.data;
    } catch (error) {        
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {    
    try {
        const response = await axios.post("/users/login", credentials);
        authHeader.set(response.data.token);
        return response.data;
    } catch (error) {        
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {    
    try {
        await axios.post("/users/logout");
        authHeader.unset();        
    } catch (error) {        
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;    
    if (!token) {        
        return thunkAPI.rejectWithValue('no valid token');
    }

    try {        
        authHeader.set(token);
        const response = await axios.get("/users/current");        
        return response.data;
    } catch (error) {        
        return thunkAPI.rejectWithValue(error.message);
    }
});