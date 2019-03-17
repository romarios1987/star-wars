(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},32:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=a(38),i=(a(28),a(6)),s=a(7),u=a(9),m=a(8),p=a(10),d=a(17),f=a(37),h=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement("div",{className:"container"},r.a.createElement(d.a,{className:"navbar-brand",to:"/"},"Star Wars"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor03"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement(f.a,{className:"nav-item nav-link",to:"/people/"},"People"),r.a.createElement(f.a,{className:"nav-item nav-link",to:"/planets/"},"Planets"),r.a.createElement(f.a,{className:"nav-item nav-link",to:"/starships/"},"Starships")))))},v=(a(32),function(){return r.a.createElement("h1",null,"NotFound")}),E=a(5),g=a.n(E),b=a(12),w=function(){function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://swapi.co/api",this.getAllPeople=Object(b.a)(g.a.mark(function e(){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPerson));case 4:case"end":return e.stop()}},e)})),this.getPerson=function(){var e=Object(b.a)(g.a.mark(function e(a){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformPerson(n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(b.a)(g.a.mark(function e(){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPlanet));case 4:case"end":return e.stop()}},e)})),this.getPlanet=function(){var e=Object(b.a)(g.a.mark(function e(a){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformPlanet(n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(b.a)(g.a.mark(function e(){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformStarship));case 4:case"end":return e.stop()}},e)})),this.getStarship=function(){var e=Object(b.a)(g.a.mark(function e(a){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformStarship(n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargo_capacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,height:e.height,mass:e.mass,eyeColor:e.eye_color,birthYear:e.birth_year,gender:e.gender}}}return Object(s.a)(e,[{key:"getResource",value:function(){var e=Object(b.a)(g.a.mark(function e(t){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t)).then(function(e){return e.json()}).catch(function(e){console.log("Error: ",e)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_extractId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),N=(a(35),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{style:{width:"100%",height:"100%"},className:"lds-double-ring"},r.a.createElement("div",null),r.a.createElement("div",null)))}),y=function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("img",{src:"img/error-image.png",width:85,alt:"Error"}),r.a.createElement("span",{className:"boom"},"Boom!"),r.a.createElement("span",null,"Something has gone terribly wrong"),r.a.createElement("span",null,"(but we already sent droids to fix it)"))},j=function(e){var t=e.planet,a=t.id,n=t.name,l=t.population,c=t.diameter,o=t.rotationPeriod;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-md-4 col-sm-6 mx-auto text-center"},r.a.createElement("img",{className:"img-fluid radius-img",src:"../img/planets/".concat(a,".jpg"),width:220,alt:n,onError:function(e){e.target.onerror=null,e.target.src="../img/error-image.png"}})),r.a.createElement("div",{className:"col-md-8 mx-auto"},r.a.createElement("div",{className:"random-planet-info"},r.a.createElement("h2",{className:"text-uppercase"},n),r.a.createElement("ul",{className:"list-info"},r.a.createElement("li",null,"ID: ",r.a.createElement("span",null,a)),r.a.createElement("li",null,"Population: ",r.a.createElement("span",null,l)),r.a.createElement("li",null,"Rotation: ",r.a.createElement("span",null,o)),r.a.createElement("li",null,"Diameter: ",r.a.createElement("span",null,c))))))},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new w,a.state={planet:{},loading:!0,error:!1},a.onError=function(){a.setState({error:!0,loading:!1})},a.onPlanetLoaded=function(e){a.setState({planet:e,loading:!1})},a.updatePlanet=function(){var e=Math.floor(59*Math.random()+2);a.swapiService.getPlanet(e).then(a.onPlanetLoaded).catch(a.onError)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.updatePlanet,5e3)}},{key:"render",value:function(){var e=this.state,t=e.planet,a=e.loading,n=e.error,l=!(a||n),c=n?r.a.createElement(y,null):null,o=a?r.a.createElement(N,null):null,i=l?r.a.createElement(j,{planet:t}):null;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrap-random-planet bg-light mt-3 p-3"},r.a.createElement("div",{className:"row"},c,o,i)))}}]),t}(n.Component),x=r.a.createContext(),P=x.Provider,I=x.Consumer,S=a(40),k=a(20),_=a(39),C=a(41),D=function(e,t){return function(a){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={data:null,loading:!0,error:!1},t}return Object(p.a)(n,a),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.setState({loading:!0,error:!1}),t().then(function(t){e.setState({data:t,loading:!1})}).catch(function(){e.setState({error:!0,loading:!1})})}},{key:"render",value:function(){var t=this.state,a=t.data,n=t.loading,l=t.error;return n?r.a.createElement(N,null):l?r.a.createElement(y,null):r.a.createElement(e,Object.assign({},this.props,{data:a}))}}]),n}(n.Component)},R=function(e){var t=e.data,a=e.onItemSelected,n=t.map(function(e){var t=e.id,n=e.name;return r.a.createElement("li",{key:t,onClick:function(){return a(t)},className:"list-group-item list-group-item-action"},n)});return r.a.createElement("div",{className:"item-list"},r.a.createElement("ul",{className:"list-group"},n),r.a.createElement("button",{type:"button",className:"btn btn-warning mt-3"},"More items"))},A=new w,F=A.getAllPeople,M=A.getAllPlanets,B=A.getAllStarships,J=function(e,t){return function(a){return r.a.createElement(e,a,t)}},L=function(e){var t=e.name;return r.a.createElement("span",null,t)},W=D(J(R,L),F),G=D(J(R,L),M),T=D(J(R,function(e){var t=e.name,a=e.model;return r.a.createElement("span",null,t," (#",a,")")}),B),U=function(e){var t=e.item,a=e.imageFolder,n=e.children,l=t.id,c=t.name;return r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"wrap-img"},r.a.createElement("img",{src:"../img/".concat(a,"/").concat(l,".jpg"),className:"radius-img",width:180,alt:c})),r.a.createElement("div",{className:"short-details-info ml-3"},r.a.createElement("h2",{className:"text-uppercase"},c),r.a.createElement("ul",{className:"list-info"},r.a.Children.map(n,function(e){return r.a.cloneElement(e,{item:t})}))))},Y=function(e){var t=e.item,a=e.field,n=e.label;return r.a.createElement("li",null,r.a.createElement("span",null,n,":")," ",t[a])},$=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={item:null,loading:!0,error:!1},a.updateItem=function(){var e=a.props,t=e.itemId,n=e.getData;t&&n(t).then(function(e){a.setState({item:e,loading:!1})})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&this.updateItem()}},{key:"render",value:function(){var e=this.state,t=e.item,a=e.loading,n=e.error,l=!(a||n),c=n?r.a.createElement(y,null):null,o=a?r.a.createElement(N,null):null,i=l?r.a.createElement(U,{item:t,imageFolder:this.props.imageFolder,children:this.props.children}):r.a.createElement("span",null,"Select a person from a list");return r.a.createElement("div",{className:"short-details bg-light p-3"},c,o,i)}}]),t}(n.Component),q=function(e){var t=e.itemId;return r.a.createElement(I,null,function(e){var a=e.getPerson;return r.a.createElement($,{itemId:t,getData:a,imageFolder:"characters"},r.a.createElement(Y,{field:"gender",label:"Gender"}),r.a.createElement(Y,{field:"eyeColor",label:"Eye Color"}))})},z=function(e){var t=e.itemId;return r.a.createElement(I,null,function(e){var a=e.getPlanet;return r.a.createElement($,{itemId:t,getData:a,imageFolder:"planets"},r.a.createElement(Y,{field:"name",label:"Name"}),r.a.createElement(Y,{field:"population",label:"Population"}),r.a.createElement(Y,{field:"rotationPeriod",label:"RotationPeriod"}),r.a.createElement(Y,{field:"diameter",label:"Diameter"}))})},H=function(e){var t=e.itemId;return r.a.createElement(I,null,function(e){var a=e.getStarship;return r.a.createElement($,{itemId:t,getData:a,imageFolder:"starships"},r.a.createElement(Y,{field:"name",label:"Name"}),r.a.createElement(Y,{field:"model",label:"Model"}),r.a.createElement(Y,{field:"costInCredits",label:"Cost In Credits"}))})},K=function(e){var t=e.left,a=e.right;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-lg-6 mb-3"},t),r.a.createElement("div",{className:"col-md-12 col-lg-6 mb-3"},a))},Q=Object(C.a)(function(e){var t=e.history,a=e.match.params.id;return r.a.createElement(K,{left:r.a.createElement(W,{onItemSelected:function(e){return t.push(e)}}),right:r.a.createElement(q,{itemId:a})})}),V=Object(C.a)(function(e){var t=e.history;return r.a.createElement(G,{onItemSelected:function(e){return t.push(e)}})}),X=Object(C.a)(function(e){var t=e.history;return r.a.createElement(T,{onItemSelected:function(e){return t.push(e)}})}),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showRandomPlanet:!0,swapiService:new w},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.showRandomPlanet?r.a.createElement(O,null):null;return r.a.createElement(P,{value:this.state.swapiService},r.a.createElement(h,null),e,r.a.createElement("div",{className:"container content mt-5"},r.a.createElement(S.a,null,r.a.createElement(k.a,{path:"/",render:function(){return r.a.createElement("h2",null,"Welcome to StarDB")},exact:!0}),r.a.createElement(k.a,{path:"/people/:id?",component:Q}),r.a.createElement(k.a,{path:"/starships",exact:!0,component:X}),r.a.createElement(k.a,{path:"/starships/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(H,{itemId:t})}}),r.a.createElement(k.a,{path:"/planets",exact:!0,component:V}),r.a.createElement(k.a,{path:"/planets/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(z,{itemId:t})}}),r.a.createElement(k.a,{path:"/not-found",component:v}),r.a.createElement(_.a,{to:"/not-found"}))))}}]),t}(n.Component);c.a.render(r.a.createElement(o.a,{basename:"/star-wars"},r.a.createElement(Z,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f05aeade.chunk.js.map