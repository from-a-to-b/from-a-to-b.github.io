(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(t,e){},181:function(t,e){},182:function(t,e){},183:function(t,e){},184:function(t,e){},222:function(t,e,n){},223:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(85),o=n(10),c=n(5),l=n(6),s=n(8),u=n(7),d=n(9),p=n(227),h=n(228),m=n(2),b=n(3),f=n(88),w=n.n(f),g=n(11),v=n.n(g);function y(){var t=Object(m.a)(["\n  position:fixed;\n  z-index:5;\n  left: 20px;\n  width: calc(100% - 40px);\n  top: 20px;\n  transform: translate(-50%, 50);\n  mix-blend-mode: multiply;\n\n  div {\n    font-size:9.0em;\n    color:white;\n    line-height: 1;\n    color: blue;\n\n  mix-blend-mode: multiply;\n    background-color:white;\n  }\n"]);return y=function(){return t},t}var j=r.a.Fragment,E=b.b.div(y()),O=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){if(v.a.isNull(this.props.data))return r.a.createElement(j,null);var t=this.props.data.pois[this.props.currentIdx%this.props.data.pois.length].fiction;return r.a.createElement(E,null,r.a.createElement(w.a,null,t))}}]),e}(a.Component),x=(Object(o.b)(function(t){return{windowWidth:t.windowWidth,windowHeight:t.windowHeight,data:t.data,currentIdx:t.currentIdx}})(O),{windowWidth:1024,windowHeight:768,dataStatus:"init",mapLoaded:!1,data:null,currentIdx:0,speculativeTripID:null,pdfListIds:[]}),k="https://from-a-to-b-api.wonyoung.so",_=n(32);function S(){var t=Object(m.a)(["\n      @media (max-width: ","px) {\n         ",";\n      }\n   "]);return S=function(){return t},t}var I={papabear:1e3,brotherbear:900,mamabear:700,babybear:700},D=Object.keys(I).reduce(function(t,e){return t[e]=function(){return Object(b.a)(S(),I[e],b.a.apply(void 0,arguments))},t},{});function C(){var t=Object(m.a)(["\n    width: 100%;\n  "]);return C=function(){return t},t}function W(){var t=Object(m.a)(["\n  width: 50%;\n\n  ","\n\n"]);return W=function(){return t},t}var A=b.b.div(W(),D.babybear(C())),H=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).currentSequence=[-75.343,39.984],n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.map=new window.mapboxgl.Map({container:this.refsMapContainer,style:"mapbox://styles/senseable/cjrb60fbp32ft2sqlsska4fmj",zoom:14,center:[-73.988,40.731],interactive:!1}),window.map=this.map,this.map.on("style.load",this.handleStyleLoad.bind(this))}},{key:"handleRender",value:function(t){}},{key:"handleStyleLoad",value:function(t){this.map.addSource("trip-path",{type:"geojson",data:_.lineString([[-21.96,64.14],[-21.95,64.14]])}),this.map.addSource("trip-point",{type:"geojson",data:_.point([-75.343,39.984])}),this.map.addSource("trip-pois-point",{type:"geojson",data:_.point([-75.343,39.984])}),this.map.addLayer({id:"trip-path-layer",type:"line",source:"trip-path",paint:{"line-color":"#FFFFFF","line-width":5,"line-opacity":1}}),this.map.addLayer({id:"trip-pois-point-layer",type:"circle",source:"trip-pois-point",paint:{"circle-radius":{base:3,stops:[[12,3],[22,80]]},"circle-color":"#000000","circle-stroke-width":2,"circle-stroke-color":"#FFFFFF"}}),this.map.addLayer({id:"trip-point-layer",type:"circle",source:"trip-point",paint:{"circle-radius":{base:6,stops:[[12,6],[22,180]]},"circle-color":"#FF0000","circle-stroke-width":2,"circle-stroke-color":"#FFFFFF"}})}},{key:"componentDidUpdate",value:function(t){if(this.map.resize(),!v.a.isNull(this.props.data)){var e=this.props.data;if(v.a.isNull(t.data)&&!v.a.isNull(e)||e.id!==t.data.id){var n=_.bbox(e.trip);this.map.getSource("trip-path").setData(e.trip),this.map.fitBounds([[n[0],n[1]],[n[2],n[3]]],{padding:{top:20,bottom:20,left:0,right:0}}),this.map.getSource("trip-pois-point").setData(_.featureCollection(v.a.map(e.pois,function(t){return _.point(t.location)})))}t.currentIdx===this.props.currentIdx&&0!==this.props.currentIdx||(0===this.props.currentIdx&&(this.currentSequence=[this.props.data.pois[this.props.currentIdx%this.props.data.pois.length].projected_point_on_path[0],this.props.data.pois[this.props.currentIdx%this.props.data.pois.length].projected_point_on_path[1]]),this.targetSequence=this.props.data.pois[this.props.currentIdx%this.props.data.pois.length])}}},{key:"animate",value:function(){if(!v.a.isUndefined(this.targetSequence)){var t=this.targetSequence.projected_point_on_path[0],e=this.targetSequence.projected_point_on_path[1];this.currentSequence[0]+=.2*(t-this.currentSequence[0]),this.currentSequence[1]+=.2*(e-this.currentSequence[1]),this.map.getSource("trip-point").setData(_.point(this.currentSequence))}requestAnimationFrame(this.animate.bind(this))}},{key:"render",value:function(){var t=this,e=this.props.windowWidth>700?645*this.props.windowWidth*.5/499:this.props.windowHeight-200;return r.a.createElement(A,{ref:function(e){t.refsMapContainer=e},style:{height:e},className:"map-container"})}}]),e}(a.Component),F=Object(o.b)(function(t){return{windowWidth:t.windowWidth,windowHeight:t.windowHeight,data:t.data,currentIdx:t.currentIdx}})(H),P=n(62),T=n.n(P);function N(){var t=Object(m.a)(["\n  display: inline-block;\n  padding: 2px 4px;\n  background-color: black;\n  color: white;\n  font-size:1.2em;\n"]);return N=function(){return t},t}function L(){var t=Object(m.a)(["\n    width: calc(100% - 20px);\n  "]);return L=function(){return t},t}function z(){var t=Object(m.a)(["\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  z-index: 9;\n  width: calc(50% - 40px);\n  line-height: 1.9;\n\n\n  ","\n"]);return z=function(){return t},t}var M=r.a.Fragment,G=b.b.div(z(),D.babybear(L())),q=b.b.div(N()),U=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){if(v.a.isNull(this.props.data))return r.a.createElement(M,null);var t=this.props.data,e="A ".concat(Math.floor(t.total_time/60),"-minute ").concat(t.type," trip"),n=v.a.first(v.a.first(t.trip.features).geometry.coordinates),a=v.a.last(v.a.first(t.trip.features).geometry.coordinates),i="From ".concat(n.join(", ")," to ").concat(a.join(", ")),o="From ".concat(T.a.unix(t.pickup_time).format("MMMM Qo, YYYY h:mm a")," to ").concat(T.a.unix(t.dropoff_time).format("h:mm a"));return r.a.createElement(G,null,r.a.createElement(q,null,e),"\xa0",r.a.createElement(q,null,i),r.a.createElement("br",null),r.a.createElement(q,null,o))}}]),e}(a.Component),B=Object(o.b)(function(t){return{windowWidth:t.windowWidth,windowHeight:t.windowHeight,data:t.data}})(U),R="\n  font-family: 'Druk Text', sans-serif;\n  font-size: 1em;\n  line-height: 1.2em;\n  font-style: normal;\n  font-weight: 500;\n";function K(){var t=Object(m.a)(["\n  height: 200px;\n"]);return K=function(){return t},t}function Y(){var t=Object(m.a)(["\n  ","\n  font-size:2.0em;\n  text-align: center;\n  margin: 20px 0;\n"]);return Y=function(){return t},t}function J(){var t=Object(m.a)(["\n\n  padding: 20px;\n  width: calc(1000px - 40px);\n  \n  display: flex;\n  justify-content: space-between;\n"]);return J=function(){return t},t}function V(){var t=Object(m.a)(["\n    margin-bottom: 20px;\n    width: 100%;\n  "]);return V=function(){return t},t}function Z(){var t=Object(m.a)(["\n  width: calc(50% - 25px);\n  ul {\n    max-width: 600px;\n    list-style: circle;\n  }\n  li {\n    font-size:1.1em;\n    margin-bottom: 15px;\n  }\n  p { \n    font-size:1.2em;\n    margin-bottom: 15px;\n    max-width: 600px;\n  }\n\n  a {\n    text-decoration: underline;\n    text-decoration-color: #777;\n  }\n\n  ","\n"]);return Z=function(){return t},t}function Q(){var t=Object(m.a)(["\n    display:block;\n    width: calc(100% - 20px);\n  "]);return Q=function(){return t},t}function X(){var t=Object(m.a)(["\n  padding: 20px;\n  width: calc(100% - 40px);\n  display: flex;\n  justify-content: space-between;\n\n  ","\n\n"]);return X=function(){return t},t}var $=b.b.section(X(),D.babybear(Q())),tt=b.b.div(Z(),D.babybear(V())),et=(b.b.section(J()),b.b.h2(Y(),R),b.b.div(K()));function nt(){var t=Object(m.a)(["\n    margin-bottom: 20px;\n    width: 100%;\n  "]);return nt=function(){return t},t}function at(){var t=Object(m.a)(["\n  width: 50%;\n\n  h1, p {\n    font-size: 1.3em;\n  }\n\n  ","\n"]);return at=function(){return t},t}function rt(){var t=Object(m.a)(["\n  width: 300px;\n\n  h1, p {\n    font-size: 1.3em;\n  }\n"]);return rt=function(){return t},t}var it=b.b.div(rt()),ot=b.b.div(at(),D.babybear(nt())),ct=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement(ot,null,r.a.createElement("h1",null,"From Point A to Point B"),r.a.createElement("p",null,"Achim Koh and Wonyoung So")),r.a.createElement(ot,null,r.a.createElement(it,null,r.a.createElement("p",null,"From Point A to Point B generates fictional accounts of real trips taken by real people that exist in public data sets."))))}}]),e}(a.Component);function lt(){var t=Object(m.a)(["\n  height: 5px;\n"]);return lt=function(){return t},t}function st(){var t=Object(m.a)(["\n  display: block;\n  width: 600px;\n  padding: 2px 4px;\n  background-color: black;\n  color: white;\n  font-size:1.2em;\n"]);return st=function(){return t},t}function ut(){var t=Object(m.a)(["\n  position:absolute;\n  left: 50%;\n  transform: translate(-50%, 0);\n  bottom: calc(","% + 10px);\n  z-index: 15;\n  line-height: 1.9;\n"]);return ut=function(){return t},t}var dt=b.b.div(ut(),50),pt=b.b.div(st()),ht=b.b.div(lt()),mt=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={nDots:1},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"convertNtoDots",value:function(t){for(var e="",n=0;n<t;n++)e+=".";return e}},{key:"componentDidMount",value:function(){var t=this;this.intervalId=setInterval(function(){var e=t.state.nDots+1;t.setState({nDots:e%4})},300)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var t=this.props.dataStatus,e=this.convertNtoDots(this.state.nDots);return"loaded"===t&&clearInterval(this.intervalId),r.a.createElement(dt,null,r.a.createElement(pt,null,"Loading a trip and generating a fiction",e),r.a.createElement(ht,null),r.a.createElement("div",{className:"linear-activity"},r.a.createElement("div",{className:"indeterminate"})))}}]),e}(a.Component),bt=n(35),ft=n.n(bt),wt=function(t){return{type:"CHANGE_SPECULATIVE_TRIP_ID",payload:{speculativeTripID:t}}},gt=function(t){return{type:"CHANGE_DATA_STATUS",payload:{dataStatus:t}}},vt=function(t){return{type:"CHANGE_DATA",payload:{data:t}}};function yt(){var t=Object(m.a)(["\n    margin-bottom: 20px;\n    width: 100%;\n    display:block;\n  "]);return yt=function(){return t},t}function jt(){var t=Object(m.a)(["\n  position: relative;\n  display: flex;\n\n  ","\n\n"]);return jt=function(){return t},t}function Et(){var t=Object(m.a)(["\n  position:absolute;\n  z-index: 10;\n  background-color: black;\n  left:0;\n  top:0;\n  width:50%;\n\n"]);return Et=function(){return t},t}function Ot(){var t=Object(m.a)(["\n    width: 100%;\n  "]);return Ot=function(){return t},t}function xt(){var t=Object(m.a)(["\n  mix-blend-mode: screen;\n  position:absolute;\n  z-index:11;\n  left: 0;\n  top: 0;\n  width: 50%;\n\n  ","\n\n"]);return xt=function(){return t},t}var kt=r.a.Fragment,_t=b.b.div(xt(),D.babybear(Ot())),St=(b.b.div(Et()),b.b.div(jt(),D.babybear(yt()))),It=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(t){this.loadData()}},{key:"loadData",value:function(){var t=this;this.props.dispatch(gt("loading")),ft.a.get("".concat(k,"/api/speculative_trips/random.json")).then(function(e){t.props.dispatch(vt(e.data.result)),t.props.dispatch(wt(e.data.id)),t.props.dispatch(gt("loaded"))}).catch(function(t){console.log(t)})}},{key:"render",value:function(){var t,e,n=this.props,a=n.dataStatus,i=(n.windowHeight,this.props.windowWidth>700?645*this.props.windowWidth*.5/499:this.props.windowHeight-200);return"loaded"===a?(t="taxi"===this.props.data.type?"#BEB514":"#0511ED",e="taxi"===this.props.data.type?"color":"screen"):(t="#000000",e="normal"),r.a.createElement(kt,null,r.a.createElement($,null,r.a.createElement("a",{href:"javascript:void(0);",onClick:this.handleClick.bind(this)},r.a.createElement("img",{src:"".concat("","/assets/shuffle.svg"),alt:"shuffle"}))),r.a.createElement(St,null,"loaded"===a?r.a.createElement(B,null):r.a.createElement(mt,null),r.a.createElement(_t,{style:{height:i,backgroundColor:t,opacity:"loaded"===a?1:.8,mixBlendMode:e}}),r.a.createElement(F,null),r.a.createElement(Pt,null)))}}]),e}(a.Component),Dt=Object(o.b)(function(t){return{windowWidth:t.windowWidth,windowHeight:t.windowHeight,currentIdx:t.currentIdx,data:t.data,dataStatus:t.dataStatus}})(It),Ct=n(25);function Wt(){var t=Object(m.a)(["\n    width: 100%;\n    overflow:hidden;\n  "]);return Wt=function(){return t},t}function At(){var t=Object(m.a)(["\n  width: 50%;\n\n  ","\n"]);return At=function(){return t},t}Ct.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(Ct.pdfjs.version,"/pdf.worker.js");var Ht=b.b.div(At(),D.babybear(Wt())),Ft=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={page:0,numPages:1},n.intervalID=null,n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"onDocumentLoadSuccess",value:function(t){var e=this,n=t.numPages;this.setState({numPages:n}),setInterval(function(){e.setState(function(t){return{page:(t.page+1)%t.numPages}})},5e3)}},{key:"render",value:function(){var t=this.props,e=t.speculativeTripID,n=t.windowWidth,a=n>700?.5*n:n;return r.a.createElement(Ht,null,v.a.isNull(e)?null:r.a.createElement(Ct.Document,{file:"".concat(k,"/api/speculative_trips/").concat(e,".pdf"),onLoadSuccess:this.onDocumentLoadSuccess.bind(this)},r.a.createElement(Ct.Page,{width:a,pageNumber:this.state.page+1})))}}]),e}(a.Component),Pt=Object(o.b)(function(t){return{windowWidth:t.windowWidth,windowHeight:t.windowHeight,speculativeTripID:t.speculativeTripID}})(Ft);function Tt(){var t=Object(m.a)(["\n  font-size:1.5em;\n  line-height:1.2;\n  margin-bottom: 15px;\n"]);return Tt=function(){return t},t}var Nt=r.a.Fragment,Lt=b.b.h3(Tt()),zt=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(Nt,null,r.a.createElement(et,{style:{height:20}}),r.a.createElement($,null,r.a.createElement(tt,null,r.a.createElement(Lt,null,"What happens in the empty space",r.a.createElement("br",null),"between data points?"),r.a.createElement("p",null,"Data do not simply represent reality; they are reflective of specific worldviews ingrained in their collection and usage, and conducive to imposing said worldviews to the world. Data are supposedly revelatory, but data also act as a force that shapes reality."),r.a.createElement("p",null,"What does this mean in practice? To a data researcher, data that lack details can be frustrating. Data-based models are hungry for more data and granularity; when these latter are unavailable, data methodologies tend to fill in the blanks and estimate what is not measured by employing assumptions and proxies. While data are often associated with objectivity, in practice they involve imagination and interpretation as much as any field; creating fictitious versions of the unrepresented in-between space, while hoping that these work well enough for practical purposes."),r.a.createElement("p",null,"The NYC Open Data platform provides data on the taxi and bicycle trips of New Yorkers. For technical and ethical reasons, these data sets contain only the starting and ending points of the trips, and not the in-between route; some data sets do not even provide GPS-based coordinates, but simply the areas in which the trip started and ended. From Point A to Point B attempts to fill in the space between the points through a combination of data methodology and poetic exploration, thereby imagining the experience of the travelers."),r.a.createElement("p",null,"Using the starting and ending points included in bicycle and taxi trip data sets, the piece imagines the unrepresented and undocumented experience of the traveler during their journey in the in-between space. The trip data include timestamps that indicate when events occurred, which this work uses to choose a trip that happened in the corresponding time of day. A custom program estimates the route of the journey and extracts points of interest (landmarks, businesses, etc) around the route. The program then generates a fictional narrative of the journey that the traveler could have experienced, but almost certainly did not."),r.a.createElement("p",null,"From Point A to Point B nods to this data-based attempt to guess the in-between spaces, the fissures of data. However, it also acknowledges the fundamental irreconcilability of data and the world it represents. Instead of trying to render the world into an \u2018accurate\u2019 fixed state, we explore the different potential states opened up by the sparsity of data. We take the idea of inventing realities quite literally, creating speculative accounts based on people\u2019s journeys documented in open data sets."),r.a.createElement("p",null,"This work is an illustration of data methodologies\u2019 reliance on guesswork and assumptions, which invent numbers where measurements do not exist. At the same time, it is a poetic exploration of people\u2019s experience rendered invisible through its abstraction into numbers."),r.a.createElement("p",null,"Code for From Point A to Point B can be found ",r.a.createElement("a",{href:"https://github.com/from-a-to-b",target:"_blank"},"here"),".")),r.a.createElement(tt,null,r.a.createElement(Lt,null,"Related works"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://c4sr.columbia.edu/knowing-cities/schedule.html#wchun?r=hp",target:"_blank"},"Wendy Hui Kyong Chun\u2019s talks at Ways Of Knowing Cities")," and ",r.a.createElement("a",{href:"https://cybernetics.social/conference2017/index.html",target:"_blank"},"Cybernetics Conference")),r.a.createElement("li",null,"Shannon Mattern, ",r.a.createElement("a",{href:"https://placesjournal.org/article/maintenance-and-care/",target:"_blank"},"Maintenance and Care")," and ",r.a.createElement("a",{href:"https://placesjournal.org/author/shannon-mattern/",target:"_blank"},"other articles")),r.a.createElement("li",null,"Ursula K. Le Guin, ",r.a.createElement("a",{href:"https://web.archive.org/web/20180628075056/http://theanarchistlibrary.org/library/ursula-k-le-guin-a-non-euclidean-view-of-california-as-a-cold-place-to-be",target:"_blank"},"A Non-Euclidean View of California as a Cold Place to Be ")),r.a.createElement("li",null,"The House of Dust by Alison Knowles: A classic work in generative poetry. It was inspirational in terms of how to describe a space"),r.a.createElement("li",null,"Artworks of ",r.a.createElement("a",{href:"https://www.deweyhagborg.com/",target:"_blank"},"Heather Dewey-Hagborg")," and ",r.a.createElement("a",{href:"http://www.lauren-mccarthy.com/",target:"_blank"},"Lauren McCarthy")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://agermanidis.com/#randomly-generated-social-interactions",target:"_blank"},"Randomly Generated Social Interactions")," by Anastasis Germanidis"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://senseable.mit.edu",target:"_blank"},"MIT Senseable City Lab"),"\u2019s ",r.a.createElement("a",{href:"http://senseable.mit.edu/urban-sensing",target:"_blank"},"Urban Sensing project")),r.a.createElement("li",null,"Wonyoung\u2019s ",r.a.createElement("a",{href:"https://www.dropbox.com/s/2cdkyamyg5gz2hp/sensorgram_scl_draft.pdf?dl=0",target:"_blank"},"City Scanner: The Optimum Configuration of Sensors")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://dataminding.blog/portfolio/censusamericans/",target:"_blank"},"@censusAmericans"),", a Twitter bot by Jia Zhang")))))}}]),e}(a.Component),Mt=n(93);function Gt(){var t=Object(m.a)(["\n  margin: 20px 0;\n"]);return Gt=function(){return t},t}function qt(){var t=Object(m.a)(["\n  img {\n    width: 100%;\n  }\n"]);return qt=function(){return t},t}var Ut=b.b.div(qt()),Bt=b.b.div(Gt()),Rt=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(Bt,null,r.a.createElement(Mt.a,null,r.a.createElement(Ut,null,r.a.createElement("img",{src:"".concat("","/photos/01.jpg"),alt:"photo"})),r.a.createElement(Ut,null,r.a.createElement("img",{src:"".concat("","/photos/02.jpg"),alt:"photo"})),r.a.createElement(Ut,null,r.a.createElement("img",{src:"".concat("","/photos/03.jpg"),alt:"photo"})),r.a.createElement(Ut,null,r.a.createElement("img",{src:"".concat("","/photos/04.jpg"),alt:"photo"}))))}}]),e}(a.Component),Kt=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement(tt,null,r.a.createElement("p",null,"Credits",r.a.createElement("br",null),"From Point A to Point B is by ",r.a.createElement("a",{href:"https://scalarvectortensor.net/",target:"_blank"},"Achim Koh")," and ",r.a.createElement("a",{href:"https://wonyoung.so",target:"_blank"},"Wonyoung So"),". It was made for, exhibited at and supported by ",r.a.createElement("a",{href:"http://2019.datathroughdesign.com/",target:"_blank"},"Data Through Design 2019"),".")))}}]),e}(a.Component);function Yt(){var t=Object(m.a)(["\n  padding: 20px;\n  margin-top: 50px;\n  font-size: 1.2em;\n"]);return Yt=function(){return t},t}function Jt(){var t=Object(m.a)(["\n  display: flex;\n  padding: 0 20px;\n  margin-bottom: 10px;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]);return Jt=function(){return t},t}var Vt=b.b.div(Jt()),Zt=b.b.div(Yt()),Qt=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.pdfListIds,n=t.windowWidth>700?e:e.splice(0,5);return r.a.createElement(Nt,null,r.a.createElement(Zt,null,"Fictions"),r.a.createElement(Vt,null,v.a.map(n,function(t){return r.a.createElement(ce,{id:t,key:t})})))}}]),e}(a.Component),Xt=Object(o.b)(function(t){return{windowWidth:t.windowWidth,windowHeight:t.windowHeight,pdfListIds:t.pdfListIds}})(Qt);function $t(){var t=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  a {\n    color: white;\n  }\n"]);return $t=function(){return t},t}function te(){var t=Object(m.a)(["\n    display:block;\n    width: 100%;\n    overflow:hidden;\n  "]);return te=function(){return t},t}function ee(){var t=Object(m.a)(["\n\n  width: calc(25% - 40px);\n  margin-bottom: 40px;\n  position: relative;\n\n  ","\n\n"]);return ee=function(){return t},t}function ne(){var t=Object(m.a)(["\n  display: block;\n  &:hover {\n    opacity: 0.9;\n  }\n"]);return ne=function(){return t},t}Ct.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(Ct.pdfjs.version,"/pdf.worker.js");var ae=b.b.a(ne()),re=b.b.div(ee(),D.babybear(te())),ie=b.b.div($t()),oe=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={page:0,numPages:1},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"onDocumentLoadSuccess",value:function(t){var e=t.numPages;this.setState({numPages:e})}},{key:"handlePrevClick",value:function(t){this.setState({page:this.state.page-1<0?this.state.numPages-1:(this.state.page-1)%this.state.numPages})}},{key:"handleNextClick",value:function(t){this.setState({page:(this.state.page+1)%this.state.numPages})}},{key:"render",value:function(){var t=this.props,e=t.id,n=t.windowWidth,a=n>700?.25*(n-40)-40:n-40;return r.a.createElement(re,null,r.a.createElement(ae,{href:"".concat(k,"/api/speculative_trips/").concat(e,".pdf"),target:"_blank"},r.a.createElement(Ct.Document,{file:"".concat(k,"/api/speculative_trips/").concat(e,".pdf"),onLoadSuccess:this.onDocumentLoadSuccess.bind(this)},r.a.createElement(Ct.Page,{width:a,pageNumber:this.state.page+1}))),r.a.createElement(ie,null,r.a.createElement("a",{href:"javascript:void(0);",onClick:this.handlePrevClick.bind(this)},"\u2190"),"\xa0\xa0",r.a.createElement("a",{href:"javascript:void(0);",onClick:this.handleNextClick.bind(this)},"\u2192")))}}]),e}(a.Component),ce=Object(o.b)(function(t){return{windowWidth:t.windowWidth,windowHeight:t.windowHeight}})(oe),le=r.a.Fragment,se=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeHandler.bind(this)),this.resizeHandler(),this.loadData()}},{key:"loadData",value:function(){var t=this;ft.a.all([ft.a.get("".concat(k,"/api/speculative_trips/random.json")),ft.a.get("".concat(k,"/api/speculative_trips.json"))]).then(ft.a.spread(function(e,n){e.data.success&&(t.props.dispatch(vt(e.data.result)),t.props.dispatch(wt(e.data.id))),n.data.success&&(t.props.dispatch({type:"CHANGE_PDF_LIST_IDS",payload:{pdfListIds:n.data.ids}}),t.props.dispatch(gt("loaded")))}))}},{key:"resizeHandler",value:function(t){var e;this.props.dispatch({type:"WINDOW_RESIZE",payload:{windowWidth:(e={width:window.innerWidth,height:window.innerHeight}).width,windowHeight:e.height}})}},{key:"render",value:function(){return r.a.createElement(le,null,r.a.createElement(ct,null),r.a.createElement(Dt,null),r.a.createElement(Xt,null),r.a.createElement(zt,null),r.a.createElement(Rt,null),r.a.createElement(Kt,null))}}]),e}(a.Component),ue=Object(o.b)(function(t){return{currentIdx:t.currentIdx,data:t.data,dataStatus:t.dataStatus}})(se),de=r.a.Fragment,pe=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(de,null,r.a.createElement(h.a,{exact:!0,path:"/",component:ue})))}}]),e}(a.Component),he=Object(o.b)(function(t){return{width:t.windowWidth,height:t.windowHeight}})(pe),me=n(50),be=n(29);var fe=Object(me.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE_SPECULATIVE_TRIP_ID":return Object(be.a)({},t,{speculativeTripID:e.payload.speculativeTripID});case"CHANGE_PDF_LIST_IDS":return Object(be.a)({},t,{pdfListIds:e.payload.pdfListIds});case"WINDOW_RESIZE":return Object(be.a)({},t,{windowWidth:e.payload.windowWidth,windowHeight:e.payload.windowHeight});case"CHANGE_MAP_LOADED":return Object(be.a)({},t,{mapLoaded:e.payload.mapLoaded});case"CHANGE_DATA":return Object(be.a)({},t,{data:e.payload.data});case"CHANGE_CURRENT_IDX":return Object(be.a)({},t,{currentIdx:e.payload.currentIdx});case"CHANGE_DATA_STATUS":return Object(be.a)({},t,{dataStatus:e.payload.dataStatus});default:return Object(be.a)({},t)}});n(222);Object(i.render)(r.a.createElement(o.a,{store:fe},r.a.createElement(he,null)),document.getElementById("root"))},48:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=48},96:function(t,e,n){t.exports=n(223)}},[[96,1,2]]]);
//# sourceMappingURL=main.077d40fa.chunk.js.map