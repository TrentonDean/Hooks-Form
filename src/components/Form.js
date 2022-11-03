import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return(
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text form-control" id="basic-addon1">First Name: </span>
                <input type="text" name="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text form-control" id="basic-addon1">Last Name: </span>
                <input type="text" name="lastName" value={lastName} onChange={ (e) => setLastName(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text form-control" id="basic-addon1">Email: </span>
                <input type="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text form-control" id="basic-addon1">Password: </span>
                <input type="password" name="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text form-control" id="basic-addon1">Confirm Password: </span>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)} />
            </div>

            <div className="formData">
                <p className='formHeader'>Your Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>
    )
}

export default Form;