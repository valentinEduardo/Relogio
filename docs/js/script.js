const hora = document.getElementById("horas")
const minuto = document.getElementById("minutos")
const segundo = document.getElementById("segundos")



const relogio = setInterval(()=>{
var date = new Date()
 hora.innerHTML = (date.getHours()<10)?"0"+date.getHours():date.getHours()
 minuto.innerHTML = (date.getMinutes()<10)?"0"+date.getMinutes():date.getMinutes()
 segundo.innerHTML = (date.getSeconds()<10)?"0"+date.getSeconds():date.getSeconds()
},1)