import React,{Component} from 'react';

class UploadForm extends Component {
    state = {

    };
    render() {
        return (
            <div className="upload-form">
                <h2>Upload Athletes</h2>
                <form className="form-group">
                    <label>File</label>
                    <input className="form-control" type="file" name="file-upload"/>
                    <input className="form-control btn btn-primary" type="submit" name="submit" value="Upload"/>
                </form>
            </div>
        );
    }
}
export default UploadForm;