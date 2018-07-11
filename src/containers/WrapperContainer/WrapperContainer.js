import React, {Component} from 'react';
import {Wrapper, Face} from '../../components';

class WrapperContainer extends Component{
    state = {
    }
    componentDidMount() {
        this._getAirInfo(this._getlocation);
    }

    _getAirInfo = async (lat, long) => {
        const airs = await this._callAirInfo(lat, long)
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
    
        _getlocation = navigator.geolocation.getCurrentPosition(position => {
        this._getAirInfo(position.coords.latitude, position.coords.longitude)
    },
    error => {
        this.setState({
          error: error
        })
      });

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
