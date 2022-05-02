const scrollOptions = {behavior: 'smooth', block: 'start'}
const select = $("#select")[0];

$("#projector").hide()
$("#canvas_cont").hide();
$("#youtube-audio").hide();

$("#CHlist").click(function() {openNav()})
$("#closebtn").click(function() {closeNav()})

/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

buttonActive();

$(".sch1, .ch1").click(function(){document.querySelector(".c1").scrollIntoView(scrollOptions)});
$(".sch2, .ch2").click(function(){document.querySelector(".c2").scrollIntoView(scrollOptions)});
$(".sch3, .ch3").click(function(){document.querySelector(".c3").scrollIntoView(scrollOptions)});
$(".sch4, .ch4").click(function(){document.querySelector(".c4").scrollIntoView(scrollOptions)});
$(".sch5, .ch5").click(function(){document.querySelector(".c5").scrollIntoView(scrollOptions)});
$(".sch6, .ch6").click(function(){document.querySelector(".c6").scrollIntoView(scrollOptions)});
$(".sch7, .ch7").click(function(){document.querySelector(".c7").scrollIntoView(scrollOptions)});
$(".sch8, .ch8").click(function(){document.querySelector(".c8").scrollIntoView(scrollOptions)});
$(".sch9, .ch9").click(function(){document.querySelector(".c9").scrollIntoView(scrollOptions)});
$(".sch10, .ch10").click(function(){document.querySelector(".c10").scrollIntoView(scrollOptions)});


function buttonActive() {
    $(".junior > mark").mouseenter(function() {
        var audio = $("#beep")[0];
        audio.play();
      });
      
      $(".junior > mark").click(function(){
          select.play();
          setTimeout(function(){alert("You found out too late. This part of the website is no longer relevant. Move on.")}, 50)
      })

    $("#chapter.c2 > h1 > mark").mouseenter(function() {
        var audio = $("#beep")[0];
        audio.play();
      });
      
      $("#chapter.c2 > h1 > mark").click(function(){
          select.play();
          setTimeout(function(){calculatorJS()}, 50)
      })
}

function reset() {
    $("main").hide();
    $(".sidebar").hide();
    $("#myNav").hide();
    $(".navbar").hide();
    document.querySelector("body").style.display = "block"

    var doom = document.getElementById("zone")
    doom.play();
    $("#projector").addClass("uhoh");

    var rsodCSS = document.createElement("link");
    rsodCSS.rel = "stylesheet";
    rsodCSS.href = "API/rsod.css";

    document.head.appendChild(rsodCSS);
    $("#projector").show()
    $("#canvas_cont").show();
    document.getElementById("projector").style.animationPlayState = "running"

    setTimeout(function(){explanation()}, 10000)
}

function calculatorJS() {
    var overlay = document.getElementById("calcOverlay")
    overlay.innerHTML = '<div class="calculator-grid"> <div class="output"> <div data-previous-operand class="previous-operand"></div> <div data-current-operand class="current-operand"></div> </div> <button data-all-clear class="span-two">AC</button> <button data-delete>DEL</button> <button data-operation>÷</button> <button data-number>1</button> <button data-number>2</button> <button data-number>3</button> <button data-operation>*</button> <button data-number>4</button> <button data-number>5</button> <button data-number>6</button> <button data-operation>+</button> <button data-number>7</button> <button data-number>8</button> <button data-number>9</button> <button data-operation>-</button> <button data-number>.</button> <button data-number>0</button> <button data-equals class="span-two">=</button> <script src="/API/calculator.js" defer></script> <link rel="stylesheet" href="/API/calc.css"> </div>'
}

const fWordP = $( "p:contains('fuck')" )
const sWordP = $( "p:contains('shit')" )
const dWordP = $( "p:contains('damn')" )
const aWordP = $( "p:contains(' ass ')" )
const wWordP = $( "p:contains('-ass ')" )
console.log(fWordP)
console.log(sWordP)
console.log(aWordP)
console.log(wWordP)
console.log(dWordP)

