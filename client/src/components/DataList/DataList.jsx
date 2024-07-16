import './DataList.css'

const DataList = ({data}) => {
    return (
        <>
        <h2 className="title" >Data from Raspberry Pi Pico W:</h2>
        <ul className="list">
          {data.map((item, index) => (
            <li className="items" key={index}>{
              <>
                <div>
                  <p className="item-title">Temperature: {item.temp} °C</p>
                </div>
                <div>
                  <p className="item-title">Humidity: {item.humidity} %</p>
                </div>
                <div>
                  <p className="item-title">Color: {item.color}</p>
                </div>
                <div>
                  <p className="item-title">Time: {item.date}</p>
                </div>
              </>
              }
              </li>
          ))}
        </ul>
        </>
    )
}

export default DataList;
