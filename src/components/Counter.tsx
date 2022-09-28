import {useState} from 'react'
import {Button} from '../shared/Button';

function Counter() {
    const [counter, setCounter] = useState(0);
  return (
    <>
    <Button onClick={()=> setCounter(counter + 1)}>Increment</Button>
        <Button>{counter}</Button>
    <Button onClick={()=> setCounter(counter -1)}>Decrement</Button>  
    </>
  )
}

export default Counter