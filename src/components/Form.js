
import React,{useState,useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";
import {FirebaseConteaxt} from "../context/firebase/firebaseContext";


export const Form = () => {

    const [value, setValue] = useState("");
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseConteaxt);


    const submitHandler = (event) => {
        event.preventDefault();
        
        if(value.trim()){
            firebase.addNote(value.trim()).then( () => {
                alert.show("Todo is created", "success")
            }).catch(() => {
                alert.show("Something goes wrong","danger")
            })
            alert.show("Todo is created", "success");
            setValue("")
        }else{
            alert.show("Write the title of todo")
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                  type='text'
                  className='form-control'
                  placeholder='Write title of todo'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}/>
            </div>
        </form>
    )
}