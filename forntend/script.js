
document.getElementById('orderForm').addEventListener('submit', function(event) 
{
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const quantity = document.getElementById('quantity').value;
    const foodName = document.getElementById('foodName').value;
    const address = document.getElementById('address').value;

    
    if (username === 'your_username' && password === 'your_password') 
    {
        // Authentication successful
        alert('Order placed successfully!');
    } else 
    {
        // Authentication failed
        alert('Authentication failed. Please try again.');
    }
});

const bgMusic = document.getElementById('bgMusic');
const soundButton = document.getElementById('soundButton');

let isPlaying = false;

soundButton.addEventListener('click', function() 
{
    if (isPlaying) 
    {
        
        bgMusic.pause();
        soundButton.textContent = 'Sound On';
    } else 
    {
        
        bgMusic.play();
        soundButton.textContent = 'Sound Off';
    }
    
    isPlaying = !isPlaying;
});
