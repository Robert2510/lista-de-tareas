import React from "react";
import { TodoContext} from "../TodoContext";
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from  './TodoList';
import { TodoItem } from './TodoItem';
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from './CreateTodoButton'
import { Modal } from "./Modal/Modal";
import { TodoError } from "./skeletons/TodoError";
import { TodoLoading } from "./skeletons/TodoLoading";
import { EmpatyTodo } from "./skeletons/EmptyTodo";


import './App.css';

function AppUI( ){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    todos,
    
  } = React.useContext(TodoContext);

  const list = searchedTodos.length>0 ? searchedTodos : todos;  
  
  return(
    <React.Fragment>

      <TodoCounter  />

      <TodoSearch />

      <TodoList >
        {error && <TodoError error={ error }/>}
        { loading && <TodoLoading/>}
        {( !loading &&!list.length) && <EmpatyTodo/>}
        
        {list.map (todo =>(
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

      {list.length>0 &&(                  
     <CreateTodoButton
        setOpenModal= {setOpenModal}
        />)}

  </React.Fragment>
   );
 }

export{AppUI};

