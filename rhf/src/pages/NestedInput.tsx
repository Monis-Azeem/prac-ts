import { Controller, useForm, useFormContext, useWatch } from "react-hook-form"
import { z } from 'zod' 
import { Input } from "@/components/ui/input"

const schema = z.object({
  email: z.email(),
  password: z.string().min(8, { error: 'Password length should be minimum 8' }),
  emailNew : z.email()
})

export const NestedInput = () => {

    const {register, control} = useFormContext()

    // const {email} = useWatch<z.infer<typeof schema>>()

    // console.log('email from nested input', email)
    return (
        <>
        <label>Email new: </label>
        <Controller 
        render={({field}) => <Input {...field} />}
        name="emailNew"
        control={control}
        />
        {/* <input {...register('emailNew')} type="email" className="border-2 border-white"/> */}
        </>
    )
}