let qrcode = document.querySelector("#qrcode");
let qrcode_text = document.querySelector("#qrcode_text");
let qrbtn = document.querySelector("#qrbtn");
qrcode_text.addEventListener("input" , ()=>{
    let data = qrcode_text.value;
    if(data == ""){
        qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?&data=Example`
    }else{
        qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?&data=${data}`
    }
})
qrbtn.addEventListener("click" , ()=>{
     data = qrcode_text.value;
    if(data == ""){
        qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?&data=Example`
    }else{
        qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?&data=${data}`
    }
})

