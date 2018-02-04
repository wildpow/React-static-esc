import React, { Component } from 'react';
import {Button, MenuLines, Bar } from './MenuStyles';

class MenuButton extends Component {
  render() {
    return (
        <Button type="button" role="button" onMouseUp={this.props.handleMouseDown}>
                <MenuLines>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                </MenuLines>
            </Button>
      
    )
  }
};
export default MenuButton;