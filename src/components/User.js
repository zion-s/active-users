import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Card from 'react-bootstrap/Card';
import pic from './../assets/pic.png';
import './User.css';

export default class User extends React.Component{

    render(){
        return(
            <Card className="userCard">
                <Card.Img id="pic" src={pic} alt="profile pic"/>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                </Card.Body>
            </Card>
        )
    }

}