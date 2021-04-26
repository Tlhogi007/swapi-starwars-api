import { BrowserRouter as Router } from "react-router-dom";

import {
  NavigationBar,
  Container,
  Navlogo,
  NavBox,
  NavLogoText,
  NavBrand,
  NavItems,
  NavItem,
  NavItemLink,
} from "./styles";

const Navbar = () => {
  return (
    <NavigationBar>
      <Container>
        <Navlogo>
          <NavBox>
            <NavLogoText>
              <NavBrand to="/">StarWars</NavBrand>
            </NavLogoText>
          </NavBox>
        </Navlogo>

        <NavItems>
          <NavItem>
            <NavItemLink to="/home"> Home</NavItemLink>
          </NavItem>
        </NavItems>
      </Container>
    </NavigationBar>
  );
};

export default Navbar;
