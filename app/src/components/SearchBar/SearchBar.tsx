import React from 'react';
import { Container, Input } from 'semantic-ui-react';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Input fluid action='Search' icon='search' iconPosition='left' placeholder='Companies, Organisations, People or Places...' />
    </Container>
  );
};

export default SearchBar;