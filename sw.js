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
    "url": "assets/app-CGcBzPiP.js",
    "revision": null
  }, {
    "url": "assets/B4EtTTbf.js",
    "revision": null
  }, {
    "url": "assets/B9k3MDNK.js",
    "revision": null
  }, {
    "url": "assets/BCeqVwJ2.css",
    "revision": null
  }, {
    "url": "assets/BDXfP4J2.js",
    "revision": null
  }, {
    "url": "assets/Bgxy5ASK.js",
    "revision": null
  }, {
    "url": "assets/BJd42opQ.js",
    "revision": null
  }, {
    "url": "assets/BjnNLqVx.js",
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
    "url": "assets/C0Kb9xp-.js",
    "revision": null
  }, {
    "url": "assets/C3OJiXsV.js",
    "revision": null
  }, {
    "url": "assets/C6rnkjJU.js",
    "revision": null
  }, {
    "url": "assets/CahPSZBK.js",
    "revision": null
  }, {
    "url": "assets/CAy97q8j.js",
    "revision": null
  }, {
    "url": "assets/CfgA1tQO.js",
    "revision": null
  }, {
    "url": "assets/CGeSKpOF.js",
    "revision": null
  }, {
    "url": "assets/CJWvpnsb.css",
    "revision": null
  }, {
    "url": "assets/CkQv1ju5.js",
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
    "url": "assets/D6jpNlrx.css",
    "revision": null
  }, {
    "url": "assets/D6ujHAEN.css",
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
    "url": "assets/DFL0YZZ1.js",
    "revision": null
  }, {
    "url": "assets/DIgKSzXd.js",
    "revision": null
  }, {
    "url": "assets/DQ5Zupmz.js",
    "revision": null
  }, {
    "url": "assets/DQicnYhK.js",
    "revision": null
  }, {
    "url": "assets/DtfnXpzP.js",
    "revision": null
  }, {
    "url": "assets/DuSKeNiB.css",
    "revision": null
  }, {
    "url": "assets/DVpfumLP.js",
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
    "url": "assets/f3veMC-K.js",
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
    "url": "assets/Urg1aW1i.js",
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
    "url": "assets/Yi34Y0P4.js",
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
    "revision": "db586c0c557682250692cf1f5b5a6a20"
  }, {
    "url": "enfj.html",
    "revision": "ece99b8abd91599f6057807178fc5482"
  }, {
    "url": "enfp.html",
    "revision": "8841d6fc3d7980910ce432aad0943a68"
  }, {
    "url": "entj.html",
    "revision": "e9a80f83257f2d3767ab7d856797561e"
  }, {
    "url": "entp.html",
    "revision": "c81c25556f8000f6823059cd9ddc18a8"
  }, {
    "url": "esfj.html",
    "revision": "8d080614b8a0230c1ec46763611301cf"
  }, {
    "url": "esfp.html",
    "revision": "1e0f15161f397b9f05e5de2a922e6132"
  }, {
    "url": "estj.html",
    "revision": "ad3778039dafc740c6ef0d6226ccddce"
  }, {
    "url": "estp.html",
    "revision": "a03d53a19cbd70b0f65454c1f5156c9e"
  }, {
    "url": "index.html",
    "revision": "8d41f22bf30ac85ab42d2073f2ae62a7"
  }, {
    "url": "infj.html",
    "revision": "0306b6e4e3b7ea454872a6b4b575bcf9"
  }, {
    "url": "infp.html",
    "revision": "47bc02efef073b67251ce7bc92e93992"
  }, {
    "url": "intj.html",
    "revision": "38e285090a1dc4892976f4785cdba537"
  }, {
    "url": "intp.html",
    "revision": "889d3f21aef17950a90ee9289149ccb2"
  }, {
    "url": "isfj.html",
    "revision": "8b07d6c09d45e950b436424e41958442"
  }, {
    "url": "isfp.html",
    "revision": "f0cabc07d6be2a0bedc16d1d6da26e6a"
  }, {
    "url": "istj.html",
    "revision": "8918fc826a8225efd09aa44a1ca2c411"
  }, {
    "url": "istp.html",
    "revision": "9079c0e340a0431b29443c47632bacef"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "777fc5d5f14b4e0e53a0a35c340ba4b7"
  }, {
    "url": "test.html",
    "revision": "7f25c3898a0d44883387004e4f3ed6f5"
  }, {
    "url": "types.html",
    "revision": "830f0ad1bae047f0ef932bd6fb07a30b"
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
