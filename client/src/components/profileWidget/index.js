import React, { Component } from 'react';
import "./profileWidget.css"

class profileWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="profile-widget-div">
                <div className="profile-balance">Current Balance: </div>
                <div className="profile-balance">Reviewed Videos: </div>

            </div>
          );
    }
}
 
export default profileWidget;