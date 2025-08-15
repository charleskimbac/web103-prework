import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*');
      setCreators(data || []);
    };
    
    fetchCreators();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Creatorverse</h1>
        <Link to="/new" className="btn btn-primary">Add Creator</Link>
      </header>
      
      {creators.length === 0 ? (
        <p>No creators found. Add some creators to get started!</p>
      ) : (
        <div className="creators-grid">
          {creators.map(creator => (
            <Card key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowCreators;
