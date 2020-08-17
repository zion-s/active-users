import React from 'react';
import User from './User';
import userData from './../assets/userData.json';

export default class UserContainer extends React.Component{

    render(){
       const users =  userData.members.map(user=>{
        return(
            <div key={user.id}><User name={user.real_name}/></div>
        )}
        )

        return(
            <div className="userBook">{users}</div>
        )
}
}