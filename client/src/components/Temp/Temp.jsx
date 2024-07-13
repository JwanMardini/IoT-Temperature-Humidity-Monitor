import './Temp.css';

const Temp = ({temp}) => {
    return (
        <div className="box">
            <div className="temp">
                <h3>Temperature</h3>
                <p>{temp}°C</p>
            </div>
        </div>
    );
}

export default Temp;