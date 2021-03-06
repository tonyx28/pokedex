import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import pokemonDetailReducer from './pokemon_detail_reducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  poke: pokemonDetailReducer
})

export default rootReducer;
