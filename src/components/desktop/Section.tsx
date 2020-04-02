import React from 'react';

import SectionHeader from '../common/SectionHeader';
import Content from '../common/Content';

interface SectionProps {
  children?: React.ReactNode;
  width: number;
  title: string;
  style?: React.CSSProperties;
  headerOverhang?: number;
}

const Section = ({
  children,
  width,
  title,
  style,
  headerOverhang,
}: SectionProps) => (
  <div
    style={Object.assign(
      {
        height: '100%',
        width: `${width}px`,
        backgroundColor: 'rgba(var(--colorDarkRGB), .98)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      },
      style
    )}
  >
    <div style={{ height: '100px' }} />
    <SectionHeader width={headerOverhang ? width + headerOverhang : width}>
      {title}
    </SectionHeader>
    <Content
      style={{
        flexGrow: 1,
        marginLeft: '52px',
        width: `${width - 52}px`,
        marginTop: '10px',
        marginBottom: '10px',
      }}
    >
      {children || null}
    </Content>
  </div>
);

export default Section;
