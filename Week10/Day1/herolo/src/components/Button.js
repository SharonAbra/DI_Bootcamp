import './style.css';

export const Button = () => {
    return (
        <div className="container">
            <div className="city">Tel Aviv</div>
            <div className="favorites">
                <i class="fa-solid fa-heart"></i>
                <button>Add to favorites</button>
            </div>
        </div>
    )
}