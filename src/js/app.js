
const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

/** 
 * 
 * This is where you add code that will manipulate index.html!
 * 
 * When you open index.html in your browser, this javascript file will be run once. This javascript file is loaded via the script tag in index.html.
 * 
 * Most of what you need is in the lecture slides! For the stuff that isn't, there are very strong hints in the lecture slides at least. 
 * 
 * You can also figure most things out with the MDN docs. 
 * 
 * Or, by using chrome devtools and debugger statements. 
 * 
 * 
 * Good luck :) 
 */
//debugger


 console.log('js loaded')

 //Exercise 1

const test1= document.querySelector('#ex01').textContent= "DONE";


 
//Exercise 2

//element.classList.add("class"); legger til en klasse
const test2= document.querySelector('.ex02').className = "red"



//Exercise 3
const test3= document.querySelector('blockquote').textContent= "YOLO";



//Exercise 4
let p = document.createElement("li")
p.textContent= "Milk"
const shoppingList= document.querySelector('#shopping-list').append( p )

 


//Exercise 5
  let newsHTML= "" 
  for (let i =0; i< news.length; i++){
      newsHTML+=  ` 
      <div class='news'></div>
      <h3 class=>${news[i].headline}</h3>
      <p class='summary'>${news[i].summary}</p>
      <p class='author'> skrevet av: ${news[i].author}</p>
      <a href= ${news[i].href} >Les mer her</a> 
     `  
  }
  document.querySelector('#news').innerHTML= newsHTML
   

//Exercise 6 fungerer
let addMoreClicks =0;
const update= document.querySelector('body')
update.addEventListener('click', (e) => {
    addMoreClicks++
    document.getElementById('click-counter').innerHTML= addMoreClicks        
})


//Exercise 7
const button= document.querySelector('button')
button.addEventListener('click', (e) => {
       button.disabled = true;      
})

//Exercise 8
const link= document.querySelector('#link-to-svt').href ='javascript: void(0)'


//Exercise 9
document.querySelector('img').src = "https://images.unsplash.com/photo-1599423423914-a8566189fd55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"