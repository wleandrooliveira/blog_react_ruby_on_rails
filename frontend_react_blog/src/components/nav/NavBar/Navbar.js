import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={Link} to="/" header>
              <img src="assets/logoblog.png" alt="logo" />
              Blog
            </Menu.Item>
            <Menu.Item as={NavLink} to="/posts" name="Posts" />
            <Menu.Item as={NavLink} to="/comments" name="Comentários"/>
          </Container>
        </Menu>
    )
  }
}
export default NavBar;