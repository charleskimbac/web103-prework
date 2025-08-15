import { Link } from 'react-router-dom';

const Card = ({ creator }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{creator.name}</h3>
        <div className="card-actions">
          <Link to={`/edit/${creator.id}`} className="btn btn-edit">Edit</Link>
          <Link to={`/creator/${creator.id}`} className="btn btn-view">View</Link>
        </div>
      </div>
      
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} className="card-image" />
      )}
      
      <div className="card-content">
        <p>{creator.description}</p>
        <a href={creator.url} target="_blank" rel="noopener noreferrer" className="creator-link">
          Visit Channel
        </a>
      </div>
    </div>
  );
};

export default Card;
