import React from "react";

import { useForm } from "react-hook-form";

function FormValidation ({addStudent}) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        addStudent(data.username);

        alert("Form submitted successfully!");

        console.log(data);
        reset();
    };

    return (
        <div className="container-box">
            <h2>Student Registration Form</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Name: </label>
                <br />

                <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("username", { 
                        required: "Name is required", 
                        minLength: {
                            value: 5,
                            message: "Name must be at least 5 characters long"
                        }
                    })}
                />
                <br />
                {errors.username && 
                    <p className="error"> 
                        {errors.username.message} 
                    </p>
                }

                <br />
                <label> Email: </label>
                <br />

                <input
                    type="text"
                    placeholder="Enter your email"
                    {...register("email", { 
                        required: "Email is required", 
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Please enter a valid email address"
                        }
                    })}
                />
                <br />
                {errors.email && 
                    <p className="error"> 
                        {errors.email.message} 
                    </p>
                }

                <br />
                <label> Age: </label>
                <br />

                <input
                    type="number"
                    placeholder="Enter your age"
                    {...register("age", {
                        required: "Age is required",
                        min: {
                            value: 18,
                            message: "Age must be at least 18"
                        },
                        max: {
                            value: 60,
                            message: "Age must be less than or equal to 60"
                        }
                    })}
                />
                <br />
                {errors.age && 
                    <p className="error"> 
                        {errors.age.message} 
                    </p>
                }

                <br />

                <button type="submit"> 
                    Submit 
                </button>

                </form>
        </div>
    );
}

export default FormValidation;