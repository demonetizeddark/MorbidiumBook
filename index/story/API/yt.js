/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Amit Agarwal
 Web: http://www.labnol.org/?p=26740 
*/

function onYouTubeIframeAPIReady() { 
    var e = document.getElementById("youtube-audio"), 
    t = document.createElement("img"); 
    t.setAttribute("id", "youtube-icon"), 
    t.style.cssText = "cursor:pointer;cursor:hand", 
    e.appendChild(t); 
    
    var a = document.createElement("div"); 
    a.setAttribute("id", "youtube-player"), 
    e.appendChild(a); 
    
    var o = function (e) { 
        t.setAttribute("src", "/API/dvd.png") 
    }; 
    
    e.onclick = function () { 
        r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo(), o(!1)) : (r.playVideo(), o(!0));
        if (YT.PlayerState.PLAYING) {
            console.log('META: background audio successfully played')
        }
    }; 
    
    var r = new YT.Player("youtube-player", { 
        height: "0", 
        width: "0", 
        videoId: e.dataset.video,
        playerVars: { 
            start: "0",
            autoplay: e.dataset.autoplay,
            loop: e.dataset.loop
        }, 
            events: { 
                onReady: function (e) { 
                    e.target.setVolume(45);
                    r.setPlaybackQuality("small"),
                    o(r.getPlayerState() !== YT.PlayerState.CUED) 
                }, 
                onStateChange: function (e) { 
                    e.data === YT.PlayerState.ENDED && o(!1)
                } 
            }
        }) 
    }