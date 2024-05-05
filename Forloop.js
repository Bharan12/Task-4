let json = [
    {
    Name : "Bharanidharan", 
    mail : "Bharani@gmail.com",
    Course : "Full stack development",
    Task  : "For the given JSON iterate over all for loops (for, for in, for of, forEach)"
  }
]

//For loop
  for(let i = 0; i < json.length; i++) {
  console.log(json[i]);
  }


//For in
for (let i in json) {
  console.log(json[i])
}

//For of
for (let i of json){
    console.log(json)
}

//For each
json.forEach((e)=>{
    console.log(e)
})