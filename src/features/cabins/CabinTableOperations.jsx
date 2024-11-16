import Filter from '../../ui/Filter.jsx';
import SortBy from '../../ui/SortBy.jsx';
import TableOperations from '../../ui/TableOperations.jsx';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[
          {
            value: 'all',
            label: 'All',
          },
          {
            value: 'no-discount',
            label: 'No Discount',
          },
          {
            value: 'with-discount',
            label: 'With Discount',
          },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Name (A-Z)' },
          { value: 'name-desc', label: 'Name (Z-A)' },
          { value: 'regular_price-asc', label: 'Price (low-high)' },
          { value: 'regular_price-desc', label: 'Price (high-low)' },
          { value: 'max_capacity-asc', label: 'Max capacity (low-high)' },
          { value: 'max_capacity-desc', label: 'Max Capacity (high-low)' },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
