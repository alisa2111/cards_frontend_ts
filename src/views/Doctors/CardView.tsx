import * as React from "react";
export const CardView = (props:any) => {
    const {image , text} = props.data;
    return(
        <div className="col-lg-3">
            <div className="card border border-dark" >
                <img className="card-img-top border border-dark" src={image} alt='qwerty'/>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    )
};