import { createSlice } from "@reduxjs/toolkit";
const initialState={
    users:[{name:"redux",email:"toolkit"}]
}
export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.users=[...state.users,{id:action.payload.id,name:action.payload.name}]

        },
        remove:(state,action)=>{

            state.users=state.users.filter(ele=>ele.id !==action.payload)
            
        },
        update:(state,action)=>{
            state.users=state.users.map(ele => {
                if(ele.id===action.payload.id){
                    ele.name=action.payload.name
                    ele.id=action.payload.id
                }
                return ele
            })
            
        },
        get:(state,action)=>{
            
        }
    }


})
export const {add,remove,update}=userSlice.actions
export default userSlice.reducer