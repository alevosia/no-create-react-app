import React, { useState } from 'react'

import { Wrapper, Count, Button } from './Counter.styles'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)

    return (
        <Wrapper>
            <Count>{count}</Count>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Increment</Button>
        </Wrapper>
    )
}

export default Counter
