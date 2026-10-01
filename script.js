/* =====================================================
   RESET
===================================================== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
}


body {
  background: #070201;
  color: #fff4df;
  font-family: Inter, sans-serif;
  overflow-x: hidden;
}



/* =====================================================
   HERO
===================================================== */

.hero {

  position: relative;

  width: 100%;

  min-height: 100vh;

  min-height: 100svh;

  overflow: hidden;

  display: flex;

  align-items: center;

  isolation: isolate;

  background:

    radial-gradient(
      circle at 75% 45%,
      rgba(201,155,67,.18),
      transparent 25%
    ),

    radial-gradient(
      circle at 20% 30%,
      rgba(120,35,8,.35),
      transparent 35%
    ),

    linear-gradient(
      125deg,
      #050100,
      #160603,
      #2b0c04,
      #080201
    );

}



/* =====================================================
   BACKGROUND
===================================================== */

.background {

  position: absolute;

  inset: -20%;

  z-index: -5;

  background:

    repeating-linear-gradient(
      115deg,
      transparent 0,
      transparent 80px,
      rgba(242,211,140,.025) 81px,
      transparent 82px
    );

  animation:

    backgroundMove 18s linear infinite;

}


@keyframes backgroundMove {

  0% {
    transform:
      translate(0,0)
      rotate(-3deg);
  }

  50% {
    transform:
      translate(-30px,20px)
      rotate(-3deg);
  }

  100% {
    transform:
      translate(0,0)
      rotate(-3deg);
  }

}



/* =====================================================
   GLOW
===================================================== */

.glow {

  position: absolute;

  border-radius: 50%;

  filter: blur(80px);

  pointer-events: none;

  z-index: -2;

}


.glow-one {

  width: 420px;

  height: 420px;

  right: 3%;

  top: 10%;

  background: #c99b43;

  opacity: .25;

  animation: glowMove 7s ease-in-out infinite;

}


.glow-two {

  width: 300px;

  height: 300px;

  left: 2%;

  bottom: 5%;

  background: #8b260b;

  opacity: .25;

  animation: glowMove 9s ease-in-out infinite reverse;

}


.glow-three {

  width: 200px;

  height: 200px;

  right: 40%;

  bottom: -80px;

  background: #f2d38c;

  opacity: .12;

}


@keyframes glowMove {

  0%,100% {

    transform:
      translateY(0)
      scale(1);

  }

  50% {

    transform:
      translateY(-35px)
      scale(1.08);

  }

}



/* =====================================================
   PARTICLES
===================================================== */

.particles {

  position: absolute;

  inset: 0;

  pointer-events: none;

  z-index: -1;

}


.particles span {

  position: absolute;

  width: 3px;

  height: 3px;

  border-radius: 50%;

  background: #f2d38c;

  box-shadow:

    0 0 12px #f2d38c,

    0 0 25px rgba(242,211,140,.5);

  animation:

    particle 8s ease-in-out infinite;

}


.particles span:nth-child(1) {
  left: 8%;
  top: 22%;
}

.particles span:nth-child(2) {
  left: 18%;
  top: 68%;
  animation-duration: 11s;
}

.particles span:nth-child(3) {
  left: 31%;
  top: 16%;
  animation-duration: 9s;
}

.particles span:nth-child(4) {
  left: 42%;
  top: 78%;
  animation-duration: 12s;
}

.particles span:nth-child(5) {
  left: 55%;
  top: 18%;
  animation-duration: 7s;
}

.particles span:nth-child(6) {
  left: 68%;
  top: 76%;
  animation-duration: 10s;
}

.particles span:nth-child(7) {
  left: 79%;
  top: 27%;
}

.particles span:nth-child(8) {
  left: 91%;
  top: 62%;
  animation-duration: 13s;
}

.particles span:nth-child(9) {
  left: 12%;
  top: 48%;
}

.particles span:nth-child(10) {
  left: 47%;
  top: 35%;
}

.particles span:nth-child(11) {
  left: 73%;
  top: 52%;
}

.particles span:nth-child(12) {
  left: 87%;
  top: 18%;
}


