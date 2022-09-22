
export const SelectStatus =({ status }) => {

    const options = [
        
        { value: 'pending', text: 'Pending ' },
        { value: 'approved', text: 'Approved' },
        { value: 'rejected', text: 'Rejected' },
    ];

    const handleChange = event => {
        const updateOrder = event.target.value
        console.log(':updateOrder', updateOrder)
    };

    return (
        <div className="host-select-btn">
            <select value={status} onChange={handleChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
};