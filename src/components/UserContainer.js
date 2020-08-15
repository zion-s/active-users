import React from 'react';
import User from './User';
import userData from './../assets/userData.json';

export default class UserContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {userData.members.map(user=><User/>)}
            </div>
        )
    }

}