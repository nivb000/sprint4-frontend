import EnhancedTable from "./dash-table-lib";

export const BasicTable = ({orders}) => {

 
    
    function createData(status, guests, checkin, Checkout, streetName, totalPayout) {
        return { status, guests, checkin, Checkout, streetName, totalPayout };
    }
    const cellNames = Object.keys( createData('puki', 'Panding', 5, '3.7.22', '10.7.22', 'Puki adress', 985))

    const headCells = [
        { id: 'status', numeric: false, disablePadding: true, label: 'Status' },
        { id: 'guests', numeric: true, disablePadding: false, label: 'Guests' },
        { id: 'checkin', numeric: true, disablePadding: false, label: 'Check-in' },
        { id: 'Checkout', numeric: true, disablePadding: false, label: 'Check-out' },
        { id: 'streetName', numeric: true, disablePadding: false, label: 'Street Name' },
        { id: 'totalPayout', numeric: true, disablePadding: false, label: 'Total Payout' },
    ];

    const rows = [
        createData('Pending', '5', 5, '3.7.22', '10.7.22', 'Puki adress', 985),
        createData('Approved', '8', 6, '3.7.22', '10.7.22', 'Puki adress', 985),

    ];
    return (
        <EnhancedTable rows={rows} headCells={headCells} cellNames={cellNames} />
    )

}







