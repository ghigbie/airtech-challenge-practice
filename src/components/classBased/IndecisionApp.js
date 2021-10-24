import React, { Component } from 'react';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import Disclaimer from './components/Disclaimer';

class IndecisionApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            options: props.options
        }
    }

    componentDidMount = () => {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            options && this.setState(() => ({options}));
        }catch(e){
            alert(`Something went wrong. Invalid data: ${e}`);
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleAddOption = (optionToAdd) => {
        if(!optionToAdd){
            return 'Enter a valid value to add';
        }else if (this.state.options.indexOf(optionToAdd) > -1){
            return 'This option already exists. Please create another';
        }

        this.setState((prevState) => ({
            options: [...prevState.options, optionToAdd]
        }));
    }

    handleRemoveAll = () => {
        this.setState((prevState) => ({...prevState, options: []}))
    }

    handleDeleteOption = (optionText) => {
        this.setState((prevState) => (
            {
                options: prevState.options.filter(option => option !== optionText)
            })
        );
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(`You should: ${this.state.options[randomNum]}`);
    }

    render(){
        const title = "Indecision App";
        const disclaimerText = "results may vary";

        return(
            <div>
                <Header title={title} />
                <Action 
                    hasOptions={this.state.options.length > 0 || 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                <Disclaimer disclaimerText={disclaimerText} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;