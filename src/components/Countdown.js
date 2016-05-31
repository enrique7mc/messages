import React from 'react';

const Countdown = ({ minutes, seconds }) => {
  return (
    <div>{`${minutes} minutes ${seconds} seconds`}</div>
  );
}

export default Countdown;
