import React, {Component} from 'react';
import axios from 'axios';
import {Link,Route} from 'react-router-dom';

class AthleteRow extends Component {
    handleDelete = (id) =>{
        axios.request('http://localhost/kinduct/api/delete/'+id).then(response=>{
            this.props.history.push('/');
        }).catch(error=>{
            console.log(error);
        });
    };
    render() {
        const {first_name,last_name, age, city, province, pl_id} = this.props.athlete;
        const pathname = "/athlete/"+pl_id;
        return (
            <Route>
            <tr>
                <td scope="row">{first_name}{last_name}</td>
                <td scope="row">{age}</td>
                <td scope="row">{city},{province}</td>
                <td scope="row">
                    <Link className="m-2" to={{
                        pathname:pathname
                    }}>VIEW</Link>
                    <Link className="m-2"
                          to={{
                              pathname:pathname
                          }}
                          onClick={(e)=>{e.preventDefault();this.props.onDelete(pl_id)}}
                    >DELETE</Link>
                </td>
            </tr>
            </Route>
        );
    }
}

export default AthleteRow;