import React from 'react';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/desktop/Layout';
import NavBar from '../components/desktop/NavBar';
import Location from '../models/Location';

const MediaPage = () => (
  <Layout pageTitle="Media">
    <Grid container>
      <NavBar active={Location.Media} />
    </Grid>
  </Layout>
);

export default MediaPage;
