import React from "react";

import "../App.css";
import banniere from '../Assets/banniere.jpg'


class HeaderSection extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {

        return (

            <div id="videobackground">
              <img src={banniere} alt='banniere'/>
            </div>
            
        );
    }
}

export default HeaderSection;