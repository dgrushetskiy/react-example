import React, { Component } from 'react';
import './App.css';
import CarFun from '../car/CarFun';

class App extends Component {
    state = {
      cars: [
          {
              name: 'Ford Focus',
              year: 2018
          },
          {
              name: 'Audi Q7',
              year: 2015
          },
          {
              name: 'Mercedes',
              year: 2016
          }
      ],pageTitle: 'Auto Ban',
        showCars: false
    };
    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    };
    changeTitleHandler = pageTitle =>{
       this.setState({
           pageTitle
       })
    };
  render() {
      const divStyle = {
        textAlign: 'center'
      };

      let cars = null;
      if (this.state.showCars){
          cars = this.state.cars.map((car,index) => {
              return (
                  <CarFun
                      key={index}
                      name={car.name}
                      year={car.year}
                      onChangeTitle={() => this.changeTitleHandler(car.name)}
                  />
              )
          })
      }
    return (
      <div style={divStyle}>
       <h1>{this.state.pageTitle}</h1>

      <button onClick={this.toggleCarsHandler}
      >Toggle cars</button>
          { cars }
      </div>
    );
  }
}
export default App;
