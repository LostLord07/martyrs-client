import '../styles/Login.css'
import { useContext, useState } from 'react'
import axios from "axios"
import { Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../App'

export default function Login(){

    const navigate= useNavigate()
    const {state, dispatch} = useContext(UserContext)
    const [data, setData] = useState({userName:'', passwd:''})

    const handleChange= eve => {
        const {name, value}= eve.target
        setData(prev=>{
            return {...prev, [name]: value}
        })
    }
    
    async function login(e){
        e.preventDefault();
    
        axios.post('https://safe-stray-life.herokuapp.com/login',{ user: data.userName, passwd: data.passwd }) 
        .then(res => {
            
            if(res.data.status!=='ok') alert(res.data.error)
            else {
                dispatch({type:"NavToggle", payload: true})
                navigate('/')
                localStorage.setItem('token', res.data.token)
            }
        } )
        .catch(err => console.log(err)) 
    }
 
    return (
        <div className='login-bg'>
        <div className='log-box'>
            <div><h3>Start your journey with us</h3></div>
            <div className='log1'>
            <button className='lr login' to='/login'>Login</button>
            <button className='lr reg' to='/register'>Register</button>
            {/* <button className='lr reg' to='/register'>HAHA</button> */}
            </div>
            
            <form onSubmit={login} className='log-form' method='post'>
                <label>
                    UserName:
                    <input type='text' name='userName' placeholder='Enter your user name here: ' required value={data.userName} onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input type='password' name='passwd' placeholder='password)' required value={data.passwd} onChange={handleChange}/>
                </label>
                {/* <input type='submit' value='Login' className='log-sub'/> */}
                <button type='submit' value='Login' className='log-sub'>Login</button>
            </form>
        </div>
        </div>
    )
}