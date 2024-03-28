import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const crudslice = createSlice({
  name: "crudslice",
  initialState: {
    userlist: [],
  },
  reducers: {
    setuser: (state, action) => {
        state.userlist=action.payload
        console.log(state.userlist)
        return state;
    },
    adduser: (state, action) => {
        state.userlist=[...state.userlist,action.payload]
        return state;
    },
    edituser: (state, action) => {
      console.log("length",state.userlist.length)
      console.log(action.payload)
      console.log(state.userlist)
      const updatedlist = action.payload
      
      let index = state.userlist.findIndex((user)=>user.id===updatedlist.id)
      if(index!=-1){
        state.userlist[index]=updatedlist
      }
      console.log("index",index)
      console.log(action.payload.id)
      return state;
    },
    deleteuser: (state, action) => {
      const newlist = state.userlist.filter((item)=>item.id!==action.payload.id)
      state.userlist=newlist
      return state
    },
  },
});

export const { setuser, adduser, edituser, deleteuser } = crudslice.actions;


// {
//     name: "ragunath",
//     email: "123@gmail.com",
//     phonenumber: "123456789",
//     address: "Adressesssssssssssssssssssssssssssssssssssssssssssssss",
//     website: "www.google.com",
//     company: "trek",
//   },
//   {
//     name: "ragunath",
//     email: "123@gmail.com",
//     phonenumber: "123456789",
//     address: "Adressesssssssssssssssssssssssssssssssssssssssssssssss",
//     website: "www.google.com",
//     company: "trek",
//   },
//   {
//     name: "ragunath",
//     email: "123@gmail.com",
//     phonenumber: "123456789",
//     address: "Adressesssssssssssssssssssssssssssssssssssssssssssssss",
//     website: "www.google.com",
//     company: "trek",
//   },