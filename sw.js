/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-9637eeee'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/8W3_KHRn.js",
    "revision": null
  }, {
    "url": "assets/ahbhI-1g.js",
    "revision": null
  }, {
    "url": "assets/app-DGs8-hro.js",
    "revision": null
  }, {
    "url": "assets/B1ul6m5r.js",
    "revision": null
  }, {
    "url": "assets/B9k3MDNK.js",
    "revision": null
  }, {
    "url": "assets/BCeqVwJ2.css",
    "revision": null
  }, {
    "url": "assets/BfclPQSS.js",
    "revision": null
  }, {
    "url": "assets/bggts7ix.js",
    "revision": null
  }, {
    "url": "assets/BjnNLqVx.js",
    "revision": null
  }, {
    "url": "assets/BjPE5W_d.js",
    "revision": null
  }, {
    "url": "assets/BmBsF9S2.css",
    "revision": null
  }, {
    "url": "assets/BQEZC7Qi.css",
    "revision": null
  }, {
    "url": "assets/BquGyE27.js",
    "revision": null
  }, {
    "url": "assets/BWEhohXz.js",
    "revision": null
  }, {
    "url": "assets/BymVHglh.js",
    "revision": null
  }, {
    "url": "assets/BYP1iwNT.js",
    "revision": null
  }, {
    "url": "assets/C-UO50Uj.js",
    "revision": null
  }, {
    "url": "assets/C3OJiXsV.js",
    "revision": null
  }, {
    "url": "assets/C4O6MvnV.js",
    "revision": null
  }, {
    "url": "assets/C6rnkjJU.js",
    "revision": null
  }, {
    "url": "assets/Ca4VzJgN.js",
    "revision": null
  }, {
    "url": "assets/CfgA1tQO.js",
    "revision": null
  }, {
    "url": "assets/CJWvpnsb.css",
    "revision": null
  }, {
    "url": "assets/CP3iFwBu.js",
    "revision": null
  }, {
    "url": "assets/CqzHAeJK.js",
    "revision": null
  }, {
    "url": "assets/CsobD7wg.js",
    "revision": null
  }, {
    "url": "assets/cvAtn-sq.js",
    "revision": null
  }, {
    "url": "assets/cvk_tz_S.css",
    "revision": null
  }, {
    "url": "assets/CxBnUIjN.js",
    "revision": null
  }, {
    "url": "assets/D3adOctf.js",
    "revision": null
  }, {
    "url": "assets/D6jpNlrx.css",
    "revision": null
  }, {
    "url": "assets/D8jCUl1O.js",
    "revision": null
  }, {
    "url": "assets/DAFdu9Q-.js",
    "revision": null
  }, {
    "url": "assets/DawlIFS4.js",
    "revision": null
  }, {
    "url": "assets/DCBIG-s4.js",
    "revision": null
  }, {
    "url": "assets/Dh5QpWyw.js",
    "revision": null
  }, {
    "url": "assets/DQ5Zupmz.js",
    "revision": null
  }, {
    "url": "assets/DQicnYhK.js",
    "revision": null
  }, {
    "url": "assets/DrNJehOh.js",
    "revision": null
  }, {
    "url": "assets/DtfnXpzP.js",
    "revision": null
  }, {
    "url": "assets/DtQmrsNk.js",
    "revision": null
  }, {
    "url": "assets/DuSKeNiB.css",
    "revision": null
  }, {
    "url": "assets/Dx3U6qo9.js",
    "revision": null
  }, {
    "url": "assets/DZWGFCVr.js",
    "revision": null
  }, {
    "url": "assets/efQc2OYR.js",
    "revision": null
  }, {
    "url": "assets/HX3MPmxt.js",
    "revision": null
  }, {
    "url": "assets/iEwDEPZd.js",
    "revision": null
  }, {
    "url": "assets/jJ6pMX5Y.js",
    "revision": null
  }, {
    "url": "assets/m-108hKA.css",
    "revision": null
  }, {
    "url": "assets/model-By70RrrU.jpg",
    "revision": null
  }, {
    "url": "assets/nXmhecTI.js",
    "revision": null
  }, {
    "url": "assets/pIwD7FTM.js",
    "revision": null
  }, {
    "url": "assets/Ql8p2Dk4.js",
    "revision": null
  }, {
    "url": "assets/RTKFCJmK.js",
    "revision": null
  }, {
    "url": "assets/SWM22LeN.js",
    "revision": null
  }, {
    "url": "assets/v7CMgJ8v.js",
    "revision": null
  }, {
    "url": "assets/VqVODLTx.js",
    "revision": null
  }, {
    "url": "assets/wx-Bfv1OeoY.png",
    "revision": null
  }, {
    "url": "assets/x7H6yciF.css",
    "revision": null
  }, {
    "url": "assets/Z423odES.css",
    "revision": null
  }, {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "102be462d6343e9b69986c509beffabd"
  }, {
    "url": "icons/apple-touch-icon.png",
    "revision": "102be462d6343e9b69986c509beffabd"
  }, {
    "url": "icons/favicon.ico",
    "revision": "d4e30ae9a7844e22dde49819efc93dba"
  }, {
    "url": "icons/icon.svg",
    "revision": "c99b11b4281788328c992ab3362f545a"
  }, {
    "url": "icons/maskable-icon-512x512.png",
    "revision": "c8ab20aa3f87b10e28d866023193f2a9"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "f6086319a8d4f4f4677ac42e1d28e815"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "fe698f32055b667e52ac1c6cfb56a9ac"
  }, {
    "url": "icons/pwa-64x64.png",
    "revision": "382b2c37a65cde1db2fcb64b81495ba7"
  }, {
    "url": "404.html",
    "revision": "a03a32b5a0a7ef39074dda3b6842a0f8"
  }, {
    "url": "enfj.html",
    "revision": "112cf7dd567b8b1cd120eb5498c20f68"
  }, {
    "url": "enfp.html",
    "revision": "a4c06058c8543956b29402b5beb9dce3"
  }, {
    "url": "entj.html",
    "revision": "b78aa05a33f1a9f37cf8549fa4e59829"
  }, {
    "url": "entp.html",
    "revision": "d73f33baafe2aa7b3e2e8affd2c8945f"
  }, {
    "url": "esfj.html",
    "revision": "6d82df68ac48cc2d441d3758c17131ea"
  }, {
    "url": "esfp.html",
    "revision": "313ba2cdcad09c94949afb456be6a4e0"
  }, {
    "url": "estj.html",
    "revision": "2ce4f93ae957974da04bac1a2d3f7f7d"
  }, {
    "url": "estp.html",
    "revision": "8e88cc8d811396cb4fe10f08f4b1da9e"
  }, {
    "url": "index.html",
    "revision": "4ad94f2c9f17bb8bc42ebb0ed4d48e17"
  }, {
    "url": "infj.html",
    "revision": "5ee9017cc84b794be76e2c26370d89bd"
  }, {
    "url": "infp.html",
    "revision": "e40263d5df2fcffbd868be30b77dfc71"
  }, {
    "url": "intj.html",
    "revision": "1d91ad1043024ea2b2a8ac300e43e199"
  }, {
    "url": "intp.html",
    "revision": "909b65e5d7b59694fca0fdd67bc9864d"
  }, {
    "url": "isfj.html",
    "revision": "3a75174fe844417c81936245b9195695"
  }, {
    "url": "isfp.html",
    "revision": "9f8709dde7d7445a702620869c795c6a"
  }, {
    "url": "istj.html",
    "revision": "53de2cf865f2072a54a63c1bb0c08224"
  }, {
    "url": "istp.html",
    "revision": "c2c9bd053b94945a5697abe660d71578"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "2f5fb3b41a19b0c24c4f920f034bdc46"
  }, {
    "url": "test.html",
    "revision": "0946dc24035f9ba5f7de8cc60f6c0ab7"
  }, {
    "url": "types.html",
    "revision": "cd22a3eff44384e31eae9f40fceca017"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "f6086319a8d4f4f4677ac42e1d28e815"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "fe698f32055b667e52ac1c6cfb56a9ac"
  }, {
    "url": "manifest.webmanifest",
    "revision": "b2ced5a6cd4884bef3bcd99a3b3c171a"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
