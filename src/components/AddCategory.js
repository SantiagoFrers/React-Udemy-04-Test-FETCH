import { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputvalue] = useState('Hola Mundo') // Si quiero que no diga nada debo enviar un string vacia '', si lo dejo () sera undefined y pincha
    const handleInputChange = e => setInputvalue(e.target.value); // Capturo el valor puesto
    
    //Cuando hagan submit cortamos el formulario para que no haga refresh
    const handleSubmit = e => {
        e.preventDefault()

        if ( inputValue.trim().length > 2) {
        setCategories(cats=> [inputValue, ...cats]);
        // Lo ponemos con un callback ya que no tenemos acceso al estado inicial. Si quiesieramos tener acceso deberiamos enviar por las props categories y traerlo aqui
        //Usamos inputValue ya que una vez que lo modificamos con el setInputValue, se vuelve el inicial.
        setInputvalue(''); //Una vez que cargamos un valor deja el input vacio
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputValue} // El primer valor que mostrara
                    onChange={ handleInputChange }
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
    }

export default AddCategory
