/* empty css                          */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent } from './astro.0161e04d.mjs';
import 'html-escaper';
import { GiPartyPopper } from 'react-icons/gi/index.esm.js';
import { motion } from 'framer-motion';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const Baloon = ({
  fill = "#a2edff"
}) => {
  return /* @__PURE__ */ jsx(motion.svg, {
    animate: {
      y: [0, 40, 0]
    },
    transition: {
      y: 0,
      delay: 2,
      duration: 5,
      repeat: Infinity
    },
    exit: {
      y: 20
    },
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "80",
    height: "400",
    viewBox: "0 0 640.000000 1280.000000",
    preserveAspectRatio: "xMidYMid meet",
    children: /* @__PURE__ */ jsx("g", {
      transform: "translate(0.000000,1280.000000) scale(0.100000,-0.100000)",
      fill,
      stroke: "none",
      children: /* @__PURE__ */ jsx(motion.path, {
        className: "shadow-sm",
        animate: {
          x: [0, 20, 0]
        },
        d: "M2960 12794 c-84 -8 -274 -45 -365 -70 -262 -74 -541 -221 -769 -405\n-477 -384 -826 -1007 -935 -1669 -58 -353 -55 -740 8 -1081 127 -683 486\n-1288 990 -1668 203 -152 389 -251 615 -326 122 -41 307 -85 355 -85 18 0 21\n-6 21 -48 0 -86 -44 -202 -115 -300 -69 -97 -55 -132 53 -132 37 0 84 4 105 9\n35 8 37 8 37 -15 0 -51 -32 -231 -94 -534 -92 -448 -100 -510 -100 -740 0\n-163 3 -211 21 -290 56 -252 139 -399 319 -570 150 -143 288 -238 649 -450\n344 -201 494 -308 641 -458 96 -97 156 -187 247 -367 110 -218 156 -367 188\n-610 15 -110 15 -495 0 -665 -37 -420 -38 -575 -7 -765 43 -255 144 -476 302\n-655 125 -141 259 -383 310 -555 18 -63 28 -126 32 -209 6 -97 10 -121 24\n-130 14 -8 22 -7 35 7 24 24 23 171 -2 282 -47 213 -192 489 -349 665 -147\n165 -243 381 -280 633 -20 133 -20 395 0 587 21 208 29 609 15 753 -27 271\n-79 455 -198 692 -94 186 -153 275 -257 383 -152 159 -299 264 -671 482 -366\n214 -505 312 -644 451 -155 155 -209 249 -268 464 -19 72 -25 124 -30 256 -9\n251 2 329 126 939 27 135 54 285 61 335 6 49 13 91 15 94 2 2 35 -11 72 -29\n84 -39 162 -50 186 -25 26 26 21 55 -22 118 -53 78 -73 149 -72 265 0 52 3 98\n8 102 4 5 58 13 118 20 751 79 1414 570 1785 1325 136 274 214 515 265 817\n159 941 -127 1899 -755 2529 -344 345 -728 547 -1190 625 -84 15 -393 26 -480\n18z"
      })
    })
  });
};
__astro_tag_component__(Baloon, "@astrojs/react");

const Background = () => {
  const totalBalloons = 5;
  const spreadDistance = 100;
  return /* @__PURE__ */ jsxs("div", {
    children: [Array(totalBalloons).fill("").map((_, index) => /* @__PURE__ */ jsx("div", {
      className: "absolute z-0",
      style: {
        top: `${Math.cos(index / (totalBalloons - 1) * Math.PI) * spreadDistance}px`,
        left: `${Math.sin(index / (totalBalloons - 1) * Math.PI) * spreadDistance}px`,
        margin: "6px"
      },
      children: /* @__PURE__ */ jsx(Baloon, {
        fill: "#FF1493"
      })
    }, index)), Array(totalBalloons).fill("").map((_, index) => /* @__PURE__ */ jsx("div", {
      className: "absolute z-0",
      style: {
        bottom: `${Math.cos(index / (totalBalloons - 1) * Math.PI) * spreadDistance}px`,
        left: `${Math.sin(index / (totalBalloons - 1) * Math.PI) * spreadDistance}px`,
        margin: "6px"
      },
      children: /* @__PURE__ */ jsx(Baloon, {
        fill: "#AFEEEE"
      })
    }, index)), Array(totalBalloons).fill("").map((_, index) => /* @__PURE__ */ jsx("div", {
      className: "absolute z-0",
      style: {
        bottom: `${Math.cos(index / (totalBalloons - 1) * Math.PI) * spreadDistance}px`,
        right: `${Math.sin(index / (totalBalloons - 1) * Math.PI) * spreadDistance}px`,
        margin: "6px"
      },
      children: /* @__PURE__ */ jsx(Baloon, {
        fill: "#EE82EE"
      })
    }, index)), Array(totalBalloons).fill("").map((_, index) => /* @__PURE__ */ jsx("div", {
      className: "absolute z-0",
      style: {
        top: `${Math.cos(index / (totalBalloons - 1) * Math.PI) * spreadDistance + 4}px`,
        right: `${Math.sin(index / (totalBalloons - 1) * Math.PI) * spreadDistance}px`,
        margin: "6px"
      },
      children: /* @__PURE__ */ jsx(Baloon, {
        fill: "#1E90FF"
      })
    }, index))]
  });
};
__astro_tag_component__(Background, "@astrojs/react");

const $$Astro = createAstro();
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta id="testViewport" name="viewport" content="width=device-width, initial-scale=1">
    <title>Astro</title>
  ${renderHead($$result)}</head>
  <body class="bg-gradient-to-tr from-purple-200 via-fuchsia-300 to-yellow-100 bg-fill w-full object-cover">
    <audio controls autoplay hidden>
      <source src="lagu.mp3" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>

    <header class="flex flex-col">
      ${renderComponent($$result, "Background", Background, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mpun/Development/birthday-invitation/src/module/background", "client:component-export": "Background" })}
      <div class="flex flex-col h-screen justify-center z-40">
        <div class="flex flex-col gap-4 w-full justify-center items-center px-24 py-4">
          <img src="/aurora.png" width="200" alt="">
          <h1 class="text-[#FF1493] font-mono font-bold text-3xl w-full text-center border border-white bg-white bg-opacity-50 cursor-pointer">
            Birth Day Invitation
          </h1>
          <div>
            ${renderComponent($$result, "GiPartyPopper", GiPartyPopper, { "className": "text-white text-[100px]" })}
          </div>
        </div>
      </div>
    </header>
    <main class="px-10">
      <section>
        <form method="POST" class="w-full">
          <label>
            Full Name:
            <input class="my-4" type="text" name="fullname" required>
          </label>
          <br>

          <label class="flex items-center my-4">
            Coments:
            <textarea name="comments" required minlength="20" class="w-[500px] mx-4"></textarea>
          </label>
          <label>
            Kehadiran :
            <select name="attendance" id="">
              <option value="hadir">hadir</option>
              <option value="tidak">tidak</option>
            </select>
          </label>
          <button class="bg-blue-400 rounded-md mx-4 p-2">Submit</button>
        </form>

        <!-- {
          comments?.data.map((data) => (
            <ul>
              <li class="bg-white p-1">{data?.attributes.Full_Name}</li>
              <li>{data?.attributes.Attendance ? "Hadir" : "Tidak Hadir"}</li>
              <li>{data?.attributes.Comment}</li>
            </ul>
          ))
        } 
  </body>
</html>
-->
      </section>
    </main></body></html>`;
}, "/home/mpun/Development/birthday-invitation/src/pages/index.astro");

const $$file = "/home/mpun/Development/birthday-invitation/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
