---
name: inject javascript
keywords: boot, blog
date-created: 2016-07-04
date-published: 2016-07-04
date-modified: 2016-07-08
---

# inject script

get the script from google analytics and saved on `resources/ga.js` file

simply added the task, it will inject the js to all html files.

```clojure
(inject-scripts :scripts #{"ga.js"})
```
