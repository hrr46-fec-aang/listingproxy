import React from "react";
import ReactDOM from "react-dom";
import Banner from 'react-banner'
import Button from "./App.style";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="banner">
      <div className="hello"><img src="https://s3-us-east-2.amazonaws.com/rvshare-wordpress/wp-content/uploads/2019/05/15171042/hipcamp-logo-1024x1024.png" alt="*"/></div>
      <Banner
          logo= 'campaang'
          url={ window.location.pathname }
          items={[
              { "content": "Near me", "url": "/example" },
              { "content": "About", "url": "/another" },
              { "content": "Login", "url": "/another" },
              { "content": "Sign up", "url": "/another" },
              { "content": "Start hosting", "url": "/children"},
              {
                "title": "hello",
                "url": 'https://github.com'
            }
          ]} /></div>
  )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
