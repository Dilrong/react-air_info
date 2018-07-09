import React, {Component} from 'react';
import {Wrapper, Navigate, Face} from '../../components';

class WrapperContainer extends Component{
    state = {
    }
    componentDidMount() {
        this._getAirInfo();
    }

    _getAirInfo = async () => {
        const airs = await this._callAirInfo(37.428137, 126.664985)
        this.setState({
            city: airs.data.city,
            aqius: airs.data.current.pollution.aqius,
            tp: airs.data.current.weather.tp,
            pr: airs.data.current.weather.pr,
            hu: airs.data.current.weather.hu,
            ws: airs.data.current.weather.ws,
        })
        console.log(airs.data)
    }
    _callAirInfo = (lat, long) => {
        return fetch('http://api.airvisual.com/v2/nearest_city?lat={lat}&lon={long}&rad=500&key=AZezEShyHMiEa8789')
            .then(request => request.json())
            .then(json => json)
            .catch(err => console.log(err))
    }

    render(){
        const {city, aqius, tp, pr, hu, ws} = this.state;
        return(
            <Wrapper>
                <Navigate/>
                <Face
                    city = {city}
                    aqius = {aqius}
                    tp = {tp}
                    pr = {pr}
                    hu = {hu}
                    ws = {ws}
                />
            </Wrapper>
        );
    }
}


export default WrapperContainer;