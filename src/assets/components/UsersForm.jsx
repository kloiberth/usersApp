import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({getUsers, userSelected, deselectUser}) => {

    const{handleSubmit, register, reset} = useForm();

    useEffect(() => {
        if(userSelected) {
            reset(userSelected);
        } else{
            reset(
                {
                    email: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    birthday: ""
                  }
            )
        }
    }, [userSelected]);

    const submit  = (data) => {
        if(userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
            .then(() =>{
                getUsers()
                deselectUser()
            })
        } else{
            axios.post('https://users-crud1.herokuapp.com/users/', data)
            .then(() => getUsers()) 
            .catch(error => console.log(error.response.data))
        }
        
    }

    return (
        <form action="" onSubmit={handleSubmit(submit)} className="form">
            <div className="form__full-name">
                <label htmlFor="firstName"><i className="fa-solid fa-user"></i></label>
                <input {...register("first_name")} type="text" placeholder="first name" id="firstName"/>
                <label htmlFor="lastName"></label>
                <input {...register("last_name")} type="text" placeholder="last name" id="lastName"/>
            </div>
            <div className="form__info">
                <div className="info__container">
                    <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                    <input className="date" {...register("email")} type="email" placeholder="email" id="email"/>
                </div>
                <div className="info__container">
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                    <input className="date" {...register("password")} type="password" placeholder="password" id="password"/>   
                </div>
                <div className="info__container">
                    <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
                    <input {...register("birthday")} type="date" id="birthday"/>
                </div>
               
            </div>
            
            <div className="form__button">
                <button className="button" style={{backgroundColor: "#20dbd8"}}>upload</button>
                {
                    userSelected && (<button className="button" style={{backgroundColor: "#cf1649"}} type="button" onClick={deselectUser}>cancel</button>)
                }
            </div>
        </form>
    );
};

export default UsersForm;