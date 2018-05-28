import * as React from "react";
import config from "../../../config";

interface Props {
    accountId: string
    isAdmin?: boolean
    isPatient?: boolean
    isDoctor?: boolean
    self ?: boolean
}

export default class ImageComponentWithUpload extends React.Component<Props, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isFormActive: false,
            image: null
        };
    }

    uploadImage() {
        const {accountId} = this.props;
        const {file} = this.state;
        let data = new FormData();
        data.append('file', file);
        data.append("id", accountId);
        let request = new XMLHttpRequest();
        request.open("POST", config.urls.UPLOAD_IMAGE);
        request.send(data);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                location.reload();
            }
        }
    };

    shouldComponentUpdate(){
        return true;
    }

    render() {
        const {isFormActive} = this.state;
        const {accountId, isPatient, isAdmin, isDoctor, self} = this.props;
        let requestForImage = config.urls.IMAGE + accountId;
        return (
            <div className="col-md-6 col-lg-6 ">
                <img alt="User Pic" src={requestForImage} className="img-circle avatar"/>
                {isAdmin || (isPatient && self) || (isDoctor && self) ?
                    <div className="image-upload-div">
                        {isFormActive ?
                            <div>
                                <input type="file"
                                       name="file"
                                       className="form-control"
                                       onChange={(e) => {
                                           if (e.target.files != null) {
                                               this.setState({file: e.target.files[0], isFormActive: true})
                                           }
                                       }}
                                />
                                <input type="hidden" name="id" value={accountId}/>
                                <input type="submit"
                                       value="Загрузить"
                                       className="btn btn-success file-upload-button"
                                       onClick={() => {
                                           this.uploadImage();
                                       }}
                                />
                            </div> :
                            <button className="btn btn-secondary"
                                    onClick={() => {
                                        this.setState({isFormActive: true})
                                    }}>Загрузить новую фотографию</button>}
                    </div> : null}
            </div>
        );
    }
}