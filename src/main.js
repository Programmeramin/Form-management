// const btn = document.querySelector('#btn');

// function btnclick(){
//     alert()
// }

//niche je btnclick function ta jodi niche jodi amra first bracket diye use kori tahole click korar agei function call hoye jabe

// btn.addEventListener('click', function(event){
     // console.log(event.target);
     // console.log(this);
// });


// const btn = document.querySelectorAll("#btn");

// btn.forEach((item) =>{

//    item.addEventListener("click", function(){
//     item.style.backgroundColor = 'blue';
//    })

// });

// const p = document.querySelectorAll(".actions p");

// p.forEach((item, index) =>{
//     item.addEventListener("click", function(){
//         item.style.backgroundColor = 'blue';
//         item.style.color = 'white';
//         item.innerHTML = `${item.innerText} <i class="fa-solid fa-check"></i>`;
//     })
// })

// const btn = document.querySelectorAll(".actions button");

// btn[0].addEventListener('click', function(){
//     btn[0].style.backgroundColor = 'red';
//     btn[0].style.color = 'white'
//     btn[0].style.border = 'none'
// })


// const btn = document.querySelectorAll(".actions button");

// btn.forEach((item, index) =>{
//     item.addEventListener("click", function(){
//         if(index == 0){
//             item.style.backgroundColor = 'red';
//         }else if(index == 1){
//             item.style.backgroundColor = 'blue';
//         }else if(index == 2){
//             item.style.backgroundColor = 'green';
//         }else if(index == 3){
//             item.style.backgroundColor = 'pink';
//         }
      
     
//     });
// });



// btn.forEach((item, index) =>{
//     item.addEventListener("click", function(){
//             item.style.backgroundColor = 'red';
//     });

//     item.addEventListener("dblclick", function(){
//         item.style.backgroundColor = 'pink';
// });

// });


// p.forEach((item, index) =>{


//     item.addEventListener("click", function(){
//         item.style.backgroundColor = 'red';
//         item.style.color = 'white';

//         item.innerHTML = `${item.innerText} <i class="fa fa-check"></i> `

//     });
// });


// const btn = document.querySelector(".actions button");


//btn.addEventListener("click", function(e){
    // console.log(event.target);
    // console.log(this);
    // e.target.style.backgroundColor = 'red';
    // this.style.backgroundColor = 'red';

//})

// btn.onclick = () =>{

//     //arrow function a this kaj korena 
//     btn.style.backgroundColor = 'red';
// }


/**
 * Keypress
 * keydown
 * keyup
 */



//const input = document.querySelector(".actions input");

//const h1 = document.querySelector(".actions h1")

// input.addEventListener("keypress", function(){
//     console.log('done');
// })

// input.addEventListener("keydown", function(){
//     console.log('done');
// })

//input.addEventListener("keyup", function(e){
    // console.log('done');
    // console.log(e.key);
  //  const value = e.target.value;
   //h1.innerHTML = value;


//});
  


// const input = document.querySelector(".actions input");


// input.onfocus = () =>{
//     console.log('fucussssss');
// }


// input.onblur = () =>{
//     console.log('blurrrrr');
// }

// input.addEventListener('change', function(){
//     console.log('changeeeeeeeeee');
// })


// const input = document.querySelector('.actions input.fs');

// const color = document.querySelector('.actions input.color');

// const span = document.querySelector(".actions span");

// const h1 = document.querySelector(".actions h1");

// input.oninput = (e) =>{
//     const val = e.target.value;
//     h1.innerHTML = val;
// }

// input.oninput = (e) =>{
//     const val = e.target.value;
//     span.innerHTML = val; 
//     h1.style.fontSize =`${val}px`
// };

// color.oninput = (e) =>{
//     const val = e.target.value;
//     h1.style.color =`${val}`
// };


createAlert = (msg, type = 'danger') =>{
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}
    <button class="btn-close" data-bs-dismiss="alert"></button>
</p>`;
};


// /**
//  * Mobile number checking
//  */

const isMobile = (mobile) =>{

    const pattern = /^(01|\+880|8801)[0-9]{9}$/;
    return pattern.test(mobile)
}


// /**
//  * Mobile number checking
//  */

const isEmail = (email) =>{

    const pattern = /^[a-z0-9\._]*@[a-z0-9]{1,}\.[a-z0-9]{1,9}$/;
    return pattern.test(email)
}



const userForm = document.querySelector('#userForm');
const userPhoto = document.querySelector('.userPhoto');
const userPhotoPreview = document.querySelector("#userPhotoPreview")
const msg = document.querySelector(".msg");

userForm.onsubmit = (e) =>{
    e.preventDefault();

    const form_data = new FormData(e.target); 
    
    const data = Object.fromEntries(form_data);

    // validation

    if(!data.name.trim() || !data.email.trim() || !data.mobile.trim()){
        msg.innerHTML = createAlert('All field are required')
    }else if(!isEmail(data.email)){
        msg.innerHTML = createAlert('Invalid email address, "warning"')
    }else if(!isMobile(data.mobile)){
        msg.innerHTML = createAlert('Invalid mobile number, "info"')
    }else{
        msg.innerHTML = createAlert('Data Stable', 'success')
    }
    

}



// User photo preview


    //  userPhoto.onchange = (e) =>{
    // //    for(let i = 0; i < e.target.files.length; i++){
    // //     console.log(e.target.files[i]);
    // // }

    
    // const imageUrl = URL.createObjectURL(e.target.files[0]);
    // // console.log(imageUrl);
    // userPhotoPreview.setAttribute('src', imageUrl)

    // }


    userPhoto.onchange = (e) =>{
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        userPhotoPreview.setAttribute('src', imageUrl)
    }


//     /**
//      * Gallery Photo show
//      */

    

/**Sobji list */

// let foods = ['Alu', 'Lao', 'Potol']; 
// const root = document.querySelector(".root");

// const  ul = document.createElement("ul");

// foods.forEach((item) =>{
//     const li = document.createElement("li");

//     li.innerHTML = item;
//     ul.appendChild(li)

// });

// root.appendChild(ul);


