import React, {Component} from 'react';
import NavBar from './components/navbar';
import AthleteDetails from './components/athlete_details';
import Athletes from "./components/athletes";
import UploadForm from './components/upload_form';
import axios from 'axios';
import {Route} from 'react-router-dom';

class App extends Component {
    state = {
        athletes: []
    };

    componentDidMount() {
        axios.get("http://localhost/kinduct/athletes",)
            .then((response)=>{
                this.setState({athletes: response.data});

            })
            .catch(
                (error)=>{
                   console.log(error);
                }
            );

    }

    render() {
        return (
            <React.Fragment>
                    <NavBar />
                    <div className="container">
                        <Route path="/" exact render={(props)=><Athletes athletes={ this.state.athletes} {...props}/>}/>
                        <Route path="/athlete/:pl_id" render={(props)=>
                        <AthleteDetails onDelete={this.handleDelete} athletes={ this.state.athletes} {...props}/>}/>
                        <Route path="/upload"  component={UploadForm}/>
                    </div>
            </React.Fragment>
    );

    }
    handleDelete = (id)=> {
        const athlete =
            this.state.athletes.filter(athlete=>athlete.pl_id===id)[0];
        console.log("Some ID",athlete);
    };
}

export default App;
