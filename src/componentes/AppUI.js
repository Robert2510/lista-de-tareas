import React from "react";
import { TodoContext} from "../TodoContext";
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from  './TodoList';
import { TodoItem } from './TodoItem';
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from './CreateTodoButton'
import { Modal } from "./Modal/Modal";


//import './App.css';

function AppUI( ){
    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);

    return(
      <React.Fragment>
        <TodoCounter  />
        <TodoSearch />

        <TodoList >
          {error && <p>Se produjo un error...</p>}
          { loading && <p>Estamos cargando la página</p>}
          {( !loading && !searchedTodos.length) && <p>Crea tu tarea</p>}

          {searchedTodos.map (todo =>(
        <TodoItem
            key = {todo.text}
            text={todo.text} 
            completed={todo.completed}
            onCompleted = {( )=>completeTodo(todo.text)}
            onDelete = {( )=>deleteTodo(todo.text)}
          />
      )) }
          </TodoList>

         {!!openModal &&(
           <Modal>
            <TodoForm/>

         </Modal>
         )}
                              
          <CreateTodoButton 
          setOpenModal= {setOpenModal}
          />

  </React.Fragment>
   );
 }

export{AppUI};