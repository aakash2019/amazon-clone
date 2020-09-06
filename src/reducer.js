export const getBasketTotal = (basket) => (
	basket?.reduce((amount, item) => item.price + amount, 0)
)

export const initialState = {
	basket: [],
	user: null
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			};
		case 'ADD_TO_BASKET':
			// Logic for adding to basket
			return {
				...state,
				basket: [...state.basket, action.item]
			}
			break;
		case 'REMOVE_FROM_BASKET':
			// Logic for removing from basket

			// we cloned the basket
			let newBasket = [...state.basket];

			// we check the index of the item
			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

			if (index >= 0) {
				// item exists in the basket, remove it
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.id}) as its not in the basket`)
			};

			return {
				...state,
				basket: newBasket
			}
			break;
		default:
			return state;
	}
}

export default reducer;