import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import 'antd/dist/antd.css';
import './Doctor.css';

function Doctor(doctor) {
  return (
    <Card className='doctor-card'
          cover={
            <img className='doctor-image'
                 alt='example'
                 src={doctor.mainImage}
            />
          }
    >
      <Meta
        avatar={<Avatar src={`https://joeschmoe.io/api/v1/random?${Math.random()}`} />}
        title={doctor.name}
      />
      <div>
        Especialty: {doctor.specialty?.name}
      </div>
    </Card>
  );
}

export default Doctor;