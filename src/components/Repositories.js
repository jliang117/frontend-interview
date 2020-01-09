import * as React from "react";
import styled from 'styled-components';

/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */

const Repositories = () => {
  React.useEffect(() => {
    document.title = "Repositories";
  })
  const [searchResults, setSearchResults] = React.useState()

  function debounce(func, wait) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      const applyLater = () => {
        timeout = null;
        func.apply(context, args);
      }
      clearTimeout(timeout);
      timeout = setTimeout(applyLater, wait);
    };
  };

  const handleSearch = debounce((searchTerm) => {
    fetch(`https://api.github.com/search/repositories?q={${searchTerm}}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchResults(data.items)
      });
  }, 450)

  return (
    <div>
      <input aria-label="search-box" name="search-terms" onChange={e => handleSearch(e.target.value)} />
      {(searchResults) ? (
        <RepositorySearchResults searchResults={searchResults} />
      ) : (
          <div>Enter some text to search github repositories</div>
        )}
    </div>
  );
};

const RepositorySearchResults = (searchResults) => {

  const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 8px;
  margin: 8px auto 0;
  width: 800px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

  return (
    <div>
      {
        searchResults.searchResults.map((item, index) => {
          return (
            <CardWrapper key={index}>
              <ul>
                <li>{item.full_name}</li>
                <li>{item.description}</li>
                <li>Stars:{item.stargazers_count}</li>
                <li>Issues:{item.open_issues_count}</li>
                <li>Match Score:{item.score}</li>
              </ul>
            </CardWrapper>
          )
        })
      }
    </div>
  );
}

export default Repositories;
