import React from 'react';

const SVG = ({ style, fill, width = '0.9rem', className = 'icon', viewBox = '0 0 9 14' }) => (
    <svg
      style={style}
      width={width}
      height={width}
      viewBox={viewBox}
      className={`svg-icon ${className}`}
      fill={fill}>
      <path
        fill={fill}
        fillRule="nonzero"
        transform="rotate(90, 4.5, 7)"
        d="M1.229 11.831a1.022 1.022 0 0 0 0 1.436.999.999 0 0 0 1.422 0L8.27 7.533a1.023 1.023 0 0 0 0-1.436L2.65.363a.998.998 0 0 0-1.421 0 1.022 1.022 0 0 0 0 1.436l4.608 5.016-4.608 5.016z"
      />
    </svg>
  );
  export default SVG;