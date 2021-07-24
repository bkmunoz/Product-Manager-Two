import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {
    const [myForm, setMyForm] = useState({
        title: "",
        price: "",
        description: ""
    })

    const [errors, setErrors] = useState({});

    const onChangeHandle = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", myForm)
            .then(res => {
                if(res.data.err) {
                    console.log("There was an issue submitting this form!");
                    setErrors(res.data.err.errors)
                } else {
                    console.log("Form submitted successfully!");
                }
            })
            .catch(err => console.log("Something went wrong with the POST request!", err))
    }
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit} className=" text-left">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="form-control" onChange={onChangeHandle} value={myForm.title}/>
                    {
                        errors.title ? 
                        <span className="text-danger">{errors.title.message}</span> 
                        : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" className="form-control" onChange={onChangeHandle} value={myForm.price}/>
                    {
                        errors.price ? 
                        <span className="text-danger">{errors.price.message}</span> 
                        : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" className="form-control" onChange={onChangeHandle} value={myForm.description}/>
                    {
                        errors.description ? 
                        <span className="text-danger">{errors.description.message}</span> 
                        : ""
                    }
                </div>
                <input type="Submit" value="Create Product" className="btn btn-info"/>
            </form>
        </div>
    );
}

export default Form;