//variables
const fotousuario = document.querySelector('#fotousuario')
const nombreusuario = document.querySelector('#nombreusuario')
const apellidousuario = document.querySelector('#apellidousuario')
const direccionusuario = document.querySelector('#direccionusuario')
const telefonousuario = document.querySelector('#telefonousuario')
const correousuario = document.querySelector('#correousuario')

// funciones
const generarUsuario = async () => {
    try {
    const url = 'https://randomuser.me/api/?gender=male';
    const respuesta =  await fetch(url);
    const { results } = await respuesta.json();
    const datos = results [0]

    fotousuario.src = datos.picture.large;
    nombreusuario.textContent = datos.name.first;
    apellidousuario.textContent = datos.name.last;
    direccionusuario.textContent = datos.location.street.name;
    telefonousuario.textContent = datos.phone;
    correousuario.textContent = datos.email;
    
    } catch (error) {
    console.log(error)
    }
}
 
document.addEventListener('DOMContentLoaded', generarUsuario)

