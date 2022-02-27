import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div className='App'>
            <button onClick={incrementCount}>+</button>
            <span>{count}</span>
            <button onClick={decrementCount}>-</button>
        </div>
    );
};

export default App;
