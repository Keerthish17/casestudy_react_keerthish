import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleLogin = async () => {
        let response = await fetch("https://reqres.in/api/login/", {
            method: 'POST',
            body: JSON.stringify({ email: email, password: pass }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        console.log(response);
        let serverRes = await response.json()
        console.log(serverRes);
        if (response.ok) {
            navigate('/home')
        }
        else {
            alert("wrong crdentials")
        }


    }
    return (
        <div>
            <Header />
            <section class="contact_section layout_padding-bottom">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Get In Touch
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-md-7">
                            <div class="form_container">


                                <div>
                                    <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" onChange={(e) => { setPass(e.target.value) }} />
                                </div>
                                <div>
                                    <a href='./signup' >dont have an account??</a>
                                </div>

                                <div class="btn_box">
                                    <button onClick={handleLogin}>
                                        LOGIN
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="img-box">
                                <img src="images/contact-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}

export default Login
