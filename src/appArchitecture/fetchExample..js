import React, {useEffect, useState} from 'react';
// API: https://www.boredapi.com/api/activity

const FetchExample = () => {
  const [quoteData, setQuoteData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://www.boredapi.com/api/activity')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Fetch error.')
        }
      })
      .then(data => {
        // console.log(data.activity)
        console.log(data)
        setQuoteData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      })
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
  
      <h3>Activity: {quoteData?.activity}</h3>
      <p>Participants: {quoteData?.participants}</p>
      <p>Price: {quoteData?.price}</p>
      {error && <p style={{color: 'red'}}>{error.message}</p>}
    </div>
  );
}

export default FetchExample;