import React,{Component} from 'react';
import axios from 'axios';
class UploadForm extends Component {
    state = {
        upload:{},
        uploadError:false
    };
    render() {
        return (
            <div className="upload-form">
                <h2>Upload Athletes</h2>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <label>File</label>
                    <input className="form-control" required type="file" name="file-upload" onChange={(e)=>{this.getFile(e)}}/>
                    <input className="form-control btn btn-primary" type="submit" value="Upload" />
                    <label className="upload-error">Please Upload a JSON file</label>
                </form>
            </div>
        );
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const data = this.state.upload;
        const url = "http://localhost/kinduct/api/load";
        axios.request({
            method: 'POST',
            data:data,
            url: url,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }

        }).then(result=>{
            console.log(result.data);
        }).catch(error=>{
            console.log(error);
        });

    };
    getFile = (e) =>{
        const uploadFile = e.target.files;
        let reader = new FileReader()
        reader.readAsText(uploadFile[0], 'utf-8');
        reader.onload = (e) =>{
            let uploadStr = e.target.result;
            try {
                const data = JSON.parse(uploadStr);
                this.setState({upload:data});
            }catch(error){
                this.setState({uploadError:true});
            }
        };

    };
}
export default UploadForm;