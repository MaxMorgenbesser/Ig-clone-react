import React, { useEffect,useState } from "react";
import PhotoView from "../component/PhotoView";
import { Photo } from "../models/photo";
import "./Feed.css"


function Feed() {
const [photos,setPhotos]=useState<Photo[]>([])
    useEffect(()=>{
        fetch('http://localhost:5001/photos')
        .then(res=>res.json())
        .then((data: Photo[])=>setPhotos(data))
        .catch(err=>console.log(err))
    },[])
    return (<>
    <h1>The Feed</h1>
    {photos.map((photo: Photo)=>{
        return <PhotoView key={photo._id} photo={photo} setPhotos={setPhotos}/>
        // return(<div key={photo._id}><img  src={photo.photoUrl} alt='Feed'></img><br/></div>)
    })}
    
    </>)
}
export default Feed