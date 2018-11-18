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
    onChangeName (name, index) {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    };

    deleteHandler(index){
        const cars = this.state.cars.concat();
        cars.splice(index,1)
        this.setState({cars})
    }
    // changeTitleHandler = pageTitle =>{
    //    this.setState({
    //        pageTitle
    //    })
    // };
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
                      onDelete = {this.deleteHandler.bind(this,index)}
                      onChangeName={event => this.onChangeName(event.target.value, index)}
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
