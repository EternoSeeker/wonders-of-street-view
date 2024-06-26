import PropTypes from 'prop-types';

const DisplayMap = ({ latitude, longitude }) => {
  const bbox = `${longitude - 0.1},${latitude - 0.1},${longitude + 0.1},${latitude + 0.1}`;
  const marker = `${latitude},${longitude}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;
  const href = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=13/${latitude}/${longitude}`;

  return (
    <div>
      <iframe
        width="425"
        height="350"
        src={src}
        title="OpenStreetMap"
      ></iframe>
      <br />
      <small>
        <a href={href}>
          View Larger Map
        </a>
      </small>
    </div>
  );
};

DisplayMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default DisplayMap;