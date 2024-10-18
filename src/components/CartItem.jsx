import React from 'react'
import toast from 'react-hot-toast'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { add, remove } from '../redux/Slices/cartSlice'

const CartItem = ({ item, index }) => {

  const dispatch = useDispatch()
  const removeFromCart = () => {
    dispatch.remove(item.id);
    toast.success("item removed successfully")
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} />
        </div>
        <div>
          <h1>{item.tile}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem