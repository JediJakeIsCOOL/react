
function cartReducer(state, action){
    
    if(state === undefined){
        return {
            totalCost: 0, 
            productCart: [
                productName: 'fasd',
                productPrice: 4.99
            ]
        }
    }
    switch (action.type){

        case "addProduct":
            return{
                ...state,
                totalCost: state.totalCost + action.productData.productPrice,
                productCart: state.productCart.concat(
                    {
                    productName: action.productData.productName,
                    productPrice: action.productCart.productPrice
                    }
                )

            }
            case "deleteProduct":
            const updatedArray = state.productCart.filter(product => 
            product.productName != action.productData.productName)
            return {
                ...state,
                totalCost : state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray
            }

        default:
            return state;
            
    }
}