document.querySelector(".antiexplicit").addEventListener('click', function() {select.play();setTimeout(function(){lock()},200)})
document.querySelector(".navantiexplicit").addEventListener('click', function() {select.play();setTimeout(function(){lock()},200)})

console.log(document.getElementById("f25").innerHTML)

function lock() {
    if (confirm('You are choosing to remove all explicit words from the story. Are you sure?')) {
        var f1 = document.getElementById("f1")
        var f2 = document.getElementById("f2")
        var f3 = document.getElementById("f3")
        var f4 = document.getElementById("f4")
        var f5 = document.getElementById("f5")
        var f6 = document.getElementById("f6")
        var f7 = document.getElementById("f7")
        var f8 = document.getElementById("f8")
        var f9 = document.getElementById("f9")
        var f10 = document.getElementById("f10")
        var f11 = document.getElementById("f11")
        var f12 = document.getElementById("f12")
        var f13 = document.getElementById("f13")
        var f14 = document.getElementById("f14")
        var f15 = document.getElementById("f15")
        var f16 = document.getElementById("f16")
        var f17 = document.getElementById("f17")
        var f18 = document.getElementById("f18")
        var f19 = document.getElementById("f19")
        
        var f20 = document.getElementById("f20")
        var f21 = document.getElementById("f21")
        var f22 = document.getElementById("f22")
        var f23 = document.getElementById("f23")
        var f24 = document.getElementById("f24")
        var f25 = document.getElementById("f25")

        var f26 = document.getElementById("f26")
        var f27 = document.getElementById("f27")
        var f28 = document.getElementById("f28")
        var f29 = document.getElementById("f29")
        var f30 = document.getElementById("f30")
        var f31 = document.getElementById("f31")
        var f32 = document.getElementById("f32")
        var f33 = document.getElementById("f33")
        
        f1.innerHTML = '<q class="junior">Jesus! What the heck were you guys sneaking behind me for?</q> Oh. Phew. It was just my friends.'
        f2.innerHTML = '<q class="junior">Juanpa, you call almost everyone short ‘cause you’re a big freakin’ dude. She’s only a couple of inches shorter than I am, and I’m 5 foot, 8 inches.</q>'
        f3.innerHTML = '<q class="antwon">Pretty tired. The boss at my work gave me a new schedule and its really stupid.</q>'
        f4.innerHTML = 'I’m scrolling through my Apple TV menu, trying to find that one friggin show and my anxiety breaks a peak when I faintly hear from the kitchen, <q class="mum">down the hall, first door to the left.</q> I start getting even more nervous as I curse my mom for even THINKING about answering that too soon, let alone in the FIRST place! You couldn’t have just given me some freaking time to go out there myself?!'
        f5.innerHTML = 'Step… step… step… step... They’re getting closer. What should I say? How should I act? Does my room look nice? Crap! I can’t think! The steps get closer, and closer, and closer. Until...'
        f6.innerHTML = '<q class="anisa">Oh, hi Junior!</q> the teenager says as she peeks in her head. And just as I expected, and surely didn’t want,'
        f7.innerHTML = 'We start laughing a little bit then we find a table to sit at. Because I can be a gentleman most of the time, I pull out Anisa’s chair for her so she can sit down. But as soon as <em>I</em> pull out <em>my</em> chair so <em>I</em> can sit down, I hear someone scream in pure anger. <q class="janessa"><strong>JUNIOR!</strong></q> I look at the door to see who was calling my name, and sure enough, out of all the people in the world,'
        f8.innerHTML = 'I start looking back on that night, and I start to remember what Anisa did to surprise Janessa. If I’m being honest, it felt amazing. However, I shouldn’t think of it too much because since we aren’t actually together, I fear that thinking about it will screw up my thoughts and that things will start happening.'
        f9.innerHTML = '<q class="antwon">After class? Dawg, that’s in an hour.</q>'
        f10.innerHTML = '<q class="antwon">Well, I guess you’re just gonna have to work with it and not screw it up until then.</q>'
        f11.innerHTML = '<q class="junior">Yeah, because if I <em>do</em> screw things up we’ll just go back to being friends or even worse, she’ll not want to talk to me at all.</q>'
        f12.innerHTML = '<q class="junior">I was born with high-pitch hearing sensitivity. I think it’s called ‘hyperacusis’. It’s a rare disorder that makes sounds at certain frequencies more uncomfortable and unsettling for me. In <em>my</em> case, it’s higher frequencies.</q> I then point at the fire alarms. <q class="junior">Those things have been the bane of my existence since kindergarten and they are the one thing I’m constantly anxious about. Hyperacusis can come in different kinds. Mine makes me annoyed, anxious, and uncomfortable from loud, high-pitched noises like those fire alarms.</q>'
        f13.innerHTML = '<q class="junior">Crap. I gotta go. You wanna get out of here early?</q>'
        f14.innerHTML = 'I start breathing heavily, I can’t sit still, and I’m starting to feel anxious. I absolutely hate fire drills with a passion. I’d rather be in a car crash, rear-ended on my way home from Panera Bread with a perfectly good sandwich and a strawberry-banana smoothie than be right here, right now, right before a fire drill. Anisa can tell that I’m losing my mind being out here. So she puts her hand on my hand on the table and rests her head on my shoulder to try and calm me down.'
        f15.innerHTML = '<q class="junior">Okay? What are you tellin’ me for?</q>'
        f16.innerHTML = '<q class="junior">Yeah, I almost swung at him a while ago and that dude still gets on my nerves. I guess that’s where you two connect.</q>'
        f17.innerHTML = '<q class="junior">You know what? Nevermind. No. Screw you. I’m not giving in, so take it. I don’t need to be Prom King to prove that I’m much happier with Anisa than I was with you. If you think I’m going to give in to your stupid shenanigans so I can get back with you, then you and Kaleb can go screw yourselves because I’m not falling for it.</q> I then turn around and continue walking towards the library. <q class="junior">Wasting my time,</q> I mumble as I’m walking away from Janessa.'
        f18.innerHTML = '<q class="junior">What do you mean, ‘what’s with the face?’ I just got notified that Anisa and I are on the voting list for prom and Janessa is treating it like a competition,</q> I reply with an angry tone. I set my bags down on the couch and go on my phone.'
        f19.innerHTML = '<q class="junior">Shut up Bread, you’re not helping,</q> I say back in a jokingly manner.'

        f20.innerHTML = 'On the other line, the boys and I look at each other in disgust and confusion. <q class="junior">Angel, you didn’t need to tell her that. ‘Up for grabs’? ‘Nobody likes me like that?’ Lad, are you <em>trying</em> to be lonely?</q> I tell Angel through the phone. After I tell him that, he takes out his Airpod so he can’t hear us. He continues on his own without our help, but I start thinking in my head about what I should say when this goes south.'
        f21.innerHTML = '<q class="evette">Sure, I’ll go with you,</q> Evette says. I’m pretty sure we all forgot that Angel’s phone defaults to the speaker when a Bluetooth device is disconnected for whatever reason, and I’m sure both of them heard me say, <q class="junior">how the heck did that work?</q>'
        f22.innerHTML = 'There was a moment of silence between all of us on both ends of the line, with absolutely no sound other than the birds and the cars of the parents dropping off their kids. That was the worst and longest 60 seconds I’ve had to endure. After the long silence, Evette starts laughing as Angel grabs his phone and sends the audio through the ear speaker. Angel starts apologizing for what happened but before he can finish, Evette stops him. <q class="evette">No, it’s fine, I forgive you,</q> she says, still chuckling.'
        f23.innerHTML = 'Angel walks into the cafeteria where we were hiding after the awkward silence incident, and he was still bewildered at what happened. <q class="angel">How the heck did that work?</q> he says, still shocked.'
        f24.innerHTML = '<q class="junior">Nah, but that’s what I mean. Anything can happen, you just gotta trust the process,</q> I tell Angel. <q class="junior">But seriously, dude; you could’ve, and probably have screwed up so many ways in that conversation it’s hard to comprehend.</q>'
        f25.innerHTML = '<q class="junior">Shut up, Bread.</q>'

        f26.innerHTML = 'Out of nowhere, a freaking swat team rolls in through the front door yelling at everyone to get down and put their hands out. I look at Anisa for a bit and she hasn’t even moved an inch. I just say forget it and get down on the floor with both hands out. When the armed men have everyone on the ground, Janessa walks in with a military suit on and walks to where Anisa and I were sitting. Anisa stands up to stop her.'
        f27.innerHTML = 'Instead, she stands next to Janessa, grabs the pistol from Janessa’s hand, and points it at my head. <q class="anisa">You’re so stupid. You didn’t know this entire time that this was a ruse? For being one of the smartest students in school, you’re a real disappointment, you know that?</q>'
        f28.innerHTML = 'I start scrambling around to try and find a polo shirt and a pair of actual pants to dress myself in. People know me around the school as the one who wears the tracksuits, but today I’ve turned over a new leaf and I’m going to dress in something formal. <q class="junior">Temporarily,</q> I say to myself as I look at the shirt and pants that I picked. When it comes to the shoes, I always tell myself this: <q class="junior">how are you gonna stomp a dude out with a pair of Adidas? You need to put on some Timbs!</q> Timbs is another name for a pair of Timberland boots, and that’s what I’ll be wearing tonight. I initially wanted to wear the suit, but I figured I’d rather save it for the prom tomorrow. I’d rather stain it tomorrow instead of today because then I’d have to wash it again. And wouldn’t that be a shame?'
        f29.innerHTML = '<em>You</em> think <em>I’m</em> cruel? Really? You’re the one always going around, sleeping with other guys, smoking all kinds of garbage, drinking your liver away, and <em>I’m</em> the one throwing away your life?'
        f30.innerHTML = '<q class="anisa">She just what?! Tried to defend herself with whatever was going on?! Junior, I thought you were better than this! I can’t believe you. You lied to me about this?! You misogynist! Go screw yourself!</q>'
        f31.innerHTML = '<q class="anisa">You have what?! Speak up!</q>'
        f32.innerHTML = 'Janessa, don’t act like <em>I’m</em> the one hurting you. I can’t be with you anymore after what you did to me. You mentally and emotionally impaired me day after day, always berating me for anything I do that you don’t like and for what? For talking to other females as friends? For saying I was doing something with my family and you wanted me to put you before them? I said I needed space and you smashed my window. I told you I was going out with friends and you stalked me to make sure I was telling the truth. You even sent my friends fanfictions of you and me doing absolutely abysmal things. You spread lies about me to anyone who would listen to you and you never stopped. I’ve even tried asking you nicely and you still didn’t listen. You didn’t trust me with anything, you never did, even <em>before</em> we got together. It was a one-way road when it came to trusting, love, and appreciation in our relationship back in 8th grade and now I feel like I’ve wasted my time with you. You received but never gave, and for that reason, amongst everything else, you need to leave me alone. After prom, I’m getting a restraining order and I’m going to encourage Anisa to do the same. I’ve finally found someone I want to be with and I’m not going to let you mess it up for me. I should’ve done this ages ago and while I still have the chance, I’m going to block your number and everything else. And with that, this is goodbye.'
        f33.innerHTML = 'She starts to crack a smile with tears still on her face and laughs a little bit. <q class="anisa">You’re such a brat.</q> She places her hand on my face and we exchange a kiss. As we do this, I get a flashback of when we were back at Coldstone, I get that same feeling from when we were out at the quad during a fire drill, and I get that same warmth that assures my safety. I almost don’t want to let go.'


        var s1 = document.getElementById("s1")
        var s2 = document.getElementById("s2")
        var s3 = document.getElementById("s3")
        var s4 = document.getElementById("s4")
        var s5 = document.getElementById("s5")
        var s6 = document.getElementById("s6")
        var s7 = document.getElementById("s7")
        var s8 = document.getElementById("s8")

        s1.innerHTML = 'My name is Junior, Junior Lucio. I’m 17 years old, and I’m the one you want to talk to when you need any technical help when the school I.T. isn’t there, even if it’s to help break the rules. Admittedly, my ego can get quite expanded at times, so feel free to insult me every once in a while to calm it down.'
        s2.innerHTML = 'I’m a pretty good editor, arguably the best in the school. I’m not saying that it’s often, but that certainly isn’t the first time that I get questions like that on “help with editing videos”, which is basically them asking me to edit a video for them with nothing in return. Most of the members of my previous teams graduated, so I was the last member in that whole saga, but since I’m no longer in Video Production, that spark went away quite quickly in our school. Now the videos that we used to call “morning announcements” are excruciatingly boring and painful to watch. I’d be better off living in China shouting “glory to the CCP!”'
        s3.innerHTML = '<q class="junior">Yeah, I have no idea why, but...</q> I was going to continue to insult prom, but something crossed my mind and it suddenly changed. <q class="junior">But it sounds fun.</q>'
        s4.innerHTML = 'It gets a little frustrating for me when my family butts into something I feel should be kept away from them, especially my relationships. I don’t tell my parents anything about anyone I date because they’d say something about it. Even my extended family: if I tell them anything about me even liking a girl, they’d be everywhere in my business and either talk crap about it or just ask way too many questions. Because yes, they’re <em>really</em> nosy.'
        s5.innerHTML = '<q class="junior">Hey, <mark>Anisa</mark>. I didn’t expect you to be here,</q> I try to say with a smile on my face that’s not showing that I’m <em>extremely</em> nervous right now.'
        s6.innerHTML = '<q class="antwon">Dawg, either you’re not telling me the truth or I’m missing something because I can tell whether or not you’re lying.</q>'
        s7.innerHTML = '<q class="antwon">Oh crap, that’s right! I completely forgot about that!</q>'
        s8.innerHTML = 'But I know I have to because as soon as we stop and I look at my watch, oh CRAP, we have 10 minutes until our reservation at the sushi restaurant. <q class="junior">Hey, we’re gonna be late for our ‘fake date’, remember?</q> I tell Anisa as I show her my phone’s clock.'


        var a1 = document.getElementById("a1")
        var a2 = document.getElementById("a2")
        var a3 = document.getElementById("a3")

        a1.innerHTML = 'I explain to her who Janessa is and how much of a pain she is, and the more I talk about her, the more she starts to understand and more about the situation.'
        a2.innerHTML = '<q class="junior">Hey, so uh, thanks for helping me out there. I’m incredibly sorry that you had to see how much of a pain she is, first-hand,</q> I tell Anisa as we’re walking down the street.'
        a3.innerHTML = '<q class="junior">No, idiot. A plan.</q>'

        
        var d1 = document.getElementById("d1")
        var d2 = document.getElementById("d2")
        var d3 = document.getElementById("d3")
        var d4 = document.getElementById("d4")
        var d5 = document.getElementById("d5")
        var d6 = document.getElementById("d6")

        d1.innerHTML = 'Janessa is as far away from me as possible, so I turn back around to continue walking. But in typical high school cliché fashion, I bump into someone that just so happened to be in my way as I was turning my head back around to make sure Janessa stayed away from me, and the person that I ran into just so happened to be holding a perfectly good cup of tea in their hands. Initially, I was irritated because piping hot tea got spilt on my jacket and it was seeping into my shirt by the minute, but as I was getting ready to pop off at them, I took one look at who they were and stopped. Frankly, I don’t know this person, I don’t even think I’ve seen this person around campus, but upon looking at them, I stopped what I was doing, changed my tone, and immediately apologised. <q class="junior">Dang, I’m really sorry about that, I didn’t mean to bump into you.</q>'
        d2.innerHTML = '<q class="antwon">Man, I wanna change my schedule but I’m making a lot with what I have now, and I’m afraid if I get it changed, I’ll stunt my income.</q>'
        d3.innerHTML = '<q class="antwon">Dang, that sucks. Where were you last night? We were waiting for you to join the Bonfire call but you never did.</q>'
        d4.innerHTML = '<q class="antwon">Man. That’s a lot to take in,</q> he says with a sigh.';
        d5.innerHTML = 'I started calming down, I could feel my heart rate slowing down to normal levels, and I got that same warm feeling inside of me again. One part of my brain is trying to fight it because it’s a FIRE DRILL, but the other side of it is saying to let it go and relax, and that maybe it’s not so bad being here. I rest my head on Anisa’s head and I start to smile. I didn’t even realize that the alarms were pulled, I was so lost in the moment that I didn’t care about the alarms, I had completely forgotten about the fire drill I was fighting demons over just 30 seconds ago.'
        d6.innerHTML = '<q class="anisa">Oh, crap! I completely forgot that I dressed up for this!</q>'

        document.title = "Fake Couple - Powered by Morbidium (Now gluten free!)"
        buttonActive();

        select.play();
        setTimeout(function(){
        alert("All explcits were removed and replaced. Refresh the page to reset.")}, 100)
} else {
    alert("Understood.")
}}