@keyframes particle {

  0% {

    transform:
      translateY(30px)
      scale(.5);

    opacity: 0;

  }

  25% {
    opacity: .9;
  }

  50% {

    transform:
      translate(20px,-30px)
      scale(1);

  }

  75% {
    opacity: .6;
  }

  100% {

    transform:
      translate(-15px,-90px)
      scale(.3);

    opacity: 0;

  }

}



/* =====================================================
   TOP LABEL
===================================================== */

.top-label {

  position: absolute;

  top: 60px;

  left: 50%;

  transform: translateX(-50%);

  display: flex;

  align-items: center;

  gap: 15px;

  color: #e9c978;

  font-size: 9px;

  letter-spacing: 5px;

  white-space: nowrap;

  animation: fadeIn 1s ease forwards;

}


.top-label span {

  width: 45px;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #d9ad56
    );

}


.top-label span:last-child {

  background:
    linear-gradient(
      90deg,
      #d9ad56,
      transparent
    );

}



/* =====================================================
   MAIN CONTENT
===================================================== */

.hero-content {

  position: relative;

  z-index: 20;

  width: 850px;

  margin-left: 5vw;

  margin-top: 20px;

}


.est {

  margin-bottom: 20px;

  color: #c9a65a;

  font-size: 10px;

  letter-spacing: 6px;

  opacity: 0;

  animation:
    slideUp .9s ease 1s forwards;

}



/* =====================================================
   TITLE
===================================================== */

h1 {

  font-family:
    "Cormorant Garamond",
    Georgia,
    serif;

  line-height: .76;

  text-transform: uppercase;

}


.title-one,
.title-two {

  display: block;

  font-size:
    clamp(70px,9vw,145px);

  font-weight: 600;

  letter-spacing: -4px;

  opacity: 0;

  transform:
    translateY(70px)
    scale(.94);

  animation:
    titleReveal 1.2s
    cubic-bezier(.16,1,.3,1)
    forwards;

}


.title-one {

  animation-delay: 1.2s;

}


.title-two {

  color: #e9d19a;

  animation-delay: 1.4s;

}



/* =====================================================
   BIRIYANI TITLE
===================================================== */

.biriyani {

  display: block;

  margin-top: 15px;

  font-family:
    "Cormorant Garamond",
    Georgia,
    serif;

  font-size:
    clamp(90px,13vw,205px);

  line-height: .72;

  font-weight: 700;

  letter-spacing: -7px;

  background:

    linear-gradient(
      180deg,
      #fff3c9,
      #f2d38c 25%,
      #c99b43 55%,
      #7a4a12
    );

  -webkit-background-clip: text;

  background-clip: text;

  color: transparent;

  filter:
    drop-shadow(
      0 15px 30px
      rgba(0,0,0,.7)
    );

  opacity: 0;

  transform:
    translateY(100px)
    scale(.8);

  animation:

    biriyaniReveal
    1.4s
    cubic-bezier(.16,1,.3,1)
    1.6s
    forwards;

}


@keyframes titleReveal {

  to {

    opacity: 1;

    transform:
      translateY(0)
      scale(1);

  }

}


@keyframes biriyaniReveal {

  0% {

    opacity: 0;

    transform:
      translateY(120px)
      scale(.72);

    filter:
      blur(12px)
      drop-shadow(
        0 15px 30px
        rgba(0,0,0,.7)
      );

  }

  70% {

    opacity: 1;

    transform:
      translateY(-8px)
      scale(1.02);

  }

  100% {

    opacity: 1;

    transform:
      translateY(0)
      scale(1);

    filter:
      blur(0)
      drop-shadow(
        0 15px 35px
        rgba(0,0,0,.7)
      );

  }

}



/* =====================================================
   DIVIDER
===================================================== */

.divider {

  display: flex;

  align-items: center;

  gap: 15px;

  width: 310px;

  margin: 30px 0 20px;

  opacity: 0;

  animation:
    fadeIn .8s ease 2.5s forwards;

}


.divider span {

  flex: 1;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #c99b43
    );

}


.divider span:last-child {

  background:
    linear-gradient(
      90deg,
      #c99b43,
      transparent
    );

}


.divider b {

  color: #f2d38c;

}



/* =====================================================
   TAGLINE
===================================================== */

