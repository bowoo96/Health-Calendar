import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "./modal/Modal";

import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [onModal, setOnModal] = useState(false);

  return (
    <div>
      <div>캘린더 페이지입니다.</div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        onSelect={() => setOnModal(true)}
        monthsShown={1}
        inline
      />
      {onModal && <Modal setOnModal={(boolean) => setOnModal(boolean)} />}
    </div>
  );
};

export default Calendar;
