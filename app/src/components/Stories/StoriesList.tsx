import React from 'react';
import { Container, Item } from 'semantic-ui-react';

const StoriesList: React.FC = () => {
  return (
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
  );
};

export default StoriesList;