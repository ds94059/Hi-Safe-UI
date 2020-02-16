import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './watchdog.css';

class WatchDog extends React.Component{
    render(){
        return(
            <div>
                <Icon/>
                <Upbar/>
            </div>
        )
    }
}
export default WatchDog;