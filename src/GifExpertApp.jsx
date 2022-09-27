import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const HandleCategory = (value) => {
        // console.log(value)
        if (categories.includes(value)) return
        setCategories([value,...categories])
    }
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory
                //    setCategories={setCategories} 
                onNewCategory={HandleCategory}
            />


            {
                categories.map(category => {
                    return <GifGrid key={category} category={category} />
                })
            }


        </>
    )
}

export default GifExpertApp
