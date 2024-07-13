import './Hum.css';

const Hum = ({hum}) => {
    return (
        <div className="box">
            <div className="hum">
                <h3>Humidity</h3>
                <p>{hum}%</p>
            </div>
        </div>

    );
    }

export default Hum;
