import { createStore } from 'redux';
import { combineReducers } from 'redux';
import addTodo from './Reducer/Reducer'

const rootReducer = combineReducers({
    addTodo
})


const store = createStore(rootReducer);

store.subscribe(()=> {
    // console.log(store.getState())
})

export default store