(this.webpackJsonpcpu4youu=this.webpackJsonpcpu4youu||[]).push([[0],{196:function(e,t,n){},197:function(e,t,n){},283:function(e,t){},284:function(e,t){},286:function(e,t){},298:function(e,t){},304:function(e,t){},306:function(e,t){},316:function(e,t){},318:function(e,t){},345:function(e,t){},347:function(e,t){},352:function(e,t){},354:function(e,t){},360:function(e,t){},362:function(e,t){},374:function(e,t){},377:function(e,t){},381:function(e,t){},392:function(e,t,n){"use strict";n.r(t);var a=n(14),s=n.n(a),c=n(107),r=n.n(c),o=(n(196),n(197),n(24)),i=n(42),l=n(7),u=n.n(l),d=n(11),p=n(70),h=n(9),j=new p.JsonRpc("https://wax.greymass.com",{fetch:fetch}),b=function(e){var t,n=e.ual,s=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,console.log(a),200!=a.status?(console.log("Server is down."),t={actions:[{account:"eosio.token",name:"transfer",data:{from:n.activeUser.accountName,to:"cpu4",quantity:parseFloat(X).toFixed(8)+" WAX",memo:W+""},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:n.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"eosio.token",name:"transfer",data:{from:n.activeUser.accountName,to:"cpu4",quantity:parseFloat(X).toFixed(8)+" WAX",memo:W+""},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}),e.prev=6,e.next=9,n.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 9:s=e.sent,console.log(s),alert("Transaction ID: "+s.transactionId),z(3),L(0),R(1),V(""),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(6),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 23:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,console.log(a),200!=a.status?(console.log("Server is down."),t={actions:[{account:"eosio.token",name:"transfer",data:{from:n.activeUser.accountName,to:"cpu4",quantity:parseFloat(X).toFixed(8)+" WAX",memo:"USER:"+M+","+W},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:n.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"eosio.token",name:"transfer",data:{from:n.activeUser.accountName,to:"cpu4",quantity:parseFloat(X).toFixed(8)+" WAX",memo:"USER:"+M+","+W},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}),e.prev=6,e.next=9,n.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 9:s=e.sent,console.log(s),alert("Transaction ID: "+s.transactionId),z(3),L(0),R(1),V(""),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(6),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 23:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,console.log(a),200!=a.status?(console.log("Server is down."),t={actions:[{account:"free.cpu4",name:"getcpu",data:{username:M},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:n.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"free.cpu4",name:"getcpu",data:{username:M},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}),e.prev=6,e.next=9,n.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 9:s=e.sent,console.log(s),alert("Transaction ID: "+s.transactionId),z(3),L(0),R(1),V(""),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(6),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 23:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,console.log(a),200!=a.status?(console.log("Server is down."),t={actions:[{account:"eosio.token",name:"transfer",data:{from:n.activeUser.accountName,to:"cpu4",quantity:parseFloat(X).toFixed(8)+" WAX",memo:"Deposit"},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:n.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"eosio.token",name:"transfer",data:{from:n.activeUser.accountName,to:"cpu4",quantity:parseFloat(X).toFixed(8)+" WAX",memo:"Deposit"},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}),e.prev=6,e.next=9,n.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 9:s=e.sent,console.log(s),alert("Transaction ID: "+s.transactionId),z(3),L(0),R(1),V(""),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(6),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 23:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,console.log(a),200!=a.status?(console.log("Server is down."),t={actions:[{account:"cpu4",name:"updatebalance",data:{username:n.activeUser.accountName},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:n.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"cpu4",name:"updatebalance",data:{username:n.activeUser.accountName},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}),e.prev=6,e.next=9,n.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 9:s=e.sent,console.log(s),alert("Transaction ID: "+s.transactionId),z(3),L(0),R(1),V(""),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(6),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 23:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,console.log(a),200!=a.status?(console.log("Server is down."),t={actions:[{account:"cpu4",name:"withdraw",data:{username:n.activeUser.accountName,amount:parseFloat(X).toFixed(8)+" WAX"},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:n.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"cpu4",name:"withdraw",data:{username:n.activeUser.accountName,amount:parseFloat(X).toFixed(8)+" WAX"},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}),e.prev=6,e.next=9,n.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 9:s=e.sent,console.log(s),alert("Transaction ID: "+s.transactionId),z(3),L(0),R(1),V(""),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(6),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 23:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,fetch("https://api.limitlesswax.co/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,console.log(a),200!=a.status?(console.log("Server is down."),t={actions:[{account:"cpu4",name:"withdraw",data:{username:n.activeUser.accountName,amount:parseFloat(X).toFixed(8)+" WAX"},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}):(console.log("Server is up."),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:n.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"cpu4",name:"withdraw",data:{username:n.activeUser.accountName,amount:parseFloat(X).toFixed(8)+" WAX"},authorization:[{actor:n.activeUser.accountName,permission:"active"}]}]}),e.prev=6,e.next=9,n.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 9:s=e.sent,console.log(s),alert("Transaction ID: "+s.transactionId),z(3),L(0),R(1),V(""),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(6),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 23:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(){return e.apply(this,arguments)}}(),m="Request Self Stake",f="Stake To User",O="Get Free CPU",v="Deposit And Earn",g="Update Balance",w="Withdraw",y="Test",U=(t={},Object(i.a)(t,m,s),Object(i.a)(t,f,c),Object(i.a)(t,O,r),Object(i.a)(t,v,l),Object(i.a)(t,g,p),Object(i.a)(t,w,b),Object(i.a)(t,y,x),t),k=Object(a.useState)(),S=Object(o.a)(k,2),_=S[0],A=S[1],T=Object(a.useState)(m),N=Object(o.a)(T,2),I=N[0],F=N[1],q=Object(a.useState)(3),C=Object(o.a)(q,2),W=C[0],z=C[1],D=Object(a.useState)(1),E=Object(o.a)(D,2),X=E[0],R=E[1],B=Object(a.useState)(0),J=Object(o.a)(B,2),P=J[0],L=J[1],G=Object(a.useState)(""),H=Object(o.a)(G,2),M=H[0],V=H[1],Y=Object(a.useState)(0),Q=Object(o.a)(Y,2),K=Q[0],Z=Q[1],$=Object(a.useState)(),ee=Object(o.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(0),se=Object(o.a)(ae,2),ce=se[0],re=se[1],oe=Object(a.useState)(0),ie=Object(o.a)(oe,2),le=ie[0],ue=ie[1];Object(a.useEffect)((function(){var e=setInterval(Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FETCH"),e.next=3,j.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"config",limit:1,reverse:!1,show_payer:!1});case 3:return t=e.sent,e.next=6,j.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"deposits",limit:1e3,reverse:!1,show_payer:!1});case 6:n=e.sent,ne({r1:t,r2:n});case 8:case"end":return e.stop()}}),e)}))),5e3);return function(){return clearInterval(e)}}),[]);var de=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"config",limit:1,reverse:!1,show_payer:!1});case 2:return t=e.sent,e.next=5,j.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"deposits",limit:1e3,reverse:!1,show_payer:!1});case 5:n=e.sent,ne({r1:t,r2:n});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,s,c,r,o,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te)try{if(t=te.r1,console.log(t.rows[0]),n=parseFloat(t.rows[0].exponent),a=parseFloat(t.rows[0].total_wax),s=parseFloat(t.rows[0].current_loaned),c=parseFloat(t.rows[0].multi_day_fee),re(t.rows[0].total_wax),ue(a-s+" WAX"),X&&X>0?((r=300*Math.pow(1-s/a,n))<20&&(r=20),o=r*(1-c*(W-1))*(X/W),console.log(o),L(o)):L(0),_)for(i=te.r2,Z("0 WAX"),l=0;l<i.rows.length;l++)i.rows[l].account===_.account_name&&Z(i.rows[l].wax)}catch(u){console.error(u),console.log(JSON.stringify(u))}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[X,W,te,_]),Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.activeUser){e.next=13;break}return e.prev=1,e.next=4,j.get_account(n.activeUser.accountName);case 4:t=e.sent,A(t),de(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),console.log(JSON.stringify(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[n.activeUser]);var pe=function(){n.activeUser||n.showModal()},he=function(){return I===m?Object(h.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(h.jsxs)("tbody",{children:[xe(),be(),ve()]})}):I===f?Object(h.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(h.jsxs)("tbody",{children:[xe(),be(),je(),ve()]})}):I===O?Object(h.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(h.jsx)("tbody",{children:je()})}):I===v?Object(h.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(h.jsx)("tbody",{children:xe()})}):I===g?Object(h.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(h.jsx)("tbody",{children:me()})}):I===w?Object(h.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(h.jsx)("tbody",{children:fe()})}):I===y?Object(h.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(h.jsx)("tbody",{children:Oe()})}):void 0},je=function(){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{style:{textAlign:"right"},children:"User to stake to"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{style:{width:"120px"},type:"text",value:M,onChange:function(e){return V(e.target.value)}})})]})},be=function(){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{style:{textAlign:"right"},children:"Number of days"}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{value:W,onChange:function(e){return z(e.target.value)},children:[Object(h.jsx)("option",{value:1,children:"1"}),Object(h.jsx)("option",{value:2,children:"2"}),Object(h.jsx)("option",{value:3,children:"3"}),Object(h.jsx)("option",{value:4,children:"4"}),Object(h.jsx)("option",{value:5,children:"5"}),Object(h.jsx)("option",{value:6,children:"6"}),Object(h.jsx)("option",{value:7,children:"7"}),Object(h.jsx)("option",{value:8,children:"8"}),Object(h.jsx)("option",{value:9,children:"9"}),Object(h.jsx)("option",{value:10,children:"10"}),Object(h.jsx)("option",{value:11,children:"11"}),Object(h.jsx)("option",{value:12,children:"12"}),Object(h.jsx)("option",{value:13,children:"13"}),Object(h.jsx)("option",{value:14,children:"14"})]})})]})},xe=function(){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{style:{textAlign:"right"},children:"Amount to send"}),Object(h.jsxs)("td",{children:[Object(h.jsx)("input",{style:{width:"60px"},type:"number",value:X,onChange:function(e){return R(e.target.value)}})," ","WAX"]})]})},me=function(){return Object(h.jsx)("tr",{})},fe=function(){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{style:{textAlign:"right"},children:"Amount to withdraw"}),Object(h.jsxs)("td",{children:[Object(h.jsx)("input",{style:{width:"60px"},type:"number",value:X,onChange:function(e){return R(e.target.value)}})," ","WAX"]})]})},Oe=function(){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{style:{textAlign:"right"},children:"Amount to Test"}),Object(h.jsxs)("td",{children:[Object(h.jsx)("input",{style:{width:"60px"},type:"number",value:X,onChange:function(e){return R(e.target.value)}})," ","WAX"]})]})},ve=function(){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{style:{textAlign:"right"},children:"Amount to be staked"}),Object(h.jsxs)("td",{children:[P.toLocaleString()," WAX"]})]})},ge=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){return U[I].call()},children:I})})};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"CPU 4 SALE"}),n.activeUser&&n.activeUser&&_?Object(h.jsxs)("div",{children:[n.activeUser.accountName," ",Object(h.jsx)("br",{}),"Current Balance: ",_.core_liquid_balance,Object(h.jsx)("br",{})]}):null,n.activeUser&&n.activeUser&&_?Object(h.jsxs)("div",{children:["Deposited: ",K,Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}):null,Object(h.jsxs)("div",{children:["Total Wax in System: ",ce,Object(h.jsx)("br",{}),Object(h.jsxs)("p",{style:{color:"red"},children:["Wax Available to Rent: ",le]}),Object(h.jsx)("br",{})]}),n.activeUser?function(){if(n.activeUser&&n.activeAuthenticator)return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:n.logout,children:"Logout"}),Object(h.jsx)("br",{})]})}():Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:pe,children:"Login"}),Object(h.jsx)("br",{})]}),n.activeUser?Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsxs)("select",{value:I,onChange:function(e){return F(e.target.value)},children:[Object(h.jsx)("option",{value:m,children:m}),Object(h.jsx)("option",{value:f,children:f}),Object(h.jsx)("option",{value:O,children:O}),Object(h.jsx)("option",{value:v,children:v}),Object(h.jsx)("option",{value:g,children:g}),Object(h.jsx)("option",{value:w,children:w}),Object(h.jsx)("option",{value:y,children:y})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),he(),Object(h.jsx)("br",{}),ge()]}):null,Object(h.jsx)("br",{}),Object(h.jsxs)("div",{style:{textAlign:"left",width:"400px",margin:"auto"},children:[Object(h.jsx)("h2",{children:"What is cpu4?"}),Object(h.jsx)("p",{children:"CPU4 is a new cpu renting system on the wax blockchain, created with help from the WAX Dev team and community members(Vaaaan,deraXyna). It allows anyone to rent cpu or deposit wax and earn from renting to others. The price is dynamically set between a 1% and 10% fee and it changes everytime someone deposits/withdraws/rents/returns wax. Users first send the fee then get staked the amount of wax it would pay for. Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available. There is also a free system implemented but it has limits too."}),Object(h.jsx)("p",{children:"The system will be open for 1 week before allowing users to deposit their own wax to earn. If users find bugs there is a bug bounty program on discord."}),Object(h.jsx)("p",{style:{color:"red"},children:"Disclaimer: Deposits are open. Use at your own risk, all transactions are final and irreversible. There is no guarentee of profit or return. If bugs arise I will do my best to fix them asap."}),Object(h.jsx)("h2",{children:"How it works:"}),Object(h.jsx)("h4",{children:"Users can interact with the cpu4 and free.cpu4 smart contract in a number of ways:"}),Object(h.jsx)("p",{children:"1. Request cpu for themself"}),Object(h.jsx)("p",{children:"2. Request cpu for a different user"}),Object(h.jsx)("p",{children:"3. Requesting free cpu"}),Object(h.jsx)("p",{children:"4. Deposit wax to earn"}),Object(h.jsx)("p",{children:"5. Update user collected fees"}),Object(h.jsx)("p",{children:"6. Withdraw deposited wax"}),Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:Object(h.jsx)("i",{children:"All transactions are final."})})}),Object(h.jsx)("h4",{children:"Request CPU for Self"}),Object(h.jsx)("p",{children:"Send wax to cpu4"}),Object(h.jsx)("p",{children:"The system dynamically creates a price for the staked wax given the current supply, total loaned out, number of days, and amount user requests."}),Object(h.jsx)("p",{children:"Then that wax is sent to a minion account and staked to the user for the given time."}),Object(h.jsx)("p",{}),Object(h.jsx)("h4",{children:"Request CPU for Others"}),Object(h.jsx)("p",{children:"Similar to requesting to yourself, this does the first few steps but then directly stakes to the user specified."}),Object(h.jsx)("p",{children:"The memo must contain USER:<username>,<days>"}),Object(h.jsx)("p",{children:"This can be sent from anyone for anyone else."}),Object(h.jsx)("h4",{children:"Request Free CPU"}),Object(h.jsx)("p",{children:"Users can call the action getcpu from the contract free.cpu4."}),Object(h.jsx)("p",{children:"As long as this account has wax it will send in a specified amount to the main contract requesting cpu as if it was a regular user."}),Object(h.jsx)("p",{children:"It follows the same format as requesting cpu for a different user but it pays the wax from its balance."}),Object(h.jsx)("p",{children:"This can only be given to someone once per 48 hours."}),Object(h.jsx)("h4",{children:"Deposit to Earn"}),Object(h.jsx)("p",{children:"Users can also deposit wax to earn 70% of the total fees collected."}),Object(h.jsx)("p",{children:"You can send at least 1000 wax to cpu4 with the memo Deposit"}),Object(h.jsx)("p",{children:"This will immediately update the system and you will earn part of any fees after that transaction."}),Object(h.jsx)("p",{children:"Users can do this at little or often as they would like, there is no maximum one can send in."}),Object(h.jsx)("h4",{children:"Update Collected Fees"}),Object(h.jsx)("p",{children:"This method is not required but will immediately update the table entry with how much wax the user has."}),Object(h.jsx)("p",{children:"At the top of this page under you current balance there is a deposited amount listed."}),Object(h.jsx)("p",{children:"This function will update the fees in the contract table and show you how much you could withdraw in total."}),Object(h.jsx)("h4",{children:"Withdraw Deposited Wax"}),Object(h.jsx)("p",{children:"At any time a user can request to withdraw deposited wax."}),Object(h.jsx)("p",{children:"A user can make as many withdraw requests as they want up to the total wax they have deposited."}),Object(h.jsx)("p",{children:"If there is not enough liquid wax, as more gets unstaked it will be sent in order to users in line to withdraw."}),Object(h.jsx)("h2",{children:"FAQ:"}),Object(h.jsx)("h4",{children:"How are fees calculated?"}),Object(h.jsx)("p",{children:"multiplier = (1.0 - (current loaned wax / total wax in system))^(exponent) * 100"}),Object(h.jsx)("p",{children:"if the multiplier is less than 10 then we just use 10."}),Object(h.jsx)("p",{children:"total staked wax = multiplier * (1 - (multi day fee * (number of days requested - 1))) * (wax sent in / number of days requested)"}),Object(h.jsx)("p",{children:"This process keeps the price dynamic based on the current load and changes with every buy or unstake"}),Object(h.jsx)("h4",{children:"Is this code public?"}),Object(h.jsx)("p",{children:"All the website code is located at https://github.com/cpu4youu/cpu4youu.github.io"}),Object(h.jsx)("h4",{children:"How do depositors earn?"}),Object(h.jsx)("p",{children:"Every time someone requests some wax they need to first send in a fee."}),Object(h.jsx)("p",{children:"That fee is broken up into 4 parts."}),Object(h.jsx)("p",{children:" 70% which goes to the depositors pool"}),Object(h.jsx)("p",{children:" 15% goes to the admin.cpu4 account (For dev team)"}),Object(h.jsx)("p",{children:" 10% goes to the reserve.cpu4 account"}),Object(h.jsx)("p",{children:" 5% goes to the free.cpu4 account"}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"As long as a user has some wax deposited they earn their share of the 70% of the fees collected"}),Object(h.jsx)("p",{children:"The admin fee funds the development of new updates and sets the system up to have great service"}),Object(h.jsx)("p",{children:"The reserve is a special account. It collects fees until the current rate of wax to cpu is 1 - 10."}),Object(h.jsx)("p",{children:"Once this happens the system requests wax and all the wax in the reserve account get sent back to the cpu4 account."}),Object(h.jsx)("p",{children:"This does a few things, it lowers the current fee and rates the rate for users meaning before a user sends 1 wax in and gets 10"}),Object(h.jsx)("p",{children:"staked but now maybe the send 1 in and get 20 staked. It also adds liquidity if users are trying to withdraw, and"}),Object(h.jsx)("p",{children:"it grows the system wax which helps more users get access to cpu."}),Object(h.jsxs)("p",{children:["Then finally the free.cpu4 account is set up as a completely free system. Users can directly go to the smart contract and"," "]}),Object(h.jsx)("p",{children:"enter a username to recieve some free cpu every 48 hours. As long as it has wax it can continue to service users."}),Object(h.jsx)("p",{children:"Since it is funded by the normal app, as long as the normal app is being used it will keep getting wax to give to users for free."}),Object(h.jsx)("p",{children:"The rates/fees and starting value for the free account are all subject to change. Any changes will be posted on this page."}),Object(h.jsx)("h4",{children:"How does staking work?"}),Object(h.jsx)("p",{children:"I use multiple minion accounts to stake to users on a per request basis."}),Object(h.jsx)("p",{children:"No minion stakes to more than 1 user at a time and so it can be very efficient."}),Object(h.jsx)("p",{children:"I also use a dynamic system to ustake and keep track of minions who are done but still not free."}),Object(h.jsx)("p",{children:"All smart contract code is proprietary software."}),Object(h.jsx)("h4",{children:"I found a bug, what do I do?"}),Object(h.jsx)("p",{children:"Please go to the discord and find the bug bounty channel."}),Object(h.jsx)("p",{children:"Depending no how severe it is, you can be compensated for posting it first."}),Object(h.jsx)("h4",{children:"I need help or have a question where do I go?"}),Object(h.jsx)("p",{children:"Discord: https://discord.gg/UJzBuRa9sY"}),Object(h.jsx)("p",{children:"Telegram: https://t.me/joinchat/L2y-P0pVWS5lMTkx"}),Object(h.jsx)("h4",{children:"Why did you start this, can I trust you?"}),Object(h.jsx)("p",{children:"I have been creating smart contracts and dapps for almost a year now but programming since 2014."}),Object(h.jsx)("p",{children:"The wax dev team sponsored my research and development in creating this service for everyone and I intend to keep updating it"}),Object(h.jsx)("p",{children:"and bringing new features to users and allowing users free access to my services."}),Object(h.jsx)("p",{children:"Some wax projects I have worked on are:"}),Object(h.jsx)("p",{children:" Nova Rally"}),Object(h.jsx)("p",{children:" Olive Land"}),Object(h.jsx)("p",{children:" Beast Garden"}),Object(h.jsx)("p",{children:" Gods and Legends"}),Object(h.jsx)("p",{children:" Poly Play"}),Object(h.jsx)("p",{children:"I also have an Alien Worlds cpu service located at www.limitlesswax.co"}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Thank you for your time, I hope you enjoy my service!"})]})]})};var x=function(e){var t=e.ual;return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(b,{ual:t})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,396)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},f=n(108),O=n(187),v=n(188),g={chainId:"1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",rpcEndpoints:[{protocol:"https",host:"wax.greymass.com",port:"443"}]},w=new O.Anchor([g],{appName:"cpu4"}),y=new v.Wax([g],{appName:"cpu4"}),U=Object(f.withUAL)(x);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(f.UALProvider,{chains:[g],authenticators:[w,y],appName:"cpu4",children:Object(h.jsx)(U,{})})}),document.getElementById("root")),m()}},[[392,1,2]]]);
//# sourceMappingURL=main.5fdb3be3.chunk.js.map