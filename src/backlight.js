import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './backlight.css';

class Backlight extends React.Component{
    render(){
        return(
            <div>
                <Icon/>
                <Upbar/>
            </div>
        )
    }
}
export default Backlight;