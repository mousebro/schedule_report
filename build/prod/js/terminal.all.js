!function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return t[a].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="http://static.12301.cc/assets/build",e(0)}({0:function(t,e,n){n(18),n(21);var a=n(9),r=n(51),i=n(50),s=RichBase.extend({init:function(){this.searchOrderBtn=$("#termSearBtn"),this.voucherInp=$("#termSearInp"),this.product=new r({container:$("#productListPage")}),this.orderList=new i,this.bindEvents()},bindEvents:function(){var t=this;if(this.searchOrderBtn.on("click",function(e){t.onSearchOrderBtnClick(t,e)}),!1 in document.createElement("input")){var e="凭证码 / 手机号";this.voucherInp.on("focus",function(t){var n=$(t.currentTarget);n.val()==e&&n.val("")}),this.voucherInp.on("blur",function(t){var n=$(t.currentTarget);n.val()||n.val(e)})}},onSearchOrderBtnClick:function(t,e){var n=t.searchOrderBtn,r=$.trim(t.voucherInp.val());return n.hasClass("disable")||!r?!1:void t.orderList.query(a.getSalerid(),r)}});$(function(){new s})},9:function(t,e){var n={DEFAULT_IMG:"http://www.12301.cc/images/defaultThum.jpg",LOADING_IMG:"http://www.12301.cc/images/icons/gloading.gif",PMODE:{0:"账户余额支付",1:"支付宝支付",2:"授信支付",3:"产品自销",4:"现场支付",5:"微信支付"},PAYSTATUS:{0:"景区到付",1:"已成功",2:"未支付"},ORDERSTATUS:{0:"未使用",1:"已使用",2:"已过期",3:"已取消",4:"凭证码被替代",5:"被终端撤销(已取消)",6:"被终端撤销(已使用)"},fn:new Function,api:{fetchProduct:"terminal_chk.html",terminal:function(){return $("#apiHideInp").val()},queryOrder:function(){return $("#apiHideInp").val()}},AJAX_TIMEOUT:6e4,AJAX_TIMEOUT_TEXT:"请求超时，请稍后重试",AJAX_ERROR_TEXT:"请求出错，请稍后重试",isObjectEmpty:function(t){var e=!0;for(var n in t){e=!1;break}return e},getSid:function(){return $("#gsid").val()||""},getSalerid:function(){return $.trim($("#term_prodNum").text())||""},getVoucher:function(){return $.trim($("#termSearInp").val())},checkIsAdmin:function(){return $("#isAdmin").val()},fetchProduct:function(t,e){var n,a=this,t=t||{},e=e||{},r=this.api.fetchProduct,i=this.fn,s=t.keyword||"",o=t.sid||"",c=e.loading||i,l=e.removeLoading||i,d=e.timeout||function(){alert(this.AJAX_TIMEOUT_TEXT)},h=e.serverError||function(){alert(this.AJAX_ERROR_TEXT)},u=e.empty||i,m=e.success||i,p=e.fail||i;return n=PFT.Ajax({url:r,type:"get",dataType:"json",ttimeout:1e3*a.AJAX_TIMEOUT,data:{action:"queryproduct",keyword:s,sid:o},loading:function(){c()},removeLoading:function(){l()},timeout:function(t){d(t)},serverError:function(t){h(t)}},function(t){"success"==t.status?t.list&&t.list.length>0?m(t):u(t):p(t)})},queryOrder:function(t,e,n){var a=this;if(!t||!e)return!1;t=$.trim(t),e=$.trim(e);var r=this.api.queryOrder(),i=this.fn,n=n||{},s=n.loading||i,o=n.removeLoading||i,c=n.success||i,l=n.empty||i,d=n.unlogin||i,h=n.fail||i,u=n.timeout||function(){alert(a.AJAX_TIMEOUT_TEXT)},m=n.serverError||function(){alert(a.AJAX_ERROR_TEXT)},p={query:1,salerid:t,voucher:e};PFT.Ajax({url:r,type:"get",dataType:"json",data:p,ttimeout:a.AJAX_TIMEOUT,loading:function(){s()},removeLoading:function(){o()},timeout:function(t){console.log("timeout"),u(t)},serverError:function(t){console.log("timeout"),m(t)}},function(t){var t=t||{},e=t.status,n=t.code;if("success"==e){var r=t.orders;r&&!a.isObjectEmpty(r)?c(t):l(t)}else"fail"==e&&0==n?d(t):"fail"==e&&t.msg&&h(t)})},terminal:function(t,e){var n=this,a=this.api.terminal(),t=t||{},e=e||{},r=this.fn,i=t.check_method||0,s=t.salerid||"",o=t.ordernum||"",c=t.list||"",l=t.rtime||"",d=e.loading||r,h=e.removeLoading||r,u=e.success||r,m=e.fail||r,p=e.unlogin||r,f=e.timeout||function(){alert(n.AJAX_TIMEOUT_TEXT)},v=e.serverError||function(){alert(n.AJAX_ERROR_TEXT)},g={check:1,salerid:s,ordernum:o,check_method:i,list:c,rtime:l};PFT.Ajax({url:a,type:"post",dataType:"json",data:{data:PFT.Help.JSON.stringify(g)},loading:function(){d()},removeLoading:function(){h()},timeout:function(){f()},serverError:function(){v()}},function(t){var t=t||{},e=t.status,a=t.code,r=t.msg;"success"==e?u(t):"fail"==e&&0==a?p(t):(t.msg=r||n.AJAX_ERROR_TEXT,m(t))})}};t.exports=n},13:function(t,e){var n={strpad:function(t){return t=String(t),1==t.length?"0"+t:t},outputHtml:function(t,e){var n=this,e=e||"todayValid";t||(t=this.gettoday()),t=10==t.length?t.substring(0,7):t;var a=new Date;a.setHours(0,0,0,0),a=a.getTime();var r=t+"-01";r=r.split("-"),r=r.join("/");var i=new Date(r),s=i.getFullYear(),o=i.getMonth()+1,c=o-1==0?12:o-1,l=o+1==13?1:o+1,d=new Date(i.getFullYear(),i.getMonth()+1,0).getDate(),h=d,u=i.getDay(),m=t+"-"+d;m=m.split("-"),m=m.join("/");var p=new Date(m);d+=i.getDay()+(7-p.getDay()),i.setTime(i.getTime()-864e5*i.getDay());for(var f=new Date(this.gettoday()).getTime().toString(),v="lastmonth_none",g="nextmonth_none",y='<div class="calendar" id="calendarContent"><div class="monthbox"><div id="calendarHead" class="title calendarHead" data-date="'+s+"-"+o+'"><span class="lastmonth '+v+'"><a title="'+c+'月">&nbsp;</a></span><span class="nextmonth '+g+'"><a title="'+l+'月">&nbsp;</a></span><span class="year">'+s+"年"+o+'月</span><span class="close"></span></div><table><tr><th class="weeken">日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class="weeken">六</th></tr>',k=0;d-1>k;k++){k%7==0&&(y+="<tr>");var _=i.getFullYear()+"-"+this.strpad(i.getMonth()+1)+"-"+this.strpad(i.getDate()),T=(i.getTime(),n.strpad(i.getDate()));y+=u>k||k>=h+u?'<td><div class="detail"></div></td>':"allValid"==e?'<td><div class="detail valid" date="'+_+'"><span class="dateNum">'+T+"</span></div></td>":i.getTime()<a||"todayUnvalid"==e&&i.getTime()<f?'<td><div class="detail"><span class="dateNum">'+T+"</span></div></td>":'<td><div class="detail valid" date="'+_+'"><span class="dateNum">'+T+"</span></div></td>",k%7==6&&(y+="</tr>"),i.setTime(i.getTime()+864e5)}return y+="</table></div>"},outputDate:function(t){var e=this;t||(t=this.gettoday()),t=10==t.length?t.substring(0,7):t;var n=new Date;n.setHours(0,0,0,0),n=n.getTime();var a=t+"-01";a=a.split("-"),a=a.join("/");var r=new Date(a),i=r.getMonth()+1,s=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),o=s,c=r.getDay(),l=t+"-"+s;l=l.split("-"),l=l.join("/");var d=new Date(l);s+=r.getDay()+(7-d.getDay()),r.setTime(r.getTime()-864e5*r.getDay());for(var h=[],u=[],m=0;s-1>m;m++){var p={},f=r.getFullYear()+"-"+this.strpad(r.getMonth()+1)+"-"+this.strpad(r.getDate()),v=e.strpad(r.getDate());p.weeken=m%7,c>m?(p.day="",p.month=i-1):m>=o+c?(p.day="",p.month=i+1):r.getTime()<n?(p.day=v,p.date=f,p.today="before",p.month="current",p.yearmonth=t):r.getTime()==n?(p.day=v,p.date=f,p.today="today",p.month="current",p.yearmonth=t):(p.day=v,p.date=f,p.today="after",p.month="current",p.yearmonth=t),u.push(p),7==u.length&&(h.push(u),u=[]),r.setTime(r.getTime()+864e5)}return h},getnowdate:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1;n=this.strpad(n);var a=t.getDate();return a=this.strpad(a),e+"-"+n+"-"+a},nextday:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),r=new Date(e,n,0),i=r.getDate(),s=a+1;return s>i&&(s="01",n++,n>12&&(n="01",e++)),s=this.strpad(s),n=this.strpad(n),e+"-"+n+"-"+s},nextMonth:function(t){return this._siblingMonth(t,"next")},prevMonth:function(t){return this._siblingMonth(t,"prev")},_siblingMonth:function(t,e){t=t||"",t=7==t.length?t:10==t.length?t.substring(0,7):this.gettoday().substring(0,7),e||(e="next");var n=t+"-01";n=n.split("-"),n=n.join("/"),n=new Date(n);var a=new Date(n.getFullYear(),n.getMonth()-1,1),r=a.getFullYear()+"-"+this.strpad(a.getMonth()+1),i=new Date(n.getFullYear(),n.getMonth()+1,1),s=i.getFullYear()+"-"+this.strpad(i.getMonth()+1);return"next"==e?s:r},gettoday:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1;n=this.strpad(n);var a=t.getDate();return a=this.strpad(a),e+"-"+n+"-"+a},getCurYearmonth:function(){return $("#calendarHead").attr("data-date")}};t.exports=n},17:function(t,e,n){n(19);var a=n(13),r=new Function,i=RichBase.extend({selected:{},curYearmonth:"",init:function(t){var t=t||{};this.container=t.container||$('<div id="calendar-pop-container" class="calendar-pop-contaienr"></div>').appendTo($("body")),this.containerID=this.container.attr("id"),this.selected[this.containerID]=[],this.mult="boolean"==typeof t.mult?t.mult:!1,this.tpl=t.tpl||n(23),this.template=_.template(this.tpl),this.maskID=this.containerID+"-mask",this.mask=$("#"+this.maskID),this.mask.length||(this.mask=$('<div id="'+this.maskID+'" class="calendar-mask"></div>'),this.mask.appendTo($("body"))),this.bindEvents()},bindEvents:function(){var t=this;this.container.on("click",".calendar-td",function(e){return t.onTdClick(t,e),!1}),this.container.on("click",".monthNavBtn",function(e){return t.onMonthBtnClick(t,e),!1}),this.mask.on("click",function(e){t.close()})},showDate:function(t,e){var n=this,e=e||{},a=this.containerID,t=t||this.getYearMonth(),i=t.substring(0,7),s=this.container,o=e.onBefore||r,c=e.onAfter||r;n.fire("showDate.before",t),o();var l=this.render(i);s.html(l),n.fire("showDate.after",t),c(),this.setCurYearmonth(i),setTimeout(function(){$("#"+a+"-calendar-td-"+t).addClass("selected")},10)},onTdClick:function(t,e){var n=t.mult,a=$(e.currentTarget);if(a.hasClass("empty"))return!1;var r=a.attr("data-day"),i=a.attr("data-date"),s=a.attr("data-week"),o=a.attr("data-yearmonth");a.toggleClass("selected");var c=a.hasClass("selected")?"select":"cancel";n||(t.container.find(".calendar-td").removeClass("selected"),"select"==c&&a.addClass("selected"));var l={tarDom:a,type:c,date:i,week:s,day:r,yearmonth:o},d=t.selected[t.containerID];if("select"==c)n||d.splice(0,1),d.push(l);else for(var h in d){var u=d[h],m=u.tarDom.attr("data-date");if(i==m){d.splice(h,1);break}}t.setCurYearmonth(o+"-"+r),t.fire("click",l)},onMonthBtnClick:function(t,e){var n=$(e.currentTarget),r=t.getCurYearmonth(),i=n.hasClass("next")?a.nextMonth(r):a.prevMonth(r);t.showDate(i)},getYearMonth:function(t){var t=t||a.gettoday(),e=10==t.length?t.substring(0,7):t;return e},render:function(t){if(!t)return"";var e=this.containerID,n=a.outputDate(t),r=this.template({data:{containerID:e,yearmonth:t,dates:n}});return r},getCurYearmonth:function(){return this.curYearmonth},setCurYearmonth:function(t){this.curYearmonth=t,$("#"+this.containerID+"-top-calendar-date").text(this.curYearmonth)},position:function(t){var e=t.top,n=t.left;this.container.css({top:e,left:n})},show:function(t,e){this.container.show(),this.showDate(t,e),this.mask.show()},close:function(){this.container.hide(),this.mask.hide()}});t.exports=i},18:function(t,e){},19:function(t,e){},21:function(t,e){},23:function(t,e){t.exports='<%\r\n    var yearmonth=data.yearmonth,dates=data.dates;\r\n    var containerID = data.containerID;\r\n    var ym = yearmonth.split("-");\r\n    var year = ym[0];\r\n    var month = ym[1];\r\n%>\r\n<div id="<%=containerID%>-topCalendar" class="calendarHead">\r\n    <div class="con"><span id="<%=containerID%>-top-calendar-date" class="top-calendar-date"></span></div>\r\n    <a id="<%=containerID%>-monthNavBtnNext" class="monthNavBtn next" href="javascript:void(0)"><i class="iconfont">&#xe60d;</i></a>\r\n    <a id="<%=containerID%>-monthNavBtnPrev" class="monthNavBtn prev" href="javascript:void(0)"><i class="iconfont">&#xe60c;</i></a>\r\n</div>\r\n<div id="<%=containerID%>-calendar-panel-<%=yearmonth%>" class="calendar-panel">\r\n    <table id="calendar-table-<%=yearmonth%>"  class="calendar-table">\r\n        <thead id="<%=containerID%>-calendar-thead-<%=yearmonth%>" class="calendar-thead">\r\n        <th data-yearmonth="<%=yearmonth%>" data-week="0">\r\n            <label for="calendar-weeken-checkbox-<%=yearmonth%>-0">日</label>\r\n        </th>\r\n        <th data-yearmonth="<%=yearmonth%>" data-week="1">\r\n            <label for="calendar-weeken-checkbox-<%=yearmonth%>-1">一</label>\r\n        </th>\r\n        <th data-yearmonth="<%=yearmonth%>" data-week="2">\r\n            <label for="calendar-weeken-checkbox-<%=yearmonth%>-2">二</label>\r\n        </th>\r\n        <th data-yearmonth="<%=yearmonth%>" data-week="3">\r\n            <label for="calendar-weeken-checkbox-<%=yearmonth%>-3">三</label>\r\n        </th>\r\n        <th data-yearmonth="<%=yearmonth%>" data-week="4">\r\n            <label for="calendar-weeken-checkbox-<%=yearmonth%>-4">四</label>\r\n        </th>\r\n        <th data-yearmonth="<%=yearmonth%>" data-week="5">\r\n            <label for="calendar-weeken-checkbox-<%=yearmonth%>-5">五</label>\r\n        </th>\r\n        <th data-yearmonth="<%=yearmonth%>" data-week="6">\r\n            <label for="calendar-weeken-checkbox-<%=yearmonth%>-6">六</label>\r\n        </th>\r\n        </thead>\r\n        <tbody id="<%=containerID%>-calendar-tbody-<%=yearmonth%>" class="calendar-tbody">\r\n            <%_.each(dates,function(tr){%>\r\n                <tr>\r\n                    <%_.each(tr,function(td){%>\r\n                        <%\r\n                            var date = td.date;\r\n                            var day = td.day;\r\n                            var weeken = td.weeken;\r\n                            var yearmonth = td.yearmonth;\r\n                        %>\r\n                        <%if(day){%>\r\n                            <td class="calendar-td day" data-day="<%=day%>" data-date="<%=date%>" data-yearmonth="<%=yearmonth%>" data-week="<%=weeken%>" id="<%=containerID%>-calendar-td-<%=date%>">\r\n                                <div class="tdCon">\r\n                                    <span class="dayNum"><%=day%></span>\r\n                                </div>\r\n                            </td>\r\n                        <%}else{%>\r\n                            <td class="calendar-td empty"></td>\r\n                        <%}%>\r\n                    <% }) %>\r\n                </tr>\r\n             <% }) %>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n'},25:function(t,e){t.exports='<% _.each(data,function(item,index){ %>\r\n<li class="orderItem" id="orderItem-<%=item.ordernum%>" data-ordernum="<%=item.ordernum%>">\r\n    <div class="oTit">\r\n        联系人：<span class="contactor"><%=item.ordername%></span><span class="mobile">电话：<%=item.ordertel%></span>\r\n        <% if(item.status!=0){ %>\r\n            <span class="flag status_<%=item.status%>"><%={\r\n                "0" : "未使用",\r\n                "1" : "已使用",\r\n                "2" : "已过期",\r\n                "3" : "已取消",\r\n                "4" : "凭证码被替代",\r\n                "5" : "被终端撤销(已取消)",\r\n                "6" : "被终端撤销(已使用)",\r\n                "7" : "已部分使用"\r\n            }[item.status]%></span>\r\n        <% } %>\r\n        <span class="flag pmode_<%=item.paystatus%>"><%={\r\n            0 : "景区到付",\r\n            1 : "已支付",\r\n            2 : "未支付"\r\n        }[item.paystatus]%></span>\r\n    </div>\r\n    <div class="itemCon">\r\n        <div class="ltCon">\r\n            <p class="line">\r\n                <span class="lt">订单号：<span class="vhidden">订</span></span>\r\n                <span class="rt"><%=item.ordernum%></span>\r\n            </p>\r\n            <p class="line">\r\n                <span class="lt">下单时间：</span>\r\n                <span class="rt"><%=item.ordertime%></span>\r\n            </p>\r\n            <p class="line">\r\n                <span class="lt">游玩时间：</span>\r\n                <span class="rt"><%=item.begintime%></span>\r\n            </p>\r\n        </div>\r\n        <div class="inCon">\r\n            <!-- refund_audit=0:支持改单验证 -->\r\n            <!-- refund_audit=1:不支持改单验证 -->\r\n            <% if(item.refund_audit==1){ %>\r\n                <p style="text-align:right; margin-bottom:5px; color:#e12424" class="refundTip">*退票需审核，不支持改单验证</p>\r\n            <% } %>\r\n            <% var tickets=item.tickets;%>\r\n            <% if(tickets && tickets.length){ %>\r\n                <ul class="ticketUl">\r\n                    <% _.each(tickets,function(ticket,ind){ %>\r\n                        <li class="ticketLi clearfix">\r\n                            <div class="inpCtrol">\r\n                                <% var readonly = item.refund_audit==0 ? "" : "readonly";%>\r\n                                <input class="tinp countInp" type="text" value="<%=ticket.tnum%>"\r\n                                       <%=readonly%>\r\n                                       data-ptype="A"\r\n                                       data-maxnum="<%=ticket.tnum%>"\r\n                                       data-mainordernum="<%=tickets[0].ordernum%>"\r\n                                       data-ordernum="<%=ticket.ordernum%>"/>\r\n                                <span class="zhang">张</span>\r\n                            </div>\r\n                            <div class="trnameCol">\r\n                                <p class="tname">【<%=ticket.name%>】</p>\r\n                                <p class="bt">\r\n                                    共<em class="tnum total_tnum"><%=ticket.tnum_s%></em>张\r\n                                    <i class="vt"></i>\r\n                                    <%\r\n                                        var has_terminal=ticket.tnum_s-ticket.tnum;\r\n                                        if(has_terminal<0) has_terminal=0;\r\n                                    %>\r\n                                    <% var dcls = ticket.status!=3 ? "inline" : "none"; %>\r\n                                    <span style="display:<%=dcls%>">已使用<em class="tnum has_terminal_tnum"><%=has_terminal%></em>张</span>\r\n                                    <i class="vt"></i>\r\n                                    待验证<em class="tnum un_terminal_tnum"><%=ticket.tnum%></em>张\r\n                                </p>\r\n                            </div>\r\n                        </li>\r\n                    <% }) %>\r\n                </ul>\r\n                <div style="display:none" class="checkMethodBox">\r\n                    <!-- 如果支持分批验证，则默认选中保留余票 -->\r\n                    <!-- 如果不支持分批验证，则默认选中取消余票 -->\r\n                    <%\r\n                        var checked={\r\n                                cancel_last : item.batch_check==1 ? "" : "checked",\r\n                                save_last : item.batch_check==1 ? "checked" : ""\r\n                            };\r\n                    %>\r\n                    <% if(item.ptype!="F"){ %>\r\n                        <input type="radio" <%=checked.cancel_last%> name="check_method" value="0" id="check_method_<%=item.ordernum%>_0"/><label style="margin-right:15px" for="check_method_<%=item.ordernum%>_0">取消余票</label>\r\n                        <input type="radio" <%=checked.save_last%> name="check_method" value="1" id="check_method_<%=item.ordernum%>_1"/><label for="check_method_<%=item.ordernum%>_1">保留余票</label>\r\n                    <% }else{ %> <!--套票的子票只能保留余票，不能取消余票-->\r\n                        <input type="radio" <%=checked.save_last%> name="check_method" value="1" id="check_method_<%=item.ordernum%>_1"/><label for="check_method_<%=item.ordernum%>_1">保留余票</label>\r\n                    <% } %>\r\n                </div>\r\n                <div class="doActionBox">\r\n                    <%\r\n                        var checkBtnCls = "";\r\n                        var orderStatus = item.status;\r\n                        var pmode = item.pmode;\r\n                        var payStatus = item.paystatus;\r\n                        if(orderStatus==1 || orderStatus==3 || orderStatus==5 || orderStatus==6 || (payStatus==2 && pmode!=4)){\r\n                            //已使用｜已取消｜被终端撤销(已取消)｜被终端撤销(已使用)|未支付\r\n                            //不能验证\r\n                            //已过期的订单(status==2)admin与普通帐号均可验证\r\n                            checkBtnCls = "disable";\r\n                        }\r\n                    %>\r\n                    <a class="checkBtn <%=checkBtnCls%>" data-ptype="<%=item.ptype%>" href="javascript:void(0)" data-mainordernum="<%=tickets[0].ordernum%>">验 证</a>\r\n                    <% if(item.endtime){ %>\r\n                        <span class="termTimeWrap"><input readonly class="termTimeInp" type="text" value="<%=item.endtime%>"/><i class="iconfont">&#xe65b;</i></span>\r\n                    <% } %>\r\n                    <span class="errorTip"></span>\r\n                </div>\r\n                <% if(item.pmode==4){ %>\r\n                    <p class="payTypeTip">请先确认游客已现场付费，然后给予验证</p>\r\n                <% } %>\r\n            <% } %>\r\n        </div>\r\n    </div>\r\n</li>\r\n<% }) %>'},50:function(t,e,n){var a=n(9),r=n(25),i=n(17),s=RichBase.extend({init:function(){this.listUl=$("#myOrderList"),this.template=_.template(r),this.calendar=new i,this.bindEvents()},dateInp:null,bindEvents:function(){var t=this;this.listUl.on("click",".checkBtn",function(e){t.onCheckBtnClick(t,e)}),this.listUl.on("focus",".countInp",function(e){t.onCountInpFocus(t,e)}),this.listUl.on("blur",".countInp",function(e){t.onCountInpBlur(t,e)}),this.listUl.on("click",".termTimeWrap",function(e){var n=$(e.currentTarget).find(".termTimeInp"),a=n.val(),r=n.offset();t.calendar.show(a,{onBefore:function(){t.dateInp=n,t.calendar.position({top:r.top+$(e.currentTarget).height()+2,left:r.left-6})}})}),this.calendar.on("click",function(e){t.dateInp.val(e.date),t.calendar.close()})},onCountInpFocus:function(t,e){var n=$(e.currentTarget);$.trim(n.val());n.attr("data-lastval",n.val())},onCountInpBlur:function(t,e){var n=$(e.currentTarget),a=(1*$.trim(n.val()),n.attr("data-lastval")),r=(1*n.attr("data-maxnum"),t.validate_countInp(n));return r?void 0:n.val(a)},onCheckBtnClick:function(t,e){var n=$(e.currentTarget);if(n.hasClass("disable"))return!1;var r=n.parents(".inCon"),i=n.attr("data-mainordernum"),s=a.getSalerid(),o=r.find("input[type=radio]:checked").val(),c=r.find(".ticketUl .ticketLi"),l=function(){var t={},e=0;return c.each(function(){var n=$(this),a=n.find(".countInp"),r=a.attr("data-ordernum"),i=a.val();e+=1*i,t[r]=i}),0==e?0:t}(),d=r.find(".termTimeInp").val()||"",h=r.find(".errorTip");return 0==l?1==c.length?alert("验证票数不能为0"):alert("验证票数不能全为0"):void a.terminal({check_method:o,salerid:s,ordernum:i,list:l,rtime:d},{loading:function(){h.hide(),n.addClass("disable").text("正在验证...")},removeLoading:function(){n.removeClass("disable").text("验 证")},success:function(e){PFT.Help.AlertTo("success",'<p style="width:200px">验证成功</p>'),t.query(a.getSalerid(),$("#termSearInp").val())},unlogin:function(t){h.show().html('登录状态已过期，请重新<a style="margin:0 2px;" href="dlogin_n.html">登录</a>')},fail:function(t){n.text("重新验证"),h.show().html(t.msg)}})},query:function(t,e){var n=this;a.queryOrder(t,e,{loading:function(){n.render("loading",null)},removeLoading:function(){n.render("removeLoading",null)},success:function(t){var e=t.orders;for(var a in e){var r=e[a];r.batch_check=1,r.refund_audit=0;var i=r.tickets;for(var s in i){var o=i[s],c=o.batch_check,l=o.refund_audit;0==c&&(r.batch_check=0),1==l&&(r.refund_audit=1)}}n.render("success",t)},empty:function(t){n.render("empty",t)},fail:function(t){n.render("fail",t)},unlogin:function(t){n.render("unlogin",t)}})},setCountInpMax:function(){this.listUl.find(".countInp").each(function(){var t=$(this),e=t.parents(".ticketLi"),n=1*e.find(".un_terminal_tnum").text();t.attr("data-maxnum",n)})},validate_countInp:function(t){var e=1*t.val(),n=0,a=1*t.attr("data-maxnum");return!(!PFT.Help.isPositiveNum(e,!0)||n>e||e>a)},render:function(t,e){var n=this.listUl,r="";if("loading"==t)r='<li class="sta loading"><img class="loadingImg" src="'+a.LOADING_IMG+'" alt=""/><span class="t">请稍后...</span></li>',n.html(r);else if("removeLoading"==t)n.html("");else if("success"==t)r=this.template({data:e.orders}),n.html(r);else if("empty"==t)n.html('<li class="sta empty"><span class="t">查无匹配订单</span></li>');else if("unlogin"==t)n.html('<li class="sta unlogin"><span class="t">未登录或登录状态已过期，请重新<a style="margin:0 3px;" href="dlogin_n.html">登录</a></span></li>');else if("fail"==t){var i=e.msg||a.AJAX_ERROR_TEXT;n.html('<li class="sta fail"><span class="t">'+i+"</span></li>")}}});t.exports=s},51:function(t,e,n){var a=n(9),r=RichBase.extend({statics:{SEARCH_FLAG:!0,cacheData:null},EVENTS:{click:{"":"onContainerClick",".productListBox":"onProductListBoxClick",".listUl .pItem":"onItemClick"},keyup:{".searchInp":"onSearchInpKeyup"}},PRODUCT_COUNT_TRIGGER_SEARCH:50,cacheData:null,init:function(t){var e=this;this.container=t.container,this.selectBox=this.container.children(),this.searchBox=this.container.find(".searchBox"),this.listUl=this.container.find(".listUl"),this.searchInp=this.container.find(".searchInp"),this.triggerInp=$("#prodSearchInp");var n=a.getSid();this.triggerInp.on("click",function(){return n?!1:void e.showSelect()}),a.fetchProduct({sid:n},{loading:function(){e.showProdStatus(),$("#prodBoxStatus").html('<img class="loading" src="'+a.LOADING_IMG+'"/><span class="t">正在加载产品...</span>')},removeLoading:function(){e.hideProdStatus()},success:function(t){var r=t.list;e.statics.cacheData=r,e.render(r),n||!a.checkIsAdmin()&&r.length<50?e.searchBox.hide():e.searchBox.show(),setTimeout(function(){e.listUl.children().first().trigger("click")},10)},empty:function(t){e.showProdStatus(),$("#prodBoxStatus").show().html('<span class="t">没有产品...</span>')},fail:function(t){alert(t.msg||a.AJAX_ERROR_TEXT)}})},onContainerClick:function(t,e){t.closeSelect()},onProductListBoxClick:function(t,e){e.stopPropagation(),e.preventDefault()},onSearchInpKeyup:function(t,e){var n=t.searchInp,a=n.val(),r=t.filterData(a);t.render(r)},onItemClick:function(t,e){var n=$(e.currentTarget),a=n.attr("data-id"),r=n.attr("data-salerid"),i=n.attr("data-terminal"),s=n.text(),o=n.attr("data-img");n.addClass("active").siblings().removeClass("active"),$("#term_prodId").text(a),$("#term_termNum").text(i),$("#term_prodNum").text(r),t.triggerInp.val(s),t.loadPhotoImg(a,o),t.closeSelect()},filterData:function(t){var e=this.statics.cacheData,n=[];if(!t)return e;for(var a in e){var r=e[a],i=r.title;i.indexOf(t)>-1&&n.push(r)}return n},posSelect:function(){var t=this.triggerInp,e=t.offset();this.selectBox.css({left:e.left,top:e.top+36})},showSelect:function(){this.container.show(),this.searchInp.focus(),this.posSelect()},closeSelect:function(){this.container.hide()},showProdStatus:function(){$("#prodPhoto").hide(),$("#prodMsg").hide(),$("#prodBoxStatus").show()},hideProdStatus:function(){$("#prodPhoto").show(),$("#prodMsg").show(),$("#prodBoxStatus").hide()},loadPhotoImg:function(t,e){if(!e)return!1;var n=$("#prodPhoto"),a=$("#photoImg"+t),r=n.children(".loading");$(r).attr("src",e),a.length?a.show().siblings().hide():PFT.Help.LoadImage(n,e,{loading:function(){n.children(".loading").show().siblings().hide()},success:function(e,n,a){e.children().hide(),a=$(a),a.attr("id","photoImg"+t).attr("width",e.width()).attr("height",e.height()).show().appendTo(e)},error:function(){n.children(".error").show().siblings().hide()}})},render:function(t){var e=this.buildHtml(t);e||(e='<li style="height:100px; line-height:100px; text-align:center; border-bottom:0 none">没有匹配数据</li>'),this.listUl.html(e)},buildHtml:function(t){var e="";for(var n in t){var a=t[n],r=a.id,i=a.salerid,s=a.terminal,o=a.imgpath,c=a.title||"无标题产品";e+='<li class="pItem" data-id="'+r+'" data-salerid="'+i+'" data-terminal="'+s+'" data-img="'+o+'">'+c+"</li>"}return e}});t.exports=r}});
//# sourceMappingURL=terminal.all.js.map