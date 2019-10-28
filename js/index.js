const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
    "middle-img-src": "img/mid-page-accent.jpg",
    
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//nav 
let navContent = document.querySelectorAll("a");
navContent[0].textContent = siteContent["nav"]["nav-item-1"];
navContent[1].textContent = siteContent["nav"]["nav-item-2"];
navContent[2].textContent = siteContent["nav"]["nav-item-3"];
navContent[3].textContent = siteContent["nav"]["nav-item-4"];
navContent[4].textContent = siteContent["nav"]["nav-item-5"];
navContent[5].textContent = siteContent["nav"]["nav-item-6"];
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//cta
let catContent = document.querySelectorAll(".cta-text");
catContent[0].children[0].textContent = siteContent["cta"]["h1"];
catContent[0].children[1].textContent = siteContent["cta"]["button"];
let logoCta = document.getElementById("cta-img");
logoCta.setAttribute('src', siteContent["cta"]["img-src"]);

//main
let mainContent = document.querySelectorAll(".top-content");
mainContent[0].children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[0].children[0].children[1].textContent = siteContent["main-content"]["features-content"];
mainContent[0].children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
mainContent[0].children[1].children[1].textContent = siteContent["main-content"]["about-content"];

let logoMid = document.getElementById("middle-img");
logoMid.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottom = document.querySelectorAll(".bottom-content");
bottom[0].children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottom[0].children[0].children[1].textContent = siteContent["main-content"]["services-content"];
bottom[0].children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottom[0].children[1].children[1].textContent = siteContent["main-content"]["product-content"];
bottom[0].children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottom[0].children[2].children[1].textContent = siteContent["main-content"]["vision-content"];

//contact
let contact = document.querySelectorAll(".contact");
contact[0].children[0].textContent = siteContent["contact"]["contact-h4"];
contact[0].children[1].textContent = siteContent["contact"]["address"];
contact[0].children[2].textContent = siteContent["contact"]["phone"];
contact[0].children[3].textContent = siteContent["contact"]["email"];

//footer
let footer = document.querySelectorAll("footer");
footer[0].children[0].textContent = siteContent["footer"]["copyright"];

//change to green nav
navContent.forEach(element => {
  element.style.color = 'green';
});

//add new elements
const newA = document.createElement('a');
newA.textContent = "New";
const second = document.createElement('a');
second.textContent = "Second";
let parent = document.querySelector('nav');
parent.prepend(newA);
parent.prepend(second);
