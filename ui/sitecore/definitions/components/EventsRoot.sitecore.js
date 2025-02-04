// eslint-disable-next-line no-unused-vars
import { Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the EventsRootPage component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addRouteType({
    name: 'EventsRoot',
    displayName: 'EventsRoot',
    fields: [],
  });

  manifest.addComponent({
    name: 'EventsRootPage',
    templateName: 'EventsRootPage',
    icon: SitecoreIcon.DocumentTag,
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
