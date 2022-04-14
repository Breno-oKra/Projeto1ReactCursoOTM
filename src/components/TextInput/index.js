import './styles.css'
export const TextInput = ({searchValue,handleChange}) => {
    return(
        <input 
        className='text-input'
        onChange={handleChange}
        placeholder={'type your search'}
        type="search"
        value={searchValue}/>
    )
}