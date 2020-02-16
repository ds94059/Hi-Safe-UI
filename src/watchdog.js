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
                    <fieldset class="watchdog">
                            <legend class="blueword">WatchDog Timer</legend>                            
                            <table class="watchset">                                
                                <tr class="blueword">
                                    <td><span class="watchdog_block">Count Mode</span></td>
                                    <td><input type="radio" name="location"></input><font size="2" color="black">Second</font>
                                    <input type="radio" name="location"></input><font size="2" color="black">Minute</font></td>
                                </tr>
                                <br></br><br></br>
                                <tr class="blueword">
                                    <td><span class="watchdog_block">Countdown Time</span></td>
                                    <td><select id = "ComboBxMonth" >{list}</select>second(s)</td>
                                </tr>
                                <br></br><br></br>
                                <tr class="blueword">
                                    <td><span class="watchdog_block"><input type="checkbox"></input>Auto Reload</span></td>
                                    <td>in every<select id = "ComboBxMonth" >{list}</select>sec.</td>        
                                </tr>
                            </table>
                            <div class="background_white">0 minutes 0 seconds remaining</div>
                    </fieldset>
                    <div class="buttonset">
                        <input type="button" value="Set" class="button"/>
                        <input type="button" value="Clear" class="button"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default WatchDog;