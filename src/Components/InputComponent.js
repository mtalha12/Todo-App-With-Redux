import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    button: {
        margin : '18px',
        width : '150px',
        height : '50px'
    },
    mainDiv : { 
        justifyContant : 'right',
        // border : '1px solid red'
    },
    second : {
        justifyContant : 'center',
        // width : '50%',
        // padding : '30px',
        // border : '1px solid yellow',
    }
  
  });   

class InputComponent extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.mainDiv}>
            <div className={classes.second}>
                 <TextField
          id="name"
          label="Your Name"
          className={classes.textField}
          type="text"
          name="userName"
          onChange={this.props.changeHendler}
          value={this.props.nameValue}
          margin="normal"
          variant="outlined"
          placeholder="Please Enter"
        />
                <TextField
          id="wish"
          label="Your Best Wish"
          className={classes.textField}
          type="text"
          name="userWish"
          onChange={this.props.changeHendler}
          value={this.props.wishValue}
          margin="normal"
          variant="outlined"
          placeholder= "Please Enter"
        />
         <Button 
          type='Button' 
          onClick={this.props.submitClickHandler}
          variant="contained" 
          color="primary" 
          className={classes.button}>
          {this.props.isUpdate ? 'Update' : 'Add'}
         </Button>
            </div>
            </div>
        )
    }



}
export default withStyles(styles)(InputComponent)








 
