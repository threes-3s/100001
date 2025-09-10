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
    "url": "assets/ahbhI-1g.js",
    "revision": null
  }, {
    "url": "assets/app-Cyw_FY8K.js",
    "revision": null
  }, {
    "url": "assets/B9k3MDNK.js",
    "revision": null
  }, {
    "url": "assets/BCeqVwJ2.css",
    "revision": null
  }, {
    "url": "assets/BIeF07JP.js",
    "revision": null
  }, {
    "url": "assets/BjnNLqVx.js",
    "revision": null
  }, {
    "url": "assets/BLyBuC_N.js",
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
    "url": "assets/C-UO50Uj.js",
    "revision": null
  }, {
    "url": "assets/C3OJiXsV.js",
    "revision": null
  }, {
    "url": "assets/C6rnkjJU.js",
    "revision": null
  }, {
    "url": "assets/CADo7UQK.js",
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
    "url": "assets/cvAtn-sq.js",
    "revision": null
  }, {
    "url": "assets/cvk_tz_S.css",
    "revision": null
  }, {
    "url": "assets/CxBnUIjN.js",
    "revision": null
  }, {
    "url": "assets/CXEywoEX.js",
    "revision": null
  }, {
    "url": "assets/D0URwNHV.js",
    "revision": null
  }, {
    "url": "assets/D6dveKtf.js",
    "revision": null
  }, {
    "url": "assets/D6jpNlrx.css",
    "revision": null
  }, {
    "url": "assets/D6ujHAEN.css",
    "revision": null
  }, {
    "url": "assets/DAFdu9Q-.js",
    "revision": null
  }, {
    "url": "assets/DaroFz8Z.js",
    "revision": null
  }, {
    "url": "assets/DawlIFS4.js",
    "revision": null
  }, {
    "url": "assets/DCBIG-s4.js",
    "revision": null
  }, {
    "url": "assets/DDPX9xNg.js",
    "revision": null
  }, {
    "url": "assets/DizHrjY3.js",
    "revision": null
  }, {
    "url": "assets/Dlqc6U2r.js",
    "revision": null
  }, {
    "url": "assets/DQ5Zupmz.js",
    "revision": null
  }, {
    "url": "assets/DQicnYhK.js",
    "revision": null
  }, {
    "url": "assets/DqLj9j1B.js",
    "revision": null
  }, {
    "url": "assets/DtfnXpzP.js",
    "revision": null
  }, {
    "url": "assets/Duri_qzO.js",
    "revision": null
  }, {
    "url": "assets/DuSKeNiB.css",
    "revision": null
  }, {
    "url": "assets/DwN7JRxN.js",
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
    "url": "assets/qmu5U8OC.js",
    "revision": null
  }, {
    "url": "assets/RTKFCJmK.js",
    "revision": null
  }, {
    "url": "assets/scOSGH_A.js",
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
    "revision": "4180a0e5af2291db7de5b444337e19a9"
  }, {
    "url": "enfj.html",
    "revision": "7f51d494d805236a5e659995ad3b9fd3"
  }, {
    "url": "enfp.html",
    "revision": "2590401915b86bc74cd6ed29646085d8"
  }, {
    "url": "entj.html",
    "revision": "34dd6e34ede1e99e793845cd7c847357"
  }, {
    "url": "entp.html",
    "revision": "d1b930e0528fe5e4604d18f975491e8c"
  }, {
    "url": "esfj.html",
    "revision": "03e1693db3ff502b1d65243af2ad0c94"
  }, {
    "url": "esfp.html",
    "revision": "81c6f2e180c63cef1c8842fb33f17c32"
  }, {
    "url": "estj.html",
    "revision": "90e5eb8a15a54b039ec9df2d22c436f1"
  }, {
    "url": "estp.html",
    "revision": "840ecd2ad74c244bb47857349b1e9beb"
  }, {
    "url": "index.html",
    "revision": "4139f4fb7bffaa8c041e7ec449bbfd83"
  }, {
    "url": "infj.html",
    "revision": "83a57f4947a31fd1c81cb12a61ac3927"
  }, {
    "url": "infp.html",
    "revision": "9626ac5fafe18be2da50af0094a6438c"
  }, {
    "url": "intj.html",
    "revision": "f206e5877524cda18ad8c82efcc98f32"
  }, {
    "url": "intp.html",
    "revision": "1c8aafb5dd068a62af0d5ac1c1e7bd75"
  }, {
    "url": "isfj.html",
    "revision": "cf045b74253775b2c7d51f1cf45dd082"
  }, {
    "url": "isfp.html",
    "revision": "d4c41d66ee07f99b96c066ace9d1f764"
  }, {
    "url": "istj.html",
    "revision": "afdd1c1fb8573821b7202987bae5bd96"
  }, {
    "url": "istp.html",
    "revision": "4e2249bdb3a09e7f917b0c23701be970"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "3232dbe97f9bedf4c91c3af42134095d"
  }, {
    "url": "test.html",
    "revision": "f84f53d9bd6e2b31bfc13ff2b3eb7c8b"
  }, {
    "url": "types.html",
    "revision": "f23506e29493375dc7c7c29a5c08ffe1"
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
