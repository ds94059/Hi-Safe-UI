import React from 'react';
import ReactDOM from 'react-dom';
import './Allthings.css';
import Icon from './Icon';

// import Logo from "https://www.aaeon.com/emgz/client_logo.png";
class Allthings extends React.Component {     
    render() {              
      return (       
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <Icon />
            <div class="main">
                <div class="wid500">
                    <a href='/System-Information'>
                        <img src="./image/system.png"></img>       
                    </a>
                    <h2>System Information</h2>
                </div>
                <div class="wid500">
                    <a href='/HW-Monitor'>
                        <img src="./image/monitor.png"></img>
                    </a>
                    <h2>H/W Monitor</h2>
                </div>
                <div class="wid500">
                    <a href='Dio'>
                        <img src="./image/DIO.png"></img>
                    </a>
                    <h2>Dio</h2>
                </div>
                <div class="wid500">
                    <a href='WatchDog'>
                        <img src="./image/WatchDog.png"></img>
                    </a>
                    <h2>WatchDog</h2>
                </div>
            
                <div class="wid500">
                    <a href='SmartFan'>
                        <img src="./image/fan.png"></img>
                    </a>
                    <h2>Smart Fan</h2>
                </div>
                <div class="wid500">
                    <a href='Smbus'>
                        <img src="./image/Smbus.png"></img>
                    </a>
                    <h2>Smbus</h2>
                </div>
                <div class="wid500">
                    <a href='Backlight'>
                        <img src="./image/Backlight.png"></img>
                    </a>
                    <h2>Backlight Controller</h2>
                </div>
            </div>   
        </div>
      );
    }
}
  export default Allthings;
  // ========================================
  
