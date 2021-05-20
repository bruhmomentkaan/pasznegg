function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}



  
window.onload = function() {
    cssAdjustment();
    smoothScroll();
    callDistort();
};


function myTimeline() {
  var tl = gsap.timeline({defualts:{duration:1}})
  tl.from('.tile-id-1', {duration: 1, y:"105%", ease: 'power2', stagger: 0.1}, "+=0.5")
};
myTimeline();


function cssAdjustment() {
  selector = setTimeout(function(){
    function device(x) {
      if (x.matches) { // If media query matches
        scrollSpeed = 0
      } else {
      }
    }
    var x = window.matchMedia("(max-width: 900px)")
    device(x) 
    x.addListener(device)
  }, 0);
}



  

scrollSpeed = 0.25
const body = document.body,
    scrollWrap = document.getElementsByClassName("page-wrapper")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

const content = document.querySelector(".sub-wrapper");
let currentPos = window.pageYOffset;

const callDistort = function () {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * scrollSpeed;

    content.style.transform = "skewY(" + speed + "deg)";
    currentPos = newPos;
    requestAnimationFrame(callDistort);
};




var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");

function loadVideo(iframe) {
$.getJSON(reqURL + iframe.getAttribute('cid'),
    function(data) {
    var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
    console.log(videoNumber);
    var link = data.items[videoNumber].link;
    id = link.substr(link.indexOf("=") + 1);
    iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0&autoplay=0");
    }
);
}
var iframes = document.getElementsByClassName('latestVideoEmbed');
for (var i = 0, len = iframes.length; i < len; i++) {
loadVideo(iframes[i]);
}

