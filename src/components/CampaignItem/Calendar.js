import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Calendar.module.css";

const Calendar = (props) => {
    //conveting date to format yyy-mm-dd for input to undertand
    const[date, setDate] = useState(new Date(props.date).toISOString().split('T')[0]);
    
    const inputChangeHandler = (evt) => {
        setDate(evt.currentTarget.value);
        //converting to utc time
        props.onDateChange(new Date(evt.currentTarget.value).getTime());
        props.onClose();
    }
    return(
        <Modal onClose={props.onClose}>
            <h2 className={classes.heding}> Reschedule Campaign</h2>
            <div className={classes.calendarContainer}>
                <input type="date" onChange={inputChangeHandler} value={date}></input>
            </div>
        </Modal>
    );
}

export default Calendar;