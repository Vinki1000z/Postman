console.log("this is Postman");
// making diaply none and block of box1 and box2
let box2 = document.getElementById("box2");
let box1 = document.getElementById("box1");
box2.style.display = "none";

let json=document.getElementById("json");
let custome=document.getElementById("custome");
json.addEventListener("click",(e)=>{
    box2.style.display = "none";
    box1.style.display="block";
})
custome.addEventListener("click",(e)=>{
    box2.style.display = "block";
    box1.style.display="none";
})

//after  clicking plus bttn
let i=1;
function elementFromString(string){
    let div=document.createElement("div");
    div.innerHTML=string;
    return div.firstElementChild;
} 

let plus=document.getElementById("plus");
let html="";
plus.addEventListener("click",(e)=>{
    console.log("hit");

    // let box3=document.getElementById("box3");
    // console.log("this is add bttn");
    
    html=`<div class="conatiner">
     Enter Your Parameter 
    <input type="text" style="width: 350px;" name="Enter Your Paramter ${i+1} Key" placeholder="Enter Your Paramter ${i+1} Key" id="key${i+1}">
    <input type="text"  style="width: 350px;" name="Enter Your Paramter ${i+1} value" placeholder="Enter Your Paramter ${i+1} value" id="value${i+1}">
    <button class="btn btn-primary minus" >-</button><div>`
    i++;
    console.log(i);
    let ele=elementFromString(html);
    box3.appendChild(ele);
    // html.forEach((Element,index)=>{
    //     box2.innerHTML+=html;
    // })
    
    e.preventDefault();
        
})




// after clicking submit button 
url = document.getElementById("url").value;
get = document.getElementById("get");
post = document.getElementById("post");
json = document.getElementById("json");
custome = document.getElementById("custome");
let result=document.getElementById("result").value;

let submit = document.getElementById("submit");

submit.addEventListener("click", process);
function process(e) {
    console.log("submit button hit");
    let request=document.querySelector("input[name='Request']:checked").value;
    let content=document.querySelector("input[name='content']:checked").value;
    console.log(request);
    console.log(content);
    console.log(result);
    console.log(url);
    
    result="please wait";
    e.preventDefault();
}












































// get = document.getElementById("get");
// post = document.getElementById("post");
// request1(get, post);



// let form = document.getElementById("docform");
// form.addEventListener("submit", process);
// url = document.getElementById("url").value;
// function process(e) {
//     console.log("submit button hit");
//     e.preventDefault();
// }

// // for get and post
// function request1(get, post) {
//     if (get.checked) {
//         type1 = get.value
//         console.log(type1);
//         json = document.getElementById("json");
//         custome = document.getElementById("custome");
//         request2(json, custome);
//     }
//     else if (post.checked) {
//         type1 = post.value;
//         console.log(type1);
//         json = document.getElementById("json");
//         custome = document.getElementById("custome");
//         request2(json, custome);
//     }
// }
// // for json and custome

// function request2(json, custome) {
//     if (json.checked) {
//         type2 = json.value
//         console.log(type2)
//         // box1=document.getElementById("box1");
//         // box1.style.display="block"
//     }
//     else if (custome.checked) {
//         type2 = custome.value;
//         console.log(type2);
//         box2=document.getElementById("box2");
//         box2.style.display="block";
//         box1.style.display="none";
//     }
// }