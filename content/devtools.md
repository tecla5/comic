---
name: devtools
keywords: boot, cljs
date-created: 2016-07-14
draft: true
---

# Dev tools


dev tools on Browser like chrome-devtools diract and react-developer-tools


## chrome-devtools

[overview](https://developer.chrome.com/devtools)
short cuts:
Ctrl + Shift + I, J, C, D

[more information](https://developers.google.com/web/tools/chrome-devtools/)

## boot cljs devtools

Boot task introducing enhancements to CLJS development in Chrome, specifically CLJS DevTools and Dirac.

it depends of:
- [cljs devtool](https://github.com/binaryage/cljs-devtools)
- [dirac devtool](https://github.com/binaryage/dirac)


###  Installation Dirac Chrome extension:
on google web store is the plugin dirac
[chrome extension](https://chrome.google.com/webstore/detail/dirac-devtools/kbkdngfljkchidcjpnfcgcokkbhlkogi)

-  dirac dev tool will be configured to backend url: http://localhost:9222

#### run browser as debug
https://developer.chrome.com/devtools/docs/debugger-protocol

nohup google-chrome  --remote-debugging-port=9222 &
<!-- --new-window -->
<!-- --profile-directory=Developer -->
<!-- google-chrome --user-data-dir=<some directory> -->
<!-- google-chrome --incognito -->


-  *keep in mind will be js and cljs console, you can swith from JS prompt to CLSJ REPL prompt.*

<!--
 to avoid this warning
- Cannot attach Dirac DevTools. Likely cause: another instance of DevTools is already attached. target-url=http://localhost:9222, tab-url=http://localhost:3000/
-->


#### active the custom formaters.

    Custom formatters functionality does not seem to be active in your DevTools.
    Please make sure you have "custom formatters" option enabled in your DevTools settings:
    > DevTools menu > Settings (F1) > Console > Enable custom formatters (it is disabled by default)
    https://github.com/binaryage/cljs-devtools/blob/master/docs/install.md#enable-custom-formatters-in-chrome


### add boot-cljs-devtools task

we follow the steeps described here, be sure that you install the same version number of
[boot-cljs-devtools](https://github.com/jupl/boot-cljs-devtools)
and dirac chrome plugin

edit `build.boot` and add cljs devtools, Dirac Agent, boot-cljs-devtools task
```clojure

; dependencies
;; Dev tool
[binaryage/devtools      "0.7.0" :scope "test"]
[binaryage/dirac         "0.6.1" :scope "test"] ; Dirac Agent
[jupl/boot-cljs-devtools "0.1.0" :scope "test"]

; require
  '[jupl.boot-cljs-devtools :refer [cljs-devtools]]

; on def task
  ; after (watch)
  (cljs-devtools)
  ; (before cljs)

```

result on the browser cljs console:
![screenshot from 2016-07-09 04 23 09](https://cloud.githubusercontent.com/assets/3462917/16707712/9caf72c2-45d8-11e6-9479-55a58465d7ef.png)


### react dev tool
React developer tools.

we install the extension from the chrome web store [react dev tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

[more info](https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html)


result on browser js console:
![screenshot from 2016-07-09 13 37 59](https://cloud.githubusercontent.com/assets/3462917/16707762/64a75348-45da-11e6-9e2c-62bcfb06359e.png)


### atom editor

[parinfer](https://github.com/oakmac/atom-parinfer)
Parinfer is a text editing mode that can infer Lisp code structure from indentation (and vice versa)

[minimap](https://github.com/atom-minimap/minimap)
A preview of the full source code.
