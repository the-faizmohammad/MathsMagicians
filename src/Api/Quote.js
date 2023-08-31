import React, { useEffect, useState } from 'react';
import './Quote.css';

const quoteCategory = 'funny';
const quotesApiBaseUrl = 'https://api.api-ninjas.com/v1/quotes?category=';
const apiUrl = `${quotesApiBaseUrl}${quoteCategory}`;

const Quote = () => {
  const [quoteData, setQuoteData] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'X-Api-Key': 'uCHBJSjC0mhJo8VJsKMGKw==TE5WVQkHClEOg2cP',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (!isCancelled && Array.isArray(data) && data.length > 0) {
          setQuoteData(data[0]);
        }
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (isLoading) {
    return <div>Loading quote</div>;
  }

  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="quote-container">
      <h1 className="quote-title">Alert ! This Quotes is going to change the latest version of you.</h1>
      <div className="quote-display">
        <p className="quote">{quoteData.quote}</p>
        <p className="author">
          <b>{quoteData.author}</b>
        </p>
      </div>
    </div>
  );
};

export default Quote;
