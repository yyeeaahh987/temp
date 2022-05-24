import { useState, useEffect } from "react";
import Axios from "axios";


const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password:'',
        password2: '',
        userType: 'community',
        certImage: null
    });
    const [certImages, setCertimages] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    // const handleImagechange = e => {
    //     setCertimages(e.target.files[0])
    // };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));

        // const formData = new FormData();
        // formData.append('certImage', certImages);

        Axios.post("http://localhost:3001/signup", {
            firstName: values.firstName,
            lastName: values.lastName,
            mobile: values.mobile,
            email: values.email,
            password: values.password,
            userType: values.userType,
            certImages: values.certImage
        }).then((response) => {
            console.log(response)
        })

        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return { handleChange, values, handleSubmit, errors };

};

export default useForm;