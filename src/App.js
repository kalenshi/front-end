import React, {Component} from 'react';
import NavBar from './components/navbar';
import AthleteDetails from './components/athlete_details';
import AthleteRow from './components/athlete_row';
import Athletes from "./components/athletes";
import UploadForm from './components/upload_form';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <AthleteDetails />
                <UploadForm />
                <AthleteRow/>
            <br/>
            <Athletes/>
            </React.Fragment>
    );

    }
}

export default App;
