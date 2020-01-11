import React,{Component} from'react'
import AthleteRow from "./athlete_row";

class Athletes extends Component {
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
                                    {...this.props}
                                    onDelete={this.props.onDelete}
                                    onView={()=>this.handleView(athlete.id)}
                        />
                    ))}
                    </tbody>
                </table>

            </div>
        );
    }


}
export default Athletes;