import React from 'react'
import { useForm } from 'react-hook-form';
const FormHome = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>React Hook Form</h1>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" {...register("name", { required: true })}></input>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password" {...register("password", { required: true, minLength: 6 })} />
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="Your email" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}></input>
                {Object.keys(errors).length !== 0 && (
                    <ul className="error-container">
                        {errors.name?.type === "required" && <li>Name is required</li>}
                        {errors.password?.type === "required" && <li>password is required</li>}
                        {errors.password?.type === "minLength" && <li>password must be 6 characters long</li>}
                        {errors.password?.type === "required" && <li>email is required</li>}
                        {errors.password?.type === "required" && <li>Invalid Email Address</li>}

                    </ul>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormHome