import {Order} from './Order.jsx'
import React from 'react'

const Orders = orders => {
    const ordersList = orders.map(order => {
        <Order key={order.id} order={order} />
    })

    return (
        <ul className='orders-list'>
            {ordersList}
        </ul>
    )
}

export default Orders

// class Orders2 extends React.Component {
//     constructor(props) {
//         super(props)
//     }
// }