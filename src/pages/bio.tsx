import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/desktop/Layout';
import NavBar from '../components/desktop/NavBar';
import Location from '../models/Location';
import Main from '../components/desktop/Main';
import Grid from '../components/common/grid/Grid';
import BackgroundImage from '../components/common/BackgroundImage';
import Section from '../components/desktop/Section';

const DesktopBackgroundImage = styled(BackgroundImage)`
  grid-area: main;
  z-index: -2;
  height: calc(100%);
`;

const BioPage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "about.txt" }) {
          content
        }
      }
    `}
    render={data => {
      const content: string | null = data.file.content || null;
      console.log(content);
      let contentArray: string[] = [];
      if (content) {
        contentArray = content.split('\n');
      }
      console.log(contentArray);
      return (
        <Layout pageTitle="Bio">
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
            <NavBar active={Location.AboutMe} style={{ gridArea: 'navbar' }} />
            <Main
              style={{
                gridArea: 'main',
                height: 'calc(100%)',
                width: '100%',
                zIndex: -1,
              }}
            >
              <Grid
                container
                templateAreas={['content transition']}
                templateColumns="650px 400px"
                templateRows="calc(100vh - 80px)"
              >
                <Section
                  title="BIO"
                  width={650}
                  style={{ gridArea: 'content' }}
                  // headerOverhang={50}
                >
                  {contentArray.map((c: string, i: number) => (
                    <p key={i} style={{ fontSize: '28px' }}>
                      {c}
                    </p>
                  ))}
                </Section>
                <div
                  style={{
                    zIndex: -3,
                    backgroundColor: 'var(--colorDark)',
                    background:
                      'linear-gradient(90deg, rgba(var(--colorDarkRGB), .98) 0%, rgba(var(--colorDarkRGB), .9) 20%, rgba(var(--colorDarkRGB), 0) 100%)',
                  }}
                />
              </Grid>
            </Main>
            <DesktopBackgroundImage />
          </Grid>
        </Layout>
      );
    }}
  />
);

export default BioPage;
