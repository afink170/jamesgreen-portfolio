import React from 'react';

interface MainProps {
  style?: React.CSSProperties;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

const Main = ({ style, children }: MainProps): JSX.Element => (
  <div
    style={Object.assign(
      {
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--colorDark)',
        background:
          'linear-gradient(rgba(var(--colorDarkRGB), 1.0) 0%, rgba(var(--colorDarkRGB), 0.6) 20%, rgba(var(--colorDarkRGB), 0.6) 100%)',
      },
      style
    )}
  >
    {children}
  </div>
);

export default Main;
