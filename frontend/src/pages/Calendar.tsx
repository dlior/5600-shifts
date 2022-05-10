import CalendarGrid from '../components/CalendarGrid';
import Navbar from '../components/Navbar';

const Calendar = () => {
  document.title = 'Calendar';
  return (
    <>
      <Navbar />
      <CalendarGrid />
    </>
  );
};

export default Calendar;
