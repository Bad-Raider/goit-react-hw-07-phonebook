import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://648ffa9f1e6aa71680ca51c7.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;    
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
        
        
    });



export const addContact = createAsyncThunk("contacts/addContact",
    async ({name, number}, thunkAPI) => {
        try {
            const response = await axios.post("/contacts/", { name, number });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);