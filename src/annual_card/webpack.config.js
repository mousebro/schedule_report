/**
 * Author: huangzhiyang
 * Date: 2016/6/17 16:42
 * Description: ""
 */
var env = "local";
var path = require("path");
var plugins = require("../../getPlugins")(env);
var config = require("../../config")({
	entry : {
		"annual_card_publish_prod_info" : "./src/annual_card/page/publish_prod_info/index.js",
		"annual_card_publish_package_info" : ["./src/annual_card/page/publish_package_info/index.js"],
		"annual_card_entry_card" : ["./src/annual_card/page/entry_card/index.js"],
		"annual_card_makeorder" : ["./src/annual_card/page/makeorder/index.js"]
	},
	output : {
		path : path.join(__dirname, "../../build/"+env+"/"),
		filename: "js/[name]/all.js",
		publicPath : {
			local : "http://static.12301.local/assets/build/local/",
			test  : "http://static.12301.test/assets/build/",
			dev   : "http://static.12301dev.com/assets/build/",
			prod  : "http://static.12301.cc/assets/build/"
		}[env]
	},
	plugins : plugins,
	watch : true
});
module.exports = config;