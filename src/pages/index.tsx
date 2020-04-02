import React from 'react';
import styled from 'styled-components';

import Layout from '../components/desktop/Layout';
import NavBar from '../components/desktop/NavBar';
import Location from '../models/Location';
import Main from '../components/desktop/Main';
import Grid from '../components/common/grid/Grid';
import BackgroundImage from '../components/common/BackgroundImage';

const DesktopBackgroundImage = styled(BackgroundImage)`
  grid-area: main;
  z-index: -2;
  height: calc(100vh - 80px);
`;

const IndexPage = () => (
  <Layout pageTitle="Home">
    <Grid
      container
      templateColumns="auto"
      templateRows="80px auto"
      templateAreas={['navbar', 'main']}
      style={{
        height: '100%',
        width: '100%',
        padding: '0',
        margin: '0',
      }}
    >
      <NavBar active={Location.Home} style={{ gridArea: 'navbar' }} />
      <Main
        style={{
          gridArea: 'main',
          height: 'calc(100vh - 80px)',
          width: '100%',
          zIndex: -1,
          padding: '80px',
        }}
      >
        <div style={{ height: '100px' }} />
        <h1
          style={{
            fontSize: '120px',
            fontVariant: 'small-caps',
            margin: '0',
          }}
        >
          James Green
        </h1>
        <p
          style={{
            fontStyle: 'italic',
            fontSize: '40px',
            fontWeight: 'normal',
          }}
        >
          Musician. Conductor. Educator.
        </p>
      </Main>
      <DesktopBackgroundImage />
    </Grid>
  </Layout>
);

export default IndexPage;
