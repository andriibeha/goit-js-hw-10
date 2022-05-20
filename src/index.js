import './css/styles.css';
import { fetchCountries } from "./server/fetchCountries.js";


console.log(fetchCountries('jap')).then(data => { 
    console.log(data.length)
})




const DEBOUNCE_DELAY = 300;


