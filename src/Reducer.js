
export const initialstate={
    items:[],
  }







  
export const cartreducer=(state,action)=>{
    switch (action.type){
        case "ADD_TO_CART":
            if(action.payload==="" || state.items.includes(action.payload)){
                return state
            }
            console.log(action.payload)
            return {
                items: [...state.items,action.payload]
            }
        case "REMOVE_FROM_CART":
            console.log(action.payload.name)
            return {
                ...state,
                items:state.items.filter(x=>x.name!=action.payload.name)
            }
        case "ADD_COUNT":
            state.items.map(item=>{
                if(item.name===action.payload.name){
                    item.quantity++
                }
            })
            return {
                ...state,
                items:state.items
            }
        case "MINUS_COUNT":
            state.items.map(item=>{
                if(item.name===action.payload.name){
                    item.quantity-=1
                }
            })
            return {
                ...state,
                items:state.items
            }
        default:
            return state
    }
}