import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      setCreator(data);
    };
    
    fetchCreator();
  }, [id]);

  if (!creator) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">← Back to Creators</Link>
      
      <div className="creator-detail">
        <div className="creator-header">
          <h1>{creator.name}</h1>
          <div className="creator-actions">
            <Link to={`/edit/${creator.id}`} className="btn btn-edit">Edit</Link>
          </div>
        </div>
        
        {creator.imageURL && (
          <img src={creator.imageURL} alt={creator.name} className="creator-image" />
        )}
        
        <div className="creator-info">
          <p>{creator.description}</p>
          <a href={creator.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewCreator;
