import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

export const Userlist = () => {
    // getting the list of data from GlobalState.js
    const { users, deleteData } = useContext(GlobalContext);
    // put the list to the data grid.
    return (
        <ListGroup className="mt-4">
            {users.length > 0 ? (
                <>
                    {users.map(user =>(
                        <ListGroupItem className="d-flex" key={users.id}>
                            <strong>{ user.name }</strong>
                            <div className="ml-auto">
                                <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>Edit</Link>
                                <Button onClick={() => deleteData(user.id)} 
                                color="danger">Delete</Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </>
            ) : 
            (
                <h4 className="text-center">
                    No Data
                </h4>
            )}
            
        </ListGroup>
    )
}
