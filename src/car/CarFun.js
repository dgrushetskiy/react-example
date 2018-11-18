import React from 'react';

// function CarFun() {
//     return (
//             <h2>This is car component</h2>
//     )
// }
// const car = () => {
//    return (
//        <div>This is component</div>
//    )
//
// <p>This is component</p>
// <p><strong>1+1</strong></p>
// <p><strong>{1+1}</strong></p>
// <p><strong>{Math.random()}</strong></p>
// <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
// };
// const car = () => <div>This is component</div>


export default (props) => (
    <div style={{
        border:'1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px'
    }}>
        <h3>Car name: {props.name} </h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name} />
        <button onClick={props.onDelete}>Delete</button>
    </div>
)