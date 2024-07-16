import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';


const Temp = ({temp}) => {
    return (
        <div className="box">
                <Gauge
                value={temp}
                startAngle={-110}
                endAngle={110}
                sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 30,
                    transform: 'translate(0px, 0px)',
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: temp > 30 ? '#ff0000' : '#52b202',
                      },
                }}
                text={
                    ({ value, valueMax }) => `${value} °C`
                }
                />
        </div>
    );
}

export default Temp;