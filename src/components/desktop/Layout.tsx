import React from 'react';

import SEO from '../seo';
import './layout.css';

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
