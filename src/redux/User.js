import { createSlice } from "@reduxjs/toolkit";
const initialState={
    users:[{id:"1",name:"name1",email:"email1"}]
}
export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.users=[...state.users,{id:action.payload.id,name:action.payload.name,email:action.payload.email}]

        },
        remove:(state,action)=>{

            state.users=state.users.filter(ele=>ele.id !==action.payload)
            
        },
        update:(state,action)=>{
            state.users=state.users.map(ele => {
                if(ele.id===action.payload.id){
                    ele.name=action.payload.name
                    ele.email=action.payload.email
                    ele.id=action.payload.id
                }
                return ele
            })
            
        },
    }


})
export const {add,remove,update}=userSlice.actions
export default userSlice.reducer