import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const SignUp = () => {

    const {createUser}  = useContext(AuthContext)

    const handleSignUP = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('form sign up' , email, password);


        createUser(email, password )
        .then(result =>{
            console.log('user created at fb',result.user);
            const createdAt = result.user?.metadata.creationTime;

            const newUser = {name, email, createdAt}

            // Save new user info to the database 
            fetch('https://coffee-store-server-chi-five.vercel.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),

            })
            .then(res=>res.json())
            .then(data => {
                console.log('user created to db', data);
                if(data.insertedId){
                    console.log('User created in database');

                }
            })
        })
        .catch(error =>{
            console.log('ERROR',error);
            alert('Error creating user. Please try again.')
        })
        
    }

    

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
            
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUP} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name"
                 className="input input-bordered"
                  required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email"
                 className="input input-bordered"
                  required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;