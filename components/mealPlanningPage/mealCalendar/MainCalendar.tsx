"use client";

import { useState } from "react";

import { Meal, Slot } from "@/utils/types";

import MonthView from "./views/MonthView";
import WeekView from "./views/WeekView";
import DayView from "./views/DayView";
import CalendarHeader from "./CalendarHeader";
import CreateMealModal from "./CreateMealModal";

type Props = {
  allMeals: string;
};

const MainCalendar = ({ allMeals }: Props) => {
  // Variables
  const todayDate = new Date();
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [viewType, setViewType] = useState("month");
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Slot>();
  const [meals, setMeals] = useState<Meal[]>(JSON.parse(allMeals));

  const renderCalendarView = () => {
    return (
      <div className="calendar-view mt-1 flex-1">
        {viewType === "month" && (
          <MonthView selectedDate={selectedDate} meals={meals} />
        )}
        {viewType === "week" && (
          <WeekView
            selectedDate={selectedDate}
            setSelectedSlot={setSelectedSlot}
            setShowModal={setShowModal}
            meals={meals}
            setMeals={setMeals}
          />
        )}
        {viewType === "day" && (
          <DayView
            selectedDate={selectedDate}
            setSelectedSlot={setSelectedSlot}
            setShowModal={setShowModal}
            meals={meals}
            setMeals={setMeals}
          />
        )}
      </div>
    );
  };

  return (
    <>
      {showModal && (
        <CreateMealModal
          meals={meals}
          setMeals={setMeals}
          setShow={setShowModal}
          show={showModal}
          selectedSlot={selectedSlot!}
        />
      )}

      <div className="flex flex-col w-full max-w-full h-[570px] px-1 overflow-auto">
        <CalendarHeader
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          viewType={viewType}
          setViewType={setViewType}
        />
        {renderCalendarView()}
      </div>
    </>
  );
};

export default MainCalendar;
