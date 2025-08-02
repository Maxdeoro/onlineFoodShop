import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import type { LoginResponse } from "../interfaces/auth.interface";
import { PREFIX } from "../helpers/API";
import axios, { AxiosError } from "axios";
import type { Profile } from "../interfaces/user.interface";
import type { RootStore } from "./store";

export const JWT_PERSISTENT_STATE = 'userData';

export interface UserPersistentState {
    jwt: string | null;
};

export interface UserState {
    jwt: string | null;
    loginErrorMessage?: string;
    profile?: Profile;
    registrationErrorMessage?: string;
};

const initialState: UserState = {
    jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

export const login = createAsyncThunk('user/login', async (params: {email: string, password: string}) => {
    try {
        const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, 
            {email: params.email, password: params.password});
        return data;
    } catch(e) {
        if(e instanceof AxiosError) {
            throw new Error(e.response?.data.message);
        }
    }
});

export const registration = createAsyncThunk('user/register', async (params: {
    email: string, password: string, name: string}) => {
        try {
            const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/register`, 
                {email: params.email, password: params.password, name: params.name}
            );
            return data;
        } catch(e) {
            if(e instanceof AxiosError) {
                throw new Error(e.response?.data.message);
            }
        }
    }
);

export const getProfile = createAsyncThunk<Profile, void, {state: RootStore}>('user/getProfile', async (_, thunkAPI) => {
    const jwt = thunkAPI.getState().user.jwt;
    const { data } = await axios.get<Profile>(`${PREFIX}/user/profile`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
    return data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.jwt = null;
        },
        clearLoginError: (state) => {
            state.loginErrorMessage = undefined;
        },
        clearRegistrationError: (state) => {
            state.registrationErrorMessage = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            if(!action.payload) {
                return;
            }
            state.jwt = action.payload.access_token;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loginErrorMessage = action.error.message;
        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
        });
        builder.addCase(registration.fulfilled, (state, action) => {
            if(!action.payload) {
                return;
            }
            state.jwt = action.payload.access_token;
        });
        builder.addCase(registration.rejected, (state, action) => {
            state.registrationErrorMessage = action.error.message;
        });
    },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;