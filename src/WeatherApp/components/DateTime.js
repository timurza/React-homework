import React from 'react';
import '../styles/date-time.scss';


const DateTime = () => {
    const date = new Date()
    return(
        <div className='date-time'>
            {`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}
        </div>

    )
}

export default DateTime;