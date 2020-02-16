import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Allthings from './Allthings';
import Upbar from './upbar';
import Icon from './Icon';
import System from'./system';
import Monitor from'./monitor';
import Dio from './dio';
import WatchDog from './watchdog';
import SmartFan from './smartfan';
import Smbus from './smbus';
import Backlight from './backlight';

class App extends React.Component {
render(){
return(
<Router >
    <div>
    <Route path="/Home" component={Allthings} />
    <Route path="/Upbar" component={Upbar} />
    <Route path="/Icon" component={Icon} />
    <Route path="/System-Information" component={System} />
    <Route path="/HW-Monitor" component={Monitor} />
    <Route path="/Dio" component={Dio} />
    <Route path="/WatchDog" component={WatchDog} />    
    <Route path="/SmartFan" component={SmartFan} />    
    <Route path="/Smbus" component={Smbus} />
    <Route path="/Backlight" component={Backlight} />
    </div>
</Router>
)
}
}
export default App;