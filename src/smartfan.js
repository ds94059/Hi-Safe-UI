import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './smartfan.css';
class SmartFan extends React.Component{
    render(){
        const rpm_cpu=2667, rpm_chipset=0, rpm_system=0,
        temp_cpu=36,temp_chipset=35
        return(
            <div>
                <Icon/>
                <Upbar/>
                <div>                    
                    <fieldset class="wid33">
                        <legend class="blueword">Monitored Fan</legend>
                        <table>
                            3option selectbox
                        </table>
                    </fieldset>                  
                    <fieldset class="wid33">
                        <legend class="blueword">Fan Speed</legend>
                        <table>
                            <p><span class="block">CPU</span> <input type="text" value={rpm_cpu} readonly="readonly" class="background_gray"/> RPM</p>
                            <p><span class="block">Chipset</span> <input type="text" value={rpm_chipset} readonly="readonly" class="background_gray"/> RPM</p>
                            <p><span class="block">System</span> <input type="text" value={rpm_system} readonly="readonly" class="background_gray"/> RPM</p>
                        </table>
                    </fieldset>
                    <fieldset class="wid33">
                        <legend class="blueword">Temperature</legend>
                        <table>
                            <p><span class="block">CPU</span> <input type="text" value={temp_cpu} readonly="readonly" class="background_gray"/> °C</p>
                            <p><span class="block">Chipset</span> <input type="text" value={temp_chipset} readonly="readonly" class="background_gray"/> °C</p>
                        </table>
                    </fieldset>
                </div>
                <div>
                    <div className="leftfan">
                        <table>
                            <img src = "./image/fansetting.png"/>
                        </table>
                    </div>
                        <fieldset class="rightfan">
                            <legend class="blueword">Fan Speed Adjustion</legend>
                            <input type="range" min="0" max="255" step="1" /><br/>
                            <input type="range" min="0" max="100" step="1" /><br/>
                            <input type="range" min="0" max="100" step="1" /><br/>
                        </fieldset> 
                    
                </div>
            </div>
        )
    }
}
export default SmartFan;