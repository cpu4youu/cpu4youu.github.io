(this.webpackJsonpcpu4youu=this.webpackJsonpcpu4youu||[]).push([[0],{198:function(e,t,a){},199:function(e,t,a){},285:function(e,t){},286:function(e,t){},288:function(e,t){},300:function(e,t){},306:function(e,t){},308:function(e,t){},318:function(e,t){},320:function(e,t){},347:function(e,t){},349:function(e,t){},354:function(e,t){},356:function(e,t){},362:function(e,t){},364:function(e,t){},376:function(e,t){},379:function(e,t){},391:function(e,t){},404:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a.n(n),s=a(104),r=a.n(s),o=(a(198),a(199),a(21)),i=a(41),u=a(8),l=a.n(u),d=a(11),h=a(105),p=a(7),j=new h.JsonRpc("https://wax.greymass.com",{fetch:fetch}),b=function(e){var t,a=e.ual,c=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},a.activeAuthenticator.wax?(console.log("Yes a wcw user"),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:a.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"eosio.token",name:"transfer",data:{from:a.activeUser.accountName,to:"cpu4",quantity:parseFloat(R).toFixed(8)+" WAX",memo:z+""},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}):(console.log("Not a wcw user"),t={actions:[{account:"eosio.token",name:"transfer",data:{from:a.activeUser.accountName,to:"cpu4",quantity:parseFloat(R).toFixed(8)+" WAX",memo:z+""},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}),e.prev=2,e.next=5,a.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 5:n=e.sent,console.log(n),alert("Transaction ID: "+n.transactionId),C(3),L(0),B(1),G(""),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},a.activeAuthenticator.wax?(console.log("Yes a wcw user"),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:a.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"eosio.token",name:"transfer",data:{from:a.activeUser.accountName,to:"cpu4",quantity:parseFloat(R).toFixed(8)+" WAX",memo:"USER:"+M+","+z},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}):(console.log("Not a wcw user"),t={actions:[{account:"eosio.token",name:"transfer",data:{from:a.activeUser.accountName,to:"cpu4",quantity:parseFloat(R).toFixed(8)+" WAX",memo:"USER:"+M+","+z},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}),e.prev=2,e.next=5,a.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 5:n=e.sent,console.log(n),alert("Transaction ID: "+n.transactionId),C(3),L(0),B(1),G(""),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},a.activeAuthenticator.wax?(console.log("Yes a wcw user"),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:a.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"free.cpu4",name:"getcpu",data:{username:M},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}):(console.log("Not a wcw user"),t={actions:[{account:"free.cpu4",name:"getcpu",data:{username:M},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}),e.prev=2,e.next=5,a.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 5:n=e.sent,console.log(n),alert("Transaction ID: "+n.transactionId),C(3),L(0),B(1),G(""),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},a.activeAuthenticator.wax?(console.log("Yes a wcw user"),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:a.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"eosio.token",name:"transfer",data:{from:a.activeUser.accountName,to:"cpu4",quantity:parseFloat(R).toFixed(8)+" WAX",memo:"Deposit"},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}):(console.log("Not a wcw user"),t={actions:[{account:"eosio.token",name:"transfer",data:{from:a.activeUser.accountName,to:"cpu4",quantity:parseFloat(R).toFixed(8)+" WAX",memo:"Deposit"},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}),e.prev=2,e.next=5,a.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 5:n=e.sent,console.log(n),alert("Transaction ID: "+n.transactionId),C(3),L(0),B(1),G(""),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},a.activeAuthenticator.wax?(console.log("Yes a wcw user"),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:a.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"cpu4",name:"updatebalance",data:{username:a.activeUser.accountName},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}):(console.log("Not a wcw user"),t={actions:[{account:"cpu4",name:"updatebalance",data:{username:a.activeUser.accountName},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}),e.prev=2,e.next=5,a.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 5:n=e.sent,console.log(n),alert("Transaction ID: "+n.transactionId),C(3),L(0),B(1),G(""),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},a.activeAuthenticator.wax?(console.log("Yes a wcw user"),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:a.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"cpu4",name:"withdraw",data:{username:a.activeUser.accountName,amount:parseFloat(R).toFixed(8)+" WAX"},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}):(console.log("Not a wcw user"),t={actions:[{account:"cpu4",name:"withdraw",data:{username:a.activeUser.accountName,amount:parseFloat(R).toFixed(8)+" WAX"},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}),e.prev=2,e.next=5,a.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 5:n=e.sent,console.log(n),alert("Transaction ID: "+n.transactionId),C(3),L(0),B(1),G(""),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},a.activeAuthenticator.wax?(console.log("Yes a wcw user"),t={max_cpu_usage_ms:5,max_net_usage_words:5e3,actions:[{account:"limitlesswax",name:"paycpu",data:{user:a.activeUser.accountName,info:"5 ms max"},authorization:[{actor:"limitlesswax",permission:"cosign"}]},{account:"cpu4",name:"withdraw",data:{username:a.activeUser.accountName,amount:parseFloat(R).toFixed(8)+" WAX"},authorization:[{actor:a.activeUser.accountName,permission:"active"}]}]}):(console.log("Not a wcw user"),t={}),e.prev=2,e.next=5,a.activeUser.signTransaction(t,{blocksBehind:5,expireSeconds:300,broadcast:!0,sign:!0});case 5:n=e.sent,console.log(n),alert("Transaction ID: "+n.transactionId),C(3),L(0),B(1),G(""),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0),alert(e.t0),console.log(JSON.stringify(e.t0));case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),m="Request Self Stake",f="Stake To User",O="Get Free CPU",w="Deposit And Earn",g="Update Balance",v="Withdraw",y="Test",U=(t={},Object(i.a)(t,m,c),Object(i.a)(t,f,s),Object(i.a)(t,O,r),Object(i.a)(t,w,u),Object(i.a)(t,g,h),Object(i.a)(t,v,b),Object(i.a)(t,y,x),t),k=Object(n.useState)(),_=Object(o.a)(k,2),A=_[0],N=_[1],S=Object(n.useState)(m),T=Object(o.a)(S,2),I=T[0],F=T[1],q=Object(n.useState)(3),W=Object(o.a)(q,2),z=W[0],C=W[1],D=Object(n.useState)(1),X=Object(o.a)(D,2),R=X[0],B=X[1],E=Object(n.useState)(0),J=Object(o.a)(E,2),P=J[0],L=J[1],Y=Object(n.useState)(""),H=Object(o.a)(Y,2),M=H[0],G=H[1],V=Object(n.useState)(0),Q=Object(o.a)(V,2),K=Q[0],Z=Q[1],$=Object(n.useState)(),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(0),ce=Object(o.a)(ne,2),se=ce[0],re=ce[1],oe=Object(n.useState)(0),ie=Object(o.a)(oe,2),ue=ie[0],le=ie[1];Object(n.useEffect)((function(){var e=setInterval(Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FETCH"),e.next=3,j.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"config",limit:1,reverse:!1,show_payer:!1});case 3:return t=e.sent,e.next=6,j.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"deposits",limit:1e3,reverse:!1,show_payer:!1});case 6:a=e.sent,ae({r1:t,r2:a});case 8:case"end":return e.stop()}}),e)}))),5e3);return function(){return clearInterval(e)}}),[]);var de=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"config",limit:1,reverse:!1,show_payer:!1});case 2:return t=e.sent,e.next=5,j.get_table_rows({json:!0,code:"cpu4",scope:"cpu4",table:"deposits",limit:1e3,reverse:!1,show_payer:!1});case 5:a=e.sent,ae({r1:t,r2:a});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,c,s,r,o,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te)try{if(t=te.r1,console.log(t.rows[0]),a=parseFloat(t.rows[0].exponent),n=parseFloat(t.rows[0].total_wax),c=parseFloat(t.rows[0].current_loaned),s=parseFloat(t.rows[0].multi_day_fee),re(t.rows[0].total_wax),le(n-c+" WAX"),R&&R>0?((r=300*Math.pow(1-c/n,a))<20&&(r=20),o=r*(1-s*(z-1))*(R/z),console.log(o),L(o)):L(0),A)for(i=te.r2,Z("0 WAX"),u=0;u<i.rows.length;u++)i.rows[u].account===A.account_name&&Z(i.rows[u].wax)}catch(l){console.error(l),console.log(JSON.stringify(l))}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[R,z,te,A]),Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.activeUser){e.next=13;break}return e.prev=1,e.next=4,j.get_account(a.activeUser.accountName);case 4:t=e.sent,N(t),de(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),console.log(JSON.stringify(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[a.activeUser]);var he=function(){a.activeUser||a.showModal()},pe=function(){return I===m?Object(p.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(p.jsxs)("tbody",{children:[xe(),be(),we()]})}):I===f?Object(p.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(p.jsxs)("tbody",{children:[xe(),be(),je(),we()]})}):I===O?Object(p.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(p.jsx)("tbody",{children:je()})}):I===w?Object(p.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(p.jsx)("tbody",{children:xe()})}):I===g?Object(p.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(p.jsx)("tbody",{children:me()})}):I===v?Object(p.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(p.jsx)("tbody",{children:fe()})}):I===y?Object(p.jsx)("table",{style:{margin:"auto",borderSpacing:"12px 12px",textAlign:"left"},children:Object(p.jsx)("tbody",{children:Oe()})}):void 0},je=function(){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{textAlign:"right"},children:"User to stake to"}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{style:{width:"120px"},type:"text",value:M,onChange:function(e){return G(e.target.value)}})})]})},be=function(){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{textAlign:"right"},children:"Number of days"}),Object(p.jsx)("td",{children:Object(p.jsxs)("select",{value:z,onChange:function(e){return C(e.target.value)},children:[Object(p.jsx)("option",{value:1,children:"1"}),Object(p.jsx)("option",{value:2,children:"2"}),Object(p.jsx)("option",{value:3,children:"3"}),Object(p.jsx)("option",{value:4,children:"4"}),Object(p.jsx)("option",{value:5,children:"5"}),Object(p.jsx)("option",{value:6,children:"6"}),Object(p.jsx)("option",{value:7,children:"7"}),Object(p.jsx)("option",{value:8,children:"8"}),Object(p.jsx)("option",{value:9,children:"9"}),Object(p.jsx)("option",{value:10,children:"10"}),Object(p.jsx)("option",{value:11,children:"11"}),Object(p.jsx)("option",{value:12,children:"12"}),Object(p.jsx)("option",{value:13,children:"13"}),Object(p.jsx)("option",{value:14,children:"14"})]})})]})},xe=function(){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{textAlign:"right"},children:"Amount to send"}),Object(p.jsxs)("td",{children:[Object(p.jsx)("input",{style:{width:"60px"},type:"number",value:R,onChange:function(e){return B(e.target.value)}})," ","WAX"]})]})},me=function(){return Object(p.jsx)("tr",{})},fe=function(){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{textAlign:"right"},children:"Amount to withdraw"}),Object(p.jsxs)("td",{children:[Object(p.jsx)("input",{style:{width:"60px"},type:"number",value:R,onChange:function(e){return B(e.target.value)}})," ","WAX"]})]})},Oe=function(){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{textAlign:"right"},children:"Amount to Test"}),Object(p.jsxs)("td",{children:[Object(p.jsx)("input",{style:{width:"60px"},type:"number",value:R,onChange:function(e){return B(e.target.value)}})," ","WAX"]})]})},we=function(){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{textAlign:"right"},children:"Amount to be staked"}),Object(p.jsxs)("td",{children:[P.toLocaleString()," WAX"]})]})},ge=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){return U[I].call()},children:I})})};return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"CPU 4 SALE"}),a.activeUser&&a.activeUser&&A?Object(p.jsxs)("div",{children:[a.activeUser.accountName," ",Object(p.jsx)("br",{}),"Current Balance: ",A.core_liquid_balance,Object(p.jsx)("br",{})]}):null,a.activeUser&&a.activeUser&&A?Object(p.jsxs)("div",{children:["Deposited: ",K,Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}):null,Object(p.jsxs)("div",{children:["Total Wax in System: ",se,Object(p.jsx)("br",{}),Object(p.jsxs)("p",{style:{color:"red"},children:["Wax Available to Rent: ",ue]}),Object(p.jsx)("br",{})]}),a.activeUser?function(){if(a.activeUser&&a.activeAuthenticator)return Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:a.logout,children:"Logout"}),Object(p.jsx)("br",{})]})}():Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:he,children:"Login"}),Object(p.jsx)("br",{})]}),a.activeUser?Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsxs)("select",{value:I,onChange:function(e){return F(e.target.value)},children:[Object(p.jsx)("option",{value:m,children:m}),Object(p.jsx)("option",{value:f,children:f}),Object(p.jsx)("option",{value:O,children:O}),Object(p.jsx)("option",{value:w,children:w}),Object(p.jsx)("option",{value:g,children:g}),Object(p.jsx)("option",{value:v,children:v}),Object(p.jsx)("option",{value:y,children:y})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),pe(),Object(p.jsx)("br",{}),ge()]}):null,Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:{textAlign:"left",width:"400px",margin:"auto"},children:[Object(p.jsx)("h2",{children:"What is cpu4?"}),Object(p.jsx)("p",{children:"CPU4 is a new cpu renting system on the wax blockchain, created with help from the WAX Dev team and community members(Vaaaan,deraXyna). It allows anyone to rent cpu or deposit wax and earn from renting to others. The price is dynamically set between a 1% and 10% fee and it changes everytime someone deposits/withdraws/rents/returns wax. Users first send the fee then get staked the amount of wax it would pay for. Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available. There is also a free system implemented but it has limits too."}),Object(p.jsx)("p",{children:"The system will be open for 1 week before allowing users to deposit their own wax to earn. If users find bugs there is a bug bounty program on discord."}),Object(p.jsx)("p",{style:{color:"red"},children:"Disclaimer: Deposits are open. Use at your own risk, all transactions are final and irreversible. There is no guarentee of profit or return. If bugs arise I will do my best to fix them asap."}),Object(p.jsx)("h2",{children:"How it works:"}),Object(p.jsx)("h4",{children:"Users can interact with the cpu4 and free.cpu4 smart contract in a number of ways:"}),Object(p.jsx)("p",{children:"1. Request cpu for themself"}),Object(p.jsx)("p",{children:"2. Request cpu for a different user"}),Object(p.jsx)("p",{children:"3. Requesting free cpu"}),Object(p.jsx)("p",{children:"4. Deposit wax to earn"}),Object(p.jsx)("p",{children:"5. Update user collected fees"}),Object(p.jsx)("p",{children:"6. Withdraw deposited wax"}),Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:Object(p.jsx)("i",{children:"All transactions are final."})})}),Object(p.jsx)("h4",{children:"Request CPU for Self"}),Object(p.jsx)("p",{children:"Send wax to cpu4"}),Object(p.jsx)("p",{children:"The system dynamically creates a price for the staked wax given the current supply, total loaned out, number of days, and amount user requests."}),Object(p.jsx)("p",{children:"Then that wax is sent to a minion account and staked to the user for the given time."}),Object(p.jsx)("p",{}),Object(p.jsx)("h4",{children:"Request CPU for Others"}),Object(p.jsx)("p",{children:"Similar to requesting to yourself, this does the first few steps but then directly stakes to the user specified."}),Object(p.jsx)("p",{children:"The memo must contain USER:<username>,<days>"}),Object(p.jsx)("p",{children:"This can be sent from anyone for anyone else."}),Object(p.jsx)("h4",{children:"Request Free CPU"}),Object(p.jsx)("p",{children:"Users can call the action getcpu from the contract free.cpu4."}),Object(p.jsx)("p",{children:"As long as this account has wax it will send in a specified amount to the main contract requesting cpu as if it was a regular user."}),Object(p.jsx)("p",{children:"It follows the same format as requesting cpu for a different user but it pays the wax from its balance."}),Object(p.jsx)("p",{children:"This can only be given to someone once per 48 hours."}),Object(p.jsx)("h4",{children:"Deposit to Earn"}),Object(p.jsx)("p",{children:"Users can also deposit wax to earn 70% of the total fees collected."}),Object(p.jsx)("p",{children:"You can send at least 1000 wax to cpu4 with the memo Deposit"}),Object(p.jsx)("p",{children:"This will immediately update the system and you will earn part of any fees after that transaction."}),Object(p.jsx)("p",{children:"Users can do this at little or often as they would like, there is no maximum one can send in."}),Object(p.jsx)("h4",{children:"Update Collected Fees"}),Object(p.jsx)("p",{children:"This method is not required but will immediately update the table entry with how much wax the user has."}),Object(p.jsx)("p",{children:"At the top of this page under you current balance there is a deposited amount listed."}),Object(p.jsx)("p",{children:"This function will update the fees in the contract table and show you how much you could withdraw in total."}),Object(p.jsx)("h4",{children:"Withdraw Deposited Wax"}),Object(p.jsx)("p",{children:"At any time a user can request to withdraw deposited wax."}),Object(p.jsx)("p",{children:"A user can make as many withdraw requests as they want up to the total wax they have deposited."}),Object(p.jsx)("p",{children:"If there is not enough liquid wax, as more gets unstaked it will be sent in order to users in line to withdraw."}),Object(p.jsx)("h2",{children:"FAQ:"}),Object(p.jsx)("h4",{children:"How are fees calculated?"}),Object(p.jsx)("p",{children:"multiplier = (1.0 - (current loaned wax / total wax in system))^(exponent) * 100"}),Object(p.jsx)("p",{children:"if the multiplier is less than 10 then we just use 10."}),Object(p.jsx)("p",{children:"total staked wax = multiplier * (1 - (multi day fee * (number of days requested - 1))) * (wax sent in / number of days requested)"}),Object(p.jsx)("p",{children:"This process keeps the price dynamic based on the current load and changes with every buy or unstake"}),Object(p.jsx)("h4",{children:"Is this code public?"}),Object(p.jsx)("p",{children:"All the website code is located at https://github.com/cpu4youu/cpu4youu.github.io"}),Object(p.jsx)("h4",{children:"How do depositors earn?"}),Object(p.jsx)("p",{children:"Every time someone requests some wax they need to first send in a fee."}),Object(p.jsx)("p",{children:"That fee is broken up into 4 parts."}),Object(p.jsx)("p",{children:" 70% which goes to the depositors pool"}),Object(p.jsx)("p",{children:" 15% goes to the admin.cpu4 account (For dev team)"}),Object(p.jsx)("p",{children:" 10% goes to the reserve.cpu4 account"}),Object(p.jsx)("p",{children:" 5% goes to the free.cpu4 account"}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:"As long as a user has some wax deposited they earn their share of the 70% of the fees collected"}),Object(p.jsx)("p",{children:"The admin fee funds the development of new updates and sets the system up to have great service"}),Object(p.jsx)("p",{children:"The reserve is a special account. It collects fees until the current rate of wax to cpu is 1 - 10."}),Object(p.jsx)("p",{children:"Once this happens the system requests wax and all the wax in the reserve account get sent back to the cpu4 account."}),Object(p.jsx)("p",{children:"This does a few things, it lowers the current fee and rates the rate for users meaning before a user sends 1 wax in and gets 10"}),Object(p.jsx)("p",{children:"staked but now maybe the send 1 in and get 20 staked. It also adds liquidity if users are trying to withdraw, and"}),Object(p.jsx)("p",{children:"it grows the system wax which helps more users get access to cpu."}),Object(p.jsxs)("p",{children:["Then finally the free.cpu4 account is set up as a completely free system. Users can directly go to the smart contract and"," "]}),Object(p.jsx)("p",{children:"enter a username to recieve some free cpu every 48 hours. As long as it has wax it can continue to service users."}),Object(p.jsx)("p",{children:"Since it is funded by the normal app, as long as the normal app is being used it will keep getting wax to give to users for free."}),Object(p.jsx)("p",{children:"The rates/fees and starting value for the free account are all subject to change. Any changes will be posted on this page."}),Object(p.jsx)("h4",{children:"How does staking work?"}),Object(p.jsx)("p",{children:"I use multiple minion accounts to stake to users on a per request basis."}),Object(p.jsx)("p",{children:"No minion stakes to more than 1 user at a time and so it can be very efficient."}),Object(p.jsx)("p",{children:"I also use a dynamic system to ustake and keep track of minions who are done but still not free."}),Object(p.jsx)("p",{children:"All smart contract code is proprietary software."}),Object(p.jsx)("h4",{children:"I found a bug, what do I do?"}),Object(p.jsx)("p",{children:"Please go to the discord and find the bug bounty channel."}),Object(p.jsx)("p",{children:"Depending no how severe it is, you can be compensated for posting it first."}),Object(p.jsx)("h4",{children:"I need help or have a question where do I go?"}),Object(p.jsx)("p",{children:"Discord: https://discord.gg/UJzBuRa9sY"}),Object(p.jsx)("p",{children:"Telegram: https://t.me/joinchat/L2y-P0pVWS5lMTkx"}),Object(p.jsx)("h4",{children:"Why did you start this, can I trust you?"}),Object(p.jsx)("p",{children:"I have been creating smart contracts and dapps for almost a year now but programming since 2014."}),Object(p.jsx)("p",{children:"The wax dev team sponsored my research and development in creating this service for everyone and I intend to keep updating it"}),Object(p.jsx)("p",{children:"and bringing new features to users and allowing users free access to my services."}),Object(p.jsx)("p",{children:"Some wax projects I have worked on are:"}),Object(p.jsx)("p",{children:" Nova Rally"}),Object(p.jsx)("p",{children:" Olive Land"}),Object(p.jsx)("p",{children:" Beast Garden"}),Object(p.jsx)("p",{children:" Gods and Legends"}),Object(p.jsx)("p",{children:" Poly Play"}),Object(p.jsx)("p",{children:"I also have an Alien Worlds cpu service located at www.limitlesswax.co"}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:"Thank you for your time, I hope you enjoy my service!"})]})]})};var x=function(e){var t=e.ual;return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(b,{ual:t})})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,406)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},f=a(106),O=a(188),w=a(191),g={chainId:"1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",rpcEndpoints:[{protocol:"https",host:"wax.greymass.com",port:"443"}]},v=new O.Anchor([g],{appName:"cpu4"}),y=new w.Wax([g],{appName:"cpu4"}),U=Object(f.withUAL)(x);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(f.UALProvider,{chains:[g],authenticators:[v,y],appName:"cpu4",children:Object(p.jsx)(U,{})})}),document.getElementById("root")),m()}},[[404,1,2]]]);
//# sourceMappingURL=main.60c67320.chunk.js.map