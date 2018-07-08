import React, {Component} from 'react';
import {Wrapper, Navigate, Face} from '../../components';
import PropTypes from 'prop-types';

class WrapperContainer extends Component{
    state = {
    }
    componentDidMount() {
        this._getAirInfo();
    }

    _getAirInfo = async () => {
        const airs = await this._callAirInfo(37.428137, 126.664985)
        this.setState({
            airs
        })
        console.log(airs)
    }
    _callAirInfo = (lat, long) => {
        return fetch('http://api.airvisual.com/v2/nearest_city?lat={lat}&lon={long}&rad=500&key=AZezEShyHMiEa8789')
            .then(request => request.json())
            .then(json => json.data)
            .catch(err => console.log(err))
    }

    render(){
        const {airs} = this.state;
        return(
            <Wrapper>
                <Navigate/>
                <Face
                    //city = {airs.city}
                    //aqius = {airs.aqius}
                />
            </Wrapper>
        );
    }
}


export default WrapperContainer;