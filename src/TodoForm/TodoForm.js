import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm( ){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange =(event) =>{
      setNewTodoValue(event.target.value);
       };

   const oncancel =( ) =>{
       setOpenModal( false );
   };

   const onSubmit = (event ) =>{
       event.preventDefault( )
      addTodo( newTodoValue );
      setOpenModal( false);
   };
   return(
      <form onSubmit={ onSubmit }>

            <label>Escribe tu nueva tarea</label>
            <textarea
               value ={ newTodoValue }
               onChange ={ onChange}
             placeholder=""
            />
            <div className="TodoForm-buttonContainer">
              <button type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={ oncancel }>
                    Cancelar
              </button>

              <button type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Añadir
              </button>
            </div>

      </form>
      
      
    );
}

export { TodoForm };