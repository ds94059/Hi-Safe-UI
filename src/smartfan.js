import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './smartfan.css';

class SmartFan extends React.Component{
    render(){
        return(
            <div>
                <Icon/>
                <Upbar/>
            </div>
        )
    }
}
export default SmartFan;