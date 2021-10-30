import { useState, useEffect } from 'react';

const useRandomJoke = ( firstName, lastName ) => {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchJoke = async () => {
            await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`).then(res => res.json())
              .then(data => {
                setJoke(data.value.joke);
                console.log(data.value.joke);
                setLoading(false);
              })
          };
      
          fetchJoke();
    }, [firstName, lastName]);
    
    return [joke, loading];
}

export default useRandomJoke