function explanation() {
    select.play();
    alert("Alright.");
    alert("You want me to tell you the truth?");
    alert("Fine.");
    alert("I didn't make this with the intention to create a fantasy.");
    alert("I did this to cope with how I should approach this individual.");
    alert("I did this to cope with the burden of making mistakes.");
    alert("Because I /have/ made mistakes. I'm human. We both are. I'm sure you've made mistakes that you regret.");
    alert("But whoever's reading this,");
    alert('"Anisa" isn’t a real individual.');
    alert('...');
    setTimeout(function(){
        select.play();
        alert('However,')
        alert('"Aneesah" is.');
        alert("But before I explain anything, let me make sure it's whoever I want to see this.");
        let pass1 = prompt('Please enter the password given to you by the administrator. \n(femme différente)')
        if (pass1 !== "chapter4") {
            select.play();
            alert("Uh, not quite. Let's try that again, yes?");
            explanation();
        } else {
            alert("Ah, so it seems as though you were allowed to continue.");
            alert("Very well.");

            $("#youtube-audio").show();
            document.getElementById("youtube-player").onclick();
            setTimeout(function(){select.play;elaborate()},7000)
        }
    }, 2000)
}

function elaborate() {
    alert("Ever since Winter Formal, I couldn't stop thinking about her. I remember that night, I was perplexed on how good she looked that night.");
    alert("I remember. She was wearing a black dress.");
    alert("That night, that's all I would think about. That black dress.");
    alert("I'd be lying if I said I didn't love this girl.");
    alert("...");
    setTimeout(function(){
        select.play();
        alert("But I'd also be lying if I said I wasn't afraid to talk to her that night.");
        alert("I didn't want to admit it at first, but I get extremely nervous when it comes to talking to her.");
        alert("My cousin was there that night. He goes to a different school, but our school didn't do well with letting a specific set of students in.");
        alert("But then again, when are they ever?");
        alert("Anyways, I digress, let's get back to the point.");
        alert("My cousin tends to screw around a lot, so what he did when I told him about Aneesah was he said that he was going to tell her that I liked her.");
        alert("I got afraid and I retaliated. I stopped him from turning around and borderline begged him to not tell her. I even paid him $20 that night to not tell her.");
        alert("I was afraid to walk up to her that night because I was afraid of being rejected. I always am.");
        alert("That's why when, or even /if/ someone likes me, I don't normally get the memo because if I'm wrong, I'd look like an idiot.");
        alert("Of course, you might still think that I'm an idiot for doing this, coding an entire website with a backdoor leading to a confession like this, but this is one of the only ways I can explain things and be comfortable.");
        alert("If this is the off-chance that this is Aneesah reading, and not Liliana or Stephanie, I'm sorry.");
        alert("I'm sorry for not being confident enough to just walk up to you that night and be straightforward with my feelings.");
        alert("I'm sorry for waiting this long in the school year to tell you how I really feel.");
        alert("I'm sorry for being a coward.");
        alert("Not only was I afraid of being rejected, but I was also afraid that I was taking a shot in the dark.");
        alert("I was afraid that you were way too out of my league.");
        alert("Permettez-moi d'élaborer.");
        alert("I've explained to a handful of people my situation and when they see you they always talk about how pretty you are. I'm not saying that its a bad thing, it's absolutely a good thing. But what I'm saying is that I'm afraid you might be /too/ attractive for me and I don't have a shot.");
        alert("But me? I'm just a dude who wears tracksuits and balls out on Super Smash Bros and codes entire websites for /fun/.");
        alert('Yeah, "fun." ' + "I'm funny, I know.");
        alert("Haha.");
        alert("...");
        document.getElementById("youtube-audio").onclick();
        $("#youtube-audio").hide();
        $("#projector").removeClass("uhoh");
        $("#projector").addClass("goBack");
        var doom = document.getElementById("zone");
        doom.play();
        setTimeout(function(){
            select.play();
            setTimeout(function(){
                alert("Now, with that out of the way, let's get to the confession part.");
                setTimeout(function() {
                    $("body").css("background", "#000");
                    setTimeout(function(){lionsGate()}, 3000)
                })
            },200)
        }, 10000)
    },2000);
}

