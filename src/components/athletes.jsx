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
        },
            {
                name: "Kalenshi Katebe",
                age: 50,
                city: "Halifax",
                province: "NS",
                country: "Canada",
                id: 10
            }]
    };
    componentDidMount() {

    }

    render(){
        const {athletes} = this.props;
        return (
            <div className="athletes-list">
                <h2>Athletes</h2>
                <br/>
                <table className="table table-bordered table-dark">
                    <thead>
                        <tr className="athletes-list-header">
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>LOCATION</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                    {athletes.map(athlete=>(
                        <AthleteRow key={athlete.pl_id}
                                    athlete={athlete}
                                    onDelete={()=>this.handleDelete(athlete.id)}
                                    onView={()=>this.handleView(athlete.id)}
                        />
                    ))}
                    </tbody>
                </table>

            </div>
        );
    }

    handleDelete = (id) => {
        console.log(id);
    };
    handleView = (id) => {
        console.log(id);
    };
}
export default Athletes;