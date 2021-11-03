import axios from 'axios';
import { StoriesType } from '../models/stories.interface';

export const getStories = axios.get<StoriesType[]>('https://api.aylien.com/news/stories', {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
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

/*
axios.get('https://api.aylien.com/news/autocompletes', {
  headers: {
    'Content-Type': 'application/json',
    'X-AYLIEN-NewsAPI-Application-ID': 'c4b50198',
    'X-AYLIEN-NewsAPI-Application-Key': 'd2101cae5b4ce1b2c3c80adf1200710c',
  },
  params: {
    type: 'dbpedia_resources',
    term: 'Tesla',
    language: 'en',
    perPage: 3,
  }
})
.then(function (response) {
    console.log('response', response);
})
.catch(function (error) {console.log(error)});
*/



