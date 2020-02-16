import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './watchdog.css';
import { Combobox } from 'react-widgets'

class WatchDog extends React.Component{
    render(){
        let list=[];
        for(let count=0; count<255 ;count++)        
            list.push(<option count = {count} >{count}</option>)
        
        return(
            <div>
                <Icon/>
                <Upbar/>
                <div>
                    <fieldset>
                            <legend class="blueword">WatchDog Timer</legend>                            
                            <div class="blueword">
                                <span class="block">Count Mode</span>
                                <input type="radio" name="location"></input><font size="2" color="black">Second</font>
                                <input type="radio" name="location"></input><font size="2" color="black">Minute</font>
                            </div>
                            <div class="blueword">
                                <span class="block">Countdown Time</span>
                                <select id = "ComboBxMonth" >
                                    {list}
                                </select>
                                second(s)
                            </div>
                            <div class="blueword">
                            <span class="block"><input type="checkbox"></input>Auto Reload</span>
                                in every
                                <select id = "ComboBxMonth" >
                                    {list}
                                </select>
                                sec.
                            </div>
                            <div>
                                <div class="background_white">0 minutes 0 seconds remaining</div>
                            </div>
                            
                    </fieldset>
                </div>
            </div>
        )
    }
}
export default WatchDog;