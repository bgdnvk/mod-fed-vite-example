// fragments/src/Button.tsx
//import React from 'react';
//
//const Button: React.FC = () => <button>Shared Button</button>;
//
//export default Button;

import {useState} from "react"

 const Button = () => {
     const [count,setCount] = useState(0)
     return <button
         onClick={() => setCount(count +1)}
     > BTN APP 1: {count} </button>
 }

 export default Button
