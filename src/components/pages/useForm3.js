import React,{ useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import {
    getCurrentLatLng,
    getAddressByLatLng,
} from './GoogleMapFunction'

const useForm3 = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        treeName: '',
        species: '',
        ageClass: '',
        healthCondition: '',
        structuralCondition: '',
        foliageDensity: '',
        lean: '',
        signsOfpestsanddisease: '',
        fruit: '',
        leafColor: '',
        numOftree: '',
        location: '',
        date: '',
        treeImageorvideo: null,
        description: ''
    });

    // const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    };
    
    const handleGetLocation = async (e)=> {
        const { name } = e.target
        console.log(`handleGetLocation`)
        let getCurrentLatLngResult = await getCurrentLatLng()
        console.log(getCurrentLatLngResult)
        if (getCurrentLatLngResult.code !== "0") {
            return
        }
        let getAddressByLatLngResult = await getAddressByLatLng(getCurrentLatLngResult.lat, getCurrentLatLngResult.lng)
        console.log(getAddressByLatLngResult)
        if (getAddressByLatLngResult.code !== "0") {
            return
        }
        console.log(getAddressByLatLngResult.fullAddress)

        setValues({
            ...values,
            [name]: getAddressByLatLngResult.fullAddress
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        // setIsSubmitting(true);
    };

    const submitSurvey = e => {
        Axios.post("http://localhost:3001/submit", {
            treeName: values.treeName,
            species: values.species,
            ageClass: values.ageClass,
            healthCondition: values.healthCondition,
            structuralCondition: values.structuralCondition,
            foliageDensity: values.foliageDensity,
            lean: values.lean,
            signsOfpestsanddisease: values.signsOfpestsanddisease,
            fruit: values.fruit,
            leafColor: values.leafColor,
            numOftree: values.numOftree,
            location: values.location,
            date: values.date,
            treeImageorvideo: values.treeImageorvideo,
            description: values.description
        }).then(() => {
            console.log("success")
            navigate('/user')
        })
        // .finally(()=>{
        //     navigate('/user')
        // })
    };

    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && isSubmitting) {
    //         callback();
    //     }
    // }, [errors]);

    return { handleChange, values, handleSubmit, submitSurvey, handleGetLocation };

};

export default useForm3;
// import { useState, useEffect } from "react";
// import Axios from "axios";


// const useForm = () => {
//     const [values, setValues] = useState({
//         treeName: '',
//         species: '',
//         ageClass: '',
//         healthCondition: '',
//         structuralCondition: '',
//         foliageDensity: '',
//         lean: '',
//         signsOfpestsanddisease: '',
//         fruit: '',
//         leafColor: '',
//         numOftree: '',
//         location: '',
//         date: '',
//         treeImageorvideo: null,
//         description:''
//     });

//     // const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = e => {
//         const {name, value} = e.target
//         setValues({
//             ...values,
//             [name]: value
//         });
//     };
    
//     const handleSubmit = e => {
//         e.preventDefault();
        
//         // setIsSubmitting(true);
//     };

//     const submitSurvey = e => {
//         Axios.post("http://localhost:3001/submit", {
//             treeName: values.treeName,
//             species: values.species,
//             ageClass: values.ageClass,
//             healthCondition: values.healthCondition,
//             structuralCondition: values.structuralCondition,
//             foliageDensity: values.foliageDensity,
//             lean: values.lean,
//             signsOfpestsanddisease: values.signsOfpestsanddisease,
//             fruit: values.fruit,
//             leafColor: values.leafColor,
//             numOftree: values.numOftree,
//             location: values.location,
//             date: values.date,
//             treeImageorvideo: values.treeImageorvideo,
//             description:values.description
//         }).then(() => {
//             console.log("success")
//         })
//     };

//     // useEffect(() => {
//     //     if (Object.keys(errors).length === 0 && isSubmitting) {
//     //         callback();
//     //     }
//     // }, [errors]);

//     return { handleChange, values, handleSubmit, submitSurvey };

// };

// export default useForm;