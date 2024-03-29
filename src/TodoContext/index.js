import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext( );

function TodoProvider(props ){
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    } = useLocalStorage('TODOS_V1', []);
  
   const [searchValue, setSearchValue]= React.useState('');

   const [openModal, setOpenModal] = React.useState(false);
  
   const completedTodos = todos.filter(todo=>todo.completed).length;
   const totalTodos = todos.length;
  
   let searchedTodos = [];
  
   if (searchValue.length === 0){
      searchedTodos = [];
    } else{  
      searchedTodos = todos.filter(todo =>{
        const todoText = todo.text.toLocaleLowerCase( );
        const searchText = searchValue.toLocaleLowerCase( );
      return todoText.includes(searchText);
      });
      
    }

    const addTodo = (text)=> {
      const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  
    };

    const completeTodo = (text)=> {
      const todoIndex = todos.findIndex( todo=>todo.text === text );
      const newTodos = [...todos];
    newTodos[ todoIndex ].completed = true;
    saveTodos( newTodos );
  
    };
  
      const deleteTodo= ( text )=> {
      const todoIndex = todos.findIndex( todo=>todo.text === text );
      const newTodos = [...todos];
      newTodos.splice( todoIndex ,1 );
      saveTodos ( newTodos );
    };  
            
  return(
    <TodoContext.Provider value={ {
        loading,  
        error,
        totalTodos,
        completedTodos, 
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo, 
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
        todos,
                       
  } }>
    
    {props.children}

    </TodoContext.Provider>
  );
}


export {TodoContext, TodoProvider};
