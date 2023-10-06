import React from 'react';

export function Header() {
    const svgStyles = {
        cls1: {fill: '#4b8ac9', stroke: '#4b8ac9', strokeWidth: 4 },
        cls2: {fill: '#30628c', stroke: '#30628c', strokeWidth: 4 },
      };
    return (
    <div className="headerBloc" id="header">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 740.77 982.9" className='logo' id="logo">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_7" data-name="Layer 7">
            <polygon style={svgStyles.cls1} points="362.88 0 1.22 280.71 0 430.18 362.88 146.5 362.88 0"/>
            <polygon style={svgStyles.cls2} points="1.22 280.71 362.98 561.63 364.20 711.10 0 430.18 1.22 280.71"/>
            <polygon style={svgStyles.cls1} points="377.89 271.80 739.55 552.50 740.77 701.97 377.89 418.29 377.89 271.80"/>
            <polygon style={svgStyles.cls2} points="739.55 552.50 377.78 833.43 376.56 982.90 740.77 701.97 739.55 552.50"/>
          </g>
        </g>
      </svg>
    </div>
  );
};