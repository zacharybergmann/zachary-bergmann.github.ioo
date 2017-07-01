import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { routeCodes } from '../../views/App';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup
            style={ {
              float: 'right',
              marginLeft: 'auto',
            } }
          >
            <NavLink
              activeClassName='Menu-link--active'
              className='Menu-link'
              exact
              to={ routeCodes.DASHBOARD }
            >
              Home
            </NavLink>
          </ToolbarGroup>
          <ToolbarGroup>
            <NavLink
              activeClassName='Menu-link--active'
              className='Menu-link'
              to={ routeCodes.ABOUT }
            >
              About
          </NavLink>
          </ToolbarGroup>
          <ToolbarGroup>
            <NavLink
              activeClassName='Menu-link--active'
              className='Menu-link'
              exact
              to={ routeCodes.BLOG }
            >
              Blog
          </NavLink>
          </ToolbarGroup>
          <ToolbarGroup>
            <NavLink
              activeClassName='Menu-link--active'
              className='Menu-link'
              exact
              to={ routeCodes.PROJECTS }
            >
              Projects
          </NavLink>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
