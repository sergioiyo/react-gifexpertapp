import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'



export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //Se hace el efecto para que solo se despare cuando cambie la categoria
    useEffect( () => {
        //Peticion HTTP
        getGifs( category )
            .then( imgs => {

                setstate({
                    data: imgs,
                    loading: false
                })
            })
    }, [ category ])

    return state; //{ data:[], loading: true};

}


