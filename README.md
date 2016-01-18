# Generator for the aw-webapp workflow
Use the generator to start developing a webapp or an bower/npm component


## Usage
#### Prequisits
* ````npm i -g bower slush gulp-cli````
* Python 2.7 installed and added to path

#### Installation
* ````$ npm i -g slush-aw-webapp````
* Create a working directory and enter into it
* ````$ slush aw-webapp````
* Start coding
Check the trouble shooting section if you run into any problems

#### Update
Want to use the latest version of the workflow on an existing project which was generated with this generator?
* ````$ npm i -g slush-aw-webapp````
* Navigate to the project directory
* ````$ slush aw-webapp:update````
* ````$ bower install````
* ````$ npm install````

#### Gulp commands
* ````$ gulp```` - Starting the development workflow. Reloads browser on change, Compiles SASS to CSS, injects dependencies and runs unit tests.
* ````$ gulp build```` - Creates a build in the specified build folder. Change the production flag in ````gulp.config.json```` to create a preproduction build.
* ````$ gulp serveCoverage```` - Serves the coverage report of our unit tests.

#### Configuration
* ````gulp.config.json```` - Used for settings of the workflow. Overwrites any defaults set in ````gulpfile.js/gulp.config.js````.
* ````karma.conf.js```` - Holds configuration concerning unit testing. Which files should be tested and which frameworks and plugins karma should use in our tests.


## Unit testing 
We use Karma testrunner and Jasmine as a testing framework. Just add any file with 
a *.spec.js* extention and the workflow will start running the tests automagically.


## Snippets
For our team there are snippets available in a gist. Ask for the snippets as they hold 
code conventions and will make your work a lot faster. There are snippets for Angular and
Jasmine.



## publish to bower
To publish to bower we use github. As this is a public repo please make sure there is 
no reference to arteries the code base.

IMPORTANT: *Before you build, remove the inject statement from your index.html and make sure 
only the files which are needed for your component to run are added to the build.*

* Set the right name of your component in the bower.json
* Ensure the right files are in the *ignore* & *main* property in you ````bower.json````
* ````$ gulp build````
* ````$ git remote add bower <github-url>````
* ````$ bower version <patch|minor|major>```` (google semver for more info)
* ````$ git push bower master --tags```` (after add & commit)
* ````$ bower register aac-<name> <github-url>````

After this use bower search to check or your component is registrered well. E.g. ````bower search <component-name>````



## Trouble shooting (windows only)

#### Npm installation errors
First of all check or you have Python 2.7 installed and added to your path. 
Run ````$ npm cache clean```` and after ````$ npm install```` again. 

#### Build errors
If you experience build errors (MSBUILD) after this you might have to install 
Visual Studio including the C SDK and .NET (2 & 3)

#### Missing Dependencies
In case you get any errors concerning missing dependencies try running 
````$ npm install```` again. If you still run in to problems try installing 
some problematic manually e.g. ````$ npm install <package-name>````. Installing
template cache node module (````$ npm install gulp-angular-templatecache````) has
solved this issue sometimes. 

#### Still having problems?
Cry and buy a mac or install linux.