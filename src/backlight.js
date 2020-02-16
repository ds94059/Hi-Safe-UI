import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './backlight.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Backlight extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            device1: 100,
            device2: 0,
          };
      }
    render(){
        return(
            <div>
                <Icon/>
                <Upbar/>
                <div class="backlight">
                    <p>Device1 Brightness:</p>
                    <form className="form">
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={this.state.device1}
                            onChange={device1 => this.setState({ device1 })}                             
                        />
                    </form>
                    <p>Device2 Brightness:</p>
                    <br/>
                    <form className="form">
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={this.state.device2}
                            onChange={device2 => this.setState({ device2 })}     
                            disabled
                        />
                    </form>
                </div>
            </div>
        )
    }
}
export default Backlight;