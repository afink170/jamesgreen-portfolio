import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import GatsbyBackgroundImage from 'gatsby-background-image';

interface BackgroundImageProps {
  children?: React.ReactChildren[];
  className?: string;
}

const BackgroundImage = ({
  children,
  className,
}: BackgroundImageProps): JSX.Element => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "default-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <GatsbyBackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#000`}
        >
          {children || null}
        </GatsbyBackgroundImage>
      );
    }}
  />
);

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: right;
  /* background-repeat: repeat-y; */
  background-size: cover;
`;

export default StyledBackgroundImage;
