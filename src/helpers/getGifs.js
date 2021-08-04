

export const getGifs= async( category ) => {
        
    //encodeURI remplaza espacios
    const url= `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=aJS9kvsHJ6NyP2x8opLiUdY4PIb2xEUl`;
    const resp= await fetch( url );
    const { data }= await resp.json();

    const gifs= data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;


}