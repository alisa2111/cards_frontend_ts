import * as React from "react";
import {Link} from "react-router-dom";
export const CardView = (props:any) => {
    const {image , text} = props.data;
    return(
        <div className="col-lg-3">
            <div className="card border border-dark" >
                <Link to={`/DoctorPage`} >
                    <img className="card-img-top border border-dark" src={image} alt='qwerty'/>
                </Link>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">Удалить</button>
                    <button type="button" className="btn btn-secondary">Редактировать</button>
                </div>
            </div>
        </div>
    )
};