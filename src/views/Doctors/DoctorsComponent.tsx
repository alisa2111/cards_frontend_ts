import * as React from "react";
import {employees} from "../../data/doctor";
import {CardView} from "./CardView";

export default class DoctorsComponent extends React.Component<any,any> {
    groupBy(arr: any, key: any) {
        return arr.reduce(function (rv: any, x: any) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    render() {
        const groupedCards = this.groupBy(employees , 'specialty');  //groped by specialty
        const groups = Object.keys(groupedCards).map((specialty,index) => {
            return(
                <div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className= 'header border border-dark' key={index}>{specialty}</div>
                        </div>
                    </div>
                    <div className='card-deck'>
                        {groupedCards[specialty].map((employee:object)=> {
                            return <CardView data={employee}/>
                        })}
                    </div>
                </div>
            )
        });
        return(
            <div>
                {groups}
            </div>
        )
    }
}