import "./App.css";
import Button from "@mui/material/Button";
import { useSelector,useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import {add,remove,update} from "./redux/User"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
function App() {
  const [newUser, setNewUser] = useState({id:"", name: ""});
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const { users } = useSelector((state) => state.user);
  const dispatch=useDispatch()
  console.log(users);
  return (
    <div className="App">
      <form>
        <TextField
          label="Enter name"
          variant="standard"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <TextField
          label="Enter email"
          variant="standard"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />

        <br></br>
        <Button id="addUser" onClick={()=>{
          if(!id ||! name){
            return 

          }
          dispatch(add({id:id,name:name}))
          setName("")
          setId("")

        }}>Add User</Button>
      </form>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            {/* <TableCell align="right">Email</TableCell> */}
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((ele, index) => {
            return (
              <>
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                   <TableCell align="center">{index+1}</TableCell>
                  <TableCell component="th" scope="row">
                    {ele.name}
                  </TableCell>
                 
                  <TableCell align="right">

                  <Button onClick={() =>dispatch(remove(ele.id))}> <DeleteOutlineIcon />
                
                  </Button>
                  <Button onClick={() =>dispatch(update({id:ele.id,name:"update"}))}> <ModeEditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
