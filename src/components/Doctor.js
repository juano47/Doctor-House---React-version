import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import 'antd/dist/antd.css';
import './Doctor.css';
import { useRef } from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

function Doctor(doctor) {
  let avatarUrl = useRef(`https://joeschmoe.io/api/v1/random?${Math.random()}`);
  const favoriteDoctors = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  function handleFavoriteSwitch(id) {
    //if the doctor is already in the favorites list, remove it
    if (favoriteDoctors.get(id)) {
      dispatch({ type: 'favorites/removeFavorite', payload: { doctorId: id } });
    } else {
      dispatch({ type: 'favorites/addFavorite', payload: { doctorId: id } });
    }
  }

  return (
    <Card className='doctor-card'
          cover={
            <div className='doctor-card-cover'>
              <FaHeartbeat
                id={doctor.id}
                className='favorite-icon'
                style={{ color: favoriteDoctors.get(doctor.id) ? 'red' : 'white' }}
                onClick={() => {
                  handleFavoriteSwitch(doctor.id);
                }} />
              <img className='doctor-image'
                   alt='example'
                   src={doctor.mainImage}
              />
            </div>
          }
    >

      <Meta
        avatar={<Avatar src={avatarUrl.current} />}
        title={doctor.name}
      />

      <div>
        Specialty: {doctor.specialty}
      </div>
    </Card>
  );
}

export default Doctor;