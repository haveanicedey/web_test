# Test for Web Developers - Altitude Labs

Hi guys!

Thanks for taking interest in me.

For this test, I used NodeJS for the backend. The node modules I used are express, cookie-parser and ejs. After you git clone this repo, navigate to the root directory and run the following on Terminal

```
node app.js
```

Then on your browser go to *http://localhost:8888/* to test the code

#### Steps I Followed

1. First I sliced up the psd image on Photoshop into different parts and used the 'Save for Web' function to export the images
2. Step 1 created a bunch of html divs. I edited the divs and gave them unique ids and also edited the css so that my final design resembles the original psd design
3. I wrote my code to manipulate the leaderboard table in script.js where I update the relevant html elements when the Poller has new results every 15 seconds
4. BONUS - For animating the leaderboard when there is an update, I used the animation library *textillate.js* to animate the tweet count

* [index.ejs](views/pages/index.ejs)
* [style.css](public/css/style.css)
* [script.js](public/js/script.js)