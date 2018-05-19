import * as React from "react";
import DatePicker from 'react-datepicker';
import  * as moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

interface Props{
    doctorId: number
}

export default class AppointmentView extends React.Component<Props,any> {
    constructor (props: any) {
        super(props);
        this.state = {
            startDate: moment(),
            time: "8:00"

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date: any) {
        this.setState({
            startDate: date
        });
    }

    setTime(e: any) {
        this.setState({
            time: e.target.value
        })
    }

    addAppointment(){
        const {startDate, time} = this.state;
        console.log(startDate.format("DD/MM/YY"));
        console.log(time);
        console.log (this.props.doctorId)}

    render() {
        const {doctorId} =  this.props;
        return (
            <div className="modal fade" id={`${doctorId}`} role="dialog" aria-labelledby={`${doctorId}Label`} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${doctorId}Label`}>Укажите дату и время</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>

                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        dateFormat={"DD/MM/YY"}
                                    />

                                <br/>

                                <select className="custom-select" id="inputGroupSelect01" onChange={(e)=>{this.setTime(e)}}>
                                    <option value="8:00">8:00</option>
                                    <option value="9:00">9:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                </select>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.addAppointment()}
                            >
                                Подтвердить запись
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
