import {Redirect, Route, Switch} from 'react-router-dom'

import './App.css'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import HomeRoute from './components/HomeRoute'
import PopularRoute from './components/PopularRoute'
import AccountPage from './components/AccountPage'
import SearchPage from './components/SearchPage'
import MovieDetailsView from './components/MovieDetailsView'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <ProtectedRoute exact path="/popular" component={PopularRoute} />
    <ProtectedRoute exact path="/account" component={AccountPage} />
    <ProtectedRoute exact path="/search" component={SearchPage} />
    <ProtectedRoute exact path="/movies/:id" component={MovieDetailsView} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
