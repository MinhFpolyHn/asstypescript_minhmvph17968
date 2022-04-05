import React,{useEffect} from 'react'
import {useForm,SubmitHandler}  from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
import { read } from '../api/product';


type Input = {
  name:string,
  price:number,
   desc:string,
   img:string
}

type EditProps = {
  onUpdate:(products:Input)=>void
}

const Edit = (props: EditProps) => {
  
  const {register,handleSubmit,formState:{errors},reset} = useForm<Input>();
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
      const getProducts= async()=>{
          const{data}= await read(id);
          reset(data)
          
          
      }
      getProducts();
  },[])
  const onSubmit :SubmitHandler<Input> = data =>{
    props.onUpdate(data)
    navigate('/list')

  }
  // Call API
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
           <label htmlFor="">Name</label>
       <input className='border mt-10' type="text" {...register('name',{required:true})} /> <br />
         {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
         <label htmlFor="">Price</label>
         <input  className='border mt-10'type="number" {...register('price')} /> <br/>
         <label htmlFor="">Mô tả</label>
         <input className='border mt-10' type="text" {...register('desc',{required:true})} /> <br/>
         <label htmlFor="">Img</label>
         <input className='border mt-10' type="text" {...register('img',{required:true})} /> <br/>

          <button>Update</button>
         
         
        </form>


    </div>
  )
}

export default Edit