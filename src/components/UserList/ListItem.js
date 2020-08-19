import React from 'react';

class ListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      styles: {backgroundColor: 'rgb(225,225,225)'}
    }
  }

  underline = () => {
    this.props.onSelect();
    if(!this.props.isSelected){
      this.setState({
        styles: {backgroundColor: 'rgb(180,180,180)'}
      })
    }
    else{
      this.setState({
        styles: {backgroundColor: 'rgb(225,225,225)'}
      })
    }
  };

  render() {
    const {
      isSelected,
      onSelect,
      user: { id, fName, lName },
    } = this.props;
    return (
      <li style={this.state.styles}>
        <span>
          UserID: "{id}"; UserFullName:"{fName} {lName}";
        </span><button  onClick={this.underline}>Select</button>  
      </li>
    );
  }
}

export default ListItem;
