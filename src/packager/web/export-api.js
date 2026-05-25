/**
 * Browser-facing API entry point for the packager.
 * Exposes window.PackagerAPI with the Packager class and project loading utilities.
 * Used by generate_content.html for URL-driven project packaging and rendering.
 */

import {setAdapter} from '../adapter';
import Packager from '../packager';
import WebAdapter from './adapter';
import loadProject from '../load-project';

// Set up the web adapter (handles caching, icon loading, fetch via XHR)
setAdapter(new WebAdapter());

window.PackagerAPI = {
  /**
   * The Packager class. Instantiate, set .project and .options, then call .package().
   * Returns { data: Uint8Array, type: string, filename: string }
   */
  Packager,

  /**
   * Project loading utilities.
   * - loadProject.fromURL(url, progressCallback) -> { promise, terminate }
   * - loadProject.fromID(id, token, progressCallback) -> { promise, terminate }
   * - loadProject.fromFile(file, progressCallback) -> { promise, terminate }
   */
  loadProject,
};
