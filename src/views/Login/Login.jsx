import { appendErrors } from "react-hook-form"
import InputGroup from "../../components/InputGroup"


const Login = () => {
  
  
  return (
    <div className="Login">
      <div className="m-3">
        <h1>Login</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          label= "Email"
          id="email"
          register={register}
          error={errors.email?.message}
          type="email"
          />
        <InputGroup
        label= "Password"
        id="password"
        register={register}
        errors={error || errors.password?.message}
        type="password"
        />
        <button className= {`btn btn-${isSubmitting ? 'secondary' : 'primary'}`}>{isSubmitting ? 'Loggin in...' : 'Submit'}</button>
        </form>
      </div>
    </div>
  )
}

export default Login

