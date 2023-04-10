import React from "react";
import './EmpatyTodo.css';
import { TodoContext } from "../../TodoContext";

function EmpatyTodo( ){
    const {openModal,setOpenModal}= React.useContext(TodoContext);
  
    const onClickButton = ( )=>{
      setOpenModal (!openModal);      
    };
    return (
        <bottom className="EmpatyTodo"
            onClick={onClickButton}>

            <p>Crea tu primer tarea</p>

        </bottom>
                
    )
}

export { EmpatyTodo };