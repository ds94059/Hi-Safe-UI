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
                        <fieldset class="wholeleft">
                        <legend class="blueword">CPU Information</legend>
                        <table>
                            1
                        </table>
                        </fieldset>   
                    </div>                    
                    <div class="wholeleft">
                        <fieldset class="upright">
                        <legend class="blueword">Model Information</legend>
                        <table>
                            2
                        </table>
                        </fieldset>
                        <fieldset class="downright">
                        <table>3</table>
                        </fieldset>
                    </div>        
                    
                </div>
                
            </div>
        )
    }
}
export default Smbus;