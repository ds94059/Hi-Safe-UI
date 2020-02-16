import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';
import Upbar from './upbar';
import './smartfan.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class SmartFan extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            spd_adj: 128,
            lspd_temp: 0,
            fspd_temp: 0,       
          };
      }
    
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
                        <table class="radiobox">
                            <fieldset class="textleft">
                            <input type="radio" name="fanid" value="0"></input><font size="2" color="black">Fan0</font><br/>
                            <input type="radio" name="fanid" value="1"></input><font size="2" color="black">Fan1</font><br/>
                            <input type="radio" name="fanid" value="2"></input><font size="2" color="black">Fan2</font><br/>
                            </fieldset>
                            <input type="radio" name="autoormanual" value="0"></input><font size="2" color="black">Auto</font>
                            <input type="radio" name="autoormanual" value="1"></input><font size="2" color="black">Manual</font>
                        </table>
                        
                    </fieldset>                  
                    <fieldset class="wid33">
                        <legend class="blueword">Fan Speed</legend>
                        <table class="fullwid">
                            <p><span class="myblock">CPU</span> <input type="text" value={rpm_cpu} readonly="readonly" class="background_gray"/> RPM</p>
                            <p><span class="myblock">Chipset</span> <input type="text" value={rpm_chipset} readonly="readonly" class="background_gray"/> RPM</p>
                            <p><span class="myblock">System</span> <input type="text" value={rpm_system} readonly="readonly" class="background_gray"/> RPM</p>
                        </table>
                    </fieldset>
                    <fieldset class="wid33">
                        <legend class="blueword">Temperature</legend>
                        <table class="fullwid">
                            <p><span class="myblock">CPU</span> <input type="text" value={temp_cpu} readonly="readonly" class="background_gray"/> °C</p>
                            <p><span class="myblock">Chipset</span> <input type="text" value={temp_chipset} readonly="readonly" class="background_gray"/> °C</p>
                        </table>
                    </fieldset>
                </div>
                <div>
                    <div className="leftfan">
                        <table class="fansetimg">
                            <img src = "./image/fansetting.png"/>
                        </table>
                    </div>
                    <fieldset class="rightfan">
                      <legend class="blueword">Fan Speed Adjustion</legend>
                        <p>Speed Adjust</p>                            
                        <form className="form">
                          <InputRange
                                maxValue={255}
                                minValue={0}
                                value={this.state.spd_adj}
                                onChange={spd_adj => this.setState({ spd_adj })} 
                          />
                        </form>
                        <p>Low Speed Temperature</p>
                        <br/>
                        <form className="form">
                          <InputRange
                            maxValue={100}
                            minValue={0}
                            value={this.state.lspd_temp}
                            onChange={lspd_temp => this.setState({ lspd_temp })}
                            disabled
                          />  
                        </form> 
                        <p>Full Speed Temperature</p>
                        <br/>
                        <form className="form">
                          <InputRange
                            maxValue={100}
                            minValue={0}
                            value={this.state.fspd_temp}
                            onChange={fspd_temp => this.setState({ fspd_temp })}
                            disabled 
                          />
                        </form>
                      </fieldset> 
                </div>
            </div>
        )
    }
}
export default SmartFan;