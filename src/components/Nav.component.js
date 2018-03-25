import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import BtnTaskCreate from './BtnTaskCreate.component';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Link to={'/'}>
          <Menu.Item>
            <img alt="logo" src='/assets/images/logo@2x.png' />
          </Menu.Item>
        </Link>

        <Menu.Item
          name='health'
          active={activeItem === 'health'}>
          <Link to={'/health'}>Health</Link>
        </Menu.Item>

        <Menu.Item
          name='monitor'
          active={activeItem === 'monitor'}>
          <Link to={'/monitor'}>Monitor</Link>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            <BtnTaskCreate />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}