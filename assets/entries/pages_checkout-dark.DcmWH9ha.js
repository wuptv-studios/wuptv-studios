import{j as e,P as p,R as m,a as i,i as d,b as u}from"../chunks/chunk-Dw8SyKya.js";/* empty css                      */const n=void 0,f=[{id:"hIKv5vfNRbwa6HKRGQmLL"},{id:"LYutaI0620Gt0qmrvfFjU",maxWidth:991},{id:"EudZxrePT5YInbI42VSwQ",maxWidth:767},{id:"kd1n8tg93wB_eQPsymZbR",maxWidth:479}],g=void 0,h=[],x=[],y=r=>e.jsx("body",{className:"w-element",children:e.jsx(p,{code:`

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WUPTV Checkout | Confirm Deploy Purchase</title>
  <meta name="description" content="Secure your WUPTV Femme Unit license. Choose your package, complete payment, and receive exclusive video snippets for premium video intros and ads.">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&amp;display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #0a0a0a;
      color: #ffffff;
      font-family: 'Orbitron', sans-serif;
    }
    header {
      padding: 2rem;
      text-align: center;
      background: #111;
      border-bottom: 1px solid #222;
    }
    header h1 {
      color: #d94cff;
      font-size: 2rem;
    }
    .container {
      max-width: 700px;
      margin: auto;
      padding: 2rem;
    }
    .card {
      background: #151515;
      border-radius: 10px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 0 10px rgba(217, 76, 255, 0.1);
    }
    .card h2 {
      font-size: 1.2rem;
      color: #d94cff;
    }
    .card p {
      font-size: 0.9rem;
      color: #ccc;
      margin: 0.5rem 0 1.5rem;
    }
    .card button {
      padding: 0.75rem 2rem;
      font-size: 1rem;
      border: none;
      border-radius: 30px;
      background: #d94cff;
      color: #0a0a0a;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .card button:hover {
      background: #ff70ff;
    }
    footer {
      text-align: center;
      padding: 2rem;
      font-size: 0.75rem;
      color: #555;
    }
  </style>


  <header>
    <h1>WUPTV CHECKOUT</h1>
    <p>Select your deploy package and confirm your purchase</p>
  </header>  <div class="container">
    <div class="card">
      <h2>Basic Deploy – £19</h2>
      <p>Includes 1 exclusive snippet • Standard license • Valid for 1 video</p>
      <button>Buy Now</button>
    </div><div class="card">
  <h2>Premium Deploy – £49</h2>
  <p>Includes 5 unique snippets • Premium license • Valid for 5 videos</p>
  <button>Buy Now</button>
</div>

<div class="card">
  <h2>Ultimate Deploy – £99</h2>
  <p>Includes 10+ elite snippets • Pro license • Unlimited social use</p>
  <button>Buy Now</button>
</div>

  </div>  <footer>
    © 2025 WUPTV. All rights reserved.
  </footer>

`,className:"w-html-embed"})}),v=({data:r})=>{const{system:t,resources:s,url:a}=r;return e.jsx(m.Provider,{value:{imageLoader:d,assetBaseUrl:i,resources:s,breakpoints:f,onError:console.error},children:e.jsx(y,{system:t},a)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),j=({data:r})=>{const{pageMeta:t}=r,{origin:s}=new URL(r.url);let a=t.socialImageUrl;t.socialImageAssetName&&(a=`${s}${d({src:`${i}/${t.socialImageAssetName}`})}`);const l=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[r.url&&e.jsx("meta",{property:"og:url",content:r.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,a&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),n,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:c})=>e.jsx("meta",{property:o,content:c},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&l===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,h.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"font",crossOrigin:"anonymous"},o)),x.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"image"},o))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/checkout-dark/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/checkout-dark/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{T as configValuesSerialized};
