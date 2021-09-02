import { Search } from './Search'
import { Current } from './Current'
import { Button } from './Button'
import { Forecast } from './Forecast'
import './style.css';

export const Main = () => {
    return (
        <div className="general">
            <Search/>
            <Button/>
            <Current/>
            <Forecast/>
        </div>
    )
}
