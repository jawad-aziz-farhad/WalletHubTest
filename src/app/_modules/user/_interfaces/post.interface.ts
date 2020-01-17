export interface IPost {
    user : { avatar : string , userName : string , firstName : string , lastName : string },
    text : string, 
    images : string[] ,
    video : string , 
    likeCount : number , 
    replyCount : number,
    createdAt: Date
  }
  