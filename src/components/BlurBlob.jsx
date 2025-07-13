// components/BlurBlob.jsx
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  // Destruturar a posição e o tamanho com valores padrão
  const { top, left } = position
  const { width, height } = size 

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-full h-full bg-cyan-500 rounded-full opacity-20 blur-3xl animate-blob"
      ></div>
    </div>
  );
};

// Defenir propriedades do componente
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
