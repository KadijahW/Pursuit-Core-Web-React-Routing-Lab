import React, { Component } from 'react';
import axios from 'axios'


class Dog extends Component{
    constructor() {
      super();
      this.state = {
       
      }
    }
    render(){

    
    return(
    <>
<h1> DOGS!</h1>

{/* <input type="number" min="1" max="10" 
 onChange={} value={}
/>  */}
<button 
// onClick={}
>New Dog</button>
<button 
// onClick={}
>Reset</button>

</>
    )
}
}
export default Dog