.tagline {

  margin-bottom: 12px;

  color: #f4e3bf;

  font-family:
    "Cormorant Garamond",
    Georgia,
    serif;

  font-size: 24px;

  letter-spacing: 3px;

  opacity: 0;

  animation:
    slideUp .9s ease 2.7s forwards;

}


.tagline strong {

  color: #f2d38c;

}



/* =====================================================
   DESCRIPTION
===================================================== */

.description {

  max-width: 560px;

  color: #bda98b;

  font-size: 13px;

  line-height: 1.8;

  opacity: 0;

  animation:
    slideUp .9s ease 2.9s forwards;

}



/* =====================================================
   BUTTONS
===================================================== */

.buttons {

  display: flex;

  gap: 14px;

  margin-top: 28px;

  opacity: 0;

  animation:
    slideUp .9s ease 3.1s forwards;

}


.btn {

  min-height: 52px;

  padding: 0 24px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 18px;

  font-size: 9px;

  letter-spacing: 2px;

  text-decoration: none;

  transition: .35s ease;

}


.primary {

  color: #1a0803;

  background:
    linear-gradient(
      135deg,
      #f3d48e,
      #a87324
    );

  box-shadow:
    0 10px 35px
    rgba(201,155,67,.18);

}


.secondary {

  color: #f2d38c;

  border:
    1px solid
    rgba(242,211,140,.45);

  background:
    rgba(255,255,255,.02);

  backdrop-filter: blur(10px);

}


.btn:hover {

  transform:
    translateY(-5px);

}


.primary:hover {

  box-shadow:
    0 15px 50px
    rgba(201,155,67,.4);

}



/* =====================================================
   FOOD
===================================================== */

.food {

  position: absolute;

  width: min(620px,48vw);

  aspect-ratio: 1;

  right: 2vw;

  top: 50%;

  transform:
    translateY(-50%);

  z-index: 10;

  opacity: 0;

  animation:
    foodEntrance
    1.7s
    cubic-bezier(.16,1,.3,1)
    1.5s
    forwards;

}


@keyframes foodEntrance {

  from {

    opacity: 0;

    transform:
      translateY(-50%)
      translateX(100px)
      scale(.7)
      rotate(8deg);

    filter: blur(15px);

  }

  to {

    opacity: 1;

    transform:
      translateY(-50%)
      translateX(0)
      scale(1)
      rotate(0);

    filter: blur(0);

  }

}



/* =====================================================
   FOOD HALO
===================================================== */

.food-halo {

  position: absolute;

  inset: 8%;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(242,211,140,.18),
      rgba(201,155,67,.07) 35%,
      transparent 68%
    );

  filter: blur(8px);

  animation:
    halo 4s ease-in-out infinite;

}


@keyframes halo {

  0%,100% {

    transform: scale(.95);

  }

  50% {

    transform: scale(1.08);

  }

}



/* =====================================================
   RINGS
===================================================== */

.ring {

  position: absolute;

  border-radius: 50%;

  border:
    1px solid
    rgba(242,211,140,.3);

}


.ring-one {

  inset: 8%;

  animation:
    rotate 20s linear infinite;

}


.ring-two {

  inset: 16%;

  border-style: dashed;

  border-color:
    rgba(242,211,140,.18);

  animation:
    rotateReverse
    30s
    linear
    infinite;

}


@keyframes rotate {

  to {
    transform: rotate(360deg);
  }

}


@keyframes rotateReverse {

  to {
    transform: rotate(-360deg);
  }

}



/* =====================================================
   FOOD IMAGE
===================================================== */

.food-image {

  position: absolute;

  width: 68%;

  aspect-ratio: 1;

  left: 16%;

  top: 16%;

  overflow: hidden;

  border-radius: 50%;

  border:
    1px solid
    rgba(242,211,140,.5);

  box-shadow:

    0 30px 90px
    rgba(0,0,0,.7),

    0 0 70px
    rgba(201,155,67,.2);

  animation:
    foodFloat 6s ease-in-out infinite;

}


.food-image img {

  width: 100%;

  height: 100%;

  object-fit: cover;

  transform: scale(1.08);

  animation:
    zoom 8s
    ease-in-out
    infinite alternate;

}


