import { auth, db } from "../firebase/startfirebase.js";
import { collection, addDoc, query, onSnapshot, Timestamp, doc,getDocs,getDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"


async function CreatePost (text){
  try {
    const Post = await addDoc(collection(db, "Posts"), {
      content : text,
      likes : [],
      uid: auth.currentUser.uid,
      likesCounter:0,
      datepost: Timestamp.fromDate(new Date()),
    })
  } catch (error) {
      console.log(error)
  }

}
const getPosts = (callback) =>{
  const q = query(collection(db, "Posts"));
const unsubscribe = onSnapshot(q, (postData) => {
  postData.forEach((doc) => {
   callback (doc.data())
  });
  const btnDelete = document.querySelectorAll(".deleteBtn")
  btnDelete.forEach(btn => {
  btn.addEventListener("click", (event)=>{
    console.log(event)
  })
})
});


}
export { CreatePost,getPosts };

