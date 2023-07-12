import { useCallback, useState } from 'react';
import {Card} from '../Card/Card';


export const SearchForm = ({
    onSearch
}) => {
    const [city, setCity] = useState('Karachi');
    const [experience, setExperience] = useState('Budget');
    const [swimmingPool, setSwimmingPool] = useState(false);

    const searchCallback = (event) => {
        event.preventDefault();
        if(onSearch){
            onSearch({
                city,
                experience,
                swimmingPool
            });
        }
    };
    return <Card>
        <form onSubmit={searchCallback}>
            <select value={city} onChange={event => setCity(event.target.value)} aria-label="cities">
                <option>Karachi</option>
                <option>Islamabad</option>
                <option>Lahore</option>

            </select>
            <select value={experience} onChange={event => setExperience(event.target.value)} aria-label="experience">
                <option>Budget</option>
                <option>Business</option>
                <option>Luxury</option>
            </select>
            <label htmlFor="swimming-pool">Swimming Pool?</label>
            <input checked={swimmingPool} onChange={event => setSwimmingPool(event.target.checked)} name="swimming-pool" type="checkbox"/>
            <button type="submit">Search</button>
        </form>
    </Card>
};