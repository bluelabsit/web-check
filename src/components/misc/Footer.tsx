import styled from 'styled-components';
import colors from 'styles/colors';

const StyledFooter = styled.footer`
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  background: ${colors.backgroundDarker};
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  opacity: 0.15;
  transition: all 0.2s ease-in-out;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
  &:hover {
    opacity: .5;
  }
  span {
    margin: 0 0.5rem;
    text-align: center; 
  }
`;


const Link = styled.a`
  color: ${colors.primary};
  font-weight: bold;
  border-radius: 4px;
  padding: 0.1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${colors.primary};
    color: ${colors.backgroundDarker};
    text-decoration: none;
  }
`;

const Footer = (props: { isFixed?: boolean }): JSX.Element => {
  const licenseUrl = 'https://github.com/lissy93/web-check/blob/master/LICENSE';
  return (
  <StyledFooter style={props.isFixed ? {position: 'fixed'} : {}}>
    <span>
      <Link href="/about">About Bluelebs Web-Check</Link> | <Link href={licenseUrl}>Terms and copyright</Link>
    </span>
  </StyledFooter>
  );
}

export default Footer;
