import styled from 'styled-components';
import { useRecentBookings } from './useRecentBookings';
import { useCabins } from '../cabins/useCabins';
import Spinner from '../../ui/Spinner';
import { useRecentStays } from './useRecentStays';
import Stats from './Stats';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const { stays, isLoading: isLoadingStays, confirmedStays, numDays } = useRecentStays();
  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoadingBookings || isLoadingStays || isLoadingCabins) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length} />
      <div>Todays activity</div>
      <div>Chart - stay durations</div>
      <div>Chart - Sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
