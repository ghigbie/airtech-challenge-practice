import React, { Component } from 'react';

export default class AddOption extends Component {
    constructor(props){
        super(props);
        this.state =  {
            error: undefined
        }
    }

    handleAddOption = (e) => {
        e.preventDefault();
        const optionToAdd = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(optionToAdd);
        e.target.elements.option.value = '';
        this.setState(() => ({error}))
    }


  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}> 
            <input type="text" name="option" placeholder="Add option text here"/>
            <input type="submit" value="Add Option" />
        </form>
      </div>
    );
  }
}
