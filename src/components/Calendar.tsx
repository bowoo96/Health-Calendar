import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import Modal from "./modal/Modal";
import ko from "date-fns/locale/ko";
import "../css/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [onModal, setOnModal] = useState(false);

  // DatePicker 한글화 설정
  registerLocale("ko", ko);

  return (
    <div>
      <DatePicker
        locale="ko"
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        onSelect={() => setOnModal(true)}
        monthsShown={1}
        inline
      />
      {onModal && (
        <Modal
          setOnModal={(boolean) => setOnModal(boolean)}
          startData={startDate}
        />
      )}
    </div>
  );
};

export default Calendar;
