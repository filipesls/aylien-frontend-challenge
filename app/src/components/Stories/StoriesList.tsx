import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Item, Card, Input } from 'semantic-ui-react';
import { StoriesType } from '../../models/stories.interface';
import { getStories } from '../../api/api';

// type StoriesListProps = {
//   item: obj
// }

const StoriesList: React.FC = () => {

  axios.get<StoriesType[]>('https://api.aylien.com/news/stories', {
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
    'X-AYLIEN-NewsAPI-Application-ID': 'c4b50198',
    'X-AYLIEN-NewsAPI-Application-Key': 'd2101cae5b4ce1b2c3c80adf1200710c',
  },
  params: {
    language: ['en'],
    perPage: 25,
    cursor: '*',
    "entities.surface_forms.text": ["Nikola Tesla"]
  }
})
.then(function (response) {
  console.log('response', response);
})
.catch(function (error) {console.log(error)})

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //       .then((response) => {
  //         setAPIData(response.data);
  //       })
  // }, []);

  // const [stories, setStoriesList] = useState<StoriesType[]>([]);

  return (
    <>
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
};

export default StoriesList;