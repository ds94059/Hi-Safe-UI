import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './dio.css';

class Dio extends React.Component{
    render(){
        const greenin = "./image/greenin.png",blueout="./image/blueout.png",
        greenlight = "./image/greenlight.png",redlight="./image/redlight.png"
        let list=[],list2=[];
        list.push(<td><input type="radio" name="dio01mode" value="0"/>Output<br/><input type="radio" name="dio01mode" value="1"/>Input<br/></td>)
        list.push(<td><input type="radio" name="dio02mode" value="0"/>Output<br/><input type="radio" name="dio02mode" value="1"/>Input<br/></td>)
        list.push(<td><input type="radio" name="dio03mode" value="0"/>Output<br/><input type="radio" name="dio03mode" value="1"/>Input<br/></td>)
        list.push(<td><input type="radio" name="dio04mode" value="0"/>Output<br/><input type="radio" name="dio04mode" value="1"/>Input<br/></td>)
        list.push(<td><input type="radio" name="dio05mode" value="0"/>Output<br/><input type="radio" name="dio05mode" value="1"/>Input<br/></td>)
        list.push(<td><input type="radio" name="dio06mode" value="0"/>Output<br/><input type="radio" name="dio06mode" value="1"/>Input<br/></td>)
        list.push(<td><input type="radio" name="dio07mode" value="0"/>Output<br/><input type="radio" name="dio07mode" value="1"/>Input<br/></td>)
        list.push(<td><input type="radio" name="dio08mode" value="0"/>Output<br/><input type="radio" name="dio08mode" value="1"/>Input<br/></td>)
        list2.push(<td><input type="radio" name="dio01value" value="0"/>Output<br/><input type="radio" name="dio01value" value="1"/>Input<br/></td>)
        list2.push(<td><input type="radio" name="dio02value" value="0"/>Output<br/><input type="radio" name="dio02value" value="1"/>Input<br/></td>)
        list2.push(<td><input type="radio" name="dio03value" value="0"/>Output<br/><input type="radio" name="dio03value" value="1"/>Input<br/></td>)
        list2.push(<td><input type="radio" name="dio04value" value="0"/>Output<br/><input type="radio" name="dio04value" value="1"/>Input<br/></td>)
        list2.push(<td><input type="radio" name="dio05value" value="0"/>Output<br/><input type="radio" name="dio05value" value="1"/>Input<br/></td>)
        list2.push(<td><input type="radio" name="dio06value" value="0"/>Output<br/><input type="radio" name="dio06value" value="1"/>Input<br/></td>)
        list2.push(<td><input type="radio" name="dio07value" value="0"/>Output<br/><input type="radio" name="dio07value" value="1"/>Input<br/></td>)
        list2.push(<td><input type="radio" name="dio08value" value="0"/>Output<br/><input type="radio" name="dio08value" value="1"/>Input<br/></td>)
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
                        <tr><td>Mode</td>{list}</tr>
                        <tr><td>Value</td>{list2}</tr>
                        
                    </table>
                </fieldset>
                <br></br>
                <div class="confirm"><input type="submit" class="wid100"></input></div>
                
            </div>

        )
    }
}
export default Dio;