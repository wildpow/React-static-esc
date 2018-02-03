import React from 'react';
import { Wrapper, WholeThing,
        ButtonWrapper, Button,
        DropDownWrapper, Price 
      } from './DropDownStyles';

class DropDown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonContent: 'Size',
      open: false,
      selected: 0
    }
    this.handleDropdown = this.handleDropdown.bind(this);
    this.drop = this.drop.bind(this);
  }
  handleDropdown() {
    this.setState({
      open: !this.state.open
    })}

  drop(e) {
    this.setState({
      selected: e.currentTarget.dataset.id
    })
    this.handleDropdown();
  }
  
  selector() {
    const { selected } = this.state;

    switch(selected) {
      case '1':
        return `Twin: $${this.props.data[0]}`;
      case '2':
        return `TwinXL: $${this.props.data[1]}`;
      case '3':
        return `Full: $${this.props.data[2]}`
      case '4':
        return `Queen: $${this.props.data[3]}`
      case '5':
        return `King/Cal. King: $${this.props.data[4]}`
      default:
        return null;
    }
  }
  
  render() {
    return (
      <Wrapper>
        <WholeThing>
          <ButtonWrapper>
            <Button onMouseDown={this.handleDropdown}>
              {this.state.buttonContent}&nbsp;&nbsp; { this.state.open ? '\u25B2' : '\u25BC'}
            </Button>
          </ButtonWrapper>
          { this.state.open &&
          <DropDownWrapper onMouseLeave={this.handleDropdown}>
              <Button type="button" role="button" onClick={this.drop} data-id="1">Twin</Button>
              <Button type="button" role="button" onClick={this.drop} data-id="2">TwinXL</Button>
              <Button type="button" role="button" onClick={this.drop} data-id="3">Full</Button>
              <Button type="button" role="button" onClick={this.drop} data-id="4">Queen</Button>
              <Button type="button" role="button" onClick={this.drop} data-id="5">King/Cal. King</Button>
          </DropDownWrapper>
          }
          
          </WholeThing>
          <Price>
            {this.selector()}
          </Price>
      </Wrapper>
    );
  }
};

export default DropDown;