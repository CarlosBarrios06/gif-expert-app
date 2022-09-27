import useGetFetchGifs from '../hooks/useGetFetchGifs';
import GiftItem from './GiftItem';

const GifGrid = ({ category }) => {
    const {isLoading, img} = useGetFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {isLoading ? <h3>Cargando Imagenes</h3> : null}
            <div className='grid-list'>
                {
                    img.map(image => {
                        return <GiftItem key={image.id} title={image.title} url={image.url} 
                        // {...image} <--- esparcir las propiedades en objetos grandes
                        />
                    })
                }
            </div>

        </>
    )
}

export default GifGrid
