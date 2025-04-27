import { useForm, type FieldValues } from "react-hook-form"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: {errors, isSubmitting},
    reset
  } = useForm()

  const onSubmit = async (data: FieldValues) => {
    // TODO: Submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000))

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="w-60 h-3/4 mx-auto p-5 border rounded-md flex justify-center items-center flex-col gap-5"
    >
      <div>
        <label htmlFor="email">
          <Input
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 20,
                message: "Email must be at least 20 characters"
              },
            })}
            className="bg-gray-200 w-full"
            placeholder="Email..."
            type="email"
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            },
          })}
            className="bg-gray-200 w-full"
            placeholder="Password..."
            type="password"
          />
          {errors.password && (
            <p className="text-red-500">{`${errors.password.message}`}</p>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="password">  
          <Input
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === getValues("password") || "Password must match",
          })}
            className="bg-gray-200 w-full"
            placeholder="Confirm Password..."
            type="password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
          )}
        </label>
      </div>

      <div 
      className="text-sm text-gray-500 flex gap-1"
        > <span>Create an account</span> 
        <Link to={"/signup"} className="underline">Signup</Link>
      </div>

      <Button
        className="w-full cursor-pointer disabled:bg-gray-500"
        disabled={isSubmitting}
        type="submit"
      >Submit</Button>
    </form>
  )
}

