import{w as s,f,S as v,r as c}from"./iframe.340e561d.js";import{m as u}from"./make-decorator.5f2f6c5e.js";var k="links",m=s.document,L=s.HTMLElement,p=function(e){return f.getChannel().emit(c,e)},l=function(e){var n=e.target;if(n instanceof L){var d=n,a=d.dataset,i=a.sbKind,o=a.sbStory;(i||o)&&(e.preventDefault(),p({kind:i,story:o}))}},r=!1,h=function(){r||(r=!0,m.addEventListener("click",l))},E=function(){r&&(r=!1,m.removeEventListener("click",l))},w=u({name:"withLinks",parameterName:k,wrapper:function(e,n){return h(),f.getChannel().once(v,E),e(n)}});module&&module.hot&&module.hot.decline&&module.hot.decline();var T=[w];export{T as decorators};
//# sourceMappingURL=preview.6e41c090.js.map
