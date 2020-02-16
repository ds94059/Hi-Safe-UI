import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './monitor.css';

class Monitor extends React.Component{
    render(){
        const rpm_cpu="123",rpm_chipset="123",rpm_system="456",
                temp_cpu="123",temp_chipset="345",temp_system="",
                vol_vcore=123,vol_vbat=123,vol_12v=123,vol_2v5="",vol_5v=123,vol_dimm=123,vol_3v3="",vol_5vsb=123,vol_3vsb="";
        return(
            <div>
                <Icon/>
                <Upbar/>
                <div>                    
                    <fieldset class="wid70">
                        <legend class="blueword">Fan Speed</legend>
                        <table>
                            <p><span class="block">CPU</span> <input type="text" value={rpm_cpu} readonly="readonly" class="background_gray"/> RPM</p>
                            <p><span class="block">Chipset</span> <input type="text" value={rpm_chipset} readonly="readonly" class="background_gray"/> RPM</p>
                            <p><span class="block">System</span> <input type="text" value={rpm_system} readonly="readonly" class="background_gray"/> RPM</p>
                        </table>
                    </fieldset>                  
                    <fieldset class="wid30">
                        <legend class="blueword">Temperature</legend>
                        <table>
                            <p><span class="block">CPU</span> <input type="text" value={temp_cpu} readonly="readonly" class="background_gray"/> °C</p>
                            <p><span class="block">Chipset</span> <input type="text" value={temp_chipset} readonly="readonly" class="background_gray"/> °C</p>
                            <p><span class="block">System</span> <input type="text" value={temp_system} readonly="readonly" class="background_gray"/> °C</p>
                        </table>
                    </fieldset>
                </div>
                <div>                    
                    <fieldset>
                        <legend class="blueword">Voltage</legend>
                            <div class="wid33">
                                <div class="left">
                                    <p><span class="block">VCORE</span> <input type="text" value={vol_vcore} readonly="readonly" class="background_gray"/> mV</p>
                                    <p><span class="block"> 2V5</span> <input type="text" value={vol_vbat}  readonly="readonly" class="background_gray"/> mV</p>
                                    <p><span class="block"> 3V3</span> <input type="text" value={vol_12v}    readonly="readonly" class="background_gray"/> mV</p>
                                </div>
                                <div class="middle">
                                    <p><span class="block">VBAT</span> <input type="text" value={vol_vcore} readonly="readonly" class="background_gray"/> mV</p>
                                    <p><span class="block"> 5V</span> <input type="text" value={vol_vbat}  readonly="readonly" class="background_gray"/> mV</p>
                                    <p><span class="block"> 5VSB</span> <input type="text" value={vol_12v}    readonly="readonly" class="background_gray"/> mV</p>
                                </div>                     
                                <div class="right">
                                    <p><span class="block">12V</span> <input type="text" value={vol_vcore} readonly="readonly" class="background_gray"/> mV</p>
                                    <p><span class="block"> DIMM</span> <input type="text" value={vol_vbat}  readonly="readonly" class="background_gray"/> mV</p>
                                    <p><span class="block"> 3VSB</span> <input type="text" value={vol_12v}    readonly="readonly" class="background_gray"/> mV</p>
                                </div>
                            </div>
                    
                    </fieldset>                 
                </div>
            </div>
        )
    }
}
export default Monitor;