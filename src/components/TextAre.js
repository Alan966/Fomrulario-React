const TextAre = ({label,  type, value, name, }) => {
    return(
        <div className="ed-item form__item">
        <label htmlFor={name}>
            { label }
            <textarea
            type={type}
            id={name} 
            defaultValue={value}/>
        </label>
    </div>
    )
}
export default TextAre;