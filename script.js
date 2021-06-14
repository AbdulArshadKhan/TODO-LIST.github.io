num=[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
/*let btns = document.getElementsByClassName("an")
*/

document.getElementById("txt").addEventListener("keyup",function(event)
{
	if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
})




document.getElementById("btn").addEventListener("click", ()=>
{
	console.log('Button Clicked')
		a=document.getElementById("txt").value;
		document.getElementById("txt").value=''
		if(a.length>0 && num.length>0)
		{
			newnode=document.createElement('div');
			dp=document.createElement('span')
			dp.innerHTML=a
			newnode.appendChild(dp)
			db=document.createElement('button');
			db.innerText='X';
			db.style.color='red'
			db.style.float='right'
			db.style.backgroundColor = "green";
			var att = document.createAttribute("id");       // Create a "class" attribute
			att.value = `a${num.pop()}`;                   // Set the value of the class attribute
			db.setAttributeNode(att);
			
			console.log(`The id of this button is ${db.id}`)
			newnode.appendChild(db)
			newnode.style.marginTop='5px'
			newnode.style.marginBottom='10px'
			newnode.class= `an`;
			newnode.id=`an${db.id}`
			console.log(`Class of node is ${newnode.class}`)
			console.log(`ID of node is ${newnode.id}`)
			ref=document.getElementById('dummy')
			ref.appendChild(newnode)
		}

	//console.log(document.getElementsByClassName("an").length)	
})

document.getElementById('btn1').addEventListener("click",()=>
{
	document.getElementById('task-list').innerHTML=''
	tempar=document.createElement('p')
	tempar.setAttribute('id', 'dummy')
	//document.getElementById('dummy').innerHTML='No Tasks Added'
	document.getElementById('task-list').appendChild(tempar)
	num=[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]	
})


document.addEventListener('click',function(e){
    
    for(i=1;i<16;i++)
    {
    	if(e.target && e.target.id== `a${i}`) 		// Line 37 to Line 50 are my learnings in this project
    	{
          	temp=document.getElementById(`ana${i}`);
          	num.push(i)
          	temp.parentNode.removeChild(temp)
          	console.log(`Button ${i} removed`)
   //        	if(num.length===15)
			// 	document.getElementById('dummy').innerHTML='No Tasks Added'
			// else
			// 	document.getElementById('dummy').innerHTML=''
    	}
    }
    //console.log(num.length)
 });




