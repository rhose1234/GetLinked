import React, { useState, useEffect } from 'react';

function CountdownTimer({ deadline }) {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeDifference = deadline - now;

    if (timeDifference <= 0) {
      return 'Time expired';
    }

    const hours = Math.floor(12);
    const minutes = Math.floor(59);
    const seconds = Math.floor(60);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeftResult = calculateTimeLeft();
      setTimeLeft(timeLeftResult);

      if (timeLeftResult === 'Time expired') {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="time-counter d-flex mt-5 mx-auto justify-content-center justify-content-lg-start">
      {timeLeft === 'Time expired' ? (
        <h1>Time expired</h1>
      ) : (
        <h1>
          {`${timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours} hr ${timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes} min ${timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds} sec`}
        </h1>
      )}
    </div>
  );
}

export default CountdownTimer;
