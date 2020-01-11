import React, {Component} from 'react';

class AthleteDetails extends Component {

    render() {
        const id2 = this.props.match.params.pl_id;
        const {first_name,last_name,age,city,province,country,pl_id} =
            this.props.athletes.filter(athlete=>athlete.pl_id===id2)[0];
        return (
            <div className="athlete-detail">
                <h2>{first_name} {last_name}</h2>
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
                <button onClick={()=>{this.props.onDelete(pl_id);this.props.history.push('/');}} className="btn btn-primary ">Delete</button>

            </div>
        );
    }

}

export default AthleteDetails;