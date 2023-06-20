const email = document.querySelector('.email')
email.onclick = function(){
    document.querySelector('body').style.backgroundColor = 'white'
    document.querySelector('body').style.color = 'black'
    document.querySelector('header').style.backgroundColor = 'black'
    document.querySelector('header').style.color = 'white'
    email.style.color = 'black'
    
}