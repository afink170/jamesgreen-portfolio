import React from 'react';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/desktop/Layout';
import NavBar from '../components/desktop/NavBar';
import Location from '../models/Location';

const ContactPage = () => (
  <Layout pageTitle="Contact">
    <Grid container>
      <NavBar active={Location.Contact} />
    </Grid>
  </Layout>
);

export default ContactPage;
