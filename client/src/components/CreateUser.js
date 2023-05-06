import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { apiURL } from '../utils/constant'
import axios from 'axios'
function CreateUser() {


    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const register = async (event) => {
        event.preventDefault()
        const axiosInstance = axios.create({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (registerForm.password === registerForm.confirmPassword) {
            const response = await axiosInstance.post(`${apiURL}/create`, { username: registerForm.username, password: registerForm.password }
            )
            console.log(response)
        }

    }

    const { username, password, confirmPassword } = registerForm
    const onChange = event => setRegisterForm({ ...registerForm, [event.target.name]: event.target.value })
    return (
        <>
            <Form className='my-4 d-flex flex-column' onSubmit={register}>

                <Form.Group className='my-2 '>
                    <Form.Control value={username} onChange={onChange} type='text' placeholder='Username' name='username' required />
                </Form.Group >

                <Form.Group className='mb-2'>
                    <Form.Control value={password} onChange={onChange} type='password' placeholder='Password' name='password' required />
                </Form.Group>

                <Form.Group className='mb-2'>
                    <Form.Control value={confirmPassword} onChange={onChange} type='password' placeholder='Confirm Password' name='confirmPassword' required />
                </Form.Group>

                <Button variant='success' type='submit'>Register</Button>
            </Form>
            <p>
                Already have an account?
            </p>
        </>
    )
}

export default CreateUser