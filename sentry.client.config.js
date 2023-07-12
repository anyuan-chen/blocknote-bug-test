// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
// import { excludeGraphQLFetch } from "apollo-link-sentry";
// import { ignoreErrors } from "./src/clients/sentry";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://002af98e003a4e64b135856a1e84e5e5@o417282.ingest.sentry.io/6438166",
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  //   beforeBreadcrumb: excludeGraphQLFetch,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  //   ignoreErrors,

  // recommended by Sentry
  // source: https://docs.sentry.io/clients/javascript/tips/
  denyUrls: [
    // Chrome extensions
    /extensions\//i,
    /^chrome:\/\//i,
  ],
});