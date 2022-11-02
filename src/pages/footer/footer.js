import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../api/endpoints';

function Footer() {
  const favoritesDoctors = useSelector(state => state.favorites.favorites);
  const url = `${BASE_URL}/doctors/favorites`;

  function handleClickSaveFavorites() {
    const favorites = [];
    favoritesDoctors.forEach((value, key) => {
      favorites.push({ id: key, favorite: value });
    });
    fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(favorites),
      },
    ).then(response => {
      if (response.ok) {
        alert('Favorites saved successfully');
      } else {
        alert('Error saving favorites');
      }
    });
  }

  return (
    <div>
      <Button type='primary' ghost
              onClick={handleClickSaveFavorites}
      >
        Save favorites
      </Button>
    </div>

  );
}

export default Footer;