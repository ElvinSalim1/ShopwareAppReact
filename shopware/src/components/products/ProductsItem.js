import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/actions/productsActions'
import Products from './Products';

export default function ProductsItem() {

  const dispatch = useDispatch()
  const productCatalog = useSelector(state => state.productCatalog)

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <div className="container-fluid text-white">
      <section>
        <div className="row pt">
          {
            productCatalog.map(product => {
              return <Products product={product} key={product._id}/>
            })
          }
        </div>
      </section>
    </div>
  )
}
