import { db } from "../firebase/startfirebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"


async function CreatePost (text){
    const Post = await addDoc(collection(db, "Posts"), {
        content : text
      });
}
export { CreatePost };