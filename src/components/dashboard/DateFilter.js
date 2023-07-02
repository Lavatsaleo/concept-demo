import { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

function DateFilter() {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [focusedInput, setFocusedInput] = useState(null);

	return (
		<DateRangePicker
			startDate={startDate}
			startDateId="start-date"
			endDate={endDate}
			endDateId="end-date"
			onDatesChange={({ startDate, endDate }) => {
				setStartDate(startDate);
				setEndDate(endDate);
			}}
			focusedInput={focusedInput}
			onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
		/>
	);
}
export default DateFilter
