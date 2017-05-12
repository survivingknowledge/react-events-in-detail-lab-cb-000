import React from 'react';


export default class CoordinatesButton extends React.Component{
  constructor(props){
    super(props);

    this.doClick = this.doClick.bind(this);
  }

  doClick(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }


  render(){
    return (
      <button onClick={this.doClick} >Button</button>
    );
  }


}
