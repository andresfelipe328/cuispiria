import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";

type Props = {
  selectedDate: Date;
  setSelectedDate: Function;
  viewType: string;
  setViewType: Function;
};

const VIEWS = [
  {
    text: "month",
  },
  {
    text: "week",
  },
  {
    text: "day",
  },
];

const CalendarHeader = ({
  selectedDate,
  setSelectedDate,
  viewType,
  setViewType,
}: Props) => {
  function handlePrev() {
    setSelectedDate((prevDate: Date) => {
      const newDate = new Date(prevDate);
      if (viewType === "month") newDate.setMonth(newDate.getMonth() - 1);
      else if (viewType === "week") newDate.setDate(newDate.getDate() - 7);
      else if (viewType === "day") newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  }

  function handleNext() {
    setSelectedDate((prevDate: Date) => {
      const newDate = new Date(prevDate);
      if (viewType === "month") newDate.setMonth(newDate.getMonth() + 1);
      else if (viewType === "week") newDate.setDate(newDate.getDate() + 7);
      else if (viewType === "day") newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  }

  function handleToday() {
    setSelectedDate(new Date());
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDateValue = event.target.value;
    const year = parseInt(selectedDateValue.substr(0, 4));
    const month = parseInt(selectedDateValue.substr(5, 2)) - 1; // Month is 0-based in JavaScript Date object
    const day = parseInt(selectedDateValue.substr(8, 2));

    setSelectedDate(new Date(year, month, day));
  };

  const handleViewChange = (view: string) => {
    setViewType(view);
  };

  const renderHeaderView = () => {
    if (viewType === "month") {
      return (
        <h2 className="text-main">
          {selectedDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
      );
    } else if (viewType === "week") {
      const startOfWeek = new Date(selectedDate);
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
      const endOfWeek = new Date(selectedDate);
      endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));
      return (
        <h2 className="text-main">{`${startOfWeek.toDateString()} - ${endOfWeek.toDateString()}`}</h2>
      );
    } else if (viewType === "day") {
      return <h2 className="text-main">{selectedDate.toDateString()}</h2>;
    }
  };

  return (
    <div className="sticky top-0 flex flex-col gap-4 bg-dark shadow-small rounded-t-md p-2 z-20">
      <div className="flex items-center justify-between ">
        <button onClick={() => handlePrev()} className="group">
          <FaCaretLeft className="text-3xl text-main group-hover:text-extra group-hover:-translate-x-1 transition-all duration-300 ease-in-out" />
        </button>
        <button onClick={() => handleToday()} className="group">
          <h2 className="font-title text-main uppercase font-bold tracking-widest group-hover:text-extra group-hover:translate-y-1 transition-all duration-300 ease-in-out">
            Today
          </h2>
        </button>
        <button onClick={() => handleNext()} className="group">
          <FaCaretRight className="text-3xl text-main group-hover:text-extra group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative group">
          <input
            type="date"
            value={selectedDate.toISOString().slice(0, 10)}
            onChange={handleDateChange}
            className="shadow-small outline-none border-none bg-main rounded-md p-2 font-title text-dark group-hover:bg-extra transition-all duration-300 ease-in-out"
          />
          <span className="absolute top-[.55rem] right-2 bg-main group-hover:bg-extra transition-all duration-300 ease-in-out pointer-events-none">
            <AiFillCalendar className="text-xl text-dark" />
          </span>
        </div>
        <div className="flex items-center gap-2">
          {VIEWS.map((view, index) => (
            <button
              key={index}
              onClick={() => handleViewChange(view.text)}
              className="group"
            >
              <h4
                className={`font-bold font-title uppercase ${
                  view.text === viewType ? "text-extra" : "text-main"
                } group-hover:text-extra transition-all duration-200 ease-in-out`}
              >
                {view.text}
              </h4>
            </button>
          ))}
        </div>
      </div>
      <div className="text-center">{renderHeaderView()}</div>
    </div>
  );
};

export default CalendarHeader;
