let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    document.getElementById("welcome").style.opacity = "1";
  }
}, 100);

function fakeCouple() {
    if (confirm('You have chosen to read "Fake Couple, Powered by Morbidium". Do you wish to continue?')) {
    window.location.href = "story/story.html"
  } else {
    console.log('Well, they said so.');
  }
}

setTimeout(function() {
  document.querySelector(".line-1.anim-typewriter").style.opacity = "0";
  document.getElementById("welcome").style.opacity = "0";

  setTimeout(function() {
    $("#welcome").hide();
    $(".line-1.anim-typewriter").hide();
    $("#secondstage")
    .show()
    .css("opacity", "1");
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    activateButtons();
  },1000)
}, 5000)


function activateButtons() {
  document.querySelector(".fakeCouple").onclick = function() {
    var select = document.getElementById("select");
    select.play();
    setTimeout(function(){fakeCouple();},100)
  }
}