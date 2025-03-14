import './App.css';
import { useState } from 'react';
import modStyle from './assets/customStyle.module.css';
import Prestige from './Prestige';
import Basic from './Basic';
import Comp3 from './Comp3';

function App() {
  let t1 = `The first part is called The "Pledge" `;
  let t2 = `The second  part is called The "Turn" `;
  let t3 = `The Third part is called as "Prestige"`
  let text = `This is my String`;
  let bool = true;
  let greet = '';
  const [name , changeName ] = useState('')

    const change = () => {
      bool = !bool;
      document.getElementById('str').style.color =  bool? 'red' : 'blue' ;
    }

    const change_name = (n) => {
      // name = n;
      // document.getElementById('greet').
    }

    // const changeName = (val) =>{

    // }

    const changefn2 = (name) => {
      console.log(name);
      document.getElementById('greet').innerText = name;
      greet = name;
      // changeName(name)

      // window.location.reload();
    }

  return (
    <>
      <h1 style={{ color: 'red', fontSize : '43px', }}>React</h1>
      <p style={{ padding:'10px 20px', textAlign:'center',}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti quam possimus at. Quae iste vel placeat rerum veniam iusto ipsum assumenda quo veritatis vitae. Corrupti ex reiciendis assumenda vel.</p>
      <br />

      <h3  className={modStyle.h3}> CSS Module <span>styling</span>  </h3>
      <button className={modStyle.click} onClick={ change }>Click Me!</button>

      <button className={modStyle.click} onClick={ () => { changefn2('Peter')} }>Change name </button>

      <button className={modStyle.click} onClick={ () => { changeName('Peter')} }>Change name with state </button>

      <p id="str"> {text} </p>
      <p style={{ textAlign:'center'}}> Hello <span id="greet"></span></p>

      <p style={{ textAlign:'center'}}> Hello <span id="greet">{name}  </span></p>

      <Prestige part={t1} />
      <Basic part={t2} year={1890}  />
      <Comp3 part={t3}  time={'13:00'} />
    </>
  )
}

export default App
