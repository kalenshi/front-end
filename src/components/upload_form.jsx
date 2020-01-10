import React,{Component} from 'react';

class UploadForm extends Component {
    state = {
        upload:{},
        uploadError:false
    };
    render() {
        return (
            <div className="upload-form">
                <h2>Upload Athletes</h2>
                <form className="form-group" onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <label>File</label>
                    <input className="form-control" type="file" name="file-upload" onChange={(e)=>{this.getFile(e)}}/>
                    <input className="form-control btn btn-primary" type="submit" value="Upload" />
                    <label className="upload-error">Please Upload a JSON file</label>
                </form>
            </div>
        );
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state.upload);

    };
    getFile = (e) =>{
        const uploadFile = e.target.files;
        let reader = new FileReader()
        reader.readAsText(uploadFile[0], 'utf-8');
        reader.onload = (e) =>{
            let uploadStr = e.target.result;
            try {
                this.setState({upload:JSON.parse(uploadStr)});
            }catch(error){
                this.setState({uploadError:true});
            }
        };

    };
}
export default UploadForm;