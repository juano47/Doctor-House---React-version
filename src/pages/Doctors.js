import Doctor from '../components/Doctor';
import { useEffect, useState } from 'react';
import './Doctors.css';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../api/endpoints';

function Doctors(props) {
  const [doctors, setDoctors] = useState([]);
  const { page, size } = props;
  const navigate = useNavigate();
  const handleClickLoadMore = () => navigate('/doctors');

  const updateDoctors = (data) => {
    //Important: parse to JSON
    const parsedData = JSON.parse(data);
    setDoctors(doctors => [...doctors, parsedData]);
  };

  useEffect(() => {
    //more info in:
    // https://github.com/sofiacarballo10/Doctor_House/blob/feature/api-v2-get-doctors-event-source/src/app/services/resource.service.ts
    const eventSource = new EventSource(`${BASE_URL}/doctors/stream?page=${page}&size=${size}`);

    eventSource.onmessage = (event => {
      console.log('On message: ', eventSource.readyState);
      updateDoctors(event.data);
    });

    eventSource.onerror = (ev) => {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };

  }, []);

  let loadMoreCardDiv;
  if (props.loadMoreCard) {
    loadMoreCardDiv =
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: '50px',
      }}>
        <Button type='primary' ghost
                onClick={handleClickLoadMore}
        >
          Load more..
        </Button>;
      </div>;
  }

  return (
    <div>
      <h1>Doctors</h1>
      <div style={{ display: 'flex' }}>
        <div className='doctors-container'>
          {doctors.map((doctor, index) => {
            return <Doctor key={index} {...doctor} />;
          })}
        </div>
        {loadMoreCardDiv}
      </div>
    </div>
  );
}

export default Doctors;