@keyframes foodFloat {

  0%,100% {

    transform:
      translateY(0);

  }

  50% {

    transform:
      translateY(-18px);

  }

}


@keyframes zoom {

  from {
    transform: scale(1.08);
  }

  to {
    transform: scale(1.17);
  }

}



/* =====================================================
   STEAM
===================================================== */

.steam {

  position: absolute;

  width: 90px;

  height: 180px;

  border-radius: 50%;

  border-left:
    2px solid
    rgba(255,242,211,.25);

  filter: blur(3px);

  opacity: 0;

}


.steam-one {

  left: 39%;

  top: 0;

  animation:
    steamRise 4s
    ease-in-out infinite;

}


.steam-two {

  left: 48%;

  top: -20px;

  animation:
    steamRise 4.5s
    ease-in-out
    1s
    infinite;

}


.steam-three {

  left: 57%;

  top: 5px;

  animation:
    steamRise 5s
    ease-in-out
    2s
    infinite;

}


@keyframes steamRise {

  0% {

    opacity: 0;

    transform:
      translateY(25px)
      scale(.7);

  }

  30% {

    opacity: .45;

  }

  100% {

    opacity: 0;

    transform:
      translateY(-80px)
      scale(1.3);

  }

}



/* =====================================================
   SIDE TEXT
===================================================== */

.vertical-text {

  position: absolute;

  top: 50%;

  color:
    rgba(242,211,140,.38);

  font-size: 8px;

  letter-spacing: 4px;

  writing-mode:
    vertical-rl;

}


.left {

  left: 24px;

  transform:
    translateY(-50%)
    rotate(180deg);

}


.right {

  right: 24px;

  transform:
    translateY(-50%);

}



/* =====================================================
   DESIGNER
===================================================== */

.designer {

  position: absolute;

  z-index: 30;

  bottom: 32px;

  left: 50%;

  transform:
    translateX(-50%);

  display: flex;

  align-items: center;

  gap: 10px;

  white-space: nowrap;

  opacity: 0;

  animation:
    fadeIn 1s ease 3.5s forwards;

}


.designer small {

  color:
    rgba(255,244,223,.5);

  font-size: 7px;

  letter-spacing: 3px;

}


.designer strong {

  color: #f2d38c;

  font-size: 9px;

  letter-spacing: 2px;

}



/* =====================================================
   SCROLL
===================================================== */

.scroll {

  position: absolute;

  left: 5vw;

  bottom: 32px;

  display: flex;

  align-items: center;

  gap: 12px;

  color: #9f8a6b;

  font-size: 7px;

  letter-spacing: 3px;

}


.scroll span {

  width: 45px;

  height: 1px;

  background: #c99b43;

  animation:
    scrollPulse 2s
    ease-in-out infinite;

}


@keyframes scrollPulse {

  0%,100% {

    transform:
      scaleX(.5);

    transform-origin: left;

  }

  50% {

    transform:
      scaleX(1);

  }

}



/* =====================================================
   MENU
===================================================== */

.menu {

  min-height: 100vh;

  padding:
    120px 8%;

  background:

    radial-gradient(
      circle at 50% 0%,
      rgba(201,155,67,.12),
      transparent 35%
    ),

    #080201;

}


.menu-title {

  text-align: center;

  margin-bottom: 70px;

}


.menu-title small {

  color: #c99b43;

  letter-spacing: 5px;

  font-size: 10px;

}


.menu-title h2 {

  margin: 15px 0;

  font-family:
    "Cormorant Garamond",
    serif;

  font-size:
    clamp(50px,8vw,100px);

  color: #f2d38c;

}


.menu-title p {

  color: #a99375;

}



/* =====================================================
   MENU GRID
===================================================== */

.menu-grid {

  max-width: 1200px;

  margin: auto;

  display: grid;

  grid-template-columns:
    repeat(4,1fr);

  gap: 20px;

}


.menu-card {

  padding: 35px 25px;

  text-align: center;

  border:
    1px solid
    rgba(242,211,140,.16);

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.04),
      rgba(255,255,255,.01)
    );

  transition: .4s ease;

}


