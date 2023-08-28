const cart = document.getElementById('cart_summary')
const cart2 = document.getElementById('cart_summary2')
const checkButton = document.getElementById('cart_button')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const quantity = document.getElementById('quantity')
const amount = document.getElementById('amount')
const total = document.getElementById('total')
const product = document.getElementsByClassName('product_img')
const mini = document.getElementsByClassName('mini')
const thumb1 = document.getElementById('thumb1')
const thumb2 = document.getElementById('thumb2')
const thumb3 = document.getElementById('thumb3')
const thumb4 = document.getElementById('thumb4')
const bluff = document.getElementById('bluff')
const lightBox = document.getElementById('light_box')
const mainBody = document.getElementById('main_body')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const next2 = document.getElementById('next2')
const prev2 = document.getElementById('prev2')
const close = document.getElementById('close')
const overlay = document.getElementById('overlay')
const overlay2 = document.getElementById('overlay2')
const lightImg = document.getElementById('light_img')
const lightThumb1 = document.getElementById('light_thumb_1')
const lightThumb2 = document.getElementById('light_thumb_2')
const lightThumb3 = document.getElementById('light_thumb_3')
const lightThumb4 = document.getElementById('light_thumb_4')
const cartNumber = document.getElementById('cart-number')
const close2 = document.getElementById('close2')
const popout = document.getElementById('pop-out')
const menu = document.getElementById('menu')


var quan = 0;
var price = 0;
let test = 0;
let testOut = 0



menu.onclick = () =>{
    popout.classList.toggle('active')
    overlay2.classList.toggle('active')
}
close2.onclick = () =>{
    popout.classList.remove('active');
    overlay2.classList.remove('active')

}



//function to add and remove items to cart
plus.onclick = () =>{
    quan += 1;
    quantity.innerText = quan
    price = 125 * quan;
    amount.innerText = quan
    cartNumber.style.display = "block"
    cartNumber.innerText = quan 
    
    total.innerText = "  $" + price.toFixed(2)
    if(price >= 125 && cart2.classList.contains('active')){
        cart2.classList.remove('active')
        cart.classList.add('active')
    }
 
    
}

minus.onclick = () =>{
    if(quan < 1){
        return
    }
    else{
        quan -= 1
        quantity.innerText = quan
        amount.innerText = quan
        price = 125 * quan;
        total.innerText = "  $" + price.toFixed(2)
        if(quan == 0){
            cartNumber.style.display = "none"
        }
        else{
            cartNumber.innerText = quan
        }
        if(price == 0 && cart.classList.contains('active')){
            cart.classList.remove('active')
            cart2.classList.add('active')
        }
        
    }
}

//function to open cart
checkButton.onclick = () =>{
    if(price > 0){
        cart.classList.toggle('active')
        
    }
    else{
        cart2.classList.toggle('active')
        
    }
}

srcList = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
]

//function to switch large image on click
const displayImage = (pic) =>{
    bluff.src = pic
} 
thumb1.onclick = () =>{
    displayImage(srcList[0]);
    thumb1.classList.add('active')
    thumb2.classList.remove('active')
    thumb3.classList.remove('active')
    thumb4.classList.remove('active')
   
    

}
thumb2.onclick = () =>{
    displayImage(srcList[1])
    thumb2.classList.add('active')
    thumb1.classList.remove('active')
    thumb3.classList.remove('active')
    thumb4.classList.remove('active')

}
thumb3.onclick = () =>{
    displayImage(srcList[2])
    thumb3.classList.add('active')
    thumb2.classList.remove('active')
    thumb1.classList.remove('active')
    thumb4.classList.remove('active')

}
thumb4.onclick = () =>{
    displayImage(srcList[3])
    thumb4.classList.add('active')
    thumb2.classList.remove('active')
    thumb3.classList.remove('active')
    thumb1.classList.remove('active')

}

if(bluff.src == srcList[0]){
    thumb1.classList.toggle('active')
}

//function to close and open lightbox
bluff.onclick = () =>{
    lightBox.style.display = "block";
    overlay.classList.toggle('active')
    test = 0
}
close.onclick = () =>{
    lightBox.style.display = "none";
    overlay.classList.remove('active')
    changeLightImage(srcList[0])
    test = 0
    
}

//function to change lightbox image when clicking thumbnails

const changeLightImage = (lightpic) =>{
    lightImg.src = lightpic
}

lightThumb1.onclick = () =>{
    changeLightImage(srcList[0])
    lightThumb1.classList.add('active')
    lightThumb2.classList.remove('active')
    lightThumb3.classList.remove('active')
    lightThumb4.classList.remove('active')
    
}
lightThumb2.onclick = () =>{
    changeLightImage(srcList[1])
    lightThumb2.classList.add('active')
    lightThumb1.classList.remove('active')
    lightThumb3.classList.remove('active')
    lightThumb4.classList.remove('active')
    
}
lightThumb3.onclick = () =>{
    changeLightImage(srcList[2])
    lightThumb3.classList.add('active')
    lightThumb2.classList.remove('active')
    lightThumb1.classList.remove('active')
    lightThumb4.classList.remove('active')
    
    
}
lightThumb4.onclick = () =>{
    changeLightImage(srcList[3])
    lightThumb4.classList.add('active')
    lightThumb2.classList.remove('active')
    lightThumb3.classList.remove('active')
    lightThumb1.classList.remove('active')
    
    
}





//function for next and previous buttons on lightbox

next.onclick = () =>{
    if(test == 0){
        changeLightImage(srcList[1])
        test = 2
    }
    else if(test == 2){
        changeLightImage(srcList[2])
        test = 3
    }
    else if(test == 3){
        changeLightImage(srcList[3])
        test = 4
    }

}

prev.onclick = () =>{
    if(test == 2){
        changeLightImage(srcList[0])
        test = 0
    }
    else if(test == 3){
        changeLightImage(srcList[1])
        test = 2
    }
    else if(test == 4){
        changeLightImage(srcList[2])
        test = 3
    }

}

//function for next and previous buttons on mobile display
next2.onclick = () =>{
    if(test == 0){
        displayImage(srcList[1])
        test = 2
    }
    else if(test == 2){
        displayImage(srcList[2])
        test = 3
    }
    else if(test == 3){
        displayImage(srcList[3])
        test = 4
    }

}

prev2.onclick = () =>{
    if(test == 2){
        displayImage(srcList[0])
        test = 0
    }
    else if(test == 3){
        displayImage(srcList[1])
        test = 2
    }
    else if(test == 4){
        displayImage(srcList[2])
        test = 3
    }

}
