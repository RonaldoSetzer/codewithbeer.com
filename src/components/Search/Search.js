import React from 'react';

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch as AlgoliaInstantSearch,
  SearchBox as AlgoliaSearchBox,
  Hits as AlgoliaHits,
  Stats as AlgoliaStats,
} from 'react-instantsearch-dom';
import { Container, Content, SearchBoxContainer, Chevron } from './styles';
import Hit from './Hit';

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
};

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

function Search() {
  return (
    <Container>
      <Content>
        <AlgoliaInstantSearch
          searchClient={searchClient}
          indexName={algolia.indexName}
        >
          <SearchBoxContainer>
            <Chevron />
            <AlgoliaSearchBox autoFocus />
          </SearchBoxContainer>
          <AlgoliaStats />
          <AlgoliaHits hitComponent={Hit} />
        </AlgoliaInstantSearch>
      </Content>
    </Container>
  );
}

export default Search;