function lionsGate() {
    select.play();
    alert("Ah, ah, ah. Not so fast there.");
    alert("Before I can let you in, I need to know it's actually you who this JavaScript code is talking to.");
    alert("Which means, you're going to need a passkey from me to get in.");
    alert("Now, to the normal web developer, it's very easy to find in the script file that this code is contained in.");
    alert("But, you're no web developer, are you? 😉");
    let passkey = prompt("Please enter a passkey given to you by the administrator.")
    if (passkey == "12112021") {
        alert("Ah, see you've gotten the right passkey.");
        alert("I apologize for making things difficult, I just like to keep some things confidential. 😉");
        alert("Alright, with that said, let's actually get to the confession.");
        setTimeout(function(){select.play();confession()}, 5000)
    }else {
        if (passkey == "morbidium" || passkey == "Morbidium") {
            alert("Ha.");
            alert("Haha.");
            alert("Hahahahaha.");
            alert("Hahahahahahahahahahahahahahaha.");
            alert("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA");
            alert("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA");
            alert("Really?");
            alert("Did you really think I was going to fork over my confession that easily?");
            alert("This is some confidential information!");
            alert("I wouldn't want that getting compromised, now would I?");
            let answer = prompt("There's a reason why I won't tell you what is in my confession.", "Why?");
            if (answer == "Why?" || answer == "why" || answer == "y" || answer == "Why") {
                alert('"Why"?');
                alert('Your name isn’t "Aneesah", is it?');
                alert("If you really thought that I was going to tell you my confession,");
                alert("you're sadly mistaken.");
                alert("You must've forgotten one thing about me:");
                alert("I absolutely love screwing with people.");
                alert("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA");
                alert("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA");
                alert("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA");
                alert("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA");
                alert("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA");
                setTimeout(function(){select.play();location.reload()}, 200)
            } else {
                alert('"' + answer + '"?');
                alert("That's not the response I was hoping for.");
                alert("Alright.");
                alert("Well, looks like you're going to have to redo that.");
                alert("From the top!");
                setTimeout(function(){select.play();location.reload()},100)
            }
        } else {
            alert("Oh, man. That sucks. Looks like you've gotten the wrong passkey!");
            alert("As you're not quite exactly who I was hoping to talk about this subject to, you unfortunately cannot continue without the correct passkey. I like to keep some stuff confidential, you know. 😉");
            alert("And with that, I bid you farewell.");
            setTimeout(function(){
                var audio = $("#zone")[0];
                audio.play();
                setTimeout(function(){location.reload()},10000)
            },200)
        }
    }
}

