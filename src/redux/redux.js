import { todo } from "node:test";
import React from "react"


//1. STAN
const defaultState = {
    todos: [],
    example: {isChanged: false }
};


//2. AKCJE

const exampleAction = {
    type: "TYP_AKCJI",
    payload: {} //opcjonalnie
}

// 3.zgrupowanie akcji i dodanie do jednej stalej zeby bylo latwiej korzystac

const todosActionsTypes = {
    ADD: "ADD",
    DELETE: "DELETE",
    REMOVE_ALL: "REMOVE_ALL",
    UPDATE: "UPDATE"
};

//4.korzystanie ze stalej wyzej

const addActionExample = {
    type: todosActionsTypes.ADD,
    payload: {}
};

//5. action creator

const addTodo = (message) => ({
    type: todosActionsTypes.ADD,
    payload: {id: Date.now(), message}
});

// 6. korzystanie addTodo("cos do zrobienia")

const deleteTodo = (id) => ({
    type: todosActionsTypes.DELETE,
    payload: id
});

const updateTodo = (id, message) => ({
    type: todosActionsTypes.UPDATE,
    payload: {id: Date.now(), message}
});

const removeAllTodo = () => ({
    type: todosActionsTypes.REMOVE_ALL
});

//7. REDUCER bierze akcje i robi cos z nia i zwraca nowy stan

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case todosActionsTypes.ADD:
            return {...state, todos: [...state.todos, action.payload] };
        case todosActionsTypes.DELETE:
            const filteredTodos = state.todos.filter(
                ({id}) => id !== action.payload)
            return {...state, todos: filteredTodos};
        case todosActionsTypes.UPDATE:
            const todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id){
                    return {
                        ...todo,
                        message: action.payload.message
                    }
                }
                return todo
            });
            return {...state, todos};
        case todosActionsTypes.REMOVE_ALL:
            return {...state, todos: []};
            default:
            return state    
    }
};

const store = createStore(reducer);

console.log(getState());

// 8 dispatch

store.dispatch({
    type: "ADD",
    payload:{id: 1, message: "cos do zrobienia"}
});

//uzywajac kreatora akcji
store.dispatch(addTodo("Cos do zrobienia z kreatorem akcji"))