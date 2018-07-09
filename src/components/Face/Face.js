import React from 'react'
import './Face.css'
import { AirInfo } from '../';

const Face = ({city, aqius, tp, pr, hu, ws}) => (
    <div className="Face">
        <p>
            현재 {city}의 미세먼지는?
        </p>
        <h1>미세먼지농도 aqius{aqius} 입니다.</h1>
        <AirInfo
            tp = {tp}
            pr = {pr}
            hu = {hu}
            ws = {ws}
        />
    </div>
);

export default Face;