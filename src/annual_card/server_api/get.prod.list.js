/**
 * Author: huangzhiyang
 * Date: 2016/6/7 12:10
 * Description: 请求产品列表
 */
var createResponse = require("./__createResponse");
module.exports = function(req,res){
	setTimeout(function(){
		var data = '{"code":200,"data":[{"id":"2633","title":"接口测试产品（仅供测试）","apply_did":"113"},{"id":"2894","title":"mm--测试景点","apply_did":"3385"},{"id":"3221","title":"【测试】周五测试（勿买勿删）","apply_did":"3385"},{"id":"3222","title":"【测试】没那么简单","apply_did":"3385"},{"id":"3236","title":"花果山水帘洞豪华酒店","apply_did":"1433"},{"id":"3504","title":"测试云顶","apply_did":"2867"},{"id":"3726","title":"月球小小半月游12","apply_did":"1433"},{"id":"3740","title":"花果山测试","apply_did":"1433"},{"id":"3755","title":"福州到厦门到泉州","apply_did":"1433"},{"id":"3799","title":"【测试】票付通-先行同步测试","apply_did":"3385"},{"id":"3805","title":"【测试】票付通-先行同步测试2","apply_did":"3385"},{"id":"3807","title":"【测试】景区同步下架","apply_did":"3385"},{"id":"3810","title":"【测试】先行-票付通同步测试1","apply_did":"3385"},{"id":"3817","title":"【测试】先行-票付通同步产品取消同步操作测试1","apply_did":"3385"},{"id":"3819","title":"【测试】先行-票付通同步1103测试","apply_did":"3385"},{"id":"3859","title":"【测试】属性同步测试（先行-票付通）","apply_did":"3385"},{"id":"3891","title":"【测试】套票测试景区子票2","apply_did":"3385"},{"id":"3916","title":"【测试】测试旅游线路一（先行-票付通）","apply_did":"3385"},{"id":"3917","title":"【测试】转分销散客预定测试","apply_did":"3385"},{"id":"4068","title":"【测试】自定义主题产品","apply_did":"1433"},{"id":"4185","title":"【测试】20141117测试1","apply_did":"3385"},{"id":"4193","title":"【测试】20141117测试2（到付测试）","apply_did":"3385"},{"id":"4237","title":"【测试】141118测试1","apply_did":"3385"},{"id":"4360","title":"【测试】营销活动产品（发送凭证码）","apply_did":"3385"},{"id":"4391","title":"【测试】20141117测试2（到付测试3）","apply_did":"3385"},{"id":"4394","title":"【测试】20141120测试已有","apply_did":"3385"},{"id":"4548","title":"【测试】20141126测试","apply_did":"3385"},{"id":"4685","title":"【测试】20141128测试同步","apply_did":"3385"},{"id":"4807","title":"【测试】ABC2","apply_did":"83"},{"id":"4984","title":"【测试】每周五测试套票","apply_did":"3385"},{"id":"5182","title":"【测试】分销酒店ABC","apply_did":"3385"},{"id":"5328","title":"【测试】20141223验证问题","apply_did":"3385"},{"id":"5550","title":"【测试】20141117测试3（联票取消测试）","apply_did":"3385"},{"id":"5566","title":"【测试】淘宝测试转分销四级","apply_did":"83"},{"id":"6020","title":"【测试】0616景区子票第二个","apply_did":"3385"},{"id":"6462","title":"【测试】先行景区ABC","apply_did":"3385"},{"id":"6603","title":"（mm测试）江滨公园","apply_did":"3385"},{"id":"6604","title":"【测试】0215路线发布1","apply_did":"3385"},{"id":"6781","title":"【测试】有效期套票测试","apply_did":"3385"},{"id":"7249","title":"【测试】0326套票（当+当）","apply_did":"3385"},{"id":"8190","title":"淘宝测试产品单票1（误删）","apply_did":"1229"},{"id":"8264","title":"【测试】联票订单测试","apply_did":"3385"},{"id":"9980","title":"【测试】0702演出","apply_did":"3385"},{"id":"10123","title":"【测试】0707套票（提前预订）","apply_did":"3385"},{"id":"10149","title":"（mm测试）接口转分销产品（勿动）","apply_did":"6970"},{"id":"10498","title":"【测试】0722共享景区1","apply_did":"3385"},{"id":"10506","title":"【测试】0723套票1","apply_did":"3385"},{"id":"10521","title":"【测试】0723共享景区1","apply_did":"3385"},{"id":"6792","title":"【测试】0306测试","apply_did":"3385"},{"id":"11523","title":"（mm测试）0910演出","apply_did":"3385"},{"id":"11590","title":"（mm测试）0915景区01","apply_did":"3385"},{"id":"12573","title":"（测试）新版产品预订新产品","apply_did":"3385"},{"id":"13136","title":"测试终端购票延迟","apply_did":"3385"},{"id":"13378","title":"测试景区取消","apply_did":"3385"},{"id":"13396","title":"测试酒店取消","apply_did":"3385"},{"id":"13475","title":"（mm测试）分组价格","apply_did":"6970"},{"id":"13480","title":"（mm测试）分销库存优化2","apply_did":"6970"},{"id":"13486","title":"（mm测试）分销库存优化3","apply_did":"6970"},{"id":"13554","title":"【测试】场馆","apply_did":"28949"},{"id":"13555","title":"（mm测试）演出计调下单","apply_did":"6970"},{"id":"13556","title":"测试演出","apply_did":"28949"},{"id":"13620","title":"测试套票产品，请勿购买","apply_did":"6970"}],"msg":""}';
		res.end(data);
	},1000)
}