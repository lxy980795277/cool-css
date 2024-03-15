import React, { useEffect } from 'react';
import './index.less';

const Demo4: React.FC = () => {

  const getRandomBubble = (): void => {
    const bubbleNumber = 10;
    const bubbleContainer = document.getElementsByClassName('bubble-demo4-footer')?.[0];
    const width = bubbleContainer.clientWidth;
    for (let i = 0; i < bubbleNumber; i++) {
      const newBubble = document.createElement('div');
      newBubble.className = 'bubble-demo4-element';
      const diameter = Math.random() * (150 - 40) + 40;
      const left = Math.random() * (width - diameter);
      const animationTime = Math.random() + 1;

      newBubble.style.setProperty('--bubble-demo4-diameter', `${diameter}px`);
      newBubble.style.setProperty('--bubble-demo4-left', `${left}px`);
      newBubble.style.setProperty('--bubble-demo4-animation-time', `${animationTime}s`);
      bubbleContainer.appendChild(newBubble);
    }
  }

  useEffect(() => {
    const interval = setInterval(getRandomBubble, 1500);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className='bubble-demo4-container'>
      <div className='bubble-demo4-footer'>
        <div className='bubble-demo4-element'></div>
        <svg style={{ display: 'none' }}>
          <defs>
            <filter id="bubble-demo4-blob">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur">
              </feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 40 -20"
              ></feColorMatrix>
            </filter>
          </defs>
        </svg>
      </div>
    </div >
  )


};

export default Demo4;

