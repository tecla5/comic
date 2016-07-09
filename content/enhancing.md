# enhancing boot

we follow enhancing our blog

## defining tasks
we defining tasks to boot on the `build.boot`

```clojure
    (deftask name-task
      "Some comments."
      []
      clojure.core/identity)
```
on this way then it is not need to use this large command

for dev
~~boot serve -r public watch markdown render -r site.core/page~~

for build
~~boot markdown render -r site.core/page target~~

now we can use this way:

    boot dev
    boot build
    boot prod

for more info
[boot task](https://github.com/boot-clj/boot/wiki/Tasks)

## livereload
we follow this to achieve it [boot livereload](https://github.com/Deraen/boot-livereload)

result on browser js console:
> client.cljs:40 Reload websocket connected.


[livereload chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

the last result on shell:
![boot dev](https://cloud.githubusercontent.com/assets/3462917/16180229/bc0cbdcc-367f-11e6-8b23-aa1fb8eada85.png)
