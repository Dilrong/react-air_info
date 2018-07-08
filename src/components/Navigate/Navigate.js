import React from 'react'
import {Button} from 'semantic-ui-react'
import './Navigate.css'
import Clock from 'react-live-clock'

const Navigate = ({onClick, disabled}) => (
    <div className="Navigate">
        <Button
            color="blue"
            content="위치설정"
        />
        <div className="Navigate-time">
            <Clock format={'YYYY 년 MM월 DD일 HH:mm'} ticking={true}/>
        </div>
        <Button
            className="Navigate-right-button"
            color="blue"
            content="새로고침"
        />
    </div>
);

export default Navigate;