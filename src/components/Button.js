import React from 'react'

export default function Button(props) {
  const handleClick = (e) => {
    console.log('Button clicked!', props.children);
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button 
      type={props.type || "button"}
      onClick={handleClick} 
      style={props.style} 
      className={props.className}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}
