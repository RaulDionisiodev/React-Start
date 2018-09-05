import React from 'react';

export default class BotaoGol extends React.Component{
    handleClick(event){
        event.preventDefault();
        this.props.marcarGol(); 
    }
    render(){
        return( <div>
        <h2>{this.props.gols}</h2>
        <button onClick={this.handleClick.bind(this)}>GOL!</button>
        </div>
        );
    }

}