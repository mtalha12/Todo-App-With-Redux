import React, { Component } from 'react';
import InputComponent from '../Components/InputComponent'
import ShowTodoComponent from '../Components/ShowTodo'
import StoreAction from '../Store/Action/Action';
import { connect } from 'react-redux';
import { runInThisContext } from 'vm';



class Home extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            userWish: '',
            isUpdate: false,
            userId:0
        }
    }
     
    changeHendler = (event) => {
        //  console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    submitClickHandler = (event) => {
        if(this.state.isUpdate === false){
        console.log( this.state)
        const userDetails = this.state;
        //gotoReduxAction
        this.props.addTodo(userDetails)
            this.setState({
                userName : '',
                userWish : '',
            })
        }
        else{
            const {userName,userWish,userId}= this.state;
        this.props.gotoUpdate({userName,userWish,userId})
        this.setState({
            userName : '',
            userWish : '',
            isUpdate:false,
            userId:0
        })
        }
    }

    updateClickHandler = (doUpdate) =>{
        console.log(doUpdate)
        this.setState({
            userName : doUpdate.userName,
            userWish : doUpdate.userWish,
            userId : doUpdate.id,
            isUpdate : true,

        })
    }

    deleteClickHandler = (doDelete) =>{
        this.props.gotoDelete(doDelete)
    }


    render() {
        return (
            <div>
                <ShowTodoComponent 
                    getAllUsersData={this.props.allUsersData}
                    update={this.updateClickHandler}
                   // update={this.submitClickHandler}
                    delete={this.deleteClickHandler}
                />
                <InputComponent
                    changeHendler={this.changeHendler}
                    submitClickHandler={this.submitClickHandler}
                    nameValue= {this.state.userName}
                    wishValue={this.state.userWish}
                    isUpdate={this.state.isUpdate}

                // gotoReducer={this.goesToReducer}
                />

            </div>
        )
    }
}

//Reducer Me Data Save Karta He.
function mapDispatchToProps(dispatch) {
    return {
        addTodo : (userDetails) => dispatch(StoreAction.addTodo(userDetails)),
        gotoUpdate : (doUpdate) => dispatch(StoreAction.updateTodo(doUpdate)),
        gotoDelete : (doDelete) => dispatch(StoreAction.deleteTodo(doDelete)),
    }        
}
//Reducer Se Data Get Karta He.
function mapStateToProps(state) {
    console.log({state});
    return {
        allUsersData : state.addTodo.allUsersDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


