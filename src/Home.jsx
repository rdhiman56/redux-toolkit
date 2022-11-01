import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const {c} = useSelector(state => state.custom);

    const handleIncremnet = () => {
      dispatch({
        type: "increment"
      })
    }

    const handleIncremnetByValue = () => {
      dispatch({
        type: "incrementByValue",
        payload: 25
      })
    }

    const handleDecremnet = () => {
      dispatch({
        type: "decrement"
      })
    }
  return (
    <>
    <h4>{c}</h4>
    <button onClick={handleIncremnet}>Increment</button>
    <button onClick={handleIncremnetByValue}>Increment By value</button>
    <button onClick={handleDecremnet}>Decremnet</button>
    </>
  )
}

export default Home