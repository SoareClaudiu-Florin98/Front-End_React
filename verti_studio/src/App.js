
import React from 'react';
import ReactDOM from 'react-dom';
import { useState,useEffect } from 'react';
import './design.css'
import Modal from 'react-modal'
import $ from "jquery"

import axios from "axios"
function App() {
  const [posts,setPost] = useState([]) ; 
  useEffect(async() => {
      axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts").then
      (res=>{
          console.log(res) ; 
          setPost(res.data) ; 
      })
      .catch(err=>{
          console.log(err)
      })
      
    })
  return (  
    posts.map(post=>
      <div class= "container" key = {post.id} 
      onClick = {
        ()=>{
            //Implementam modal ul 
        }
      } 
      onMouseEnter = {
        () =>{
            
            //implementam hover 
        }
      }
      onMouseLeave = {
        () => {
         //implementam hover 
        }
      }
      
      >
          <img src={post.thumbnail.small} class ="image"></img>
          <span class="dot1"></span>
          <span class="dot2"></span>
          <div class ="title"> 
          {post.title}
          </div>
          <div class= "content">{post.content}</div>
          <div class ="person">
              <span class="name">{post.author.name} - </span>
              <span class="role">{post.author.role} </span>
              <span class="date">Nov 25, 2020</span>
            </div>         
      </div>
    )
  )
   
  ;
}

export default App;
