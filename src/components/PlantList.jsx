import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/plants';
import Plant from '../components/Plant';

class PlantList extends Component {
    componentDidMount(){
        this.props.fetchPlants()
    }

    render(){
        const { plants } = this.props

        return(
        <div>
            <h2> Plants </h2>
            <ul>
                {plants.map((plant) => 
                    <Plant key = {plant.id} plant = {plant}/>)};
            </ul>
        </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        plants: state.plants.all
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPlants
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlantList);