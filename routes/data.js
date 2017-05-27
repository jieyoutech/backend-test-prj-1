var express = require('express');
var db = require('./db');
//var stringifyObject = require('stringify-object');
var router = express.Router();

var data=[
    {   id:'001',
        name: '海友深圳罗湖口岸火车站酒店',address: '深圳市罗湖区沿河南路1052号',
        image: 'hotel01.jpg',
        price: 158,
    },
    {   id:'002',
        name: '全季深圳会展中心酒店',address:'深圳市福田区福中路17号国际人才大厦', 
        image:'hotel02.jpg',
        price: 258,
    },
    {   id:'003',
        name:'汉庭深圳宝安海雅缤纷城酒店',address:'深圳市宝安六区建安一路龙江一巷6号', 
        image:'hotel03.jpg',
        price: 200,
    },
    {id:'004',
        name:'全季深圳东门酒店',address:'深圳市罗湖区深南东路2103号', 
        image:'hotel04.jpg',
        price: 158,
    },
    {id:'005',
        name:'怡莱深圳罗湖新秀古玩城酒店',address:'广东省深圳市罗湖区新秀路口古玩城5栋怡莱酒店',
        image:'hotel05.jpg',
        price: 358,
    }
    ];
    
/* GET hotel list */
router.get('/hotel', function(req, res, next) {
  res.json(data);
});

/* GET user account */
router.get('/account/:tel', function(req, res, next) {
    var tel = req.params.tel;
    var json = db.read("user", tel);
    res.json(json);
});

/* post user account */
router.post('/account/:tel', function(req, res, next) {
    var tel = req.params.tel;
    var json = req.body;
    db.save("user", tel, json);
    res.json({code:0, message:'ok'});
});


/* GET user room */
router.get('/room/:tel', function(req, res, next) {
    var tel = req.params.tel;
    var json = db.read("room", tel);
    res.json(json);
});

/* post user room */
router.post('/room/:tel', function(req, res, next) {
    var tel = req.params.tel;
    var json = req.body;
    db.save("room", tel, json);
    res.json({code:0, message:'ok'});
});


module.exports = router;
