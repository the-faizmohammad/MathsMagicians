import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=maths', {
      headers: {
        'X-Api-Key': 'B8Aei7hWtexMgroc3DcWRw==lt7kKkbwNfnSGwHo',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
        setLoading(false);
      })
      .catch(() => {
        setError('An error occurred while fetching the quote.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Math Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