.menu-card:hover {

  transform:
    translateY(-12px);

  border-color:
    rgba(242,211,140,.5);

  box-shadow:
    0 20px 50px
    rgba(0,0,0,.5);

}


.emoji {

  font-size: 55px;

  margin-bottom: 20px;

}


.menu-card h3 {

  font-family:
    "Cormorant Garamond",
    serif;

  color: #f2d38c;

  font-size: 26px;

}


.menu-card p {

  margin: 15px 0;

  color: #a99375;

  font-size: 12px;

  line-height: 1.7;

}


.menu-card strong {

  color: #fff0c5;

  font-size: 20px;

}



/* =====================================================
   ORDER BUTTON
===================================================== */

.menu-order {

  display: flex;

  width: max-content;

  margin: 60px auto 0;

  padding: 18px 30px;

  color: #1a0803;

  background:
    linear-gradient(
      135deg,
      #f3d48e,
      #a87324
    );

  text-decoration: none;

  font-size: 10px;

  letter-spacing: 2px;

  gap: 20px;

}



/* =====================================================
   FOOTER
===================================================== */

footer {

  padding: 50px 20px;

  text-align: center;

  background: #030100;

  border-top:
    1px solid
    rgba(242,211,140,.1);

}


footer div {

  color: #f2d38c;

  font-family:
    "Cormorant Garamond",
    serif;

  font-size: 28px;

}


footer p {

  margin: 10px 0 20px;

  color: #796954;

  font-size: 10px;

  letter-spacing: 3px;

}


footer small {

  color: #695b49;

  font-size: 8px;

  letter-spacing: 2px;

}


footer strong {

  color: #c99b43;

}



/* =====================================================
   ANIMATIONS
===================================================== */

@keyframes fadeIn {

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

}


@keyframes slideUp {

  from {

    opacity: 0;

    transform:
      translateY(25px);

  }

  to {

    opacity: 1;

    transform:
      translateY(0);

  }

}



/* =====================================================
   TABLET
===================================================== */

@media(max-width:900px) {

  .hero {

    min-height: 1000px;

    align-items: flex-start;

  }


  .top-label {

    top: 35px;

    font-size: 7px;

    letter-spacing: 3px;

  }


  .hero-content {

    position: absolute;

    top: 120px;

    left: 5vw;

    width: 90vw;

    margin: 0;

    text-align: center;

  }


  .title-one,
  .title-two {

    font-size:
      clamp(55px,15vw,95px);

  }


  .biriyani {

    font-size:
      clamp(75px,20vw,125px);

    letter-spacing: -4px;

  }


  .divider {

    margin:
      25px auto 18px;

  }


  .description {

    margin: auto;

  }


  .buttons {

    justify-content: center;

  }


  .food {

    width: 80vw;

    max-width: 430px;

    top: 72%;

    right: 10vw;

  }


  .vertical-text {

    display: none;

  }


  .scroll {

    display: none;

  }


  .menu-grid {

    grid-template-columns:
      repeat(2,1fr);

  }

}



/* =====================================================
   PHONE
===================================================== */

@media(max-width:500px) {

  .hero {

    min-height: 900px;

  }


  .top-label {

    display: none;

  }


  .hero-content {

    top: 90px;

  }


  .est {

    font-size: 8px;

    letter-spacing: 4px;

  }


  .title-one,
  .title-two {

    font-size: 55px;

  }


  .biriyani {

    font-size: 73px;

  }


  .tagline {

    font-size: 16px;

    letter-spacing: 2px;

  }


  .description {

    font-size: 11px;

    padding: 0 15px;

  }


  .buttons {

    flex-direction: column;

    align-items: center;

  }


  .btn {

    width: 220px;

  }


  .food {

    top: 72%;

    width: 82vw;

    right: 9vw;

  }


  .designer {

    bottom: 15px;

    flex-direction: column;

    gap: 4px;

  }


  .menu {

    padding:
      80px 20px;

  }


  .menu-grid {

    grid-template-columns: 1fr;

  }

}



/* =====================================================
   REDUCED MOTION
===================================================== */

@media(prefers-reduced-motion:reduce) {

  * {

    animation-duration:
      .01ms !important;

    animation-iteration-count:
      1 !important;

    transition-duration:
      .01ms !important;

  }

}
