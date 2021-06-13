num=[17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
/*let btns = document.getElementsByClassName("an")
*/
document.getElementById("btn").addEventListener("click", ()=>
{
		a=document.getElementById("txt").value;
		document.getElementById("txt").value=''
		if(a.length>0 && num.length>0)
		{
			newnode=document.createElement('div');
			dp=document.createElement('p')
			dp.innerHTML=a
			//dp.style.display='inline';
			newnode.appendChild(dp)
			db=document.createElement('button');
			db.innerText='X';
			db.style.color='red'
			db.style.float='right'
			db.style.backgroundColor = "green";
			var att = document.createAttribute("id");       // Create a "class" attribute
			att.value = `a${num.pop()}`;                           // Set the value of the class attribute
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
//console.log(document.getElementsByClassName("an").length)
document.addEventListener('click',function(e){
    
    for(i=1;i<18;i++)
    {
    	if(e.target && e.target.id== `a${i}`)
    	{
          	temp=document.getElementById(`ana${i}`);
          	num.push(i)
          	temp.parentNode.removeChild(temp)
          	console.log(`Button ${i} removed`)
    	}
    }
    //console.log(num.length)
 });




