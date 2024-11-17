import SortBy from '../../ui/SortBy';
import Filter from '../../ui/Filter';
import TableOperations from '../../ui/TableOperations';

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='status'
        options={[
          { value: 'all', label: 'All' },
          { value: 'checked-out', label: 'Checked out' },
          { value: 'checked-in', label: 'Checked in' },
          { value: 'unconfirmed', label: 'Unconfirmed' },
        ]}
      />

      <SortBy
        options={[
          { value: 'start_date-desc', label: 'Date (Most recent)' },
          { value: 'start_date-asc', label: 'Date (Least recent)' },
          {
            value: 'total_price-desc',
            label: 'Amount (high - low)',
          },
          { value: 'total_price-asc', label: 'Amount (low-high)' },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
