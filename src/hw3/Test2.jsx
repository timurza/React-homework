import React, {useState, useEffect} from 'react';
import './test2.css';

const Test2 = (props) => {
    console.log('set state');
    const [s1, setS1] = useState(props.arg);

    const buttonHandler = () => {
        console.log('handler');
        let val = s1;
        val++
        setS1(val);
    }

    useEffect(() => {
        console.log('effect')
    });
    console.log('render1');
    return(
        <>
        {console.log('render2')}
        <div>
            Function component
        </div>
        <div>
            <button className = 'test2' onClick={buttonHandler}>Press</button>
        </div>
        <div className='counter2'>
            {s1}
        </div>
        </>
    )
}

export default Test2;