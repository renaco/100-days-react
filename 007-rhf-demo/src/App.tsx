import { useEffect } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    handleSubmit(onSubmit)();
  }, []);

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        type="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email format',
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App
