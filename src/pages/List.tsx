import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../type/product';
type ProductManagerRemove = {
    products: ProductType[];
    onRemove: (id: number) => void
}

const List = (props: ProductManagerRemove) => {
    return (
        <div>

           
            <h2 className='mx-auto text-yellow-500 text-4xl'> Danh Sách Sản Phẩm   </h2>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                        <button className='pl-3'><a href="/add">Thêm mới</a></button>

                            <table className="min-w-full text-center table table-bordered">
                                
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            STT
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border" >
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Price
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Mô tả
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            IMG
                                        </th>
                                        <th scope="col-2" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Chức năng
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.products.map((item, index) => {
                                        return <tr>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{index + 1}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.name}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.price}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.desc}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.img}</td>
                                               <button onClick={() => props.onRemove(item._id)}>Xóa</button>
                                            <Link className='p-3' to={`/products/${item._id}/edit`}>Edit</Link> <br />
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default List;