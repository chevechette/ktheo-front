export interface CreateArtwork {
    title:string,
    description:string,
    creator:string,
    creationLocation:string,
    isRestricted:boolean,
    estimatedPrice:string,
    owner:number,
    category:number,
    tags:string[],
  }