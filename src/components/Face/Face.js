import React from 'react'
import './Face.css'
import { InfoList } from '../';

const Face = ({city, aqius}) => (
    <div className="Face">
        <p>
            {city}
        </p>
        <h1>{aqius}</h1>
        <InfoList/>
    </div>
);

export default Face;