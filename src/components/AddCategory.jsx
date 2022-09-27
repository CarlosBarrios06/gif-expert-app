import { useState } from "react"

const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("One Punch Man")

    const inputChangeHandle = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmitHandle = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 2) return
        console.log(inputValue)
        // setCategories(categories => [...categories,inputValue])
        onNewCategory(inputValue.trim())
        setInputValue("")
    }
    
    return (
        <form onSubmit={onSubmitHandle}>
            <input type='text' placeholder='Buscar Gif' onChange={inputChangeHandle} value={inputValue} />
        </form>
    )


}

export default AddCategory
