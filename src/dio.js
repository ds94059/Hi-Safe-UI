import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './dio.css';

class Dio extends React.Component{
    render(){
        const greenin = "./image/greenin.png",blueout="./image/blueout.png",
        greenlight = "./image/greenlight.png",redlight="./image/redlight.png"
        return(
            <div>
                <Icon/>
                <Upbar/>                 
                <fieldset class="fullwid">
                    <legend class="blueword">Digital IO Current Status</legend>
                    <table className="tablestyle">
                        <tr className="lightblue"><td></td><td>DIO1</td><td>DIO2</td><td>DIO3</td><td>DIO4</td><td>DIO5</td><td>DIO6</td><td>DIO7</td><td>DIO8</td></tr>
                        <tr><td>Mode</td><td><img src={greenin}/></td><td><img src={greenin}/></td><td><img src={greenin}/></td><td><img src={greenin}/></td><td><img src={blueout}/></td><td><img src={blueout}/></td><td><img src={blueout}/></td><td><img src={blueout}/></td></tr>
                        <tr><td>Value</td><td><img src={greenlight}/></td><td><img src={greenlight}/></td><td><img src={greenlight}/></td><td><img src={greenlight}/></td><td><img src={redlight}/></td><td><img src={redlight}/></td><td><img src={redlight}/></td><td><img src={redlight}/></td></tr>
                    </table>
                </fieldset>                  
                <fieldset class="fullwid">
                    <legend class="blueword">Digital IO Setting</legend>
                    <table className="tablestyle">
                        <tr className="lightblue"><td></td><td>DIO1</td><td>DIO2</td><td>DIO3</td><td>DIO4</td><td>DIO5</td><td>DIO6</td><td>DIO7</td><td>DIO8</td></tr>
                        <tr><td>Mode</td><td>DIO1</td><td>DIO2</td><td>DIO3</td><td>DIO4</td><td>DIO5</td><td>DIO6</td><td>DIO7</td><td>DIO8</td></tr>
                        <tr><td>Value</td><td>DIO1</td><td>DIO2</td><td>DIO3</td><td>DIO4</td><td>DIO5</td><td>DIO6</td><td>DIO7</td><td>DIO8</td></tr>
                        
                    </table>
                </fieldset>
            </div>

        )
    }
}
export default Dio;