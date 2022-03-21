import React from 'react';
import logo from './logo.svg';
import './App.css';

function TextBox(props: any) {
  const handle = (event : any) =>{props.change(event.target.value)}
  return (
    <div className="Horoscope">
      <header className="Text-header">
        <label>
          {props.label}
          <input type="text" onChange={handle}/>
        </label>
      </header>
    </div>
  );
}

export default TextBox;