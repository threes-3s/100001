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
    "url": "assets/3vMivE7y.js",
    "revision": null
  }, {
    "url": "assets/4ohto2-e.js",
    "revision": null
  }, {
    "url": "assets/5GJ0C-GP.js",
    "revision": null
  }, {
    "url": "assets/7xTIeJtb.js",
    "revision": null
  }, {
    "url": "assets/app-Ba0Wni1V.js",
    "revision": null
  }, {
    "url": "assets/B-illQST.js",
    "revision": null
  }, {
    "url": "assets/B2XaiBzU.css",
    "revision": null
  }, {
    "url": "assets/B7rzJU0A.js",
    "revision": null
  }, {
    "url": "assets/B9k3MDNK.js",
    "revision": null
  }, {
    "url": "assets/BCeqVwJ2.css",
    "revision": null
  }, {
    "url": "assets/BDc59cHj.js",
    "revision": null
  }, {
    "url": "assets/BjnNLqVx.js",
    "revision": null
  }, {
    "url": "assets/BMxItHY2.js",
    "revision": null
  }, {
    "url": "assets/BmyUkuAn.js",
    "revision": null
  }, {
    "url": "assets/BnXVvZh0.js",
    "revision": null
  }, {
    "url": "assets/BOu15qsw.js",
    "revision": null
  }, {
    "url": "assets/BQEZC7Qi.css",
    "revision": null
  }, {
    "url": "assets/BquGyE27.js",
    "revision": null
  }, {
    "url": "assets/BvDYS4sJ.js",
    "revision": null
  }, {
    "url": "assets/BWQXHBWQ.js",
    "revision": null
  }, {
    "url": "assets/BymVHglh.js",
    "revision": null
  }, {
    "url": "assets/C0x3iO22.js",
    "revision": null
  }, {
    "url": "assets/C5EbBG4M.js",
    "revision": null
  }, {
    "url": "assets/C6rnkjJU.js",
    "revision": null
  }, {
    "url": "assets/CbB-UZXg.js",
    "revision": null
  }, {
    "url": "assets/Ceo1e4fE.js",
    "revision": null
  }, {
    "url": "assets/CFVugH-W.js",
    "revision": null
  }, {
    "url": "assets/Cje0E2mJ.js",
    "revision": null
  }, {
    "url": "assets/CJWvpnsb.css",
    "revision": null
  }, {
    "url": "assets/CkQSrMkt.js",
    "revision": null
  }, {
    "url": "assets/CM3elJyv.js",
    "revision": null
  }, {
    "url": "assets/CP3iFwBu.js",
    "revision": null
  }, {
    "url": "assets/CqzHAeJK.js",
    "revision": null
  }, {
    "url": "assets/CUUHWqaS.js",
    "revision": null
  }, {
    "url": "assets/cvk_tz_S.css",
    "revision": null
  }, {
    "url": "assets/CxBnUIjN.js",
    "revision": null
  }, {
    "url": "assets/CzpaF-Ic.js",
    "revision": null
  }, {
    "url": "assets/D6Ee9r2f.css",
    "revision": null
  }, {
    "url": "assets/DawlIFS4.js",
    "revision": null
  }, {
    "url": "assets/DBLck07l.js",
    "revision": null
  }, {
    "url": "assets/Djozqtie.js",
    "revision": null
  }, {
    "url": "assets/DoCqnTqV.js",
    "revision": null
  }, {
    "url": "assets/DQ5Zupmz.js",
    "revision": null
  }, {
    "url": "assets/DQicnYhK.js",
    "revision": null
  }, {
    "url": "assets/DuSKeNiB.css",
    "revision": null
  }, {
    "url": "assets/DW5uOdl-.css",
    "revision": null
  }, {
    "url": "assets/Dx3U6qo9.js",
    "revision": null
  }, {
    "url": "assets/iEwDEPZd.js",
    "revision": null
  }, {
    "url": "assets/jJ6pMX5Y.js",
    "revision": null
  }, {
    "url": "assets/LmBygqmL.js",
    "revision": null
  }, {
    "url": "assets/model-By70RrrU.jpg",
    "revision": null
  }, {
    "url": "assets/oMo_OjCD.js",
    "revision": null
  }, {
    "url": "assets/Ql8p2Dk4.js",
    "revision": null
  }, {
    "url": "assets/RGPfqQl6.js",
    "revision": null
  }, {
    "url": "assets/RkUbMgMX.js",
    "revision": null
  }, {
    "url": "assets/RTKFCJmK.js",
    "revision": null
  }, {
    "url": "assets/wx-Bfv1OeoY.png",
    "revision": null
  }, {
    "url": "assets/x7H6yciF.css",
    "revision": null
  }, {
    "url": "assets/y62ks7c4.css",
    "revision": null
  }, {
    "url": "assets/zirWr4RH.js",
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
    "revision": "1510a1b7f81b01f7bee4c0077a91d42a"
  }, {
    "url": "enfj.html",
    "revision": "746430c6b9d7643a76c96b4eec4a8b8b"
  }, {
    "url": "enfp.html",
    "revision": "2ca0c77a3b7dd3cbb17dea2ac6d1a157"
  }, {
    "url": "entj.html",
    "revision": "bca2bb2df27a8281d08fd14ddc55341c"
  }, {
    "url": "entp.html",
    "revision": "a899371f7e43382922b11a54ba2bff93"
  }, {
    "url": "esfj.html",
    "revision": "c99d849860f21bb0357792d599f29f59"
  }, {
    "url": "esfp.html",
    "revision": "e21416873773b89437434c60ed8a05d3"
  }, {
    "url": "estj.html",
    "revision": "d0eb9dd010b34ebfc79791b28155324c"
  }, {
    "url": "estp.html",
    "revision": "672b07051be878b872bbd5378a506351"
  }, {
    "url": "index.html",
    "revision": "0512a2763c8198f28d45329726914762"
  }, {
    "url": "infj.html",
    "revision": "dd8fa84723ba88d2aeb44bc9cf87df96"
  }, {
    "url": "infp.html",
    "revision": "64008c18ea493761f02e2c74e3094334"
  }, {
    "url": "intj.html",
    "revision": "fdbaade0a75bbb1515dd4d6389adfe46"
  }, {
    "url": "intp.html",
    "revision": "92d0cc93bdab54975002bc8197e544ec"
  }, {
    "url": "isfj.html",
    "revision": "b38db98513c598c3cc67dac2cb4bfbf6"
  }, {
    "url": "isfp.html",
    "revision": "466e83d843c955221940aaa08a862929"
  }, {
    "url": "istj.html",
    "revision": "bf75d6fc628647fbbb9c7d56e1b9282b"
  }, {
    "url": "istp.html",
    "revision": "966f0d51984bc6ee99ad79b51a64fffa"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "71d74cc262712c1bc382cb5b59fb24cf"
  }, {
    "url": "test.html",
    "revision": "e3e6f2e61ee786e2247d62a5bae1d461"
  }, {
    "url": "types.html",
    "revision": "d5fcba3fbab06d895f495061bc49e8a9"
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
