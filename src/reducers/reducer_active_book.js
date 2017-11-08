// State argument is not application sae
// ECS 6 if state is undefined set it as null
export default function (state = null, action) {
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}