import { Photo } from "../models/photo";
const url='http://localhost:5001/photos/'

export async function updateLike (photoId:string) : Promise<number>{

    //Patch /photo/{photo_ID}
    const fetchPhotos = await fetch(url+photoId,{
        method:"PATCH",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({likes:1})
        
    })
   
    const photo:Photo = await fetchPhotos.json()
    const newLikes= photo.likes || 0
    return newLikes
}

 
export async function getPhotos() : Promise<Photo[]>{

    try{
    const fetchPhotos = await fetch(url)
    const photoList:Photo[] = await fetchPhotos.json()
    return photoList   
}
catch(err){console.error(err)
return [] //can return an empty array - you promised to return a photo[] so ypu have to return an array
    }  
}

