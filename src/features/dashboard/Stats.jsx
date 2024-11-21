import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import Stat from './Stat';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.total_price, 0);

  const checkins = confirmedStays.length;

  const occupancyRate = confirmedStays.reduce((acc, cur) => acc + cur.num_night, 0) / (numDays * cabinCount);

  return (
    <>
      <Stat title='Bookings' color='blue' icon={<HiOutlineBriefcase />} value={numBookings} />
      <Stat title='Sales' color='green' icon={<HiOutlineBanknotes />} value={formatCurrency(sales)} />
      <Stat title='Check Ins' color='indigo' icon={<HiOutlineCalendarDays />} value={checkins} />
      <Stat title='Occupancy Rate' color='yellow' icon={<HiOutlineChartBar />} value={`${Math.round(occupancyRate * 100)}%`} />
    </>
  );
}

export default Stats;