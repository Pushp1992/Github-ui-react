# This repository is meant for github-ui-pagegithub-ui-page

To Runs the app in the development mode.<br>
Open [http://localhost:7000](http://localhost:7000) to view it in the browser.


# To install all modules
___
Run npm install

# On missing module dependencies
___

Run `npm install`
___

# Please create blank .env file in the project root directory
___

touch .env

# On developement machine:

* Execute the following command to run the application (client + server)
___

`npm run dev`
___

Run below command to start only client:
___

`npm run start` <br/>
`client will run on the port 7000`

Run below command to start only server:
___

`npm run server` <br/>
`server will run on the port 5000`

# Server is created to handle the browser's CORS issue while making API calls for the newsorg.api services


# Config changes
___

URL configs are available in

Config Folder: `server/config/url`

PROD config:
`server/config/url/prod.config.js`

DEV config:
`Create a .env file in the root directory of the project. Add environment-specific variables on new lines in the form of NAME=VALUE`
`Use PROD config mentioned above for reference or you can leave it blank for the time being if you do not have any hard core dependency` 

___

# Application structure
___

# public 
# src
    -- assets
        -- images
    -- component
        -- Cards
        -- Footer
        -- Header
        -- HomePage
        -- LeftPanel
        -- NotFound
        -- OverView
        -- RepoList
        -- Repositories
        -- RightPanel
        -- Search
        -- component.js
        -- routes.js
    -- server
        -- config
        -- proxy
        -- index.js
    -- utils
        -- service.js
        -- toastr.js
# .env
# .gitignore
