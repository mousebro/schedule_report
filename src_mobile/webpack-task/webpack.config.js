/**
 * Author: huangzhiyang
 * Date: 2016/7/11 11:17
 * Description: ""
 */
var webpack = require('webpack');
var path = require("path");
var env = require("../../task-webpack/getNodeENV");
var plugins = require("../../task-webpack/getPlugins")(env);
var output = require("../../task-webpack/getOutput")(env);
var ROOT_URL = "./src_mobile";
var config = require("../../task-webpack/config")({
	entry : {
		//"mb.index.c" : path.resolve(ROOT_URL,"C/index/index.es6"),
		//"mb.pdetail.c" : path.resolve(ROOT_URL,"C/pdetail/index.es6"),
		"mb.booking.c_debug" : path.resolve(ROOT_URL,"C/booking/index.es6")
	},
	output : output,
	plugins : plugins
});
module.exports = config;