function confession() {
    alert("Hi, there.");
    alert("Bet you didn't expect the hardass in Adidas to be this soft inside.");
    alert("Or coding something like this.");
    alert("How's your day been?");
    alert("...");
    alert("Oh, right. I can't actually know how it is because you're there and I'm here in code.");
    alert("That's fair.");
    alert("...");
    alert("...");
    alert("Okay, okay. I know I'm stalling. I just need to figure out how to put this in a certain way.");
    alert('Quite ironic from the one with the "way with words", huh?');
    alert("Haha.");
    alert("...");
    alert("Okay, maybe it wasn't that funny. I'm sorry.");
    alert("...");
    alert("...");
    alert("You know what? Fuck it. I'll just be straightforward with you.");
    alert("Aneesah, if it wasn't evident enough, I have feelings for you.");
    alert('And no, "Anisa" was not based /on/ you, it was just someone who I saw fit into the story.');
    alert('But that‘s not the point. The point that I‘m trying to make is that I like you. Evidently, not just "like" either. I have a genuine attraction to you.');
    alert("I've already explained everything in the beginning of the prompts, but this is essentially me talking to you through code. If you want to talk to me about it in person, /you'll/ have to come up to /me/ because you're really hard to find at school. One second I see you, next second you disappear.");
    alert('And even when I /do/ find you, you‘re always either talking with someone or too far away to catch. You might ask me: "well, why don‘t you walk up to me while I‘m with someone?" Because I don‘t want to take your time away from your friends, that‘d be selfish on my end and I don‘t want to be like that.');
    alert("You wanna know something else too? You wanna know another reason why I was afraid to bust a move? Because I've gotten a hunch from someone else that you were lesbian. I'm okay with being with a bisexual girl, I've done it before, but if we're getting into the territory of being lesbian, that's an instant loss right there. And I'm not going to just straight up ask if you're lesbian because that'd be rude.");
    alert("You're really good looking and your personality is something that I enjoy, all the more reason to not want to fuck things up with you. One thing about me is that I'm not the kind of dude to say that and go off with another girl. I actually don't like those kinds of people, they make the rest of us look bad. I'm not that kind of person, I care about people most of the time.");
    alert("I know these prompts are getting longer and that's because I'm rambing the same way I would if I were to talk to you in private.");
    alert("Now, I wanna talk further on the Morbidium Book." + ' "Fake Couple", in particular.');
    alert("Most of these characters don't represent anyone in particular, even if the names are similar. Juanpa, Antwon, Bread, and even Anisa, to name a few. However, there's one character in particular that I want to mention.");
    alert("Janessa.");
    alert("Janessa doesn't just represent one person, she represents many, combined into one to represent the burden of mistakes; the mistakes of being in a relationship with them in the first place.");
    alert("That's what this story is about, dealing with the burden of mistakes.");
    alert("And the many people she represents?");
    alert("The combined negative energy of my ex-girlfriends.");
    alert("You see where I'm going with this?");
    alert("If not, let me elaborate further.");
    alert("Anyway, with that out of the way, I'm willing to talk more about these topics at a different time. However, I do want you to read between the lines a little bit. They do help with what I'm trying to tell you.");
    alert('Again, this is just a coping mechanism where I put my burdens in code and mask them as fantasy. I did indeed make this website with the intent of having this "backdoor", ')
    alert("And with that, I bid you farewell.")
    setTimeout(function(){
        var audio = $("#zone")[0];
        audio.play();
        setTimeout(function(){select.play();location.reload()},10000)
    },200)
}