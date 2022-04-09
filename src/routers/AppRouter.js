import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import WorksPage from '../components/WorksPage';
import ContactPage from '../components/ContactPage';
import ScrollToTop from './ScrollToTop';

const AppRouter = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header></Header>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/works" component={WorksPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default AppRouter
