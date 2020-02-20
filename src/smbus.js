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
                <div>
                    <div class="wholeleft">
                        <fieldset class="supa">
                        <legend class="blueword">Smbus Setting</legend>
                        <table class="smbuset">
                            <table class="setImgMiddle"><img src="./image/smbus_set.png"></img></table>
                            <p>Device Address:</p>
                            <select class="fullwid"><option>0xA0</option></select>
                            <p>Register Offset:</p>
                            <select class="fullwid"><option>0xA0</option></select>
                            <p>Data to write:</p>
                            <p>LowByte <select class="disabled_block" disabled><option></option></select>  </p>
                            <p>HighByte <select class="disabled_block" disabled><option></option></select>  </p>
                        </table>
                        </fieldset>   
                    </div>                    
                    <div class="wholeleft">
                        <fieldset class="upright">
                        <legend class="blueword">Operation Options</legend>
                        <table class="smbuset">
                            <tr>
                                <td><input type="radio" name="byte"></input>Read Byte</td>
                                <td><input type="radio" name="byte"></input>Write Byte</td>
                            </tr>
                            <br></br><br></br>
                            <tr>
                                <td><input type="radio" name="word"></input>Read Word</td>
                                <td><input type="radio" name="word"></input>Write Word</td>
                            </tr>
                        </table>
                        </fieldset>
                        <div class="downright">
                        <table class="smbuset">
                            <p>Receive Data: <input type="text"></input></p>
                            <br></br>
                            <p>Status: <input type="text" disabled></input></p>
                            <br></br>
                            <input type="button" value="Read" class="button"></input>                  
                            <input type="button" value="Write" disabled class="button"></input>                    
                        </table>
                        </div>
                    </div>        
                    
                </div>
                
            </div>
        )
    }
}
export default Smbus;