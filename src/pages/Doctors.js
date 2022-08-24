import Doctor from '../components/Doctor';
import { getData } from '../api/baseClient';
import { useEffect, useState } from 'react';
import './Doctors.css';

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getData('/doctors').then(response => {
      setDoctors(response.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <h1>Doctors</h1>
      <ul className='doctors-container' style={{ display: 'flex' }}>
        {doctors.map((doctor, index) => {
          return <Doctor key={index} {...doctor} />;
        })}
      </ul>
    </div>
  );
}

export default Doctors;