(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{318:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},319:function(e,t,n){(function(t){const path=n(320),r=[".graphql",".gql"],{rawRequest:o,gql:l,request:c,GraphQLClient:h}=n(141);e.exports=function(e){const{graphql:n={}}=this.options,o={includeNodeModules:!1,useFetchPolyfill:!0,options:{},clients:{},...n,...e};this.addPlugin({src:path.resolve(t,"plugin.js"),fileName:"graphql-request.js",options:o}),this.extendBuild((e=>{const{resolve:t}=e;t.extensions.some((e=>r.includes(e)))||(t.extensions=[...t.extensions,...r]);const{rules:n}=e.module;if(!n.some((e=>"graphql-tag/loader"===e.use))){const e={test:/\.(graphql|gql)$/,use:"graphql-tag/loader"};o.includeNodeModules||(e.exclude=/(node_modules)/),n.push(e)}}))},e.exports.meta=n(321),e.exports.gql=l,e.exports.rawRequest=o,e.exports.request=c,e.exports.GraphQLClient=h}).call(this,"/")},320:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function filter(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var path=i>=0?arguments[i]:e.cwd();if("string"!=typeof path)throw new TypeError("Arguments to path.resolve must be strings");path&&(t=path+"/"+t,r="/"===path.charAt(0))}return(r?"/":"")+(t=n(filter(t.split("/"),(function(p){return!!p})),!r).join("/"))||"."},t.normalize=function(path){var e=t.isAbsolute(path),o="/"===r(path,-1);return(path=n(filter(path.split("/"),(function(p){return!!p})),!e).join("/"))||e||(path="."),path&&o&&(path+="/"),(e?"/":"")+path},t.isAbsolute=function(path){return"/"===path.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(filter(e,(function(p,e){if("string"!=typeof p)throw new TypeError("Arguments to path.join must be strings");return p})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),l=r(n.split("/")),c=Math.min(o.length,l.length),h=c,i=0;i<c;i++)if(o[i]!==l[i]){h=i;break}var f=[];for(i=h;i<o.length;i++)f.push("..");return(f=f.concat(l.slice(h))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(path){if("string"!=typeof path&&(path+=""),0===path.length)return".";for(var code=path.charCodeAt(0),e=47===code,t=-1,n=!0,i=path.length-1;i>=1;--i)if(47===(code=path.charCodeAt(i))){if(!n){t=i;break}}else n=!1;return-1===t?e?"/":".":e&&1===t?"/":path.slice(0,t)},t.basename=function(path,e){var t=function(path){"string"!=typeof path&&(path+="");var i,e=0,t=-1,n=!0;for(i=path.length-1;i>=0;--i)if(47===path.charCodeAt(i)){if(!n){e=i+1;break}}else-1===t&&(n=!1,t=i+1);return-1===t?"":path.slice(e,t)}(path);return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t},t.extname=function(path){"string"!=typeof path&&(path+="");for(var e=-1,t=0,n=-1,r=!0,o=0,i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(47!==code)-1===n&&(r=!1,n=i+1),46===code?-1===e?e=i:1!==o&&(o=1):-1!==e&&(o=-1);else if(!r){t=i+1;break}}return-1===e||-1===n||0===o||1===o&&e===n-1&&e===t+1?"":path.slice(e,n)};var r="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(115))},321:function(e){e.exports=JSON.parse('{"name":"nuxt-graphql-request","version":"6.0.2","description":"Easy GraphQL client integration with Nuxt.js","author":{"name":"Gomah <hi@gomah.fr>"},"keywords":["vue","nuxt","nuxtjs","nuxt.js","graphql","graphql-request","nuxt-graphql","nuxt-graphql-request"],"typings":"types/index.d.ts","main":"lib/module.js","files":["lib","types/*.d.ts"],"repository":"https://github.com/Gomah/nuxt-graphql-request","homepage":"https://github.com/Gomah/nuxt-graphql-request","publishConfig":{"access":"public"},"license":"MIT","scripts":{"dev":"nuxt test/fixture","test:system":"NODE_ENV=test jest --testRegex \\"/test/system/(.+)\\\\.test\\\\.ts$\\"","release":"yarn test && standard-version && git push --follow-tags && npm publish","prepare":"husky install","prepublishOnly":"yarn test","test":"yarn test:lint && yarn test:jest","test:jest":"NODE_ENV=test && jest --runInBand","test:lint":"eslint --ext .js, lib/module.js"},"peerDependencies":{"graphql":"14.x || 15.x || 16.x"},"dependencies":{"cross-fetch":"^3.1.5","graphql-request":"^5.1.0","ramda":"^0.28.0"},"devDependencies":{"@commitlint/cli":"^16.2.3","@commitlint/config-conventional":"^16.2.1","@nuxt/types":"^2.15.8","@types/jest":"^27.4.1","@types/jsdom":"^16.2.14","@types/node":"^17.0.23","babel-eslint":"^10.1.0","babel-jest":"^27.5.1","eslint":"^8.12.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.5.0","graphql":"^16.3.0","graphql-tag":"^2.12.6","husky":"^7.0.4","jest":"^27.5.1","jsdom":"^19.0.0","nuxt":"^2.15.8","prettier":"^2.6.1","request":"^2.88.2","request-promise-native":"^1.0.9","standard-version":"^9.3.2"}}')},322:function(e,t,n){"use strict";n.r(t);n(29);var r,o=n(318),l=n(10),c=(n(66),n(319)),h={asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var n,l,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$graphql,e.params,l=Object(c.gql)(r||(r=Object(o.a)(["\n      query { \n        blogPostCollection {\n    items{\n      sys {\n        id\n      }\n    \n     title\n     heroImage {\n        url(transform: {width: 500, height: 400})\n     }\n    author {\n      name\n      title\n      company\n      shortBio\n      email\n      phone\n      facebook\n      twitter\n      github\n    }\n  }\n}\n}\n    "]))),t.next=4,n.default.request(l);case 4:return h=t.sent,console.log(h.blogPostCollection),t.abrupt("return",{weddingData:h});case 7:case"end":return t.stop()}}),t)})))()}},f=n(63),component=Object(f.a)(h,(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Wedding")]),e._v(" "),e._l(e.weddingData.blogPostCollection.items,(function(n){return t("div",{key:e.blogUnique},[t("h1",[e._v(e._s(n.title))]),e._v(" "),t("nuxt-link",{attrs:{to:"/".concat(n.author.name)}},[e._v("Click for "+e._s(n.author.name))]),e._v(" "),t("img",{attrs:{src:n.heroImage.url,alt:n.title}}),e._v(" "),t("p",[e._v(e._s(n.author))])],1)}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);