import React from 'react';

//import Modal from 'react-modal';
import { Card ,CardContent,CardActions } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';
import Modal from "@material-ui/core/Modal";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


const useStyles =theme => ({
    
    fab: {
        margin: theme.spacing(1),
        backgroundColor: "#018786"
    },
    textField: {
        marginLeft:theme.spacing(1),
      //  variant="outlined",
       // margin="normal",
        
    },
    button:{
        margin:theme.spacing(1),
        
    },
     //modal
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalCard: {
        width: '90%',
        maxWidth: 500,
    },
    modalCardContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    marginTop: {
        marginTop: 2 * theme.spacing.unit,
    },


});

class Add extends React.Component{

    
    constructor(props){

        super(props);
        this.state = {
            userName:'',
            fullName:'',
            area:'',
            address:'',
            phoneNo:'',
            nic:'',
            email:'',
            password:'',
            confirmPassword:'',
            modalOpen:'false'

        };
        
        this.onChange =this.onChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    onChange = (e) => {         // TODO manage all satates using one function 
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);

    }

    onSubmit =(e) =>{
        e.preventDefault();
        const {userName,fullName,area,address,phoneNo,nic,email,password,confirmPassword} = this.state;

        console.log(userName);
        console.log(fullName);
        console.log(area);
        console.log(address);

        this.setState=({
            userName:'',
            fullName:'',
            area:'',
            address:'',
            phoneNo:'',
            nic:'',
            email:'',
            password:'',
            confirmPassword:'',
            modalOpen:'false'

        })
    }
    /*
    onClick = (e) =>{
        this.insertNewSalesRep(this);
    }
    insertNewSalesRep = (e) =>{
        TODO axios
    }
    */
    openModal =(e) =>{
        this.setState({modalOpen:true});

    }
    closeModal = (e) =>{
        this.setState({modalOpen:false});
    }

    render(){
        const { classes }= this.props;
        const {userName,fullName,area,address,phoneNo,nic,email,password,confirmPassword} = this.state;
        return(
            <div>
                <Fab  aria-label="add"  className={classes.fab} onClick={this.openModal}>         { /*Add button to add salesreps  //TODO use react-dom-router link for /salesRep/add} */  }
                    <AddIcon />
                </Fab> 
            <Modal 
                className={classes.modal}
                onClose={this.closeModal}
                open={this.openModal}
            >
        <Card className={classes.modalCard}>
            <form onSubmit={this.onSubmit}>
                <CardContent className={classes.modalCardContent}>
                <TextField
                    id="userName"
                    label="User Name"
                    value={userName}
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                
            
                />
                <TextField
                    id="fullName"
                    label="Full Name"
                    value={fullName}
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    id="address"
                    label="Address"
                    value={address}
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    id="area"
                    label="Area"
                    value={area}
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                
                />
                <TextField
                    id="phoneNo"
                    label="Phone Number"
                    value={phoneNo}
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                
                />
                <TextField
                    id="email"
                    label="Email"
                    value={email}
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                
                />
                <TextField
                    id="nic"
                    label="NIC"
                    value={nic}
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                
                />
                <TextField
                    id="password"
                    label="Password"
                    value={password}
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                    type="password"
                
                />
                <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={this.onChange}
                    className={classes.textField}
                    variant="outlined"
                    margin="normal"
                    type="password"
                
                />
                
                <CardActions>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}  
                >
                Save
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}  
                    onClick={this.closeModal}
                >
                Close
                </Button>
                </CardActions>
                </CardContent>
            </form>
            </Card>
            </Modal>
            </div>
                
        );
    }          // TODO add form using madao or otherwise


    
}
//export default Add;
export default withStyles(useStyles)(Add);