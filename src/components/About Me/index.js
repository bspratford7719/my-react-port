import React from 'react';

const AboutMe= () => {
    return (
        <div className = "flex-row background_color: #b5838d ">
            <div className= "profile-pic">
                <img className="profile" src={require("../../assets/portfoliopic.jpg")} alt="profile pic of myself"></img>
            </div>
            <div className = "backgroundposition: center, ">
                <p>Hello, my name is Brittany and I am a student with University of Arizona, pursuing my Coding Certificate.
                    I have worked on projects over the last 6 months and have a wide variety of experience with a large quantity of languages.
                    Feel free to reach out if you have any questions regarding my experience or knowledge.
                </p>
            </div>
        </div>
    );

}


export default AboutMe;