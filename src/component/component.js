import React from 'react';
import HomePage from './HomePage/homePage';
import SearchResultPage from './SearchResultPage/searchResultPage';
import PageNotFound from './NotFound/PageNotFound';
import Header from './Header/header';
import Footer from './Footer/footer';
import NewsFeedPage from './NewsPage/newsPage';
import SearchBar from './Search/search';
import LeftPanel from './LeftPanel/leftPanel';
import RightPanel from './RightPanel/rightPanel';
import OverView from './OverView/overView';
import Repositories from './Repositories/repositories';

/**
 * Routing Component
 */

const HomePageComponent = () => {
    return <HomePage />
}

const SearchResultPageComponent = (props) => {
    return <SearchResultPage {...props} />
}

const PageNotFoundComponent = () => {
    return <PageNotFound />
}

/**
 * Non Routing Component
 */

const HeaderComponent = () => {
    return <Header />
}

const FooterComponent = () => {
    return <Footer />
}

const LeftPanelComponent = () => {
    return <LeftPanel />
}

const RightPanelComponent = () => {
    return <RightPanel />
}

const OverViewComponent = () => {
    return <OverView />
}

const RepoComponent = () => {
    return <Repositories />
}

const SearchBarComponent = () => {
    return <SearchBar />
}

const NewsFeedPageComponent = () => {
    return <NewsFeedPage />
}

export {
    HomePageComponent, SearchResultPageComponent, PageNotFoundComponent, HeaderComponent,
    LeftPanelComponent, RightPanelComponent, OverViewComponent, RepoComponent, 
    FooterComponent, SearchBarComponent, NewsFeedPageComponent
}