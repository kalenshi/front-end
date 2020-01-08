import React,{Component} from'react'
import AthleteRow from "./athlete_row";

class Athletes extends Component {
    state = {
        athletes: [{
            name: "Maria Jones",
            age: 27,
            city: "Dartmouth",
            province: "NS",
            country: "Canada",
            id: 5
        }]
    };
    render(){
        const {athletes} = this.state;
        return (
            <div className="athletes-list">
                <h2>Athletes</h2>
                <br/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>LOCATION</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                    {athletes.map(athlete=>(
                        <AthleteRow/>
                    ))}
                    </tbody>
                </table>

            </div>
        );
    }
}
export default Athletes;