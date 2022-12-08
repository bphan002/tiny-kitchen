import React from 'react'
import { useState } from 'react'

const OrderForm = form => {
    const [orderForm, setOrder] = useState({
        nadfdme: '',
        address: '',
        items: ''
    })

    return (
        <div className="container">
            <form action="">
                <label htmlFor="name">Name</label>
                <input
                    type="text" 
                    name="name"
                    placeholder="Pleae enter name" 
                    id="name"
                />
                <label htmlFor="address">Address</label>
                <input 
                    type="text" 
                    name="address"
                    placeholder="Please enter address"
                    id="name"
                    />
                <label htmlFor="items">Items</label>
                <input 
                    type="text" 
                    name="items" 
                    id="items"
                    />

                <input 
                    type="radio" 
                    name="toppings" 
                    id="sausage"
                />
                <label htmlFor="sausage">Sausage</label>
                <input 
                    type="radio" 
                    name="toppings" 
                    id="mushroom"
                />
                <label htmlFor="mushroom">Mushroom</label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default OrderForm