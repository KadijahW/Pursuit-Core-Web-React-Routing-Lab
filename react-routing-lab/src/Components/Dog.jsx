import React, { Component } from 'react';
import axios from 'axios'


class Dog extends Component{
    constructor() {
      super();
      this.state = {
       numOfDog: 1,
       url:'',
      }
    }

    componentDidMount = () =>{
        this.getRandomDog()
    }

    

     getRandomDog = async (numOfDog) => {
        let dogUrl = `https://dog.ceo/api/breeds/image/random/${numOfDog}`;
        try {
            const {data} = await axios.get(dogUrl)
            console.log(data)
            this.setState({
                url: data.message
            })
        }catch(error){
            console.log('err', error)
        }
     }
     
    render(){
        const {url} = this.state
    return(
    <>
<h1> DOGS!</h1>

{/* <button onClick={this.getRandomDog}>New Dog</button> */}
<img src={this.state.url} alt='dog' />
</>
    )
}
}
export default Dog