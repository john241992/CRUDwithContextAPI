import React, {useState, useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const EditUser = (props) => {
    //--> function stating default value for id & name
    const [ selectedUser, setSelectedUser ] = useState({
        id: '',
        name: ''
    });
    //--> Action from GlobalContext
    const { users, editUser } = useContext(GlobalContext);
    const history = useHistory();
    //--> Getting the id from URL Param
    const currentUserID = props.match.params.id;

    useEffect(() =>{
        const userID = currentUserID;
        //--> getting 
        const selectedUser = users.find(user => user.id === Number(userID));
        setSelectedUser(selectedUser)
    },[currentUserID, users])

    const onSubmit = () => {
        editUser(selectedUser)
       
        history.push('/');
    }
    //--> setting value from textbox
    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" value={selectedUser} onChange={onChange} placeholder="Enter your name"></Input>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
