import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './Calendar.module.scss';

export default function Calendar(){
    const [selectedDate, setSelectedDate] = useState(null)
    return(
        <div className={styles.calendario}>
            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
        </div>


    );
}