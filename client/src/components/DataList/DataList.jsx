import './DataList.css'

const DataList = ({data}) => {
    return (
        <>
        <h2 className="title" >Data from Raspberry Pi Pico W:</h2>
        <ul className="list">
          {data.map((item, index) => (
            <li className="item" key={index}>{
              JSON.stringify(item)
              }
              </li>
          ))}
        </ul>
        </>
    )
}

export default DataList;
