   let username = sessionStorage.getItem("username")
   console.log(username)
   let userNameMessage = document.getElementById("userNameMessage")
   userNameMessage.innerHTML=username

   function displayDate(){
    let date = new Date()
    console.log(date)
    console.log(date.getFullYear())
    let dateMessage = document.getElementById("dateMessage")
    dateMessage.innerHTML= date
   }

   let a = 10
   let b = 10
   if(a==b){
    console.log('==')
   }
   if(a==b){
    console.log("===")
   }
   let c='10'
   if(a==c){
    console.log("a==c")
   }
   if(a===c){
    console.log("a===c")
   }