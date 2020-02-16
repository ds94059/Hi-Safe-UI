import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './monitor.css';

class Monitor extends React.Component{
    render(){
        return(
            <div>
                <Icon/>
                <Upbar/>
                <div>                    
                    <fieldset class="wid70">
                        <legend class="blueword">Fan Speed</legend>
                        <table>
                            <p>CPU <span class="gray_border">123</span>RPM</p>
                            <p>Chipset RPM</p>
                            <p>System RPM</p>
                        </table>
                    </fieldset>                  
                    <fieldset class="wid30">
                        <legend class="blueword">Temperature</legend>
                        <table>
                            <p>CPU °C</p>
                            <p>Chipset °C</p>
                            <p>System °C</p>
                        </table>
                    </fieldset>
                </div>
            </div>
        )
    }
}
export default Monitor;