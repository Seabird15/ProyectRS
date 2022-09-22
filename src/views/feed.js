import { loginRoot } from "../main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { auth } from "../firebase/startfirebase.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { db } from "../firebase/startfirebase.js";
import { collection, addDoc, getDoc, getDocs, orderBy, Timestamp, deleteDoc, updateDoc, query, doc, increment, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { CreatePost, getPosts } from "../services/databaseservice.js";




export function feedView() {
  const root = document.createElement("div");
  root.setAttribute ("id", "containerFeed")

  const divNav = document.createElement("div")
  divNav.setAttribute("class", "divNav")
  root.appendChild(divNav)

  //IMGLOGOFEED
  const logoFeed = document.createElement("img")
  logoFeed.src ="./img/logotransparente.png"
  logoFeed.setAttribute("id","logoFeed")
  divNav.appendChild(logoFeed)
  //INPUT SEARCH 
  const inputSearchFeed = document.createElement("input")
  inputSearchFeed.setAttribute("class","inputSearch")
  inputSearchFeed.setAttribute("placeholder", "Busca amigos")
  divNav.appendChild(inputSearchFeed)
  //BTNS NAV 
  const btnUserNav = document.createElement("button")
  btnUserNav.setAttribute("class", "btnNav")
  btnUserNav.textContent ="user"
  divNav.appendChild(btnUserNav)
 //boton de cerrar sesion
  const btnLogOutNav = document.createElement("button")
  btnLogOutNav.setAttribute("class", "btnNav")
  btnLogOutNav.setAttribute("id", "btnLogOut")
  btnLogOutNav.setAttribute("type", "submit")
  btnLogOutNav.textContent ="LogOut"
  btnLogOutNav.addEventListener("click", ()=>{
    signOut(auth).then(()=> {
      //alerta cierre sesion
      Swal.fire("Haz cerrado sesion")
    })
  })
  divNav.appendChild(btnLogOutNav)

  //caja de publicacion
  const inputFeedState = document.createElement("input")
  inputFeedState.setAttribute("class","inputFeedState")
  inputFeedState.setAttribute("id","valueInputFeed")
  inputFeedState.setAttribute("placeholder","¿Qué estas pensando?")
  inputFeedState.setAttribute("type","text")
  root.appendChild (inputFeedState)
  //btnPublicarFeed 
  const btnStateFeed = document.createElement("button")
  btnStateFeed.textContent ="Publicar"
  btnStateFeed.addEventListener("click", (e)=>{
    e.preventDefault();
    const valueInputFeed = document.querySelector("#valueInputFeed").value;
    console.log(valueInputFeed)
    //CreatePost("Hola")
    CreatePost(valueInputFeed);
    inputClear();
  });

  //limpiar input despues de publicar 
  const inputClear = () =>{
    document.querySelector('#valueInputFeed').value = "";
  }
  root.appendChild(btnStateFeed)

  getPosts((post)=> {
    console.log(post)
    //div
    const postBox = document.createElement("div");
    postBox.setAttribute("class", "postBox");
    root.appendChild(postBox);
    //btn like
    const likedBtn = document.createElement("button")
    likedBtn.setAttribute("id","likeBtn")
    likedBtn.textContent ="like"
    postBox.appendChild(likedBtn)
    //btn delete post
    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class","deleteBtn")
    deleteBtn.textContent = "Borrar"
    postBox.appendChild(deleteBtn)
    //content post
    const PostCard = document.createElement("p");
    PostCard.setAttribute("class", "postCard")
    PostCard.innerHTML = post.content;
    postBox.appendChild(PostCard);
    


  }) 
  


  //no funciona uwu
    // const liked = document.querySelectorAll('#imgUser');
    // liked.addEventListener('click', ()=> {
    //   const like = e.target.dataset.idlikes;
    //   const selectedPost = e.target;
    //   console.log(like)
    // })


  return root;
}
