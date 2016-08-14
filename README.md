#Rounder

This project is based on the brief found in BRIEF.md.

Essentially the application is a very simple round tracking application intended to
both help revelers organize buying large rounds and to help them assess the damage to their bank account the day after.

An attempt has been made to build a fully operational SPA, however there is no data persistence. Browser refreshes will cause all data to be lost.

The original source of the application can be found at https://github.com/jjmschofield/Rounder

##Demo
A build of the product is available at: https://jjmschofield.github.io/Rounder/

**The product's primary use case appears to be on small screen sizes. An attempt has been make it fully responsive however.
It's recommended to view the application with mobile emulation enabled in your browser dev tools (iPhone 6s works well).**

##Tech Stack and Approach
This project was treated as an opportunity to develop skills with up to the minute and emergent technologies. It is not (at this time) intended to be
developed further into a production quality application.

As such the following key components can be found within the stack:

* Angular2 RC 4
* Bootstrap 4 Alpha 3
* ng-bootstrap Alpha 1
* Webpack
* Typescript

This meant that the project took a bit longer then normal, but it has lead to some useful lessons which can be spread throughout a dev team to help others expand their knowledge.

The design of the UI is intentionally large and clear to allow it to be used conveniently and fluidly by unfocused users.
As the brief specifies that the look and feel are yet to be determined only functional CSS has been added to the project in addition to the Bootstrap 4 CSS Framework.

It is worth considering whether or not the products best incarnation is as a web application however. Users in bars are likely to suffer
connectivity issues yet still require usage of the app. It may be worth considering either a native or hybrid mobile application to provide
a consistent experience. As the prototype is written in Angular 2 it may be worth considering a mobile app prototype in Ionic 2.

##Additional Features Worth Considering
Some concepts were developed during development which were considered out of scope but which may be useful for the product backlog.

* Bar / Product Search
* Prompt to user to reuse the last bar to prevent them searching
  * Eg asking a user "Are You Still in {Some Bar}?" to speed up repetitive bar selections
* Product Customization
  * eg double shots, drink size, mixers, ice/no ice etc
* Spending Limit, triggers and warnings
* Promoted Bars
* Flash sales
* Bank data aggregation
  * eg confirming that your round matches the amount charged
* POS Integrations
  * Order at table
  * NFC to purchase and kitchen/bar order

##API Requirements
The data schema was extended to include a "NightOut" entity to neatly group rounds for quick data summary by the user.
This could be solved by grouping rounds by days, however it is worth considering that a users spend on a night out is highly likely to fall over
two calendar days.

The API is expected to be Restful, making sensible use of HTTP verbs and status codes.

The models contained within this project (nights-out/shared/models) contain the current response objects required to power the app.
These have been based on the original database schema, however the available fields have been combined to produce sensible models for the SPA to work with.
There are some outstanding TODO's contained within these files to clear up in future discussions.

###Suggested API Endpoints
A rough set of endpoints is provided below, though the teams should meet to discuss complexity/object structure based on chosen stack/architecture.

```GET:/{userId}/nights-out //Lists all night out summaries for user```

```POST:/{userId}/nights-out //Expected to return a NightOurId in the response body```

```GET:/{userId}/nights-out/{nightOutId} //Gets a detailed night out object```


```GET:/{userId}/rounds/ //Gets a list of round summary objects```

```POST:/{userId}/rounds //Expected to return a RoundId in the response body```

```GET:/{userId}/rounds/{RoundId} //Gets a detailed round object```

```PATCH:/{userId}/rounds/{RoundId} //Updates a round```

```DELETE:/{userId}/rounds/{RoundId} //Deletes a round```

```GET:/bars?{Lat}{Lang} //Gets geographically scoped bar summary search results```

```GET:/bars/search/{search term}?{Lat}{Lang} //Gets geographically scoped bar summary search results```

```GET:/bars/{barId}/products //Gets products which a bar offers```

###Additional Data Worth Considering
* Product Categorization/Tagging (eg Drink/Food/Wine/Beer/Spirit)
* Bar Distance to User
* Bar Address
* Night Out / Round State (eg open/closed for edits)

## Key Lessons
* Angular2 is a competent and component based framework
* The Angular2 router is simple to use, however it has poor documentation. Finding the correct place to bind to url parameters within the architecture needs further work.
* Angular2 does not ship with reflective pipes (eg orderBy, filter) this has been done to prevent their misuse and give the impression Angular itself is slow.
Be aware that there isn't an easy component in your toolbox for these common operations anymore.
* Bootstrap 4 is as friendly as Bootstrap 3 and features stronger responsive typography (rem based)
* ng-bootstrap is behind the curve in implementing native Bootstrap components, eg modal was implemented so direct DOM manipulation was executed from within user code
(there may be a more 'angular' way to handle this, however it wasn't clear what that was from their current dev docs)
* Webpack is a really nice alternative to Gulp/Grunt and should seriously be considered for any future projects
* Strictly typed javascript is extremely useful

## Running the Project
* Clone this repo
* npm install
* npm start
* Open http://localhost:8080

### Other tasks
* npm test
  * Runs unit tests, most of the code is not covered and there are intentionally failing tests in place to indicate the issue
  however there is some coverage of the models
* npm build
  * Packages the application for deployment
  * Remember to update the base html tag to your actual path

## Updates
### Prototype-02
* Added action functionality to nav bar
* Added "Done" to rounds scene
* Added "Total" to rounds scene
* Added "Done" to round edit scene
* Restructured application


