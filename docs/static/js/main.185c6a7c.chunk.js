(this.webpackJsonpcpu4youu=this.webpackJsonpcpu4youu||[]).push([[0],{197:function(e,t,n){},198:function(e,t,n){},220:function(e,t){},221:function(e,t){},234:function(e,t){},312:function(e,t){},313:function(e,t){},317:function(e,t){},319:function(e,t){},329:function(e,t){},331:function(e,t){},358:function(e,t){},360:function(e,t){},365:function(e,t){},367:function(e,t){},374:function(e,t){},386:function(e,t){},389:function(e,t){},402:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n.n(a),r=n(104),s=n.n(r),o=(n(197),n(198),n(2)),i=n(8),l=n(17),u=n(39),p=n(7),h=n.n(p),d=n(10),j=n(52),x=n(105),b=n(4),m=new j.JsonRpc("https://api.waxsweden.org",{fetch:fetch}),f=n(238),g=(f.TextDecoder,f.TextEncoder,function(){function e(){Object(o.a)(this,e),this.name="tempname",this.wax=null;var t=new x.WaxJS({rpcEndpoint:"https://wax.greymass.com",tryAutoLogin:!1});t.rpc=new j.JsonRpc("https://wax.greymass.com",{fetch:fetch}),this.wax=t}return Object(i.a)(e,[{key:"checkLogin",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.wax.isAutoLoginAvailable();case 2:if(t=e.sent,console.log("check wax autoLogin",t),!t){e.next=10;break}return console.log("wcw auto logined"),this.name=this.wax.user.account,e.abrupt("return",{chainId:"1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",name:this.wax.user.account,authorization:{actor:this.wax.user.account,permission:"active"}});case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.wax.login();case 2:return e.sent,console.log("this.wax.user.account",this.wax.user.account),this.name=this.wax.user.account,e.abrupt("return",{chainId:"1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",name:this.wax.user.account,authorization:{actor:this.wax.user.account,permission:"active"}});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.wax=new x.WaxJS({rpcEndpoint:"https://wax.greymass.com",tryAutoLogin:!1}),e.abrupt("return",{});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"transact",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,this.wax.api.transact(t,{blocksBehind:3,expireSeconds:1200});case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchTable",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),n=this.wax.rpc.get_table_rows(t),e.abrupt("return",n);case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{});case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),O=new g;function v(){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.login();case 3:if(!(t=e.sent)){e.next=6;break}return e.abrupt("return",t);case 6:return e.abrupt("return",{});case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function y(){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.checkLogin();case 3:if(null==(t=e.sent)){e.next=6;break}return e.abrupt("return",t);case 6:return e.abrupt("return",{});case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function S(e){return T.apply(this,arguments)}function T(){return(T=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return e.next=4,O.transact(t);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(){var e,t=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n,a,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return console.log("wallet:",O),t={},n={},e.prev=5,e.next=8,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 8:n=e.sent,console.log(n),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(5),console.error(e.t0),console.log(JSON.stringify(e.t0)),n.status=400;case 17:return a=!1,e.prev=18,e.next=21,fetch("https://api.wax.greeneosio.com/v2/state/get_account?limit=1&skip=0&account=limitlesswax",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 21:return c=e.sent,e.next=24,c.json();case 24:r=e.sent,console.log(r.account.cpu_limit),parseInt(r.account.cpu_limit.available)>5e3?(console.log("Enough cpu left"),a=!0):(console.log("Not enough cpu"),a=!1),e.next=34;break;case 29:e.prev=29,e.t1=e.catch(18),console.error(e.t1),console.log(JSON.stringify(e.t1)),a=!1;case 34:return a=!1,200!=n.status||0==a?(console.log("Server is down."),t={actions:[{account:"eosio.token",name:"transfer",data:{from:O.name,to:"cpu4",quantity:parseFloat(D).toFixed(8)+" WAX",memo:W+""},authorization:[{actor:O.name,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"eosio.token",name:"transfer",data:{from:O.name,to:"cpu4",quantity:parseFloat(D).toFixed(8)+" WAX",memo:W+""},authorization:[{actor:O.name,permission:"active"}]}]}),e.prev=36,e.next=39,S(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 39:s=e.sent,console.log(s),alert("Transaction ID: "+s.transaction_id),U(3),P(0),L(1),Y(""),e.next=53;break;case 48:e.prev=48,e.t2=e.catch(36),console.error(e.t2),alert(e.t2),console.log(JSON.stringify(e.t2));case 53:case"end":return e.stop()}}),e,null,[[5,12],[18,29],[36,48]])})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n,a,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t={},n={},e.prev=4,e.next=7,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 7:n=e.sent,console.log(n),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),console.log(JSON.stringify(e.t0)),n.status=400;case 16:return a=!1,e.prev=17,e.next=20,fetch("https://api.wax.greeneosio.com/v2/state/get_account?limit=1&skip=0&account=limitlesswax",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 20:return c=e.sent,e.next=23,c.json();case 23:r=e.sent,console.log(r.account.cpu_limit),parseInt(r.account.cpu_limit.available)>5e3?(console.log("Enough cpu left"),a=!0):(console.log("Not enough cpu"),a=!1),e.next=33;break;case 28:e.prev=28,e.t1=e.catch(17),console.error(e.t1),console.log(JSON.stringify(e.t1)),a=!1;case 33:return a=!1,200!=n.status||0==a?(console.log("Server is down."),t={actions:[{account:"eosio.token",name:"transfer",data:{from:O.name,to:"cpu4",quantity:parseFloat(D).toFixed(8)+" WAX",memo:"USER:"+V+","+W},authorization:[{actor:O.name,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"eosio.token",name:"transfer",data:{from:O.name,to:"cpu4",quantity:parseFloat(D).toFixed(8)+" WAX",memo:"USER:"+V+","+W},authorization:[{actor:O.name,permission:"active"}]}]}),e.prev=35,e.next=38,S(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 38:s=e.sent,console.log(s),alert("Transaction ID: "+s.transaction_id),U(3),P(0),L(1),Y(""),e.next=52;break;case 47:e.prev=47,e.t2=e.catch(35),console.error(e.t2),alert(e.t2),console.log(JSON.stringify(e.t2));case 52:case"end":return e.stop()}}),e,null,[[4,11],[17,28],[35,47]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n,a,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t={},n={},e.prev=4,e.next=7,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 7:n=e.sent,console.log(n),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),console.log(JSON.stringify(e.t0)),n.status=400;case 16:return a=!1,e.prev=17,e.next=20,fetch("https://api.wax.greeneosio.com/v2/state/get_account?limit=1&skip=0&account=limitlesswax",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 20:return c=e.sent,e.next=23,c.json();case 23:r=e.sent,console.log(r.account.cpu_limit),parseInt(r.account.cpu_limit.available)>5e3?(console.log("Enough cpu left"),a=!0):(console.log("Not enough cpu"),a=!1),e.next=33;break;case 28:e.prev=28,e.t1=e.catch(17),console.error(e.t1),console.log(JSON.stringify(e.t1)),a=!1;case 33:return 200!=n.status||0==a?(console.log("Server is down."),t={actions:[{account:"free.cpu4",name:"getcpu",data:{username:V},authorization:[{actor:O.name,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:O.name,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"free.cpu4",name:"getcpu",data:{username:V},authorization:[{actor:O.name,permission:"active"}]}]}),e.prev=34,e.next=37,S(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 37:s=e.sent,console.log(s),alert("Transaction ID: "+s.transaction_id),U(3),P(0),L(1),Y(""),e.next=51;break;case 46:e.prev=46,e.t2=e.catch(34),console.error(e.t2),alert(e.t2),console.log(JSON.stringify(e.t2));case 51:case"end":return e.stop()}}),e,null,[[4,11],[17,28],[34,46]])})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n,a,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t={},n={},e.prev=4,e.next=7,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 7:n=e.sent,console.log(n),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),console.log(JSON.stringify(e.t0)),n.status=400;case 16:return a=!1,e.prev=17,e.next=20,fetch("https://api.wax.greeneosio.com/v2/state/get_account?limit=1&skip=0&account=limitlesswax",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 20:return c=e.sent,e.next=23,c.json();case 23:r=e.sent,console.log(r.account.cpu_limit),parseInt(r.account.cpu_limit.available)>5e3?(console.log("Enough cpu left"),a=!0):(console.log("Not enough cpu"),a=!1),e.next=33;break;case 28:e.prev=28,e.t1=e.catch(17),console.error(e.t1),console.log(JSON.stringify(e.t1)),a=!1;case 33:return a=!1,200!=n.status||0==a?(console.log("Server is down."),t={actions:[{account:"eosio.token",name:"transfer",data:{from:O.name,to:"cpu4",quantity:parseFloat(D).toFixed(8)+" WAX",memo:"Deposit"},authorization:[{actor:O.name,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"eosio.token",name:"transfer",data:{from:O.name,to:"cpu4",quantity:parseFloat(D).toFixed(8)+" WAX",memo:"Deposit"},authorization:[{actor:O.name,permission:"active"}]}]}),e.prev=35,e.next=38,S(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 38:s=e.sent,console.log(s),alert("Transaction ID: "+s.transaction_id),U(3),P(0),L(1),Y(""),e.next=52;break;case 47:e.prev=47,e.t2=e.catch(35),console.error(e.t2),alert(e.t2),console.log(JSON.stringify(e.t2));case 52:case"end":return e.stop()}}),e,null,[[4,11],[17,28],[35,47]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n,a,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t={},n={},e.prev=4,e.next=7,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 7:n=e.sent,console.log(n),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),console.log(JSON.stringify(e.t0)),n.status=400;case 16:return a=!1,e.prev=17,e.next=20,fetch("https://api.wax.greeneosio.com/v2/state/get_account?limit=1&skip=0&account=limitlesswax",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 20:return c=e.sent,e.next=23,c.json();case 23:r=e.sent,console.log(r.account.cpu_limit),parseInt(r.account.cpu_limit.available)>5e3?(console.log("Enough cpu left"),a=!0):(console.log("Not enough cpu"),a=!1),e.next=33;break;case 28:e.prev=28,e.t1=e.catch(17),console.error(e.t1),console.log(JSON.stringify(e.t1)),a=!1;case 33:return a=!1,200!=n.status||0==a?(console.log("Server is down."),t={actions:[{account:"cpu4",name:"updatebalance",data:{username:O.name},authorization:[{actor:O.name,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:O.name,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"cpu4",name:"updatebalance",data:{username:O.name},authorization:[{actor:O.name,permission:"active"}]}]}),e.prev=35,e.next=38,S(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 38:s=e.sent,console.log(s),alert("Transaction ID: "+s.transaction_id),U(3),P(0),L(1),Y(""),e.next=52;break;case 47:e.prev=47,e.t2=e.catch(35),console.error(e.t2),alert(e.t2),console.log(JSON.stringify(e.t2));case 52:case"end":return e.stop()}}),e,null,[[4,11],[17,28],[35,47]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n,a,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t={},n={},e.prev=4,e.next=7,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 7:n=e.sent,console.log(n),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),console.log(JSON.stringify(e.t0)),n.status=400;case 16:return a=!1,e.prev=17,e.next=20,fetch("https://api.wax.greeneosio.com/v2/state/get_account?limit=1&skip=0&account=limitlesswax",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 20:return c=e.sent,e.next=23,c.json();case 23:r=e.sent,console.log(r.account.cpu_limit),parseInt(r.account.cpu_limit.available)>5e3?(console.log("Enough cpu left"),a=!0):(console.log("Not enough cpu"),a=!1),e.next=33;break;case 28:e.prev=28,e.t1=e.catch(17),console.error(e.t1),console.log(JSON.stringify(e.t1)),a=!1;case 33:return a=!1,200!=n.status||0==a?(console.log("Server is down."),t={actions:[{account:"cpu4",name:"withdraw",data:{username:O.name,amount:parseFloat(D).toFixed(8)+" WAX"},authorization:[{actor:O.name,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:O.name,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"cpu4",name:"withdraw",data:{username:O.name,amount:parseFloat(D).toFixed(8)+" WAX"},authorization:[{actor:O.name,permission:"active"}]}]}),e.prev=35,e.next=38,S(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 38:s=e.sent,console.log(s),alert("Transaction ID: "+s.transaction_id),U(3),P(0),L(1),Y(""),e.next=52;break;case 47:e.prev=47,e.t2=e.catch(35),console.error(e.t2),alert(e.t2),console.log(JSON.stringify(e.t2));case 52:case"end":return e.stop()}}),e,null,[[4,11],[17,28],[35,47]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n,a,c,r,s,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:for(t={account:"alien.worlds",name:"transfer",data:{from:O.name,to:"boost.worlds",quantity:parseFloat(Ae).toFixed(4)+" TLM",memo:"landrating - boostslot for "+ke},authorization:[{actor:O.name,permission:"active"}]},n={account:"awlndratings",name:"boost",data:{amount:parseFloat(Ae).toFixed(4)+" TLM",land_id:ke,payer:O.name},authorization:[{actor:O.name,permission:"active"}]},[{account:"alien.worlds",name:"transfer",data:{from:O.name,to:"boost.worlds",quantity:parseFloat(Ae).toFixed(4)+" TLM",memo:"landrating - boostslot for "+ke},authorization:[{actor:O.name,permission:"active"}]},{account:"awlndratings",name:"boost",data:{amount:parseFloat(Ae).toFixed(4)+" TLM",land_id:ke,payer:O.name},authorization:[{actor:O.name,permission:"active"}]}],a=[],c=0;c<parseInt(Fe);c++)r=JSON.parse(JSON.stringify(t)),s=JSON.parse(JSON.stringify(n)),a.push(r),a.push(s);return console.log("TESTING TESTING",ke),console.log("TESTING TESTING",Ae),console.log("TESTING TESTING",Fe),console.log("TESTING TESTING",a),e.prev=11,e.next=14,S({actions:a},{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 14:o=e.sent,console.log("TESTER TESTER: ",o),alert("Transaction ID: "+o.transaction_id),Se(""),Ie(4),qe(1),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(11),console.log(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 27:case"end":return e.stop()}}),e,null,[[11,22]])})));return function(){return e.apply(this,arguments)}}(),p="Request Self Stake",j="Stake To User",x="Get Free CPU",f="Deposit And Earn",g="Update Balance",v="Withdraw",w="Test",k=(e={},Object(u.a)(e,p,t),Object(u.a)(e,j,n),Object(u.a)(e,x,c),Object(u.a)(e,f,r),Object(u.a)(e,g,s),Object(u.a)(e,v,o),Object(u.a)(e,w,i),e),T=Object(a.useState)(),_=Object(l.a)(T,2),A=_[0],I=_[1],N=Object(a.useState)(p),E=Object(l.a)(N,2),F=E[0],q=E[1],C=Object(a.useState)(3),J=Object(l.a)(C,2),W=J[0],U=J[1],G=Object(a.useState)(1),z=Object(l.a)(G,2),D=z[0],L=z[1],B=Object(a.useState)(0),R=Object(l.a)(B,2),X=R[0],P=R[1],M=Object(a.useState)(""),H=Object(l.a)(M,2),V=H[0],Y=H[1],Q=Object(a.useState)(0),K=Object(l.a)(Q,2),Z=K[0],$=K[1],ee=Object(a.useState)(),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(0),re=Object(l.a)(ce,2),se=re[0],oe=re[1],ie=Object(a.useState)(0),le=Object(l.a)(ie,2),ue=le[0],pe=le[1],he=Object(a.useState)("eosio.token"),de=Object(l.a)(he,2),je=(de[0],de[1],Object(a.useState)("transfer")),xe=Object(l.a)(je,2),be=(xe[0],xe[1],Object(a.useState)('{"from": "yourname", "to": "otheruser", "quantity": "1.00000000 WAX", "memo": "" }')),me=Object(l.a)(be,2),fe=(me[0],me[1],Object(a.useState)(!0)),ge=Object(l.a)(fe,2),Oe=(ge[0],ge[1],Object(a.useState)(1)),ve=Object(l.a)(Oe,2),we=(ve[0],ve[1],Object(a.useState)("")),ye=Object(l.a)(we,2),ke=ye[0],Se=ye[1],Te=Object(a.useState)(4),_e=Object(l.a)(Te,2),Ae=_e[0],Ie=_e[1],Ne=Object(a.useState)(1),Ee=Object(l.a)(Ne,2),Fe=Ee[0],qe=Ee[1];Object(a.useEffect)((function(){var e=setInterval(Object(d.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FETCH"),e.next=3,m.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"config",limit:1,reverse:!1,show_payer:!1});case 3:return t=e.sent,e.next=6,m.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"deposits",limit:1e3,reverse:!1,show_payer:!1});case 6:n=e.sent,ae({r1:t,r2:n});case 8:case"end":return e.stop()}}),e)}))),5e3);return function(){return clearInterval(e)}}),[]);var Ce=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"config",limit:1,reverse:!1,show_payer:!1});case 2:return t=e.sent,e.next=5,m.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"deposits",limit:1e3,reverse:!1,show_payer:!1});case 5:n=e.sent,ae({r1:t,r2:n});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n,a,c,r,s,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ne)try{if(t=ne.r1,n=parseFloat(t.rows[0].exponent),a=parseFloat(t.rows[0].total_wax),c=parseFloat(t.rows[0].current_loaned),r=parseFloat(t.rows[0].multi_day_fee),oe(t.rows[0].total_wax),pe(a-c+" WAX"),D&&D>0?((s=850*Math.pow(1-c/a,n))<200&&(s=200),P(s*(1-r*(W-1))*(D/W))):P(0),A)for(o=ne.r2,$("0 WAX"),i=0;i<o.rows.length;i++)o.rows[i].account===A.account_name&&$(o.rows[i].wax)}catch(l){console.error(l),console.log(JSON.stringify(l))}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[D,W,ne,A]),Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=13;break}return e.prev=1,e.next=4,m.get_account(O.name);case 4:t=e.sent,I(t),Ce(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),console.log(JSON.stringify(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[O]);var Je=function(){return F===p?Object(b.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(b.jsxs)("tbody",{children:[Ge(),Ue(),Xe()]})}):F===j?Object(b.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(b.jsxs)("tbody",{children:[Ge(),Ue(),We(),Xe()]})}):F===x?Object(b.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(b.jsx)("tbody",{children:We()})}):F===f?Object(b.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(b.jsx)("tbody",{children:Ge()})}):F===g?Object(b.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(b.jsx)("tbody",{children:Be()})}):F===v?Object(b.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(b.jsx)("tbody",{children:Re()})}):F===w?Object(b.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(b.jsxs)("tbody",{children:[ze(),De(),Le()]})}):void 0},We=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{textAlign:"right"},children:"User to stake to"}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{style:{width:"120px"},type:"text",value:V,onChange:function(e){return Y(e.target.value)}})})]})},Ue=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{textAlign:"right"},children:"Number of days"}),Object(b.jsx)("td",{children:Object(b.jsxs)("select",{value:W,onChange:function(e){return U(e.target.value)},children:[Object(b.jsx)("option",{value:1,children:"1"}),Object(b.jsx)("option",{value:2,children:"2"}),Object(b.jsx)("option",{value:3,children:"3"}),Object(b.jsx)("option",{value:4,children:"4"}),Object(b.jsx)("option",{value:5,children:"5"}),Object(b.jsx)("option",{value:6,children:"6"}),Object(b.jsx)("option",{value:7,children:"7"}),Object(b.jsx)("option",{value:8,children:"8"}),Object(b.jsx)("option",{value:9,children:"9"}),Object(b.jsx)("option",{value:10,children:"10"}),Object(b.jsx)("option",{value:11,children:"11"}),Object(b.jsx)("option",{value:12,children:"12"}),Object(b.jsx)("option",{value:13,children:"13"}),Object(b.jsx)("option",{value:14,children:"14"})]})})]})},Ge=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{textAlign:"right"},children:"Amount to send"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("input",{style:{width:"60px"},type:"number",value:D,onChange:function(e){return L(e.target.value)}})," ","WAX"]})]})},ze=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{textAlign:"right"},children:"Name of Land to Boost"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("input",{style:{width:"180px"},type:"text",value:ke,onChange:function(e){return Se(e.target.value)}})," "]})]})},De=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{textAlign:"right"},children:"Amount to Boost Land"}),Object(b.jsx)("td",{children:Object(b.jsxs)("select",{value:Ae,onChange:function(e){return Ie(e.target.value)},children:[Object(b.jsx)("option",{value:4,children:"4"}),Object(b.jsx)("option",{value:8,children:"8"}),Object(b.jsx)("option",{value:16,children:"16"}),Object(b.jsx)("option",{value:32,children:"32"}),Object(b.jsx)("option",{value:64,children:"64"})]})})]})},Le=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{textAlign:"right"},children:"Times to Boost Land"}),Object(b.jsx)("td",{children:Object(b.jsxs)("select",{value:Fe,onChange:function(e){return qe(e.target.value)},children:[Object(b.jsx)("option",{value:1,children:"1"}),Object(b.jsx)("option",{value:2,children:"2"}),Object(b.jsx)("option",{value:3,children:"3"}),Object(b.jsx)("option",{value:4,children:"4"}),Object(b.jsx)("option",{value:5,children:"5"}),Object(b.jsx)("option",{value:6,children:"6"}),Object(b.jsx)("option",{value:7,children:"7"}),Object(b.jsx)("option",{value:8,children:"8"}),Object(b.jsx)("option",{value:9,children:"9"}),Object(b.jsx)("option",{value:10,children:"10"}),Object(b.jsx)("option",{value:11,children:"11"}),Object(b.jsx)("option",{value:12,children:"12"}),Object(b.jsx)("option",{value:13,children:"13"}),Object(b.jsx)("option",{value:14,children:"14"}),Object(b.jsx)("option",{value:15,children:"15"})]})})]})},Be=function(){return Object(b.jsx)("tr",{})},Re=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{textAlign:"right"},children:"Amount to withdraw"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("input",{style:{width:"60px"},type:"number",value:D,onChange:function(e){return L(e.target.value)}})," ","WAX"]})]})},Xe=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{textAlign:"right"},children:"Amount to be staked"}),Object(b.jsxs)("td",{children:[X.toLocaleString()," WAX"]})]})},Pe=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){return k[F].call()},children:F})})};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"CPU 4 SALE"}),O.name&&O.name&&A?Object(b.jsxs)("div",{children:[O.name," ",Object(b.jsx)("br",{}),"Current Balance: ",A.core_liquid_balance,Object(b.jsx)("br",{})]}):null,O.name&&O.name&&A?Object(b.jsxs)("div",{children:["Deposited: ",Z,Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}):null,Object(b.jsxs)("div",{children:["Total Wax in System: ",se,Object(b.jsx)("br",{}),Object(b.jsxs)("p",{style:{color:"red"},children:["Wax Available to Rent: ",ue]}),Object(b.jsx)("br",{})]}),void 0!==O.name,O.name?Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsxs)("select",{value:F,onChange:function(e){return q(e.target.value)},children:[Object(b.jsx)("option",{value:p,children:p}),Object(b.jsx)("option",{value:j,children:j}),Object(b.jsx)("option",{value:x,children:x}),Object(b.jsx)("option",{value:f,children:f}),Object(b.jsx)("option",{value:g,children:g}),Object(b.jsx)("option",{value:v,children:v}),Object(b.jsx)("option",{value:w,children:w})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Je(),Object(b.jsx)("br",{}),Pe()]}):null,Object(b.jsx)("br",{}),Object(b.jsxs)("div",{style:{textAlign:"left",width:"400px",margin:"auto"},children:[Object(b.jsx)("h2",{children:"What is cpu4?"}),Object(b.jsx)("p",{children:"CPU4 is a new cpu renting system on the wax blockchain, created with help from the WAX Dev team and community members(Vaaaan,deraXyna). It allows anyone to rent cpu or deposit wax and earn from renting to others. The price is dynamically set between a 1% and 10% fee and it changes everytime someone deposits/withdraws/rents/returns wax. Users first send the fee then get staked the amount of wax it would pay for. Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available. There is also a free system implemented but it has limits too."}),Object(b.jsx)("p",{children:"The system will be open for 1 week before allowing users to deposit their own wax to earn. If users find bugs there is a bug bounty program on discord."}),Object(b.jsx)("p",{style:{color:"red"},children:"Disclaimer: Deposits are open. Use at your own risk, all transactions are final and irreversible. There is no guarentee of profit or return. If bugs arise I will do my best to fix them asap."}),Object(b.jsx)("h2",{children:"How it works:"}),Object(b.jsx)("h4",{children:"Users can interact with the cpu4 and free.cpu4 smart contract in a number of ways:"}),Object(b.jsx)("p",{children:"1. Request cpu for themself"}),Object(b.jsx)("p",{children:"2. Request cpu for a different user"}),Object(b.jsx)("p",{children:"3. Requesting free cpu"}),Object(b.jsx)("p",{children:"4. Deposit wax to earn"}),Object(b.jsx)("p",{children:"5. Update user collected fees"}),Object(b.jsx)("p",{children:"6. Withdraw deposited wax"}),Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:Object(b.jsx)("i",{children:"All transactions are final."})})}),Object(b.jsx)("h4",{children:"Request CPU for Self"}),Object(b.jsx)("p",{children:"Send wax to cpu4"}),Object(b.jsx)("p",{children:"The system dynamically creates a price for the staked wax given the current supply, total loaned out, number of days, and amount user requests."}),Object(b.jsx)("p",{children:"Then that wax is sent to a minion account and staked to the user for the given time."}),Object(b.jsx)("p",{}),Object(b.jsx)("h4",{children:"Request CPU for Others"}),Object(b.jsx)("p",{children:"Similar to requesting to yourself, this does the first few steps but then directly stakes to the user specified."}),Object(b.jsx)("p",{children:"The memo must contain USER:<username>,<days>"}),Object(b.jsx)("p",{children:"This can be sent from anyone for anyone else."}),Object(b.jsx)("h4",{children:"Request Free CPU"}),Object(b.jsx)("p",{children:"Users can call the action getcpu from the contract free.cpu4."}),Object(b.jsx)("p",{children:"As long as this account has wax it will send in a specified amount to the main contract requesting cpu as if it was a regular user."}),Object(b.jsx)("p",{children:"It follows the same format as requesting cpu for a different user but it pays the wax from its balance."}),Object(b.jsx)("p",{children:"This can only be given to someone once per 48 hours."}),Object(b.jsx)("h4",{children:"Deposit to Earn"}),Object(b.jsx)("p",{children:"Users can also deposit wax to earn 70% of the total fees collected."}),Object(b.jsx)("p",{children:"You can send at least 1000 wax to cpu4 with the memo Deposit"}),Object(b.jsx)("p",{children:"This will immediately update the system and you will earn part of any fees after that transaction."}),Object(b.jsx)("p",{children:"Users can do this at little or often as they would like, there is no maximum one can send in."}),Object(b.jsx)("h4",{children:"Update Collected Fees"}),Object(b.jsx)("p",{children:"This method is not required but will immediately update the table entry with how much wax the user has."}),Object(b.jsx)("p",{children:"At the top of this page under you current balance there is a deposited amount listed."}),Object(b.jsx)("p",{children:"This function will update the fees in the contract table and show you how much you could withdraw in total."}),Object(b.jsx)("h4",{children:"Withdraw Deposited Wax"}),Object(b.jsx)("p",{children:"At any time a user can request to withdraw deposited wax."}),Object(b.jsx)("p",{children:"A user can make as many withdraw requests as they want up to the total wax they have deposited."}),Object(b.jsx)("p",{children:"If there is not enough liquid wax, as more gets unstaked it will be sent in order to users in line to withdraw."}),Object(b.jsx)("h2",{children:"FAQ:"}),Object(b.jsx)("h4",{children:"How are fees calculated?"}),Object(b.jsx)("p",{children:"multiplier = (1.0 - (current loaned wax / total wax in system))^(exponent) * 100"}),Object(b.jsx)("p",{children:"if the multiplier is less than 10 then we just use 10."}),Object(b.jsx)("p",{children:"total staked wax = multiplier * (1 - (multi day fee * (number of days requested - 1))) * (wax sent in / number of days requested)"}),Object(b.jsx)("p",{children:"This process keeps the price dynamic based on the current load and changes with every buy or unstake"}),Object(b.jsx)("h4",{children:"Is this code public?"}),Object(b.jsx)("p",{children:"All the website code is located at https://github.com/cpu4youu/cpu4youu.github.io"}),Object(b.jsx)("h4",{children:"How do depositors earn?"}),Object(b.jsx)("p",{children:"Every time someone requests some wax they need to first send in a fee."}),Object(b.jsx)("p",{children:"That fee is broken up into 4 parts."}),Object(b.jsx)("p",{children:" 70% which goes to the depositors pool"}),Object(b.jsx)("p",{children:" 15% goes to the admin.cpu4 account (For dev team)"}),Object(b.jsx)("p",{children:" 10% goes to the reserve.cpu4 account"}),Object(b.jsx)("p",{children:" 5% goes to the free.cpu4 account"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"As long as a user has some wax deposited they earn their share of the 70% of the fees collected"}),Object(b.jsx)("p",{children:"The admin fee funds the development of new updates and sets the system up to have great service"}),Object(b.jsx)("p",{children:"The reserve is a special account. It collects fees until the current rate of wax to cpu is 1 - 10."}),Object(b.jsx)("p",{children:"Once this happens the system requests wax and all the wax in the reserve account get sent back to the cpu4 account."}),Object(b.jsx)("p",{children:"This does a few things, it lowers the current fee and rates the rate for users meaning before a user sends 1 wax in and gets 10"}),Object(b.jsx)("p",{children:"staked but now maybe the send 1 in and get 20 staked. It also adds liquidity if users are trying to withdraw, and"}),Object(b.jsx)("p",{children:"it grows the system wax which helps more users get access to cpu."}),Object(b.jsxs)("p",{children:["Then finally the free.cpu4 account is set up as a completely free system. Users can directly go to the smart contract and"," "]}),Object(b.jsx)("p",{children:"enter a username to recieve some free cpu every 48 hours. As long as it has wax it can continue to service users."}),Object(b.jsx)("p",{children:"Since it is funded by the normal app, as long as the normal app is being used it will keep getting wax to give to users for free."}),Object(b.jsx)("p",{children:"The rates/fees and starting value for the free account are all subject to change. Any changes will be posted on this page."}),Object(b.jsx)("h4",{children:"How does staking work?"}),Object(b.jsx)("p",{children:"I use multiple minion accounts to stake to users on a per request basis."}),Object(b.jsx)("p",{children:"No minion stakes to more than 1 user at a time and so it can be very efficient."}),Object(b.jsx)("p",{children:"I also use a dynamic system to ustake and keep track of minions who are done but still not free."}),Object(b.jsx)("p",{children:"All smart contract code is proprietary software."}),Object(b.jsx)("h4",{children:"I found a bug, what do I do?"}),Object(b.jsx)("p",{children:"Please go to the discord and find the bug bounty channel."}),Object(b.jsx)("p",{children:"Depending no how severe it is, you can be compensated for posting it first."}),Object(b.jsx)("h4",{children:"I need help or have a question where do I go?"}),Object(b.jsx)("p",{children:"Discord: https://discord.gg/UJzBuRa9sY"}),Object(b.jsx)("p",{children:"Telegram: https://t.me/joinchat/L2y-P0pVWS5lMTkx"}),Object(b.jsx)("h4",{children:"Why did you start this, can I trust you?"}),Object(b.jsx)("p",{children:"I have been creating smart contracts and dapps for almost a year now but programming since 2014."}),Object(b.jsx)("p",{children:"The wax dev team sponsored my research and development in creating this service for everyone and I intend to keep updating it"}),Object(b.jsx)("p",{children:"and bringing new features to users and allowing users free access to my services."}),Object(b.jsx)("p",{children:"Some wax projects I have worked on are:"}),Object(b.jsx)("p",{children:" Nova Rally"}),Object(b.jsx)("p",{children:" Olive Land"}),Object(b.jsx)("p",{children:" Beast Garden"}),Object(b.jsx)("p",{children:" Gods and Legends"}),Object(b.jsx)("p",{children:" Poly Play"}),Object(b.jsx)("p",{children:"I also have an Alien Worlds cpu service located at www.limitlesswax.co"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Thank you for your time, I hope you enjoy my service!"})]})]})};var A=function(e){var t=e.ual;return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(_,{ual:t})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,404)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},N=n(106),E=n(187),F=n(190),q={chainId:"1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",rpcEndpoints:[{protocol:"https",host:"api.waxsweden.org",port:"443"}]},C=new E.Anchor([q],{appName:"cpu4"}),J=new F.Wax([q],{appName:"cpu4"}),W=Object(N.withUAL)(A);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N.UALProvider,{chains:[q],authenticators:[C,J],appName:"cpu4",children:Object(b.jsx)(W,{})})}),document.getElementById("root")),I()}},[[402,1,2]]]);
//# sourceMappingURL=main.185c6a7c.chunk.js.map