import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Logo from "https://www.aaeon.com/emgz/client_logo.png";

class Index extends React.Component{
    render(){
        return(
            <div>
                this is index.
            </div>
        );
    }
}
export default Index;
  // ========================================
  
  ReactDOM.render(
   
   <App />,
    document.getElementById('root')
  );
  