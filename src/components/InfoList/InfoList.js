import React from 'react'
import './InfoList.css'

import {AirInfo} from '../'

const InfoList = () => {
    return (
        <ul className="InfoList">
            <AirInfo/>
            <AirInfo/>
        </ul>
    );
};

export default InfoList;