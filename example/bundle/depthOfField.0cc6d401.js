var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire5b70;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire5b70=n);var r=n("ilwiq"),o=n("RPVlj"),i=n("7lx9d"),s=n("5Rd1x"),d=n("4CEV9"),l=n("cVdfP"),c=n("891vQ"),u=n("kp7Te"),m=n("jiuw3");let p,h,w,g,f,b,y,x;const v=new r.Vector2,F=new r.Vector3,M={bounces:3,samplesPerFrame:1,resolutionScale:1/window.devicePixelRatio,filterGlossyFactor:.5,tiles:1,autoFocus:!0};function C(e){v.set(e.clientX,e.clientY)}function S(e){if(Math.abs(v.x-e.clientX)+Math.abs(v.y-e.clientY)<2&&w){const t=w.bvh,a=new r.Raycaster;a.setFromCamera({x:e.clientX/window.innerWidth*2-1,y:-e.clientY/window.innerHeight*2+1},f);const n=t.raycastFirst(a.ray);n&&(F.copy(n.point),f.focusDistance=n.distance-f.near,g.reset())}}function E(){const e=window.innerWidth,t=window.innerHeight,a=M.resolutionScale,n=window.devicePixelRatio;g.setSize(e*a*n,t*a*n),g.reset(),p.setSize(e,t),p.setPixelRatio(window.devicePixelRatio*a),f.aspect=e/t,f.updateProjectionMatrix()}function P(){g.reset()}function R(){requestAnimationFrame(R),M.autoFocus&&(f.focusDistance=f.position.distanceTo(F)-f.near),g.material.materials.updateFrom(w.materials,w.textures),g.material.filterGlossyFactor=M.filterGlossyFactor,g.material.bounces=M.bounces,g.material.physicalCamera.updateFrom(f),f.updateMatrixWorld();for(let e=0,t=M.samplesPerFrame;e<t;e++)g.update();g.samples<1&&p.render(y,f),p.autoClear=!1,b.render(p),p.autoClear=!0,x.innerText=`Samples: ${Math.floor(g.samples)}`}window.innerWidth/window.innerHeight<.65&&(M.bounces=Math.max(M.bounces,6),M.resolutionScale*=.5,M.tiles=2),async function(){p=new r.WebGLRenderer({antialias:!0}),p.toneMapping=r.ACESFilmicToneMapping,p.outputEncoding=r.sRGBEncoding,document.body.appendChild(p.domElement),f=new d.PhysicalCamera(60,window.innerWidth/window.innerHeight,.025,500),f.position.set(-.262,.5276,-1.1606),f.apertureBlades=6,f.fStop=.6,f.focusDistance=1.1878,F.set(-.5253353217832674,.3031596413506029,.000777794185259223),y=new r.Scene;const e=new d.GradientEquirectTexture;e.topColor.set(3739424).convertSRGBToLinear(),e.bottomColor.set(1383199).convertSRGBToLinear(),e.update(),g=new d.PathTracingRenderer(p),g.camera=f,g.material=new d.PhysicalPathTracingMaterial,g.tiles.set(M.tiles,M.tiles),g.material.setDefine("FEATURE_MIS",0),g.material.backgroundMap=e,g.material.environmentIntensity=.5,b=new o.FullScreenQuad(new r.MeshBasicMaterial({map:g.target.texture,blending:r.CustomBlending})),h=new s.OrbitControls(f,p.domElement),h.target.set(-.182,.147,.06),h.update(),h.addEventListener("change",(()=>{g.reset()})),x=document.getElementById("samples");const t=(new c.RGBELoader).loadAsync("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/royal_esplanade_1k.hdr").then((e=>{const t=new d.BlurredEnvMapGenerator(p),a=t.generate(e,.35);g.material.envMapInfo.updateFrom(a),t.dispose(),e.dispose(),y.environment=a})),a=new l.PathTracingSceneWorker,n=(new i.GLTFLoader).setMeshoptDecoder(u.MeshoptDecoder).loadAsync("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/sd-macross-city-standoff-diorama/scene.glb").then((e=>{const t=new r.Group,n=new r.SphereGeometry(1,10,10),o=new r.MeshStandardMaterial({emissiveIntensity:10,emissive:16777215});for(let e=0;e<300;e++){const e=new r.Mesh(n,o);e.scale.setScalar(.075*Math.random()+.03),e.position.randomDirection().multiplyScalar(30+15*Math.random()),t.add(e)}return e.scene.scale.setScalar(.5),e.scene.updateMatrixWorld(),t.add(e.scene),e.scene.traverse((e=>{e.material&&(e.material.roughness=.05,e.material.metalness=.05)})),a.generate(t)})).then((e=>{w=e,y.add(e.scene);const{bvh:t,textures:n,materials:r}=e,o=t.geometry,i=g.material;i.bvh.updateFrom(t),i.attributesArray.updateFrom(o.attributes.normal,o.attributes.tangent,o.attributes.uv,o.attributes.color),i.materialIndexAttribute.updateFrom(o.attributes.materialIndex),i.textures.setTextures(p,2048,2048,n),i.materials.updateFrom(r,n),a.dispose()}));await Promise.all([n,t]),document.getElementById("loading").remove(),E(),window.addEventListener("resize",E),p.domElement.addEventListener("mouseup",S),p.domElement.addEventListener("mousedown",C);const v=new m.GUI,T=v.addFolder("Path Tracing");T.add(M,"tiles",1,4,1).onChange((e=>{g.tiles.set(e,e)})),T.add(M,"samplesPerFrame",1,10,1),T.add(M,"bounces",1,30,1).onChange((()=>{g.reset()})),T.add(M,"resolutionScale",.1,1).onChange((()=>{E()}));const G=v.addFolder("Camera");G.add(f,"focusDistance",1,100).onChange(P).listen(),G.add(f,"apertureBlades",0,10,1).onChange((function(e){f.apertureBlades=0===e?0:Math.max(e,3),this.updateDisplay(),P()})),G.add(f,"apertureRotation",0,12.5).onChange(P),G.add(f,"anamorphicRatio",.1,10).onChange(P),G.add(f,"bokehSize",0,100).onChange(P).listen(),G.add(f,"fStop",.02,20).onChange(P).listen(),G.add(f,"fov",25,100).onChange((()=>{f.updateProjectionMatrix(),P()})).listen(),G.add(M,"autoFocus"),R()}();
//# sourceMappingURL=depthOfField.0cc6d401.js.map
