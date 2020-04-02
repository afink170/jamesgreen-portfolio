import React from 'react';

interface SectionHeaderProps {
  children?: React.ReactText;
  width: number;
}

const SectionHeader = ({ children, width }: SectionHeaderProps) => (
  <div
    style={{
      width: `${width}px`,
      height: 100,
      backgroundColor: 'var(--colorDark',
      boxShadow: '14px 10px 30px 0px rgba(0,0,0,.7)',
      display: 'table-cell',
      verticalAlign: 'middle',
    }}
  >
    <h2
      style={{
        margin: '10px 52px',
        fontSize: '64px',
      }}
    >
      {children || null}
    </h2>
  </div>
);

export default SectionHeader;
