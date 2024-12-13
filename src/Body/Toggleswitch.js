import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({mode , toggleMode}) => {
  return (
    <div className="toggle-container " onClick={toggleMode}>
      <div className={`toggle ${mode}`}>
        <div className="circle">
          {mode === 'light' ? <div className="icon">☀️</div> : <div className="icon">🌙</div>}
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
