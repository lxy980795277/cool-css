import React from 'react';
import './index.less';

const Demo2: React.FC = () => {
  return (
    <div className='bubble-demo2-container'>
      <div className='bubble-demo2-footer'>
        <div className='bubble-demo2-element'></div>
        <svg style={{ display: 'none' }}>
          <defs>
            <filter id="bubble-demo2-blob">
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
    </div>
  )
};

export default Demo2;

