import { removeOrder, updateOrder } from "../store/order.action"
import { useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState, forwardRef } from 'react'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SelectStatus = ({ order }) => {

    const [openAlert, setOpenAlert] = useState(false)
    const dispatch = useDispatch()

    const options = [

        { value: 'pending', text: 'Pending' },
        { value: 'approved', text: 'Approved' },
        { value: 'rejected', text: 'Rejected' },
    ];

    const handleChange = event => {

        const status = event.target.value
        order.status = status
        dispatch(updateOrder(order))
        setOpenAlert(true)
        setTimeout(() => {
            setOpenAlert(false)
        }, 3000);
    };

    const onRemoveOrder = (orderId) => {
        dispatch(removeOrder(orderId))
    }

    return (
        <div className="host-select-btn">

            <Snackbar open={openAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Order status updated
                </Alert>
            </Snackbar>

            <select value={order.status} onChange={handleChange} >
                {options.map(option => (
                    <option key={option.value} value={option.value} >
                        {option.text}
                    </option>

                ))}
            </select>
            {/* <button onClick={() => onRemoveOrder(order._id)}>X</button> */}
        </div>
    );
};