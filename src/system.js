import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './system.css';

class System extends React.Component{
    render(){
        const cpu="Intel(R) CPU 0000 @ 2.20GHz",cpu_width=64,
        model="FWS-7820",board="K782A",
        device="Intel(R) HD Graphics 530",resolution="1920 x 1080",pixel=32,refresh_rate=60,
        type="DDR4", speed=2133, ram_module="DIMM", label=0, size=8192, manufac="Transcend", ram_width=64, total_width=128;
        return(
            <div>
                <Icon/>
                <Upbar/>
                <div>                    
                    <fieldset class="wid70">
                        <legend class="blueword">CPU Information</legend>
                        <table>
                            <p>Name: {cpu}</p>
                            <p>Data Width: {cpu_width} bit</p>
                        </table>
                    </fieldset>                  
                    <fieldset class="wid30">
                        <legend class="blueword">Model Information</legend>
                        <table>
                            <p>Model Name: {model}</p>
                            <p>Board ID: {board}</p>
                        </table>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <legend class="blueword">Display Information</legend>
                        
                            <div class="left">
                                <p>Device: {device}</p>
                                <p>Resolution: {resolution}</p>
                                <p>Pixel: {pixel }bit</p>
                                <p>Refresh Rate: {refresh_rate} Hz</p>                                
                            </div>
                            <div class="right"><img src="./image/CPU icon.png"></img></div>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <legend class="blueword">RAM Information</legend>                        
                            <div class="left">
                                <p>Type: {type}</p>
                                <p>Speed: {speed} mHz</p>
                                <p>Module: {ram_module}</p>
                                <p>Bank Label: BANK {label}</p>
                            </div>
                            <div class="right">
                                <p>Size: {size} MB</p>
                                <p>Manufacturer: {manufac}</p>
                                <p>Data Width: {ram_width} bit</p>
                                <p>Total Width: {total_width} bit</p>          
                            </div>
                    </fieldset>
                </div>                
            </div>
        );
    }
}

export default System;