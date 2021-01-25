import useFetchGifs from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem";

const GifGrid = ( {category} ) => {

const {data: images, loading} = useFetchGifs(category);



return (
        <>
        <h3 className='animate__animated animate__fadeInUp'>{category}</h3>

        {loading && <p className='animate__animated animate__flash'>Loading</p>}
        {/* Otra forma de escribirlo
        {loading ? <p>Loading</p> : null} */}

        <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem
                        key={img.id}
                        {...img}
                        /> /* De esta manera enviamos cada item del objeto como props */
                     ))
                }
            </div>
        </>
    )
}

export default GifGrid