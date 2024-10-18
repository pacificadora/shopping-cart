import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'

const CartItem = ({ item, index }) => {
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
            <div>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem