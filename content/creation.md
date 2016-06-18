# Creation blog

##  distributed revision control and source code management (SCM)
creating repository on [github](https://github.com/)

CLI commands for github API v3 (replace all CAPS keywords):

    curl -u 'USER' https://api.github.com/user/repos -d '{"name":"REPO"}'
    # Remember replace USER with your username and REPO with your repository/application name!
    git remote add origin git@github.com:USER/REPO.git
    git push origin master

I found the solution here: [stackoverflow](http://stackoverflow.com/questions/2423777/is-it-possible-to-create-a-remote-repo-on-github-from-the-cli-without-opening-br)

the result:
https://github.com/tecla5/comic


## decide to use github pages
we follow this [creating gh-pages](https://help.github.com/articles/creating-project-pages-manually/)

the result was this:
http://tecla5.github.io/comic

and this [custom-domain](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)

and we configure a subdomain
http://comic.tecla5.com/

##  static site generator blog
we choose the github project [perun](https://github.com/hashobject/perun)
 and follow the [Getting-Started](https://github.com/hashobject/perun/wiki/Getting-Started)


it was the result: [commit](https://github.com/tecla5/comic/commit/778fa6263be445296fc3caed9b7b2b1634e29139)


![github image](https://cloud.githubusercontent.com/assets/3462917/16172782/9c3d0286-358f-11e6-96c2-5fc38c53940a.png)

PD: if you dont want track the images on github
[upload images on gh-pages](http://solutionoptimist.com/2013/12/28/awesome-github-tricks/)

## first post creation blog
it is this page it self
