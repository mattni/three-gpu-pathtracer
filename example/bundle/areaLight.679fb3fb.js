var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequire5b70;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequire5b70=a),a.register("891vQ",(function(e,t){var r,n,o,i;r=e.exports,n="RGBELoader",o=()=>l,Object.defineProperty(r,n,{get:o,set:i,enumerable:!0,configurable:!0});var s=a("ilwiq");class l extends s.DataTextureLoader{constructor(e){super(e),this.type=s.HalfFloatType}parse(e){const t=function(e,t){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(t||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(t||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(t||""));break;default:console.error("THREE.RGBELoader: Error: "+(t||""))}return-1},r=function(e,t,r){t=t||1024;let a=e.pos,n=-1,o=0,i="",s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));for(;0>(n=s.indexOf("\n"))&&o<t&&a<e.byteLength;)i+=s,o+=s.length,a+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));return-1<n&&(!1!==r&&(e.pos+=o+n+1),i+s.slice(0,n))},a=function(e,t,r,a){const n=e[t+3],o=Math.pow(2,n-128)/255;r[a+0]=e[t+0]*o,r[a+1]=e[t+1]*o,r[a+2]=e[t+2]*o,r[a+3]=1},n=function(e,t,r,a){const n=e[t+3],o=Math.pow(2,n-128)/255;r[a+0]=s.DataUtils.toHalfFloat(Math.min(e[t+0]*o,65504)),r[a+1]=s.DataUtils.toHalfFloat(Math.min(e[t+1]*o,65504)),r[a+2]=s.DataUtils.toHalfFloat(Math.min(e[t+2]*o,65504)),r[a+3]=s.DataUtils.toHalfFloat(1)},o=new Uint8Array(e);o.pos=0;const i=function(e){const a=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,n=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,i=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,s={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let l,f;if(e.pos>=e.byteLength||!(l=r(e)))return t(1,"no header found");if(!(f=l.match(/^#\?(\S+)/)))return t(3,"bad initial token");for(s.valid|=1,s.programtype=f[1],s.string+=l+"\n";l=r(e),!1!==l;)if(s.string+=l+"\n","#"!==l.charAt(0)){if((f=l.match(a))&&(s.gamma=parseFloat(f[1])),(f=l.match(n))&&(s.exposure=parseFloat(f[1])),(f=l.match(o))&&(s.valid|=2,s.format=f[1]),(f=l.match(i))&&(s.valid|=4,s.height=parseInt(f[1],10),s.width=parseInt(f[2],10)),2&s.valid&&4&s.valid)break}else s.comments+=l+"\n";return 2&s.valid?4&s.valid?s:t(3,"missing image size specifier"):t(3,"missing format specifier")}(o);if(-1!==i){const e=i.width,r=i.height,l=function(e,r,a){const n=r;if(n<8||n>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(n!==(e[2]<<8|e[3]))return t(3,"wrong scanline width");const o=new Uint8Array(4*r*a);if(!o.length)return t(4,"unable to allocate buffer space");let i=0,s=0;const l=4*n,f=new Uint8Array(4),c=new Uint8Array(l);let d=a;for(;d>0&&s<e.byteLength;){if(s+4>e.byteLength)return t(1);if(f[0]=e[s++],f[1]=e[s++],f[2]=e[s++],f[3]=e[s++],2!=f[0]||2!=f[1]||(f[2]<<8|f[3])!=n)return t(3,"bad rgbe scanline format");let r,a=0;for(;a<l&&s<e.byteLength;){r=e[s++];const n=r>128;if(n&&(r-=128),0===r||a+r>l)return t(3,"bad scanline data");if(n){const t=e[s++];for(let e=0;e<r;e++)c[a++]=t}else c.set(e.subarray(s,s+r),a),a+=r,s+=r}const p=n;for(let e=0;e<p;e++){let t=0;o[i]=c[e+t],t+=n,o[i+1]=c[e+t],t+=n,o[i+2]=c[e+t],t+=n,o[i+3]=c[e+t],i+=4}d--}return o}(o.subarray(o.pos),e,r);if(-1!==l){let t,o,f;switch(this.type){case s.FloatType:f=l.length/4;const e=new Float32Array(4*f);for(let t=0;t<f;t++)a(l,4*t,e,4*t);t=e,o=s.FloatType;break;case s.HalfFloatType:f=l.length/4;const r=new Uint16Array(4*f);for(let e=0;e<f;e++)n(l,4*e,r,4*e);t=r,o=s.HalfFloatType;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:e,height:r,data:t,header:i.string,gamma:i.gamma,exposure:i.exposure,type:o}}}return null}setDataType(e){return this.type=e,this}load(e,t,r,a){return super.load(e,(function(e,r){switch(e.type){case s.FloatType:case s.HalfFloatType:e.encoding=s.LinearEncoding,e.minFilter=s.LinearFilter,e.magFilter=s.LinearFilter,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,r)}),r,a)}}}));
//# sourceMappingURL=areaLight.679fb3fb.js.map
