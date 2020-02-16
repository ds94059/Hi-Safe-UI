import React from 'react';
import Icon from './Icon';
import Upbar from './upbar';
import './dio.css';

class Dio extends React.Component{
    render(){
        return(
            <div>
                <Icon/>
                <Upbar/>
            </div>
        )
    }
}
export default Dio;