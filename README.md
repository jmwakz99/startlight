<h1 >STARTLIGHT</h1>
<img src="./src/assets/images/myapp.gif" width="100%">


<h2>Utilized: React js, Bootsrap and CSS</h2>
<p>I didn't use redux because the project is small so I decided to take advantage of using state and props.</p>


## Summary of my project architecture 

```
/src/assets => contains images

/src/components => contains a collection of ui components e.g cards, spinners. Each component has a test file to help us maintain them because they used widely in the project.

/src/pages => The pages folder reflects the routes of the application. Each component inside this folder has its own route


/src/parts => The parts folder is almost the same as components folder. It contains a reusable components that used in the pages.

/src/services => It simply a javascript function to manage API integration based on the type of data.

/src/utils => The utils folder is just a place to locate some utility functions that used repeatedly in the project.It also has test file to help us maintain them because they are used widely in the project.



```
<strong>NOTE: I discovered that the API providers only accepts coords;</strong>
```
lat = 37.788719679657554
long = -122.40057774847898

when you try to use different coords apart from these the venue field from the json response is empty.

```

## Project setup
```
npm install
npm start
```

## Run test
```
npm install
npm test
```



## Help
if you face any problem please don't hesitate to reach me on my email: <a href="mailto:mwanjilajohnson@gmail.com">mwanjilajohnson@gmail.com</a>



