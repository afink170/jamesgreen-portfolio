import React from 'react';

import SEO from '../common/SEO';
import './Layout.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';

interface LayoutProps {
  pageTitle: string;
  children?: React.ReactChild | React.ReactChildren;
}

const Layout = ({ pageTitle, children }: LayoutProps) => (
  <>
    <SEO title={pageTitle} />
    {children}
  </>
);

export default Layout;
