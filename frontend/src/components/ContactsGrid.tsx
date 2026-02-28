import {
    Grid, Table, TableHeaderRow, TableFilterRow, PagingPanel
} from '@devexpress/dx-react-grid-material-ui';
import {
    FilteringState, IntegratedFiltering, PagingState, IntegratedPaging, SortingState, IntegratedSorting
} from '@devexpress/dx-react-grid';
import type { Contact } from '../types/types';

interface ContactsGridProps {
    contacts: Contact[]
}

function ContactsGrid({ contacts }: ContactsGridProps) {
    const columns = [
        { name: 'name', title: 'Name' },
        { name: 'phone', title: 'Phone' },
        { name: 'email', title: 'Email' },
        { name: 'city', title: 'City' }
    ];

    return (
        <Grid rows={contacts} columns={columns} rootComponent={(rootProps) => (
            <div className="overflow-x-auto border rounded-xl border-gray-200" {...rootProps} />
        )}>
            <FilteringState
                defaultFilters={[]}
            />
            <IntegratedFiltering />

            <SortingState />
            <IntegratedSorting />

            <PagingState defaultCurrentPage={0} defaultPageSize={5} />
            <IntegratedPaging />

            <Table />
            <TableHeaderRow showSortingControls />
            <TableFilterRow />
            <PagingPanel pageSizes={[5, 10, 15]} />
        </Grid>
    )
}

export default ContactsGrid
