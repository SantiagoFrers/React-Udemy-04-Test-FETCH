import {useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {

const [state, setstate] = useState({
    data:[],
    loading: true
});

useEffect( ()=> { //se ejecuta la 1º vez
    getGifs(category) // busca getGits con las categorias que existan
        .then( imgs => {
            // agregamos 3 segundos para poder ver el "Cargando"
            setTimeout( () =>{
                setstate({
                    data: imgs,
                    loading: false
                });
            }, 1000);
        })
}, [category])

return state

}

export default useFetchGifs
