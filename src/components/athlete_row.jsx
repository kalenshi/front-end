import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';

class AthleteRow extends Component {

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
                    <a className="m-2" href="#">DELETE</a>
                </td>
            </tr>
            </Route>
        );
    }
}

export default AthleteRow;