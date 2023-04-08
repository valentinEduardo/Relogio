let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

let dia = document.querySelector('#d')
let mes = document.querySelector('#me')
let ano = document.querySelector('#a')

var date = new Date();
let d = date.toLocaleDateString('pt-br')

 dia.innerHTML = d


setInterval(()=>{
hh = date.getHours().toLocaleString()
mm = date.getMinutes().toLocaleString()
ss = date.getSeconds().toLocaleString()
h.innerHTML = hh<10? '0'+hh+':':hh+':'
m.innerHTML = mm<10? '0'+mm+':':mm+':'
s.innerHTML = ss<10? '0'+ss:ss
},1)
