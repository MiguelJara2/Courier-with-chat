const socket=io();
const cajaPedidos = document.getElementById("contenedor_paquetes")

export function Mandar_mensaje(mensaje){
    socket.emit('cliente:manda_mensaje',mensaje)

}

export function Mandar_paquete(arr){
    socket.emit('cliente:manda_paquete',arr)
}

export function recibirPaquetes(){
    const arr = [];
    socket.on('server:mandarpaquetes',(data)=>{
        cajaPedidos.innerHTML=''
        data.forEach(element => {
            cajaPedidos.innerHTML+=`<div class="package-item"><span>${element.paquete} - ${element["ubicación"]}</span><button class="recibido" id="${element.id}">RECIBIDO</button></div>`;
            arr.push(`${element.id}`)
        });
        data.forEach(element =>{
            const button = document.getElementById(element.id);
            if (button) {
                button.addEventListener("click",(e)=>{
                    e.preventDefault();
                    console.log(`Botón con id ${element.id} clickeado`)
                    eliminarPaquete(element.id);
                })
            }
        })
        

    })
    return arr
};

export function eliminarPaquete(id){
    socket.emit('cliente:recibiopaquete',id)
}

export function recibirMensajes(){
    socket.on('server:mandarmensaje',(data)=>{
        const chatContainer = document.getElementById("message-box");
        chatContainer.innerHTML=''
        data.forEach(element => {
            chatContainer.innerHTML+=`<div class="message-item"><span>${element.user}</span><p>${element.message}</p></div>`;
        });
        
    })
}



