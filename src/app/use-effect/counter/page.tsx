'use client'

import React, { useEffect, useState } from "react";

export default function counterPage() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert('The component was mounted 😄');

    return () => {
      alert('The component was unmounted');
    }
  }, []);


  const incrementCounter = () => { setCounter(counter + 1) };

  const decrementCounter = () => { setCounter(counter - 1) };

  return (
    <>
      <div className="col-span-full grid grid-cols-8 gap-y-6">
        <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => incrementCounter()}>Increment</button>

        <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => decrementCounter()}>Decrement</button>

        <h1>counter : {counter}</h1>
      </div>
    </>
  );
}
