import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './smbus.css';

class Smbus extends React.Component{
    render(){
        return(
            <div>
                <Icon/>
                <Upbar/>
            </div>
        )
    }
}
export default Smbus;