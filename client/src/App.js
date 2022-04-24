import React from 'react';
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import RecipeList from './components/Recipes/RecipeList';
import Recipe from './components/Recipe/Recipe';
import { GlobalStyle } from './styles/Global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme.styles';

const client = new ApolloClient({
  uri: 'http://localhost:8888/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <Header/>
          <Routes>
            <Route path='/' element={<RecipeList/>}/>
            <Route path='/recipe/:id' element={<Recipe/>}/>
          </Routes>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
