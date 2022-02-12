export const Form = () => {
    return(
        <div className="form">
            <label>Name</label><input className="form-inputs"/>
            <label>Email</label><input className="form-inputs"/>
            <label>Comment</label><textarea className="form-inputs"/>
        <button>Submit</button>
        </div>
    )
}