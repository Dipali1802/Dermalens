import React, { useState } from 'react';

const Support = () => {
  const [subject, setSubject] = useState('');
  const [query, setQuery] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subject:', subject);
    console.log('Query:', query);
    setSubject('');
    setQuery('');
  };

  return (
    <div>
      <h2>We are here to support you</h2>
      <p>Let us know your queries here</p>
      <form onSubmit={handleSubmit}>
        <div className='Label'>
          <label htmlFor="subject">Subject :</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            required
          />
        </div>
        <div>
          <label htmlFor="query">Query :</label>
          <textarea
            id="query"
            value={query}
            onChange={handleQueryChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Support;