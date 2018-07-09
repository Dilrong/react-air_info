import React from 'react'
import './AirInfo.css'

const AirInfo = ({tp, pr, hu, ws}) => {
    return (
        <li className="AirInfo">
            <p>
                <b>온도 : </b> {tp}<br/>
                <b>기압 : </b> {pr}<br/>
                <b>습도 : </b> {hu}<br/>
                <b>풍속 : </b> {ws}<br/>
            </p>
        </li>
    )
}

export default AirInfo;