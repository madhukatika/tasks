import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(moment().startOf('hour').toDate());
  const [endDate, setEndDate] = useState(
    moment().startOf('hour').add(32, 'hour').toDate()
  );

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="MM/dd hh:mm aa"
        selectsRange
        inline
      />
    </div>
  );
};

export default DateTimePicker;
