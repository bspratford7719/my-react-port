import React from 'react';

const AboutMe= () => {
    return (
        <div className = "flex-row background_color: #b5838d ">
            <div className= "profile-pic">
                <img className="profile" src={require("../../assets/portfoliopic.jpg")} alt="profile pic of myself"></img>
            </div>
            <div className = "backgroundposition: center, "></div>
        </div>
    );

}


export default AboutMe;