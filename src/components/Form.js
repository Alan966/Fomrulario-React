const Form = ({children, formRef, accion}) => {
    return(
        <div className="ed-grid" >
            <form className="ed-container l-60" onSubmit={accion} ref={formRef} >
                {
                    children
                }
            </form>
        </div>
    )
}

export default Form;