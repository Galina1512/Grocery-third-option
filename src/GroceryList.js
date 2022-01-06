import { Component } from 'react';
import backer from './shopbasket-64.png';


export class GroceryList extends Component{
    state ={
        userInput: "",
        grocerylist: []
    }
    
    onChangeEvent(e){
        this.setState({userInput:e})
    } 
    addItem(input){
        if (input === '') {
            alert('Please, enter an item')
        }
        else {
        let listArray = this.state.grocerylist;
        listArray.push(input)
        this.setState({grocerylist:listArray, userInput:''})
        console.log(listArray)
    }
    }
    crossWord(event){
        const li = event.target;
        li.classList.toggle('crossed')
    }
    deliteItem(){
        let listArray = this.state.grocerylist;
        listArray=[];
        this.setState({grocerylist:listArray})
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div>
                <input type='text' placeholder='Shopping list' 
                onChange={(e)=>{this.onChangeEvent(e.target.value) } }
                value={this.state.userInput} />
            </div>
            <div>
                <button className='btn-add btn' onClick={()=>this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.grocerylist.map((item, index)=> (<li onClick={this.crossWord} key={index}>
                    <img src={backer} width='25px' alt='maping'/>
                    {item}</li>))
                }
            </ul>
            <div>
                <button className='btn-del btn' onClick={()=>this.deliteItem()}>Delite</button>
            </div>
            </form>
            </div>
        )
    }
}