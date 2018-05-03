import React, { Component } from 'react';


import AddProduct from './AddProduct'
class Cart extends Component {
  render() {
    return (
      <div className="App">
        <table>
            <thead>
                <tr>
                    <th>
                        Product Name
                    </th>
                    <th>
                        Product Price
                    </th>
                    <th>
                        #
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                {this.props.productCart.map(productData => (
                    <tr><productData.productCart/tr>
                    <td>
                        
                 ) )}

            </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;
