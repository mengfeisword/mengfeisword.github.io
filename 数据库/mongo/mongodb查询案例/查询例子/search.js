
// 按照类型来统计

// 第一种方法
db.getCollection('server_user_trans').aggregate([
    {$match: {"districtCode" : "JUNE2020","tranType" : 1}},
    {
        $group: {
            _id: null,
            count: {$sum: "$amount"}
        }
    },
]);

// 第二种方法
db.getCollection('server_user_trans').aggregate([
    {$match: {"districtCode" : "JUNE2020"}},
    {
        $group: {
            _id: {"tranType" : "$tranType"},
//						{tranType:"$tranType"}
            count: {$sum: "$amount"}
        }
    },
]);







//统计余额
// 第一种
db.getCollection('server_user_account').aggregate([
    {$sort: {'_id': -1}},
    {
        $lookup:{
            "localField":   "userId",
            "from":         "server_user",
            "foreignField": "id",
            "as":           "user_details",
        }
    },
    {$unwind: "$user_details"},
    {$match: {"user_details.districtCode" : "JUNE2020"}},
    {
        $group: {
            _id: null,
            count: {$sum: "$balance"}
        }
    },
]);



// 第二种:
searchInfo =  db.getCollection('server_user').find({"districtCode" : "JUNE2020"})

//userid数组
var listObj = [];
while (searchInfo.hasNext()) {
    var doc = searchInfo.next();
    listObj.push(doc.id)
}
// 打印出来
//print(listObj);

//查询存在的
db.getCollection('server_user_account').aggregate([
    {$match: {"userId" : {"$in":listObj}}},
    {
        $group: {
            _id: null,
            count: {$sum: "$balance"}
        }
    },
]);



//购买自己的片子
db.getCollection('server_user_trans').aggregate([
    {$match: {"districtCode" : "JUNE2020","tranType" : 6}},
    {
        $lookup:{
            "localField":   "videoId",
            "from":         "video_base",
            "foreignField": "id",
            "as":           "video_details",
        }
    },
    {$unwind: "$user_details"},
]);



