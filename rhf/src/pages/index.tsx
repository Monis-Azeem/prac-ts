import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NestedInput } from './NestedInput'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Inbox } from 'lucide-react'
import { useRouter } from 'next/router'

const schema = z.object({
  email: z.email(),
  password: z.string().min(8, { error: 'Password length should be minimum 8' }),
  emailNew : z.email()
})

type FormFields = z.infer<typeof schema>

export default function Home() {

  const router = useRouter()

  const methods = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      emailNew: ''
    }
  })

  const { register, handleSubmit, formState: { errors, isSubmitting, isDirty, dirtyFields, isValid }, setError, control, watch } = methods

  // const emailWatchValue = watch('email')

  // console.log('email value-->', emailWatchValue)

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data, 'data')
  }

  return (
    <>
    <FormProvider {...methods}>
      <form className="flex flex-col p-5 bg-black text-white gap-2" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email : </label>
        <Controller
          render={({ field }) => <Input {...field} className='border-2 border-white' />}
          name='email'
          control={control}
        />
        <div className="text-red-500">{errors.email?.message}</div>
        <label htmlFor="password">Password : </label>
        <Controller
        render={({field})=> <Input {...field}/>} 
        name='password'
        control={control}
        />
        {/* <input {...register('password')} type="password" name="password" className="m-2 border-2 p-2" /> */}
        <div className="text-red-500">{errors.password?.message}</div>
        <NestedInput />
        <div className="text-red-500">{errors.emailNew?.message}</div>
        <Button type='submit' className="border-2 bg-yellow-300 w-20 rounded-sm text-black" disabled={!isValid || isSubmitting || !isDirty}>{isSubmitting ? 'Loading...' : 'Submit'}</Button>
        {/* <button type="submit" className="border-2 bg-yellow-300 w-20 rounded-sm text-black" disabled={isSubmitting}>{isSubmitting ? 'Loading...' : 'Submit'}</button> */}
        <div className='text-red-500'>{errors.root?.message}</div>
      </form>
    </FormProvider>
    <Button onClick={()=> router.push('/new')}>Navigate to Account Page</Button>
    </>
    
  );
}
