import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import ScrollBar from 'react-scrollbars-custom';

interface ContentProps {
  children: React.ReactNode;
  // width?: number | string;
  // height?: number | string;
  // autoHeight?: boolean;
  style?: React.CSSProperties;
}

interface RenderProps {
  style?: React.CSSProperties;
  props?: any;
}

const Thumb = ({ style, ...props }: RenderProps) => (
  <div
    style={{
      ...style,
      ...{ backgroundColor: 'var(--colorPrimary)', borderRadius: '4px' },
    }}
    {...props}
  />
);

const View = ({ style, ...props }: RenderProps) => (
  <div
    style={{
      ...style,
      ...{ padding: '10px' },
    }}
    {...props}
  />
);

const Content = ({ children, style }: ContentProps) => (
  // <ScrollBar style={style}>{children}</ScrollBar>
  <Scrollbars renderThumbVertical={Thumb} renderView={View} style={style}>
    {children}
  </Scrollbars>
);

export default Content;
