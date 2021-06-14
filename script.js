
num=JSON.parse(localStorage.getItem('arr'))
if(num==undefined)
{
	num=[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
	localStorage.setItem('arr',JSON.stringify(num))
	console.log('num is initialized')
}

message=JSON.parse(localStorage.getItem('mess'))
console.log(`Value of message is ${message}`)
if(message==undefined)
{
	message=[]
}
order=JSON.parse(localStorage.getItem('ord'))
console.log(`Value of order is ${order}`)
if(order==undefined)
{
	order=[]
}
if(order!=undefined)
{
	for(i=0;i<order.length;i++)
	{
		newnode=document.createElement('div');
		dp=document.createElement('span')
		dp.innerHTML=message[i]
		var att2 = document.createAttribute("id");   
		att2.value = `p${order[i]}`;                   
		dp.setAttributeNode(att2)



		db1=document.createElement('button');
		db1.innerText= 'Done'
		db1.backgroundColor='white'
		db1.color='black'
		
		var att1 = document.createAttribute("id");
		att1.value = `b${order[i]}`;
		db1.setAttributeNode(att1)



		db=document.createElement('button');
		db.innerText='X';
		db.style.color='red'
		
		db.style.backgroundColor = "green";
		var att = document.createAttribute("id");      
		att.value = `a${order[i]}`;                   
		db.setAttributeNode(att);

		console.log(`The id of this button is ${db.id}`)
		
		db1.style.float='right'
		db.style.float='right'


		newnode.appendChild(dp)
		newnode.appendChild(db1)
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


}


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
			

			db1=document.createElement('button');
			db1.innerText= 'Done'
			db1.backgroundColor='white'
			db1.color='black'
			
			var att1 = document.createAttribute("id");
			temp=num.pop()   
			att1.value = `b${temp}`;
			db1.setAttributeNode(att1)


			db=document.createElement('button');
			db.innerText='X';
			db.style.color='red'
			
			db.style.backgroundColor = "green";
			var att = document.createAttribute("id");   
			att.value = `a${temp}`;                   
			db.setAttributeNode(att);
			
			console.log(`The id of this button is ${db.id}`)

			var att2 = document.createAttribute("id");   
			att2.value = `p${temp}`;
			dp.setAttributeNode(att2)

			db1.style.float='right'
			db.style.float='right'
			

			newnode.appendChild(dp)
			newnode.appendChild(db1)
			newnode.appendChild(db)
			newnode.style.marginTop='5px'
			newnode.style.marginBottom='10px'
			newnode.class= `an`;
			newnode.id=`an${db.id}`
			console.log(`Class of node is ${newnode.class}`)
			console.log(`ID of node is ${newnode.id}`)
			ref=document.getElementById('dummy')
			ref.appendChild(newnode)
			order.push(`${temp}`)
			message.push(a)
			localStorage.setItem('arr',JSON.stringify(num))
			localStorage.setItem('ord',JSON.stringify(order))
			localStorage.setItem('mess',JSON.stringify(message))
		}

})

document.getElementById('btn1').addEventListener("click",()=>
{
	document.getElementById('task-list').innerHTML=''
	tempar=document.createElement('p')
	tempar.setAttribute('id', 'dummy')
	document.getElementById('task-list').appendChild(tempar)
	num=[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
	order=[]
	message=[]
	localStorage.setItem('arr',JSON.stringify(num))
	localStorage.setItem('ord',JSON.stringify(order))
	localStorage.setItem('mess',JSON.stringify(message))
})


document.addEventListener('click',function(e){
    
    for(i=1;i<16;i++)
    {
    	if(e.target && e.target.id== `a${i}`) 		// Line 37 to Line 50 are my learnings in this project
    	{
          	temp=document.getElementById(`ana${i}`);
          	num.push(i)
          	index=order.indexOf(`${i}`)
          	order.splice(index,1)
          	message.splice(index,1)
          	localStorage.setItem('arr',JSON.stringify(num))
			localStorage.setItem('ord',JSON.stringify(order))
			localStorage.setItem('mess',JSON.stringify(message))
          	temp.parentNode.removeChild(temp)
          	console.log(`Button ${i} removed`)
    	}
    	if(e.target && e.target.id== `b${i}`) 		// Line 37 to Line 50 are my learnings in this project
    	{
          	temp1=document.getElementById(`p${i}`).innerText
          	message[i-1]=temp1.strike()
          	document.getElementById(`p${i}`).innerHTML=temp1.strike()
          	localStorage.setItem('mess',JSON.stringify(message))
    	}
    }
 });




