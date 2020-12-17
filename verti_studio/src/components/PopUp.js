import React from 'react'
import './PopUp.css'
function PopUp(props) {
	
	return(
		<div class= "container2">
			<div class="popUp">
				<div class="topBar">
					<span onClick = {props.closePopUp} class="exit"> X </span>
				</div>
				<img src = {props.data.thumbnail.small} alt="" class="thumbnail"/>
				<h2 class="title"> {props.data.title} </h2>
				<p class="text"> {props.data.content} </p>
				
				<img src ={props.data.author.avatar}  class ="avatar"/> 
				
				<span class="author"> {props.data.author.name} - {props.data.author.role} </span>
			</div>
		</div>
		
	)
}

export default PopUp;