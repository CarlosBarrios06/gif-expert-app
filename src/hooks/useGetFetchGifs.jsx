import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';

const useGetFetchGifs = (category) => {
    const [img, setImg] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImg = async () => {
        const img = await getGifs(category);
        setImg(img)
    }

    useEffect(() => {
        getImg();
        setIsLoading(false)

    }, [])

  return {
    img, 
    isLoading
  }

}

export default useGetFetchGifs