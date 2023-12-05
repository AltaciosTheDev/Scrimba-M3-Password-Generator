const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Variable limit reached
limitReached = false

//DOM variables needed
let passwordOneEl = document.getElementById('password-one-el')
let passwordTwoEl = document.getElementById('password-two-el')

//Declare generatePasswords Function
function generatePasswords(){
    //If will only allow the function to work when the limit has not been reached 
    if(limitReached == false){
        for(let i=0;i<15;i++){
            //Generate random index
            let randomIndexOne = Math.floor(Math.random() * characters.length)
            let randomIndexTwo = Math.floor(Math.random() * characters.length)
            //Render the change in the password elements 
            passwordOneEl.textContent += characters[randomIndexOne]
            passwordTwoEl.textContent += characters[randomIndexTwo]
        }
        //After the for loop the limit for the characters has been reached 
        limitReached = true
    }
}

//Declare clearPasswords function 
function clearPasswords(){
        passwordOneEl.textContent = ''
        passwordTwoEl.textContent = ''
        //After clear password, the limit has been reset
        limitReached = false
}

//Add event listener for clear passwords
clearPassBtn.addEventListener("click", clearPasswords)

