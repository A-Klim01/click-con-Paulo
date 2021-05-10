import React from "react"
import Nav from "../components/nav";
import Header from "../components/header";
import Container from "../components/container";
import ClickItem from "../components/click";
import Footer from "../components/footer";
import data from "../data.json"

class Game extends React.Component{
    state= {
        data, 
        score:0,
        topScore:0
    }
   //component DidMount
   componentDidMount(){
       console.log('2')
    //    this.shuffleData(this.state.data)
       this.setState({ data: this.shuffleData(this.state.data)})
   }
   
   //func for handle correct guess
   handleCorrectGuess= newData => {
       const { topScore, score } = this.state
       const newScore = score + 1
       const newTopScore = Math.max(newScore, topScore)

       this.setState({
           data:this.shuffleData (newData),
           score:newScore,
           topScore: newTopScore  
       })
   }

   //func to handle incorrect guess
   handleIncorrectGuess= data => {
       this.setState({
           data:this.resetData(data),
           score:0
       })
   }

   //function to reset game
    resetData= data => {
        const resetData= data.map(item=> ({...item, clicked:false}))
        return this.shuffleData(resetData)
    }

   //function to shuffle our data
   shuffleData= data => {
    let i= data.length -1;
    while (i>0) {
        const a= Math.floor (Math.random() * (i+1))
        const temp = data[i]
        data[i] = data[a]
        data[a] = temp
        i--;
    }
    return data;
    // this.setState({
    //     data: data
    // })
   }

   //function to handle item click -click.js

   handleItemClick= id => {
       let guessCorrectly= false;
       const newData= this.state.data.map(item=>{
           const newItem= { ...item }
           if(newItem.id === id){
               if(!newItem.clicked){
                   newItem.clicked= true
                   guessCorrectly= true
               }
           }
           return newItem 
       })
       guessCorrectly
       ? this.handleCorrectGuess(newData)
       : this.handleIncorrectGuess(newData)
   }

   //render return
   render(){
       console.log('1')
    console.log(this.state.data)
   
   return(
    <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Header />
            <Container>
            {this.state.data.map(item =>(
                <div>
                    <ClickItem
                    key={item.id}
                    id={item.id}
                    shake={!this.state.score && this.state.topScore}
                    handleClick= {this.handleItemClick}
                    image={item.image}
                    />
                </div>
            ))}
            </Container>
            <Footer />
    </div>
   )
            }
}

export default Game 
