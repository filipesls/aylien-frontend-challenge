import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Divider, Container, Item, Input } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <>
      <Divider hidden />
      <Container>
        <Input fluid action='Search' icon='search' iconPosition='left' placeholder='Companies, Organisations, People or Places...' />
      </Container>
      <Divider />
      <Container>
        <Item.Group divided>
          <Item>
            <Item.Content>
              <Item.Header as='a'>Content Header</Item.Header>
              <Item.Meta>
                <span>Date</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                A description which may flow for several lines and give context to the content.
              </Item.Description>
            </Item.Content>
            <Item.Image src='/images/image.png' />
          </Item>
          <Item>
            <Item.Content>
              <Item.Header as='a'>Content Header</Item.Header>
              <Item.Meta>
                <span>Date</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                A description which may flow for several lines and give context to the content.
              </Item.Description>
            </Item.Content>
            <Item.Image src='/images/image.png' />
          </Item>
        </Item.Group>
      </Container>
    </>
  );
}

export default App;
