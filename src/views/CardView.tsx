import * as React from "react";

export const CardView = (props:any) => {
    const {lastname, firstname, secondname, specialty} = props.data;
    const {image} = props;

    return(
        //col-lg-4
        <div className="col-sm-4">
            <div className="card border border-dark" >
                {props.isAdmin? <AdminButtons/> : null}
                <img className="card-img-top border border-dark" src={image} alt='qwerty'/>
                <div className="card-body">
                    <p className="card-text">{lastname} {firstname} {secondname},<br/> {specialty}</p>
                </div>

            </div>
        </div>
    )
};
const AdminButtons = () =>{
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary btn-admin">В архив</button>
            <button type="button" className="btn btn-secondary btn-admin">Редактировать</button>
        </div>
    )
};
