# ATlan SQL Editor TASK


You can check out the application at : **https://atlansqleeditor.netlify.app/**

Queries used :  select * from customers,
    select * from orders,
    select * from categories,
    select * from shipper,
    select * from customer where shipCountry==France


## Data

I have coverted the csv files provided by team Atlan to JSON format and made result corresponding to result ,hence everytime a request is made result will have the data

## List of all major libraries utilised in the application:

I tried to use as less libraries as possible so as to make application load faster and code the proper way.

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [React2-codemirror](https://github.com/JedWatson/react-codemirror)

## Steps taken to Optimize

1. Reduced the unused file and minify the javascript code 

2. Using useMemo hook to catchify the data of every table so that we user hit the same request again we dont have compute all again

3. Only importing used Module in a component from library rather than importing whole library.

## Page Load Time

Page Load TIme has been calculated by using the [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse).

<img width="70%" src="screenshots/performance.jpeg" />

## How to run:

1. [Download]() or [Clone]() the Repository.
2. Run `npm install` to install the project dependencies.

3. Run `npm start` to run the app in development mode.

4. App can be seen at: `http://localhost:3000/`


Screenshots
-----------

<img width="70%" src="screenshots/1.jpeg" />
<img width="70%" src="screenshots/2.jpeg" />
<img width="70%" src="screenshots/3.jpeg" />
<img width="70%" src="screenshots/4.jpeg" />
<img width="70%" src="screenshots/5.jpeg" />
<img width="70%" src="screenshots/6.jpeg" />
