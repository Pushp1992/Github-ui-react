import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePageComponent, SearchResultPageComponent, PageNotFoundComponent } from './component';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePageComponent} />
                <Route path="/search-result" component={SearchResultPageComponent} />
                <Route component={PageNotFoundComponent} />
            </Switch>
        </div>
    )
}

export default Routes;