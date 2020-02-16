import React from 'react';
import './upbar.css';
class Upbar extends React.Component{
render(){
return(
<div class="fullwid">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-btn">
            <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>      
        <div class="upbar">          
            <div class="wid100">
                <a href='/System-Information'> 
                  <img src="./image/small/system.png"></img>
                </a>
                  <h2>System Information</h2>
            </div>
            <div class="wid100">
                <a href='/HW-Monitor'>
                    <img src="./image/small/monitor.png"></img>
                </a>
                <h2>H/W Monitor</h2>
            </div>
            <div class="wid100">
                <a href='./Dio'>
                    <img src="./image/small/DIO.png"></img>
                </a>
                <h2>Dio</h2>
            </div>
            <div class="wid100">
                <a href='WatchDog'>
                    <img src="./image/small/WatchDog.png"></img>
                </a>
                <h2>WatchDog</h2>
            </div>
                    <div class="wid100">
                <a href='SmartFan'>
                    <img src="./image/small/fan.png"></img>
                </a>
                <h2>Smart Fan</h2>
            </div>
            <div class="wid100">
                <a href='Smbus'>
                    <img src="./image/small/Smbus.png"></img>
                </a>
                <h2>Smbus</h2>
            </div>
            <div class="wid100">
                <a href='Backlight'>
                    <img src="./image/small/Backlight.png"></img>
                </a>
                <h2>Backlight Controller</h2>
            </div>          
        </div>
    </div>
</div>
);
}
}

export default Upbar;