import React, { Component } from 'react';
import ListBlogContainer from './components/ListBlogContainer'
import NavBar from './components/nav/NavBar/Navbar';
import { Container } from 'semantic-ui-react';
import ListCommentContainer from './components/ListCommentContainer';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container className="main">
          <Switch>
            <Route exact path="/" component={ListBlogContainer}/>
          </Switch>
        </Container>
        
        <Route
          path="/(.+)"
          render={()=>(
            <div>
              <Container className="main">
                <Switch>
                  <Route path="/posts" component={ListBlogContainer}/>
                  <Route path="/comments" component={ListCommentContainer}/>
                </Switch>
              </Container>
            </div>
          )}
        />
        </div>
    );
  }
}


export default App;
