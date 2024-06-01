import Heading from "../Shared/Heading";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { viewMonthGrid } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css";

function Calender() {
    const calendar = useCalendarApp({
        defaultView: viewMonthGrid.name,
        views: [viewMonthGrid],
    });
    return (
        <>
            <div>
                <Heading title={"Calender"} subTitle={"Show the calender"} />
                <ScheduleXCalendar calendarApp={calendar} />
            </div>
        </>
    );
}

export default Calender;
