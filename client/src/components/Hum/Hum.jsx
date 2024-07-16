import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';


const Hum = ({hum}) => {
    return (
        <div className="box">
            <Gauge
            value={hum}
            startAngle={-110}
            endAngle={110}
            sx={{
                [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                transform: 'translate(0px, 0px)',
                },
                [`& .${gaugeClasses.valueArc}`]: {
                    fill: hum > 60 ? '#ff0000' : '#52b202',
                  },
            }}
            text={
                ({ value, valueMax }) => `${value} %`
            }
            />
        </div>

    );
    }

export default Hum;
