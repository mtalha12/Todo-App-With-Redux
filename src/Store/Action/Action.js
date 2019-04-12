import ActionTypes from './ActionTypes';

class StoreAction {
    static addTodo(value){
        return {type:ActionTypes.ADD_TODO, payload:value}
    }
    static updateTodo(value){
        return {type:ActionTypes.UPDATE_TODO, payload:value}
    }
    static deleteTodo(value){
        return {type:ActionTypes.DELETE_TODO, payload:value}
    }
}
export default StoreAction