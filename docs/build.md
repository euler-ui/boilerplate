## Build

Let's say your project name is Foo. 

* cd to Foo.
* `npm run prod`
The command will generate all static files into build folder.
* `npm run start:prod`
You can test the build by run `npm run start:prod`, the command will bring up a node server which servers all static files under build foler. 
Visit [http://localhost:5000](http://localhost:5000). If it works well, you'll see the page runs up.
* Deploy. 
Put the files under build folder into your web server.