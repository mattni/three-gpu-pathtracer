var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire5b70;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire5b70=n);var i=n("ilwiq"),o=n("kp7Te"),r=n("891vQ"),l=n("7lx9d"),s=n("jiuw3"),d=function(){var e=0,t=document.createElement("div");function a(e){return t.appendChild(e.dom),e}function n(a){for(var n=0;n<t.children.length;n++)t.children[n].style.display=n===a?"block":"none";e=a}t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",(function(a){a.preventDefault(),n(++e%t.children.length)}),!1);var i=(performance||Date).now(),o=i,r=0,l=a(new d.Panel("FPS","#0ff","#002")),s=a(new d.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=a(new d.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:a,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){r++;var e=(performance||Date).now();if(s.update(e-i,200),e>=o+1e3&&(l.update(1e3*r/(e-o),100),o=e,r=0,c)){var t=performance.memory;c.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:t,setMode:n}};d.Panel=function(e,t,a){var n=1/0,i=0,o=Math.round,r=o(window.devicePixelRatio||1),l=80*r,s=48*r,d=3*r,c=2*r,m=3*r,p=15*r,u=74*r,g=30*r,h=document.createElement("canvas");h.width=l,h.height=s,h.style.cssText="width:80px;height:48px";var y=h.getContext("2d");return y.font="bold "+9*r+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=a,y.fillRect(0,0,l,s),y.fillStyle=t,y.fillText(e,d,c),y.fillRect(m,p,u,g),y.fillStyle=a,y.globalAlpha=.9,y.fillRect(m,p,u,g),{dom:h,update:function(s,f){n=Math.min(n,s),i=Math.max(i,s),y.fillStyle=a,y.globalAlpha=1,y.fillRect(0,0,l,p),y.fillStyle=t,y.fillText(o(s)+" "+e+" ("+o(n)+"-"+o(i)+")",d,c),y.drawImage(h,m+r,p,u-r,g,m,p,u-r,g),y.fillRect(m+u-r,p,r,g),y.fillStyle=a,y.globalAlpha=.9,y.fillRect(m+u-r,p,r,o((1-s/f)*g))}}};var c=d,m=n("cVdfP"),p=n("4CEV9"),u=n("RPVlj"),g=n("5Rd1x"),h=n("7ePFa"),y=n("kkvoh");const f="https://raw.githubusercontent.com/google/model-viewer/master/packages/render-fidelity-tools/test/config/",b=new URLSearchParams(window.location.search),w=parseInt(b.get("samples"))||-1,v="true"===b.get("hideUI"),x=parseInt(b.get("tiles"))||2,M={environmentIntensity:1,multipleImportanceSampling:!0,acesToneMapping:!0,tilesX:x,tilesY:x,samplesPerFrame:1,scale:parseInt(b.get("scale"))||1/window.devicePixelRatio,model:"",checkerboardTransparency:!0,enable:!0,bounces:10,pause:!1,displayImage:!1,imageMode:"overlay",imageOpacity:1,imageType:"dspbr-pt"};let T,S,E,F,R,k,C,I,P,A,L,B,D,O,j,U=!1,z=0;function G(){if(requestAnimationFrame(G),!(L.samples>=w&&-1!==w||(C.update(),R.style.display=M.displayImage?"inline-block":"none",R.style.opacity="side-by-side"===M.imageMode?1:M.imageOpacity,R.style.position="side-by-side"===M.imageMode?"initial":"absolute",R.style.width=P.domElement.style.width,R.style.height=P.domElement.style.height,U))){if((L.samples<1||!M.enable)&&P.render(O,A),M.enable&&0===z){const e=Math.floor(L.samples);if(E.innerText=`samples: ${e}`,L.material.materials.updateFrom(I.materials,I.textures),L.material.filterGlossyFactor=.5,L.material.bounces=M.bounces,L.material.physicalCamera.updateFrom(A),L.material.environmentIntensity=M.environmentIntensity,A.updateMatrixWorld(),!M.pause||L.samples<1)for(let e=0,t=M.samplesPerFrame;e<t;e++)L.update();P.autoClear=!1,B.render(P),P.autoClear=!0}else z>0&&z--;L.samples>=w&&-1!==w&&requestAnimationFrame((()=>{window.dispatchEvent(new Event("render-complete"))})),E.innerText=`Samples: ${Math.floor(L.samples)}`}}function q(){M.tilesX*M.tilesY!=1&&(z=1),L.reset()}async function N(){let e,t;k&&(F.classList.remove("checkerboard"),k.destroy(),k=null);const a=new i.LoadingManager,n=j[M.model];window.location.hash=M.model;let{orbit:d={},target:c={},dimensions:u={}}=n;const{verticalFoV:g=45,renderSkybox:b=!1,lighting:w="../../../shared-assets/environments/lightroom_14b.hdr"}=n;d=Object.assign({},{theta:0,phi:90,radius:1},d),c=Object.assign({},{x:0,y:0,z:0},c),u=Object.assign({},{width:768,height:768},u),d.radius=Math.max(d.radius,1e-5),U=!0,F.style.display="none",E.innerText="--",T.innerText="--",S.innerText="Loading",S.style.visibility="visible",V(),O.traverse((e=>{if(e.material){const t=e.material;for(const e in t)t[e]&&t[e].isTexture&&t[e].dispose()}})),I&&O.remove(I.scene);let x=new URL(n.model,f).toString();x=x.replace(/.*?glTF-Sample-Models/,"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master"),a.onLoad=async()=>{await y.ready;(new p.MaterialReducer).process(e),e.updateMatrixWorld(),e.traverse((e=>{e.geometry&&(e.geometry.hasAttribute("normal")||e.geometry.computeVertexNormals(),e.geometry.attributes.tangent||(e.geometry.hasAttribute("uv")?h.computeMikkTSpaceTangents(e.geometry,y):e.geometry.setAttribute("tangent",new i.BufferAttribute(new Float32Array(4*e.geometry.attributes.position.count),4,!1))))}));const a=new m.PathTracingSceneWorker,o=await a.generate(e,{onProgress:e=>{const t=Math.floor(100*e);S.innerText=`Building BVH : ${t}%`}});I=o,O.add(I.scene);const{bvh:r,textures:l,materials:f}=o,w=r.geometry,x=L.material;x.bvh.updateFrom(r),x.attributesArray.updateFrom(w.attributes.normal,w.attributes.tangent,w.attributes.uv,w.attributes.color),x.materialIndexAttribute.updateFrom(w.attributes.materialIndex),x.textures.setTextures(P,2048,2048,l),x.materials.updateFrom(f,l),x.envMapInfo.updateFrom(t),a.dispose(),S.style.visibility="hidden",T.innerHTML=n.credit||"",T.style.visibility=n.credit?"visible":"hidden",function(){if(v)return;k&&k.destroy(),k=new s.GUI,k.add(M,"model",Object.keys(j)).onChange(N);const e=k.addFolder("path tracing");e.add(M,"enable"),e.add(M,"pause"),e.add(M,"scale",0,1).onChange((e=>{const t=window.devicePixelRatio;let{dimensions:a={}}=j[M.model];a=Object.assign({},{width:768,height:768},a);const{width:n,height:i}=a;L.setSize(n*t*e,i*t*e),L.reset()})),e.add(M,"multipleImportanceSampling").onChange((e=>{L.material.setDefine("FEATURE_MIS",Number(e)),L.reset()})),e.add(M,"acesToneMapping").onChange((e=>{P.toneMapping=e?i.ACESFilmicToneMapping:i.NoToneMapping})),e.add(M,"bounces",1,20,1).onChange((()=>{L.reset()})),e.add(M,"environmentIntensity",0,5).onChange((()=>{L.reset()}));const t=k.addFolder("comparison");t.add(M,"displayImage"),t.add(M,"imageMode",["overlay","side-by-side"]),t.add(M,"imageType",["dspbr-pt","filament","babylon","gltf-sample-viewer","model-viewer","rhodonite","stellar"]).onChange(V),t.add(M,"imageOpacity",0,1);const a=k.addFolder("resolution");a.add(M,"samplesPerFrame",1,10,1),a.add(M,"tilesX",1,10,1).onChange((e=>{L.tiles.x=e})),a.add(M,"tilesY",1,10,1).onChange((e=>{L.tiles.y=e})),a.open(),k.addFolder("background").add(M,"checkerboardTransparency").onChange((e=>{e?F.classList.add("checkerboard"):F.classList.remove("checkerboard")}))}(),w.computeBoundingSphere();const E=Math.max(d.radius,w.boundingSphere.radius);A.near=2*E/1e3,A.far=2*E,A.updateProjectionMatrix(),A.position.setFromSphericalCoords(d.radius,i.MathUtils.DEG2RAD*d.phi,i.MathUtils.DEG2RAD*d.theta),A.position.x+=c.x,A.position.y+=c.y,A.position.z+=c.z;const R=window.devicePixelRatio,{width:C,height:B}=u;P.setSize(C,B),P.setPixelRatio(R),L.setSize(C*R*M.scale,B*R*M.scale),A.aspect=C/B,A.fov=g,A.updateProjectionMatrix(),D.target.set(c.x,c.y,c.z),D.update(),A.updateMatrixWorld(),t.mapping=i.EquirectangularReflectionMapping,O.environment=t,b?(O.background=t,L.material.backgroundAlpha=1):(P.setClearAlpha(0),O.background=null,L.material.backgroundAlpha=0),L.reset(),F.style.display="flex",U=!1,M.checkerboardTransparency&&F.classList.add("checkerboard")};const R=new URL(w,f).toString();new r.RGBELoader(a).load(R,(e=>{t=e})),new l.GLTFLoader(a).setMeshoptDecoder(o.MeshoptDecoder).load(x,(t=>{e=t.scene}),(e=>{if(0!==e.total&&e.total>=e.loaded){const t=Math.floor(100*e.loaded/e.total);S.innerText=`Loading : ${t}%`}}))}function V(){R.src=`https://raw.githubusercontent.com/google/model-viewer/master/packages/render-fidelity-tools/test/goldens/${M.model}/${M.imageType}-golden.png`}!async function(){T=document.getElementById("credits"),S=document.getElementById("loading"),E=document.getElementById("samples"),F=document.getElementById("container"),R=document.querySelector("img"),v&&(F.style.background="transparent",document.body.style.background="transparent");P=new i.WebGLRenderer({antialias:!0}),P.outputEncoding=i.sRGBEncoding,P.toneMapping=i.ACESFilmicToneMapping,P.physicallyCorrectLights=!0,F.appendChild(P.domElement),O=new i.Scene;const e=window.innerWidth/window.innerHeight;A=new i.PerspectiveCamera(60,e,.01,500),A.position.set(-1,.25,1),L=new p.PathTracingRenderer(P),L.camera=A,L.alpha=!0,L.material=new p.PhysicalPathTracingMaterial,L.tiles.set(M.tiles,M.tiles),L.material.setDefine("FEATURE_MIS",Number(M.multipleImportanceSampling)),L.tiles.set(M.tilesX,M.tilesY),B=new u.FullScreenQuad(new i.MeshBasicMaterial({map:L.target.texture,blending:i.CustomBlending})),D=new g.OrbitControls(A,F),D.addEventListener("change",q),C=new c,v?(T.remove(),E.remove()):F.appendChild(C.dom);const{scenarios:t}=await(await fetch("https://raw.githubusercontent.com/google/model-viewer/master/packages/render-fidelity-tools/test/config.json")).json();j={},t.forEach((e=>{j[e.name]=e}));let a=t[0].name;if(window.location.hash){const e=window.location.hash.substring(1).replaceAll("%20"," ");e in j&&(a=e)}M.model=a,N(),G()}();
//# sourceMappingURL=viewerTest.daf0f9c0.js.map
