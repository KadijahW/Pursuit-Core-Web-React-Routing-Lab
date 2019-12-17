import React, { Component } from 'react';
import axios from 'axios'


class Dog extends Component{
    constructor() {
      super();
      this.state = {
       numOfDog: 1
      }
    }

     getRandomDog = async (numOfDog) => {
        let dogUrl = `https://dog.ceo/api/breeds/image/random/${numOfDog}`;
        try {
            const {data} = await axios.get(dogUrl)
            console.log(data)
        }catch(error){
            console.log('err', error)
        }
     }

    render(){
    return(
    <>
<h1> DOGS!</h1>

{/* <input type="number" min="1" max="10" 
 onChange={} value={}
/>  */}
<button onClick={this.getRandomDog}>New Dog</button>
<button 
// onClick={}
>Reset</button>

</>
    )
}
}
export default Dog