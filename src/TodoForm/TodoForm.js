import React from "react";
import { TodoList } from "../componentes/TodoList";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm( ){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
        todos,
    } = React.useContext(TodoContext);

    const onChange =(event) =>{
      setNewTodoValue(event.target.value);
    
       };

   const oncancel =( ) =>{
       setOpenModal( false );
   }; 
   
   const onSubmit = (event ) =>{
       event.preventDefault( );
       const exists=todos.some(function(todo){
        return   todo.text===newTodoValue;
       })

      if(newTodoValue.length===0){
        alert("Debes agregar una taarea");

      } else if (exists===true){
        alert("Ya tienes ingresada esta tarea");

      } else{
            addTodo( newTodoValue );
            setOpenModal( false);
      }
   }

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
   )
};

export { TodoForm };