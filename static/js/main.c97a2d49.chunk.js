(this["webpackJsonpresolution-editor"]=this["webpackJsonpresolution-editor"]||[]).push([[0],{27:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(17),c=n(18),s=n(9),i=function(e){return{type:"INPUT_FOCUS",text:e}},u=function(e){return{type:"INPUT_BLUR",text:e}},l=function(e){var t=e.dispatch;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({type:"ADD_STEP"})}},a.a.createElement("button",{type:"submit",className:"btn btn-outline-success btn-sm mt-1"},"Add Step")))},b=l=Object(s.b)()(l),f=function(e){var t=e.error,n=e.input;return t.hasOwnProperty("location")?a.a.createElement("div",{className:"invalid-feedback pr-1 pl-1"},a.a.createElement("b",null,n.substring(0,t.location.start.offset),a.a.createElement("mark",{className:"text-danger"},n.substring(t.location.start.offset,t.location.end.offset)),n.substring(t.location.end.offset,n.length)),a.a.createElement("br",null),t.name+": "+t.message):t?a.a.createElement("div",{className:"invalid-feedback pr-1 pl-1"},t.name+": "+t.message):null},p=function(e){var t=e.reference,n=e.index,r=e.number,o=e.onReference,c=e.onFocus,s=e.onBlur;return a.a.createElement("div",{className:"form-group col-2 mb-2"},a.a.createElement("label",{className:"mb-1 fs-sm",htmlFor:"reference"+r+"-"+n},"Premise ",r),a.a.createElement("input",{type:"text",className:"form-control form-control-sm ".concat(t.error?"is-invalid":""),id:"reference"+r+"-"+n,onChange:function(e){return o(e.target.value)},onBlur:function(e){return s(e.target.value)},onFocus:function(e){return c(e.target.value)},value:t.input}),a.a.createElement(f,{error:t.error}))},m=function(e){var t=e.unifier,n=e.index,r=e.onUnifier,o=e.onFocus,c=e.onBlur;return a.a.createElement("div",{className:"form-group col mb-2"},a.a.createElement("label",{className:"mb-1 fs-sm",htmlFor:"unifier-"+n},"Unifier"),a.a.createElement("input",{type:"text",className:"form-control form-control-sm ".concat(t.error?"is-invalid":""),id:"unifier-"+n,onChange:function(e){return r(e.target.value)},onBlur:function(e){return c(e.target.value)},onFocus:function(e){return o(e.target.value)},value:t.input}),a.a.createElement(f,{error:t.error,input:t.input}))},j=function(e){var t=e.renaming,n=e.index,r=e.onRenaming,o=e.onFocus,c=e.onBlur;return a.a.createElement("div",{className:"form-group col mb-2"},a.a.createElement("label",{className:"mb-1 fs-sm",htmlFor:"renaming-"+n},"Renaming"),a.a.createElement("input",{type:"text",className:"form-control form-control-sm ".concat(t.error?"is-invalid":""),id:"renaming-"+n,onChange:function(e){return r(e.target.value)},onBlur:function(e){return c(e.target.value)},onFocus:function(e){return o(e.target.value)},value:t.input}),a.a.createElement(f,{error:t.error,input:t.input}))},d=function(e){var t=e.reference1,n=e.reference2,r=e.renaming,o=e.unifier,c=e.index,s=e.onReference1,i=e.onReference2,u=e.onRenaming,l=e.onUnifier,b=e.onFocus,f=e.onBlur;return a.a.createElement("div",{className:"form-row"},a.a.createElement(p,{reference:t,index:c,number:1,onReference:s,onFocus:b,onBlur:f}),a.a.createElement(j,{renaming:r,index:c,onRenaming:u,onFocus:b,onBlur:f}),a.a.createElement(p,{reference:n,index:c,number:2,onReference:i,onFocus:b,onBlur:f}),a.a.createElement(m,{unifier:o,index:c,onUnifier:l,onFocus:b,onBlur:f}))},v=function(e){var t=e.reference,n=e.unifier,r=e.index,o=e.onReference,c=e.onUnifier,s=e.onFocus,i=e.onBlur;return a.a.createElement("div",{className:"form-row"},a.a.createElement(p,{reference:t,index:r,number:1,onReference:o,onFocus:s,onBlur:i}),a.a.createElement(m,{unifier:n,index:r,onUnifier:c,onFocus:s,onBlur:i}))},g=function(e){var t=e.index,n=e.step,r=e.onChange,o=e.onDelete,c=e.onInsert,s=e.onUp,i=e.onDown,u=e.onRule,l=e.onRenaming,b=e.onUnifier,p=e.onReference1,m=e.onReference2,j=e.onBlur,g=e.onFocus;return a.a.createElement("div",{className:"step"},a.a.createElement("div",{className:"input-group mb-2 input-group-sm"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text"},t)),a.a.createElement("input",{type:"text",name:"item",className:"form-control \n        ".concat(n.formula.error?"is-invalid":"","\n        ").concat(n.valid?"is-valid":""),onChange:function(e){return r(e.target.value)},onBlur:function(e){return j(e.target.value)},onFocus:function(e){return g(e.target.value)},value:n.formula.input}),a.a.createElement("div",{className:"input-group-append input-group-sm"},a.a.createElement("select",{className:"form-control",onChange:function(e){return u(e.target.value)},value:n.rule},a.a.createElement("option",null,"Assumption"),a.a.createElement("option",null,"Resolution"),a.a.createElement("option",null,"Factoring")),a.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm",onClick:c}," + "),a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-sm",onClick:s,disabled:null===s}," \u2191 "),a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-sm",onClick:i,disabled:null===i}," \u2193 "),a.a.createElement("button",{className:"btn btn-outline-danger",type:"button",onClick:o},"X")),a.a.createElement(f,{error:n.formula.error,input:n.formula.input})),{Resolution:a.a.createElement(d,{reference1:n.reference1,reference2:n.reference2,renaming:n.renaming,unifier:n.unifier,index:t,onReference1:p,onReference2:m,onRenaming:l,onUnifier:b,onFocus:g,onBlur:j}),Factoring:a.a.createElement(v,{reference:n.reference2,unifier:n.unifier,index:t,onReference:m,onUnifier:b,onFocus:g,onBlur:j})}[n.rule])},O=function(e){var t=e.steps,n=e.onStepDelete,r=e.onStepChange,o=e.onStepInsert,c=e.onStepUp,s=e.onStepDown,i=e.onRuleChange,u=e.onRenaming,l=e.onUnifier,b=e.onReference1,f=e.onReference2,p=e.inputFocus,m=e.inputBlur;return a.a.createElement("div",{className:"mt-2"},a.a.createElement("h2",{className:"mb-0"},"Proof"),t.order.map((function(e,j){return a.a.createElement(g,{key:e,step:t.allSteps.get(e),index:j+1,state:t,onChange:function(t){return r(e,t)},onRule:function(t){return i(e,t)},onRenaming:function(t){return u(e,t)},onUnifier:function(t){return l(e,t)},onReference1:function(t){return b(e,t)},onReference2:function(t){return f(e,t)},onDelete:function(){return n(e)},onInsert:function(){return o(j)},onUp:0===j?null:function(){return c(j)},onDown:j===t.order.length-1?null:function(){return s(j)},onFocus:function(e){return p(e)},onBlur:function(e){return m(e)}})})))},E={onStepDelete:function(e){return{type:"DELETE_STEP",id:e}},onStepChange:function(e,t){return{type:"CHANGE_STEP",id:e,text:t}},onRuleChange:function(e,t){return{type:"CHANGE_RULE",id:e,text:t}},onRenaming:function(e,t){return{type:"CHANGE_RENAMING",id:e,text:t}},onUnifier:function(e,t){return{type:"CHANGE_UNIFIER",id:e,text:t}},onReference1:function(e,t){return{type:"CHANGE_REFERENCE1",id:e,text:t}},onReference2:function(e,t){return{type:"CHANGE_REFERENCE2",id:e,text:t}},onStepInsert:function(e){return{type:"INSERT_STEP",position:e}},onStepUp:function(e){return{type:"STEP_UP",position:e}},onStepDown:function(e){return{type:"STEP_DOWN",position:e}},inputFocus:i,inputBlur:u},h=Object(s.b)((function(e){return{steps:e.present.steps}}),E)(O),y=function(e){var t=e.language,n=e.onConstChange,r=e.onFunChange,o=e.onPredChange,c=e.onFocus,s=e.onBlur;return a.a.createElement("div",{className:"mt-2"},a.a.createElement("h2",null,"Language"),a.a.createElement("div",{className:"input-group mb-2 input-group-sm"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Constants")),a.a.createElement("input",{type:"text",className:"form-control ".concat(t.consts.error?"is-invalid":""),name:"constants",onChange:function(e){return n(e.target.value)},onBlur:function(e){return s(e.target.value)},onFocus:function(e){return c(e.target.value)},value:t.consts.input}),a.a.createElement(f,{error:t.consts.error,input:t.consts.input})),a.a.createElement("div",{className:"input-group mb-2 input-group-sm"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Functions")),a.a.createElement("input",{type:"text",className:"form-control ".concat(t.funs.error?"is-invalid":""),name:"functions",onChange:function(e){return r(e.target.value)},onBlur:function(e){return s(e.target.value)},onFocus:function(e){return c(e.target.value)},value:t.funs.input}),a.a.createElement(f,{error:t.funs.error,input:t.funs.input})),a.a.createElement("div",{className:"input-group mb-2 input-group-sm"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Predicates")),a.a.createElement("input",{type:"text",className:"form-control ".concat(t.preds.error?"is-invalid":""),name:"predicates",onChange:function(e){return o(e.target.value)},onBlur:function(e){return s(e.target.value)},onFocus:function(e){return c(e.target.value)},value:t.preds.input}),a.a.createElement(f,{error:t.preds.error,input:t.preds.input})))},N={onConstChange:function(e){return{type:"CHANGE_CONST",text:e}},onFunChange:function(e){return{type:"CHANGE_FUN",text:e}},onPredChange:function(e){return{type:"CHANGE_PRED",text:e}},onFocus:i,onBlur:u},S=Object(s.b)((function(e){return{language:e.present.language}}),N)(y),C=n(15),R=n.n(C),w=function(e){var t=e.canUndo,n=e.canRedo,r=e.onUndo,o=e.onRedo;return a.a.createElement("div",{className:"btn-group",role:"group"},a.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:r,disabled:!t},"\u21b6 Undo"),a.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:o,disabled:!n},"Redo \u21b7"))},k={onUndo:C.ActionCreators.undo,onRedo:C.ActionCreators.redo},x=w=Object(s.b)((function(e){return{canUndo:e.past.length>0,canRedo:e.future.length>0}}),k)(w),A=function(e){var t=e.onImport,n=e.onExport;return a.a.createElement("div",{className:"float-right"},a.a.createElement("label",{htmlFor:"fileUpload",className:"btn btn-secondary btn-sm mb-0 mr-1"},"Import"),a.a.createElement("input",{type:"file",id:"fileUpload",className:"btn btn-secondary btn-sm d-none",onChange:function(e){var n=new FileReader;n.onload=(e.target.files[0],function(e){t(e.target.result)}),n.readAsText(e.target.files[0])},onClick:function(e){return e.target.value=""}}),a.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:n},"Export"))},_={onImport:function(e){return{type:"IMPORT_STATE",data:e}},onExport:function(){return{type:"EXPORT_STATE"}}},F=A=Object(s.b)((function(e){return{state:e.present}}),_)(A),U=function(){return a.a.createElement("div",{className:"mt-2 d-inline-block "},a.a.createElement("h4",null,"Help"),a.a.createElement("div",{className:"mb-2"},a.a.createElement("p",{className:"mb-0"},"Language - Declarations of non-logical symbols:"),a.a.createElement("ul",{className:"fs-sm"},a.a.createElement("li",null,"Symbols declarations must be comma-separated"),a.a.createElement("li",null,"A constant declaration is just the constant symbol"),a.a.createElement("li",null,"A function or predicate symbol declaration has the form symbol/arity (e.g. f/1)"))),a.a.createElement("div",null,a.a.createElement("p",{className:"mb-0"},"Proof - Alternative ways of writing logical symbols:"),a.a.createElement("ul",{className:"fs-sm"},a.a.createElement("li",null,"Disjunction: \u2228, ||, |, \\/"),a.a.createElement("li",null,"Negation: \xac, -, !, ~"),a.a.createElement("li",null,"Substitution: \u21a6, ->, \u27fc, |-> or (var, term)"),a.a.createElement("li",null,"Empty clause: \u25a1, \u25ab\ufe0e, \u25fd\ufe0e, \u25fb\ufe0e, \u2b1c\ufe0e, \u25a2, \u22a5, [], _|_"))))},T=function(){return a.a.createElement("div",null,a.a.createElement(x,null),a.a.createElement(F,null),a.a.createElement(S,null),a.a.createElement(h,null),a.a.createElement(b,null),a.a.createElement(U,null))},M=n(0),G=n(8),P=n(6),H=n(7),I=n(12),D=n(2),B=n(3),L=function(){function e(t){Object(D.a)(this,e),this.name=t}return Object(B.a)(e,[{key:"toString",value:function(){return this.name}},{key:"substitute",value:function(e){new Error("Unimplemented")}},{key:"equals",value:function(){new Error("Unimplemented")}}]),e}(),q=n(5),J=n(4),V=function(e){Object(q.a)(n,e);var t=Object(J.a)(n);function n(e){return Object(D.a)(this,n),t.call(this,e)}return Object(B.a)(n,[{key:"equals",value:function(e){return e instanceof n&&this.name===e.name}},{key:"substitute",value:function(e){return new n(this.name)}}]),n}(L),W=function(e){Object(q.a)(n,e);var t=Object(J.a)(n);function n(e){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(D.a)(this,n),(r=t.call(this,e)).subts=a,r}return Object(B.a)(n,[{key:"toString",value:function(){return"".concat(this.name,"(").concat(this.subts.join(", "),")")}},{key:"equals",value:function(e){return e instanceof n&&this.name===e.name&&this.subts.length===e.subts.length&&this.subts.every((function(t,n){return t.equals(e.subts[n])}))}},{key:"substitute",value:function(e){return new n(this.name,this.subts.map((function(t){return t.substitute(e)})))}}]),n}(L),X=function(e){Object(q.a)(n,e);var t=Object(J.a)(n);function n(e){return Object(D.a)(this,n),t.call(this,e)}return Object(B.a)(n,[{key:"equals",value:function(e){return e instanceof n&&this.name===e.name}},{key:"substitute",value:function(e){return e&&e.has(this.name)?e.get(this.name):new n(this.name)}}]),n}(L),Y=function(){function e(t){Object(D.a)(this,e),this.subfs=t}return Object(B.a)(e,[{key:"subfs",value:function(){return this.subfs}},{key:"toString",value:function(){new Error("Unimplemented")}},{key:"equals",value:function(e){new Error("Unimplemented")}},{key:"substitute",value:function(e){new Error("Unimplemented")}}]),e}(),z=n(10),K=n.n(z),Q=function(e){Object(q.a)(n,e);var t=Object(J.a)(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(D.a)(this,n),(e=t.call(this)).lits=r,e.litsMultiset=null,e}return Object(B.a)(n,[{key:"toString",value:function(){return this.lits.map((function(e){return e.toString()})).join(" \u2228 ")}},{key:"equals",value:function(e){if(!(e instanceof n)||this.lits.length!==e.lits.length)return!1;var t,r=Object(P.a)(this.getLitsMultiset());try{for(r.s();!(t=r.n()).done;){var a=t.value;if(!e.has(a[0]))return!1;if(e.get(a[0])!==a[1])return!1}}catch(o){r.e(o)}finally{r.f()}return!0}},{key:"substitute",value:function(e){return new n(this.lits.map((function(t){return t.substitute(e)})))}},{key:"getLitsMultiset",value:function(){if(null!=this.litsMultiset)return this.litsMultiset;this.litsMultiset=[];var e,t=!1,n=Object(P.a)(this.lits);try{for(n.s();!(e=n.n()).done;){var r=e.value;t=!1;var a,o=Object(P.a)(this.litsMultiset);try{for(o.s();!(a=o.n()).done;){var c=a.value;if(c[0].equals(r)){c[1]++,t=!0;break}}}catch(s){o.e(s)}finally{o.f()}t||this.litsMultiset.push([r,1])}}catch(s){n.e(s)}finally{n.f()}return this.litsMultiset}},{key:"has",value:function(e){var t,n=Object(P.a)(this.getLitsMultiset());try{for(n.s();!(t=n.n()).done;){if(t.value[0].equals(e))return!0}}catch(r){n.e(r)}finally{n.f()}return!1}},{key:"get",value:function(e){var t,n=Object(P.a)(this.getLitsMultiset());try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r[0].equals(e))return r[1]}}catch(a){n.e(a)}finally{n.f()}}},{key:"getResolvents",value:K.a.mark((function e(t,r,a){var o,c,s,i,u;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=this.substitute(r).substitute(a).getLitsMultiset(),c=t.substitute(a).getLitsMultiset(),s=Object(P.a)(o),e.prev=3,u=K.a.mark((function e(){var t,r,a,s,u,l;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(G.a)(i.value,2),r=t[0],t[1],a=r.negation(),s=Object(P.a)(c),e.prev=3,l=K.a.mark((function e(){var t,s;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(G.a)(u.value,2),s=t[0],t[1],!a.equals(s)){e.next=5;break}return e.next=4,new n(o.flatMap((function(e){var t=Object(G.a)(e,2),n=t[0],a=t[1];return new Array(r===n?a-1:a).fill(n)})).concat(c.flatMap((function(e){var t=Object(G.a)(e,2),n=t[0],r=t[1];return new Array(s===n?r-1:r).fill(n)}))));case 4:return e.abrupt("return","break");case 5:case"end":return e.stop()}}),e)})),s.s();case 6:if((u=s.n()).done){e.next=13;break}return e.delegateYield(l(),"t0",8);case 8:if("break"!==e.t0){e.next=11;break}return e.abrupt("break",13);case 11:e.next=6;break;case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(3),s.e(e.t1);case 18:return e.prev=18,s.f(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[3,15,18,21]])})),s.s();case 6:if((i=s.n()).done){e.next=10;break}return e.delegateYield(u(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),s.e(e.t1);case 15:return e.prev=15,s.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[3,12,15,18]])}))},{key:"isResolventOf",value:function(e,t,n,r){var a,o=Object(P.a)(e.getResolvents(t,n,r));try{for(o.s();!(a=o.n()).done;){var c=a.value;if(this.equals(c))return!0}}catch(s){o.e(s)}finally{o.f()}return!1}},{key:"getFactors",value:K.a.mark((function e(t){var r,a,o,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=this.substitute(t).getLitsMultiset(),a=Object(P.a)(r),e.prev=2,c=K.a.mark((function e(){var t,a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(G.a)(o.value,2),a=t[0],!(t[1]>=2)){e.next=4;break}return e.next=4,new n(r.flatMap((function(e){var t=Object(G.a)(e,2),n=t[0],r=t[1];return new Array(n===a?r-1:r).fill(n)})));case 4:case"end":return e.stop()}}),e)})),a.s();case 5:if((o=a.n()).done){e.next=9;break}return e.delegateYield(c(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e.catch(2),a.e(e.t1);case 14:return e.prev=14,a.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[2,11,14,17]])}))},{key:"isFactorOf",value:function(e,t){var n,r=Object(P.a)(e.getFactors(t));try{for(r.s();!(n=r.n()).done;){var a=n.value;if(this.equals(a))return!0}}catch(o){r.e(o)}finally{r.f()}return!1}}]),n}(Y),Z=function(e){Object(q.a)(n,e);var t=Object(J.a)(n);function n(e,r){var a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Object(D.a)(this,n),(a=t.call(this)).neg=e,a.name=r,a.terms=o,a}return Object(B.a)(n,[{key:"toString",value:function(){var e="";return this.neg&&(e+="\xac"),e+this.name+"("+this.terms.map((function(e){return e.toString()})).join(", ")+")"}},{key:"equals",value:function(e){return e instanceof n&&this.neg===e.neg&&this.name===e.name&&this.terms.length===e.terms.length&&this.terms.every((function(t,n){return t.equals(e.terms[n])}))}},{key:"negation",value:function(){return new n(!this.neg,this.name,this.terms)}},{key:"substitute",value:function(e){return new n(this.neg,this.name,this.terms.map((function(t){return t.substitute(e)})))}}]),n}(Y),$=function(e,t){switch(t.type){case"CHANGE_STEP":return Object(M.a)(Object(M.a)({},e),{},{formula:Object(M.a)(Object(M.a)({},e.formula),{},{input:t.text})});case"CHANGE_RULE":return Object(M.a)(Object(M.a)({},e),{},{rule:t.text});case"CHANGE_RENAMING":return Object(M.a)(Object(M.a)({},e),{},{renaming:Object(M.a)(Object(M.a)({},e.renaming),{},{input:t.text})});case"CHANGE_UNIFIER":return Object(M.a)(Object(M.a)({},e),{},{unifier:Object(M.a)(Object(M.a)({},e.unifier),{},{input:t.text})});case"CHANGE_REFERENCE1":return Object(M.a)(Object(M.a)({},e),{},{reference1:Object(M.a)(Object(M.a)({},e.reference1),{},{input:t.text})});case"CHANGE_REFERENCE2":return Object(M.a)(Object(M.a)({},e),{},{reference2:Object(M.a)(Object(M.a)({},e.reference2),{},{input:t.text})});default:return e}};function ee(e,t,n){return e.error="",""!==e.input?n.rank.get(t)<parseInt(e.input)||parseInt(e.input)<1?e.error={name:"IndexError",message:"Index out of range."}:isNaN(parseInt(e.input))?e.error={name:"SyntaxError",message:'Expected number but "'+e.input+'" found.'}:(e.object=parseInt(e.input)-1,e.error=""):e.error={name:"EmptyError",message:"This field cannot be empty"},[!e.error,e]}function te(e){for(var t=0;t<e.length;t++)for(var n=t+1;n<e.length;n++)if(e[t][0]===e[n][0])return{name:"DuplicityError",message:'Symbol "'+e[t][0]+'" is already being substituted'};return""}function ne(e){function t(e,t,n,r){var a=r.expected,o=n.get(e);t.length!==o&&a("".concat(o," argument").concat(1==o?"":"s"," to ").concat(e))}return{variable:function(e,t){return new X(e)},constant:function(e,t){return new V(e)},functionApplication:function(n,r,a){return t(n,r,e.funs.object,a),new W(n,r)},literal:function(n,r,a,o){return t(r,a,e.preds.object,o),new Z(n,r,a)},clause:function(e,t){return new Q(e)}}}function re(e){var t=new Set([].concat(Object(H.a)(e.consts.object),Object(H.a)(e.funs.object.keys()),Object(H.a)(e.preds.object.keys())));return{isConstant:function(t){return e.consts.object.has(t)},isFunction:function(t){return e.funs.object.has(t)},isPredicate:function(t){return e.preds.object.has(t)},isVariable:function(e){return!t.has(e)}}}var ae={formula:{input:"",object:void 0,error:""},rule:"Assumption",reference1:{input:"",object:void 0,error:""},renaming:{input:"",object:void 0,error:""},reference2:{input:"",object:void 0,error:""},unifier:{input:"",object:void 0,error:""},valid:!1};function oe(e,t){return e.object>=t&&(e={object:e.object+1,input:e.object+2+"",error:""}),e}function ce(e,t){return e.object>t?e={object:e.object-1,input:e.object+"",error:""}:e.object===t&&(e={object:void 0,input:"",error:""}),e}function se(e,t,n){return e.object===t?e={object:n,input:n+1+"",error:""}:e.object===n&&(e={object:t,input:t+1+"",error:""}),e}function ie(e,t,n,r){var a=ee(Object(M.a)({},e.reference1),t,n),o=ee(Object(M.a)({},e.reference2),t,n),c=function(e,t){e.error="";try{if(""!==e.input){var n=Object(I.parseSubstitution)(e.input,re(t),ne(t));e.object=new Map(n);var r,a=Object(P.a)(e.object);try{for(a.s();!(r=a.n()).done;){var o=Object(G.a)(r.value,2),c=o[0],s=o[1];s instanceof X||(e.error={name:"TypeError",message:'"'+c+'" is renamed to "'+s+'", which is not a variable'})}}catch(i){a.e(i)}finally{a.f()}e.error||(e.error=te(n))}else e.object=void 0}catch(u){e.error=u}return[!e.error,e]}(Object(M.a)({},e.renaming),r),s=function(e,t){e.error="";try{if(""!==e.input){var n=Object(I.parseSubstitution)(e.input,re(t),ne(t));e.object=new Map(n),e.error=te(n)}else e.object=void 0}catch(r){e.error=r}return[!e.error,e]}(Object(M.a)({},e.unifier),r),i=function(e,t){e.error="";try{e.object=Object(I.parseClause)(e.input,re(t),ne(t))}catch(n){e.error=n}return[!e.error,e]}(Object(M.a)({},e.formula),r),u=Object(M.a)(Object(M.a)({},e),{},{reference1:a[1],reference2:o[1],renaming:c[1],unifier:s[1],formula:i[1]});switch(e.rule){case"Factoring":if(!o[0])return Object(M.a)(Object(M.a)({},u),{},{valid:!1});var l=ue(o[1].object,n);return l&&i[0]?u.formula.object.isFactorOf(l.formula.object,u.unifier.object)?Object(M.a)(Object(M.a)({},u),{},{valid:!0,formula:Object(M.a)(Object(M.a)({},u.formula),{},{error:""})}):Object(M.a)(Object(M.a)({},u),{},{valid:!1,formula:Object(M.a)(Object(M.a)({},u.formula),{},{error:{name:"LogicError",message:"This clause is not valid factor of clause "+u.reference2.input}})}):Object(M.a)(Object(M.a)({},u),{},{valid:!1});case"Resolution":if(!o[0]||!a[0])return Object(M.a)(Object(M.a)({},u),{},{valid:!1});var b=ue(a[1].object,n),f=ue(o[1].object,n);return b&&f&&i[0]?u.formula.object.isResolventOf(b.formula.object,f.formula.object,u.renaming.object,u.unifier.object)?Object(M.a)(Object(M.a)({},u),{},{valid:!0,formula:Object(M.a)(Object(M.a)({},u.formula),{},{error:""})}):Object(M.a)(Object(M.a)({},u),{},{valid:!1,formula:Object(M.a)(Object(M.a)({},u.formula),{},{error:{name:"LogicError",message:"This clause is not valid resolvent of clauses "+u.reference1.input+" and "+u.reference2.input}})}):Object(M.a)(Object(M.a)({},u),{},{valid:!1});case"Assumption":return i[0]?Object(M.a)(Object(M.a)({},u),{},{valid:!0}):Object(M.a)(Object(M.a)({},u),{},{valid:!1});default:return Object(M.a)({},u)}}function ue(e,t){var n=t.allSteps.get(t.order[parseInt(e)]);return n.valid?n:null}var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{order:[],allSteps:new Map,rank:new Map,id:0},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:void 0},n=arguments.length>2?arguments[2]:void 0;switch(t.type){case"ADD_STEP":return Object.assign({},e,{order:[].concat(Object(H.a)(e.order),[e.id]),allSteps:new Map([].concat(Object(H.a)(e.allSteps),[[e.id,ae]])),rank:new Map([].concat(Object(H.a)(e.rank),[[e.id,e.order.length]])),id:e.id+1});case"CHANGE_RULE":case"CHANGE_RENAMING":case"CHANGE_UNIFIER":case"CHANGE_REFERENCE1":case"CHANGE_REFERENCE2":case"CHANGE_STEP":for(var r=new Map(e.allSteps),a=e.rank.get(t.id),o=new Set,c=a;c<e.order.length;c++){var s=e.order[c],i=r.get(s);c===a?(o.add(c),r.set(s,ie($(i,t),s,e,n))):("Factoring"===i.rule&&o.has(i.reference2.object)||"Resolution"===i.rule&&(o.has(i.reference2.object)||o.has(i.reference1.object)))&&(o.add(c),r.set(s,ie(r.get(s),s,Object(M.a)(Object(M.a)({},e),{},{allSteps:r}),n)))}return Object(M.a)(Object(M.a)({},e),{},{allSteps:r});case"DELETE_STEP":var u=e.rank.get(t.id),l=new Map(Object(H.a)(e.allSteps));l.delete(t.id);var b=Object(H.a)(e.order.filter((function(e){return e!==t.id}))),f=e.rank.get(t.id),p=new Map(Object(H.a)(e.rank));p.delete(t.id);var m,j=Object(P.a)(p.entries());try{for(j.s();!(m=j.n()).done;){var d=Object(G.a)(m.value,2),v=d[0],g=d[1];g>u&&p.set(v,g-1)}}catch(he){j.e(he)}finally{j.f()}for(var O=f+1;O<e.order.length;O++){var E=e.order[O],h=l.get(E);l.set(E,Object(M.a)(Object(M.a)({},h),{},{reference1:ce(Object(M.a)({},h.reference1),f),reference2:ce(Object(M.a)({},h.reference2),f)}))}for(var y=Object(M.a)(Object(M.a)({},e),{},{rank:p,order:b,allSteps:l}),N=f;N<y.order.length;N++){var S=y.order[N];l.set(S,ie(l.get(S),S,Object(M.a)(Object(M.a)({},y),{},{newSteps:l}),n))}return Object(M.a)(Object(M.a)({},y),{},{allSteps:l});case"INSERT_STEP":var C,R=new Map(Object(H.a)(e.rank)),w=Object(P.a)(R.entries());try{for(w.s();!(C=w.n()).done;){var k=Object(G.a)(C.value,2),x=k[0],A=k[1];A>=t.position&&R.set(x,A+1)}}catch(he){w.e(he)}finally{w.f()}R.set(e.id,t.position);for(var _=[].concat(Object(H.a)(e.order.slice(0,t.position)),[e.id],Object(H.a)(e.order.slice(t.position))),F=new Map([].concat(Object(H.a)(e.allSteps),[[e.id,ae]])),U=t.position+1;U<e.order.length;U++){var T=e.order[U],I=F.get(T);F.set(T,Object(M.a)(Object(M.a)({},I),{},{reference1:oe(Object(M.a)({},I.reference1),t.position),reference2:oe(Object(M.a)({},I.reference2),t.position)}))}for(var D=Object(M.a)(Object(M.a)({},e),{},{rank:R,order:_,allSteps:F,id:e.id+1}),B=t.position+1;B<D.order.length;B++){var L=D.order[B];F.set(L,ie(F.get(L),L,Object(M.a)(Object(M.a)({},D),{},{newSteps:F}),n))}return Object(M.a)(Object(M.a)({},D),{},{allSteps:F});case"STEP_UP":var q=new Map(Object(H.a)(e.rank));q.set(e.order[t.position],t.position-1),q.set(e.order[t.position-1],t.position);for(var J=[].concat(Object(H.a)(e.order.slice(0,t.position-1)),[e.order[t.position],e.order[t.position-1]],Object(H.a)(e.order.slice(t.position+1))),V=new Map(Object(H.a)(e.allSteps)),W=t.position-1;W<e.order.length;W++){var X=e.order[W],Y=V.get(X);V.set(X,Object(M.a)(Object(M.a)({},Y),{},{reference1:se(Object(M.a)({},Y.reference1),t.position,t.position-1),reference2:se(Object(M.a)({},Y.reference2),t.position,t.position-1)}))}for(var z=Object(M.a)(Object(M.a)({},e),{},{rank:q,order:J,allSteps:V}),K=new Set,Q=t.position-1;Q<z.order.length;Q++){var Z=z.order[Q],ee=V.get(Z);(Q===t.position-1||Q===t.position||"Factoring"===ee.rule&&K.has(ee.reference2.object)||"Resolution"===ee.rule&&(K.has(ee.reference2.object)||K.has(ee.reference1.object)))&&(K.add(Q),V.set(Z,ie(V.get(Z),Z,Object(M.a)(Object(M.a)({},z),{},{newSteps:V}),n)))}return Object(M.a)(Object(M.a)({},z),{},{allSteps:V});case"STEP_DOWN":var te=new Map(Object(H.a)(e.rank));te.set(e.order[t.position],t.position+1),te.set(e.order[t.position+1],t.position);for(var ne=[].concat(Object(H.a)(e.order.slice(0,t.position)),[e.order[t.position+1],e.order[t.position]],Object(H.a)(e.order.slice(t.position+2))),re=new Map(Object(H.a)(e.allSteps)),ue=t.position;ue<e.order.length;ue++){var le=e.order[ue],be=re.get(le);re.set(le,Object(M.a)(Object(M.a)({},be),{},{reference1:se(Object(M.a)({},be.reference1),t.position,t.position+1),reference2:se(Object(M.a)({},be.reference2),t.position,t.position+1)}))}for(var fe=Object(M.a)(Object(M.a)({},e),{},{rank:te,order:ne,allSteps:re}),pe=new Set,me=t.position;me<fe.order.length;me++){var je=fe.order[me],de=re.get(je);(me===t.position||me===t.position+1||"Factoring"===de.rule&&pe.has(de.reference2.object)||"Resolution"===de.rule&&(pe.has(de.reference2.object)||pe.has(de.reference1.object)))&&(pe.add(me),re.set(je,ie(re.get(je),je,Object(M.a)(Object(M.a)({},fe),{},{newSteps:re}),n)))}return Object(M.a)(Object(M.a)({},fe),{},{allSteps:re});case"CHANGE_CONST":case"CHANGE_FUN":case"CHANGE_PRED":case"IMPORT_STATE":var ve,ge=new Map(e.allSteps),Oe=Object(P.a)(e.order);try{for(Oe.s();!(ve=Oe.n()).done;){var Ee=ve.value;ge.set(Ee,ie($(ge.get(Ee),t),Ee,Object(M.a)(Object(M.a)({},e),{},{allSteps:ge}),n))}}catch(he){Oe.e(he)}finally{Oe.f()}return Object(M.a)(Object(M.a)({},e),{},{allSteps:ge});default:return e}};function be(e){return""===e.error&&""!==e.input}function fe(e){if(!be(e)&&"DuplicityError"!==e.error.name)return e;for(var t=0;t<e.symbols.length;t++)for(var n=t+1;n<e.symbols.length;n++)if(e.symbols[t]===e.symbols[n])return Object(M.a)(Object(M.a)({},e),{},{error:{name:"DuplicityError",message:'Symbol "'+e.symbols[t]+'" is already a constant'}});return Object(M.a)(Object(M.a)({},e),{},{error:""})}function pe(e,t){if(!be(e)&&"DuplicityError"!==e.error.name)return e;for(var n=0;n<e.symbols.length;n++)for(var r=n+1;r<e.symbols.length;r++)if(e.symbols[n].name===e.symbols[r].name)return Object(M.a)(Object(M.a)({},e),{},{error:{name:"DuplicityError",message:'Symbol "'+e.symbols[n].name+'" is already a function'}});if(be(t)){var a,o=Object(P.a)(e.object);try{for(o.s();!(a=o.n()).done;){var c,s=Object(G.a)(a.value,2),i=s[0],u=(s[1],Object(P.a)(t.object));try{for(u.s();!(c=u.n()).done;){if(i===c.value)return Object(M.a)(Object(M.a)({},e),{},{error:{name:"DuplicityError",message:'Symbol "'+i+'" is already a constant'}})}}catch(l){u.e(l)}finally{u.f()}}}catch(l){o.e(l)}finally{o.f()}}return Object(M.a)(Object(M.a)({},e),{},{error:""})}function me(e,t,n){if(!be(e)&&"DuplicityError"!==e.error.name)return e;for(var r=0;r<e.symbols.length;r++)for(var a=r+1;a<e.symbols.length;a++)if(e.symbols[r].name===e.symbols[a].name)return Object(M.a)(Object(M.a)({},e),{},{error:{name:"DuplicityError",message:'Symbol "'+e.symbols[r].name+'" is already a predicate'}});if(be(t)){var o,c=Object(P.a)(t.object);try{for(c.s();!(o=c.n()).done;){var s,i=Object(G.a)(o.value,2),u=i[0],l=(i[1],Object(P.a)(e.object));try{for(l.s();!(s=l.n()).done;){var b=Object(G.a)(s.value,2),f=b[0];b[1];if(u===f)return Object(M.a)(Object(M.a)({},e),{},{error:{name:"DuplicityError",message:'Symbol "'+u+'" is already a function'}})}}catch(E){l.e(E)}finally{l.f()}}}catch(E){c.e(E)}finally{c.f()}}if(be(n)){var p,m=Object(P.a)(n.object);try{for(m.s();!(p=m.n()).done;){var j,d=p.value,v=Object(P.a)(e.object);try{for(v.s();!(j=v.n()).done;){var g=Object(G.a)(j.value,2),O=g[0];g[1];if(d===O)return Object(M.a)(Object(M.a)({},e),{},{error:{name:"DuplicityError",message:'Symbol "'+d+'" is already a constant'}})}}catch(E){v.e(E)}finally{v.f()}}}catch(E){m.e(E)}finally{m.f()}}return Object(M.a)(Object(M.a)({},e),{},{error:""})}var je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{consts:{input:"",object:new Set,error:"",symbols:[]},funs:{input:"",object:new Map,error:"",symbols:[]},preds:{input:"",object:new Map,error:"",symbols:[]}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:void 0};switch(t.type){case"CHANGE_CONST":var n=Object(M.a)(Object(M.a)({},e.consts),{},{input:t.text,error:""});try{""!==t.text?(n.symbols=Object(I.parseConstants)(t.text),n.object=new Set(n.symbols)):(n.symbols=[],n.object=new Set)}catch(o){n.error=o}return Object(M.a)(Object(M.a)({},e),{},{consts:fe(n),funs:pe(e.funs,n),preds:me(e.preds,e.funs,n)});case"CHANGE_FUN":var r=Object(M.a)(Object(M.a)({},e.funs),{},{input:t.text,error:""});try{""!==t.text?(r.symbols=Object(I.parseFunctions)(t.text),r.object=new Map(r.symbols.map((function(e){return[e.name,e.arity]})))):(r.symbols=[],r.object=new Map)}catch(o){r.error=o}return Object(M.a)(Object(M.a)({},e),{},{funs:pe(r,e.consts),preds:me(e.preds,r,e.consts)});case"CHANGE_PRED":var a=Object(M.a)(Object(M.a)({},e.preds),{},{input:t.text,error:""});try{a.symbols=Object(I.parsePredicates)(t.text),a.object=new Map(a.symbols.map((function(e){return[e.name,e.arity]})))}catch(o){a.error=o}return Object(M.a)(Object(M.a)({},e),{},{preds:me(a,e.funs,e.consts)});default:return e}},de={language:je(),steps:le(),inputChange:{originValue:""}};var ve=R()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CONST":case"CHANGE_FUN":case"CHANGE_PRED":var n=je(e.language,t),r=le(e.steps,t,n);return Object(M.a)(Object(M.a)({},e),{},{language:n,steps:r});case"INPUT_FOCUS":return Object(M.a)(Object(M.a)({},e),{},{inputChange:{originValue:t.text}});case"ADD_STEP":case"CHANGE_STEP":case"DELETE_STEP":case"INSERT_STEP":case"STEP_UP":case"STEP_DOWN":case"CHANGE_RULE":case"CHANGE_REFERENCE1":case"CHANGE_REFERENCE2":case"CHANGE_RENAMING":case"CHANGE_UNIFIER":var a=le(e.steps,t,e.language);return Object(M.a)(Object(M.a)({},e),{},{language:e.language,steps:a});case"EXPORT_STATE":var o=document.createElement("a");o.setAttribute("download","resolutionProof");var c=Object(M.a)(Object(M.a)({},e),{},{language:Object(M.a)(Object(M.a)({},e.language),{},{consts:Object(M.a)(Object(M.a)({},e.language.consts),{},{object:Array.from(e.language.consts.object)}),funs:Object(M.a)(Object(M.a)({},e.language.funs),{},{object:Array.from(e.language.funs.object.entries())}),preds:Object(M.a)(Object(M.a)({},e.language.preds),{},{object:Array.from(e.language.preds.object.entries())})}),steps:Object(M.a)(Object(M.a)({},e.steps),{},{allSteps:Array.from(e.steps.allSteps.entries()),rank:Array.from(e.steps.rank.entries())})}),s=new Blob([JSON.stringify(c)],{type:"application/json"}),i=window.URL.createObjectURL(s);return o.href=i,o.click(),e;case"IMPORT_STATE":var u=JSON.parse(t.data);return u.steps.allSteps=new Map(u.steps.allSteps),u.steps.rank=new Map(u.steps.rank),u.language.consts.object=new Set(u.language.consts.object),u.language.funs.object=new Map(u.language.funs.object),u.language.preds.object=new Map(u.language.preds.object),u.steps=le(u.steps,t,u.language),u;default:return e}}),{filter:function(e,t,n){switch(e.type){case"CHANGE_STEP":case"CHANGE_CONST":case"CHANGE_FUN":case"CHANGE_PRED":case"CHANGE_REFERENCE1":case"CHANGE_REFERENCE2":case"CHANGE_RENAMING":case"CHANGE_UNIFIER":case"INPUT_FOCUS":return!1;case"INPUT_BLUR":return e.text!==t.inputChange.originValue;default:return!0}}}),ge=Object(c.b)(ve);Object(o.render)(a.a.createElement(s.a,{store:ge},a.a.createElement(T,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c97a2d49.chunk.js.map