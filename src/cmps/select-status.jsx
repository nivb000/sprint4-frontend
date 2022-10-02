import { updateOrder } from "../store/order.action"
import { useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState, forwardRef } from 'react'
import { socketService, SOCKET_EVENT_ORDER_UPDATED } from "../services/socket.service";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const SelectStatus = ({ order }) => {

    const [openAlert, setOpenAlert] = useState(false)
    const dispatch = useDispatch()

    const options = [
        { value: 'pending', text: 'Pending' },
        { value: 'approved', text: 'Approved' },
        { value: 'rejected', text: 'Rejected' },
    ]

    const handleChange = event => {

        const status = event.target.value
        order.status = status
        dispatch(updateOrder(order))
        socketService.emit(SOCKET_EVENT_ORDER_UPDATED, 'order updated')
        setOpenAlert(true)
        setTimeout(() => {
            setOpenAlert(false)
        }, 3000);
    }

    const approvedClassName = 'selected-status approved'
    const rejectedClassName = 'selected-status reject'

    return (
        <div className="host-select-btn">
            <Snackbar open={openAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert severity="success" sx={{ width: '100%', backgroundColor: 'green !important', color: 'white !important' }}>
                    Order status updated
                </Alert>
            </Snackbar>
            <select className={
                order.status === 'approved' && approvedClassName ||
                order.status === 'rejected' && rejectedClassName ||
                order.status === 'pending' && 'selected-status'
            } value={order.status} onChange={handleChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value} >
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
};