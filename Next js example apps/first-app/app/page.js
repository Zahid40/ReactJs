"use client" //this gona tell us where the js runs on server(default ) or on browser , Now this js run on browser
import React from 'react'

const page = () => {

  const handlepostreq = async ()=>{
    let data = {
      name : "Zahid" , role : "Coder"
    }


    const a = await fetch("/api/add" , {
      method:"POST" , 
      headers : { contentType:"application/json"} ,
      body:JSON.stringify(data)}
      )

      let res = await a.json();
      console.log(res); 
  }

  return (
    <div>
      <h1 className="text-sm">Hello</h1>
      <button onClick={handlepostreq}>POST data Request</button>
    </div>
  )
}

export default page
