import React from "react";
import User from "./User";


const data = [
    {id: "uniq1", name:"Paul"},
    {id: "uniq2", name:"Mary"},
    {id: "uniq3", name:"Viktor"},
    {id: "uniq4", name:"Suzanna"},
    {id: "uniq5", name:"Peter"},
    {id: "uniq6", name:"Vladislav"},
    {id: "uniq7", name:"anna"}
   ]
   
   const  UserList = () => {
   for (let i=0; i < data.length; i++)
   return (<div>
   {data.map((item) => <User name = {item.name} />)}
   <br></br>
   {data.map((item) => <User name = {item.name.indexOf('e') === 1 ?  ` - premium user! Welcome, ${item.name}!` : item.name}/>)}
   <br></br>
   {data.map((item) => <User name = {item.name.length > 4 ? item.name.substring(0, 4) + '.....' : item.name}/>)}
   <br></br>
    {data.map((item) => <User name = {item.name === item.name.split('').reverse().join('') ? item.className = 'name-highlited' : item.name}/>)} 
   </div>);
   
   
    };
      
   
   export default UserList;