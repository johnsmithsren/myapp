/**
 * Created by renjm on 17/2/16.
 */
var qr=require('qr-image');
var url=require('url');
var model = require('../model/qr_codeMod');
var qr_codeMod=new model();
var logger=require('logger').createLogger();
var qr_code;
//exports.getcode = function(req, res) {
//    var text = url.parse(req.url, true).query.text;
//    console.log('#####');
//    console.log(req.query);
//    console.log(req.query.text);
//    try {
//        var img = qr.image(text,{size :10});
//        res.writeHead(200, {'Content-Type': 'image/png'});
//        img.pipe(res);
//    } catch (e) {
//        res.writeHead(414, {'Content-Type': 'text/html'});
//        res.end('<h1>414 Request-URI Too Large</h1>');
//    }
//};
qr_code = (function() {
    function qr_code(options) {
        this.options = options;
    }
    qr_code.prototype.getmess= function(req, res) {
        return qr_codeMod.getmess(req.query, function(result) {
            return res.send(result);
        });
    };
    qr_code.prototype.getcode= function(req, res) {
        var text='http://www.demaciaspower.cn:3000/getmess?name=renjm';
        var img = qr.image(text,{size :10});
        res.writeHead(200, {'Content-Type': 'image/png'});
        img.pipe(res);
        //return qr_codeMod.getcode(req.query, function(result) {
        //    return res.send(result);
        //});
    };
    //        var text = url.parse(req.url, true).query.text;
    //        console.log('#####');
    //        console.log(req.query);
    //        console.log(req.query.text);
    //        try {
    //            var img = qr.image(text,{size :10});
    //            res.writeHead(200, {'Content-Type': 'image/png'});
    //            img.pipe(res);
    //        } catch (e) {
    //            res.writeHead(414, {'Content-Type': 'text/html'});
    //            res.end('<h1>414 Request-URI Too Large</h1>');
    //        }
    //};
    return qr_code;

})();
module.exports = qr_code;