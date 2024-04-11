import React from 'react'
import { useFormik } from 'formik';
import './Signup.css'

function Signup () {
    var messages = 'signup successful'
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        onSubmit: values  => {
            if (values === "") {
                alert("can't submit please chechk the input")
                  console.log("just dey play");
                
            }else{
                // alert(JSON.stringify(values));
                console.log(values);
                alert(messages)
            }
    
        },
    });
    return (
        <>
        <main className='bg-primary form-control'>
            <h3 className='m-auto text-danger' id='h3'>Dev Nonsoglobal</h3>
         <form id='mains' onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                className='text-info form-control'
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onTouchCancel={formik.handleChange}
                className='text-danger form-control'
                value={formik.values.lastName}
            />
            <label htmlFor="email">Email Address</label>
            <input
            className='text-warning form-control'
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
             <label htmlFor="email">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className='form-control text-success'
            />
            <button id='btns' className='btn btn-info' type="submit">Submit</button>
            
                <p>Already have an account<strong>please login Here</strong></p>
            
        </form>
       
        <marquee className='text-success fs-4 w-50' behavior="" direction="left">SQI is the BEST for ict</marquee>
        <marquee className='text-info fs-3 fw-2 w-50' behavior="" direction="right">Dev Nonsoglobal</marquee>
        </main>
        </>
    )
}

export default Signup

// import React from 'react';


// const SignupForm = () => {
    
//     return (
       
//     );
// };