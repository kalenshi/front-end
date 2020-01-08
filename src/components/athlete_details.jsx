import React, {Component} from 'react';

class AthleteDetails extends Component {
    state = {
        athlete: {
            name:"Maria Jones",
            age:27,
            city:"Dartmouth",
            province:"NS",
            country:"Canada",
            id:5
        }
    };

    render() {
        const {name,age,city,province,country,id} =this.state.athlete;
        return (
            <div className="athlete-detail">
                <h2>{name}</h2>
                <br/>
                <table className="table table-bordered table-dark">
                    <tbody>
                    <tr>
                        <th scope="row">AGE</th>
                        <td scope="row">{age}</td>
                    </tr>
                    <tr>
                        <th>CITY</th>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <th>PROVINCE</th>
                        <td>{province}</td>
                    </tr>
                    <tr>
                        <th>COUNTRY</th>
                        <td>{country}</td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={(e)=>this.handleDelete(id)} className="btn btn-primary ">Delete</button>

            </div>
        );
    }
    handleDelete = (id)=> {
        console.log(id);
    };

}

export default AthleteDetails;