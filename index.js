
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


const likeglyph = document.querySelectorAll(".like-glyph");

function likeCallback(event) {
  const heart = event.target;
  mimicServerCall("testUrl")
    .then(() => {
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(error => {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
}

for (const glyph of likeglyph) {
  glyph.addEventListener("click", likeCallback);
}




function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}