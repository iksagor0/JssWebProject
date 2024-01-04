import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import deepEqual from 'deep-equal';
import React from 'react';
import Helmet from 'react-helmet';

import Header from './components/Header';
// import Footer from './components/Footer';

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/app.css';
import './assets/css/responsive.css';
import './assets/css/style.css';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>

    {/*
      VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
      If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
      For XM (CMS-only) apps, this should be removed.

      VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
    */}
    <VisitorIdentification />

    {/* <Navigation /> */}
    {/* <Header /> */}

    {/* root placeholder for the app, which we add components to using route data */}
    <div className="page__wrapper">
      <Placeholder name="jss-header" rendering={route} />
      <Placeholder name="jss-main" rendering={route} />
      <Placeholder name="jss-footer" rendering={route} />
    </div>

    {/* <Footer /> */}
  </React.Fragment>
);

// We don't want to re-render `Layout` when route is changed but layout data is not loaded
// Layout will be re-rendered only when layout data is changed
const propsAreEqual = (prevProps, nextProps) => {
  if (deepEqual(prevProps.route, nextProps.route)) return true;

  return false;
};

export default React.memo(Layout, propsAreEqual);
