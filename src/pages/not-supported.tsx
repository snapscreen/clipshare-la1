import * as React from "react";

const css = `
    .not-supported-page {
      height: auto;
      padding: 8px 10px;
    }
    .not-supported-page .country-not-supported {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      background-color: #09131D;
    }
    .not-supported-page .country-not-supported .logo {
      position: absolute;
      top: calc(50% - 112px / 2 - 2rem);
      left: calc(50% - 125px / 2);
      width: 125px;
      height: 112px;
    }
    .not-supported-page .country-not-supported p {
      color: white;
      text-align: center;
      margin: 0;
      width: 100%;
      position: absolute;
      top: calc(50% + 113px / 2 - 1rem);
      font-size: 18px;
    }
`

const La1Icon = () => (
    <svg id="svg2" height="112" viewBox="0 0 1950.1315 1740.1298">
      <defs id="defs5">
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3262" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3260" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3258" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3256" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3254" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3252" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3250" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3237" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3226" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3216" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3206" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3202" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3200" />
        <radialGradient r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" gradientUnits="userSpaceOnUse" id="radialGradient3194" />
        <radialGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1,0,0,0.8246754,0,61.018895)" r="100.18169" fy="348.03381" fx="-822.27057" cy="348.03381" cx="-822.27057" id="radialGradient3188" />
        <linearGradient id="linearGradient3182">
          <stop id="stop3184" offset="0" stopColor="#0055d4" stopOpacity="1" />
          <stop id="stop3186" offset="1" stopColor="#0055d4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="linearGradient3208">
          <stop stopColor="#6600ff" stopOpacity="1" offset="0" id="stop3210" />
          <stop stopColor="#5500d4" stopOpacity="0" offset="1" id="stop3212" />
        </linearGradient>
        <linearGradient id="linearGradient3229">
          <stop id="stop3231" offset="0" stopColor="#00aad4" stopOpacity="1" />
          <stop id="stop3233" offset="1" stopColor="#00aad4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="linearGradient3520" gradientUnits="userSpaceOnUse" gradientTransform="translate(7991.4092,-7484.0182)" x1="475.01208" y1="29234.521" x2="-1343.6307" y2="29445.83" />
        <linearGradient id="linearGradient1161">
          <stop id="stop1157" offset="0" stopColor="#0b7eda" stopOpacity="1" />
          <stop id="stop1159" offset="1" stopColor="#4629c5" stopOpacity="1" />
        </linearGradient>
        <filter colorInterpolationFilters="sRGB" id="filter1680-0-6" x="-0.2760295" width="1.5520591" y="-0.33142158" height="1.6628431">
          <feGaussianBlur stdDeviation="331.22039" id="feGaussianBlur1682-3-9" />
        </filter>
      </defs>
      <g id="layer1" transform="matrix(5.8862959,0,0,5.8862959,-228.3949,1414.6785)">
        <path id="path1097-6-1" d="m 6416.0915,21026.021 c 496.2734,-430.162 1156.7926,-524.889 1495.2326,-581.643 1461.5227,-245.087 1539.467,2033.775 96.1224,2234.099 -524.6707,72.82 -1265.3758,450.675 -1679.5812,-402.754 -315.0174,-535.208 -91.5956,-1058.609 88.2262,-1249.702 z" opacity="1" fill="url(#linearGradient3520)" fillOopacity="1" stroke="none" strokeWidth="16.60000038" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeDasharray="none" strokeOpacity="1" filter="url(#filter1680-0-6)" transform="matrix(0.07412091,0,0,0.07412091,-359.59058,-1695.4044)" />
        <path opacity="1" fill="#ffffff" fillOpacity="1" strokeWidth="0.15885192" d="m 182.09151,-41.203676 c -0.30388,-0.16302 -0.68981,-0.567899 -0.87107,-0.913461 -0.29956,-0.570905 -0.33032,-0.953769 -0.37892,-4.762168 -0.0679,-5.37915 0.081,-6.213091 1.27737,-7.106243 0.35732,-0.267192 5.11556,-1.932328 12.3975,-4.338901 l 2.18418,-0.721832 v -32.640667 c 0,-26.069302 -0.0377,-32.616512 -0.19863,-32.522202 -0.10953,0.0652 -2.09182,1.54612 -4.40621,3.29141 -2.31398,1.74551 -4.51851,3.31101 -4.89884,3.47909 -1.3958,0.6176 -1.76721,0.26988 -4.33727,-4.05891 -1.15138,-1.93912 -2.62707,-4.41915 -3.27954,-5.51149 -2.69674,-4.51352 -2.89231,-5.04589 -2.2198,-6.04219 0.42479,-0.62915 0.14466,-0.42749 11.17162,-8.05159 4.79856,-3.31781 10.13695,-7.01081 11.86292,-8.20694 1.72613,-1.19586 3.40589,-2.33246 3.733,-2.52582 0.57809,-0.34167 0.74999,-0.35299 6.15467,-0.40427 6.65754,-0.0637 7.05739,-0.0269 7.84049,0.68966 l 0.57859,0.53005 0.0378,45.92346 0.0431,45.923136 0.51546,0.232639 c 0.28339,0.126867 2.94575,1.126172 5.91644,2.218668 6.47848,2.382283 7.32209,2.779228 7.77446,3.658731 0.3093,0.601085 0.32711,0.900775 0.32711,5.559797 0,5.454214 -0.0162,5.556126 -1.01632,6.228945 l -0.53984,0.363272 H 207.1986 c -23.55385,0 -24.58367,-0.01624 -25.10682,-0.292554 z" id="path1614-3-1" />
      </g>
    </svg>
);

const CountryNotSupportedPage: React.FC = () => {
  const siteTitle = 'Country not supported';
  return (
      <html lang="en">
      <head>
        <title>LA 1 - country not supported</title>
        <meta name="description" content="Sorry this content is only available in the country of Spain"/>
        <meta charSet="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
        <meta name="theme-color" content="#06233d"/>
        <style type="text/css">{css}</style>
        <meta name="wicket.header.items"/>
      </head>
      <body className="not-supported-page">
      <div className="country-not-supported">
        <div className="logo"><La1Icon /></div>
        <p>Sorry this content is only available in the country of Spain</p>
      </div>
      </body>
    </html>
);
};

export default CountryNotSupportedPage;
