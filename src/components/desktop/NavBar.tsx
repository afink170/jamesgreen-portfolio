import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Location from '../../models/Location';

interface NavBarProps {
  active: Location;
  style?: React.CSSProperties;
}

interface NavItemProps {
  children: React.ReactChild | React.ReactChildren;
  linkTo: Location;
  active?: boolean;
  className?: string;
}

const Item = ({
  children,
  linkTo,
  active = false,
  className,
}: NavItemProps) => (
  <Link
    className={className}
    to={linkTo.valueOf()}
    style={{
      color: active ? 'var(--colorPrimary)' : 'var(--colorWhite)',
    }}
  >
    {children}
  </Link>
);

const StyledItem = styled(Item)`
  font-size: 22px;
  padding: 20px 8px 18px;
  margin: 4px 10px;
  letter-spacing: 3px;
  text-decoration: none;
  display: inline block;
  font-weight: normal;

  transition: all 0.2s ease;

  &:hover {
    border-bottom: 3px solid var(--colorPrimary);
  }
`;

const NavBar = ({ active, style }: NavBarProps): JSX.Element => (
  <div
    style={Object.assign(
      {
        backgroundColor: 'var(--colorDark)',
        width: '100%',
        height: '80px',
        paddingLeft: '40px',
        display: 'flex',
        flexDirection: 'row',
      },
      style
    )}
  >
    <StyledItem linkTo={Location.Home} active={active === Location.Home}>
      HOME
    </StyledItem>
    <StyledItem linkTo={Location.AboutMe} active={active === Location.AboutMe}>
      ABOUT ME
    </StyledItem>
    <StyledItem linkTo={Location.Media} active={active === Location.Media}>
      MEDIA
    </StyledItem>
    <StyledItem linkTo={Location.Contact} active={active === Location.Contact}>
      CONTACT
    </StyledItem>
  </div>
);

export default NavBar;
