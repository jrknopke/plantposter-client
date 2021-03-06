import React, { Component } from 'react';
import { createPlant } from '../actions/plants';
import { connect } from 'react-redux';

export class PlantForm extends Component {

    state = {
        name: "",
        family: "",
        color: ""
    }

    constructor(){
        super();
        this.handleOnChange.bind(this);
        this.handleOnSubmit.bind(this);
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: [event.target.value]})
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createPlant(this.state)
        this.setState({
            name: '',
            family: '',
            color: ''
        })
        this.props.history.push('/plants');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <p>
                        <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChange(event)}
                        placeholder="Plant Name" />
                    </p>
                    <p>
                        <label> Family: </label>
                        <select
                        name = "family"
                        type = "select"
                        value = {this.state.family}
                        onChange = {(event) => this.handleOnChange(event)}>
                            <option value="tree"> Tree </option>
                            <option value="flower"> Flower </option>
                            <option value="food"> Food </option>
                        </select>
                    </p>
                    <p>
                        <input
                        name="color"
                        type="text"
                        value={this.state.color}
                        onChange={(event) => this.handleOnChange(event)}
                        placeholder="Plant Color" />
                    </p>
                    <input type="submit" value="ADD PLANT"/>
                </form>
            </div>
        );
    }
}

export default connect(null, {createPlant})(PlantForm);