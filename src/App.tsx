import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import SignIn from './pages/SignIn'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/Dashboard'
import { ProductType } from './type/product'
import { add, list, remove, update } from './api/product'
import Cart from './components/Cart'
import Add from './pages/Add'
import Edit from './pages/Edit'
import List from './pages/List'
import { signup } from './api/user'
import SignUp from './pages/SignUp'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [users, setUser] = useState<ProductType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
 // xóa
 
// thêm
const onHandleremove = async (id: number) => {
  remove(id)
  setProducts(products.filter(item => item._id !== id));
}
const onhandlerAdd = async(product:any)=>{
  const {data} = await add (product)
  setProducts([...product,data])
}
// sửa
const onHandlerUpdate = async (product:ProductType)=>{
  try {
    const {data} = await update (product);
    setProducts(products.map (item => item._id === data._id ? product : item))
  } catch (error) {        
  }
}
const onHandleSignup = async (user:any) =>{
  const {data} = await signup(user)
  setUser([...users, data]);
}


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Cart product ={products} />} />
          <Route path='/list' element={<List products={products} onRemove={onHandleremove}/>}/>
          <Route path='/add' element={<Add name='kien' onAdd={onhandlerAdd}/>} />
          <Route path='/products/:id/edit' element={<Edit onUpdate={onHandlerUpdate}/>} />
          <Route path='/products/:id' element={<ProductDetail/>} />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path='/signup' element={<SignUp name='kien' onAdd={onHandleSignup} />} />
        <Route path='dashboard' element={<Dashboard/>}>
        
        <Route path="product">
          <Route index element={<List products={products} onRemove={onHandleremove} />} />

          </Route> 
          </Route> 
      </Routes>
    </div>
  )
}

export default App
