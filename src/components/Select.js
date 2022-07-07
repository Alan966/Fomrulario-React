const Selecet = ({label, value="", name, options=[]}) => {
    return(
        <div className="ed-item form__item">
        <label htmlFor={name}>
            { label }
            <select defaultValue={value}>
                <option value="">-Seleccionar-</option> 
                {
                    options.map(({v, content}) => {
                        return(
                            <option key={v} value={v}>{content}</option>
                        )
                    })
                }
            </select>
        </label>
    </div>
    )
}
export default Selecet;