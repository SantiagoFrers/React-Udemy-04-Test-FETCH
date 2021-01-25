import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Thunder Cats'])
    //UseState desestructurado

/*     const handleAdd = () => {
        setCategories([...categories, 'El laboratorio de Dexter'])
        //setCategories(cats=> [...cats, 'El laboratorio de Dexter']) es otra forma de agregar
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
                    <ol>
                        {
                            categories.map( (category) =>(
                                <GifGrid 
                                key={category}
                                category={category} />
                            ))
                        }
                    </ol>

{/* El boton se uso para insertar valores, se comenta porque empezamos a usar el componente AddCategory */}
            {/* <button onClick={ handleAdd } >Agregar</button> */}

{/* Se uso cuando estabamos probando el AddCategory, se comenta para usar el GifGrid */}
{/*             <ol>
                { categories.map( category => <li key={ category }> {category} </li> ) }
            </ol>
 */}
        </>
        )
};

export default GifExpertApp;