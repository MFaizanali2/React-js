import { useForm } from "react-hook-form";
import Header from "../Components/Header"

const Contact = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <div>
      <Header/>
      <div className=" bg-gray-700 flex justify-center items-center p-7 ">
      {/* <form className="flex flex-col items-center justify-center bg-slate-400 gap-5 w-1/2 p-3" onSubmit={handleSubmit(onSubmit)}>
      <input className="placeholder:text-slate-600 text-lg"  {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("", { min: 18, max: 99 })} />
      <input className="bg-green-400 w-3/5" type="submit" />
    </form> */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register("firstName", { required: true })} 
        aria-invalid={errors.firstName ? "true" : "false"} 
      />
      {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

      <input 
        {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} 
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}
      
      <input type="submit" />
    </form>
      </div>
    </div>
  )
}

export default Contact
