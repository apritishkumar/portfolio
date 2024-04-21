/** 
 * Javascript Code v1 
 * **/ 


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

async function mainbody(){
    var body = document.getElementsByTagName('Body')[0]; 
    var bodytext = body.innerHTML; 
    body.innerHTML = '';  
    await sleep(1000);   
    body.innerHTML = bodytext; 
}
mainbody() 
