import React, {Component} from 'react';
import './BurgerStyle.css';


export default class Burger extends Component {
    state = {
        tomato:0,
        meat:0,
        lattice:0
    }

    addRemoveIngredient =(action,ingredient) => {
      let{
            tomato,
            meat,
            lattice
      } =this.state;

      let stateValue;

     switch(ingredient){
        case 'tomato':{
            stateValue = tomato;
            break;
        }
        case 'meat':{
            stateValue = meat;
            break;
        }
        case 'lattice':{
            stateValue = lattice;
            break;
        }
        default:break;
     }
     if (action === 'add'){
        stateValue = stateValue +1;
     } else{
        stateValue = stateValue -1;
     }
     this.setState({
        [ingredient]: stateValue >= 0 ? stateValue:0
     });
      
    }

    burgerContent = () => {
        let{
            tomato,
            meat,
            lattice
      } =this.state;

      let burger=[];

      //outputing tomato

     for(let i=0; i < tomato; i++){
        burger.push(<div key={burger.length} className="tomatoSide"></div>);
     }

      //outputing meat

      for(let i=0; i < meat; i++){
        burger.push(<div key={burger.length} className="meatSide"></div>);
     }

      //outputing lattice

      for(let i=0; i < lattice; i++){
        burger.push(<div key={burger.length} className="latticeSide"></div>);
     }

     return burger;

    }


    render(){
        return (
              <>
               <div className="burgerIngredients">
                
                <div className="topSide"></div>
                   {this.burgerContent()}
                <div className="bottomSide"></div>

               </div>
               <div className="ingredientsBlock">
                <p>Tomato</p>
                <div className="ingrBtns">
                    <button onClick={() => this.addRemoveIngredient ('add','tomato')} className="ingrbtn">Add</button>
                    <button onClick={() => this.addRemoveIngredient ('remove','tomato')} className="ingrbtn">Remove</button>
                </div>

                <p>Meat</p>
                <div className="ingrBtns">
                    <button onClick={() => this.addRemoveIngredient ('add','meat')} className="ingrbtn">Add</button>
                    <button onClick={() => this.addRemoveIngredient ('remove','meat')} className="ingrbtn">Remove</button>
                </div>

                <p>Lattice</p>
                <div className="ingrBtns">
                    <button onClick={() => this.addRemoveIngredient ('add','lattice')} className="ingrbtn">Add</button>
                    <button onClick={() => this.addRemoveIngredient ('remove','lattice')} className="ingrbtn">Remove</button>
                </div>


               </div>
             </>
        )
    }
}