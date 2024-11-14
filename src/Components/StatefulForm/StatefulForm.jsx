import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StatefulForm = () => {

    const [name, setName] = useState(null);
    const[email , setEmail] = useState(null);
    const[password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const notify = () => toast("Wow so easy !");


    const handleSubmit = e => {
        e.preventDefault();

        if(!name && !email){
            toast.error('Need name or email')
        }
        else if(password.length < 6){
            setError('Password must be 6 charecter')
        }
        else{
            console.log('Name :',name , '||' ,'Email :',email, '||', 'Password :',password );
            toast.success('Form submitted successfully!');
            setError('')
        }

        
        // console.log(password);
    }



    const handleNameChange = e =>{
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value)
    }

    return (
        <div>
              <form onSubmit={handleSubmit} >
                <input onChange={handleNameChange} type="text" name="name" placeholder="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" placeholder="Enter email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" placeholder="Enter password" required  />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
            <ToastContainer  />
        </div>
    );
};

export default StatefulForm;