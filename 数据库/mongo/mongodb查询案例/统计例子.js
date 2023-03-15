var searchInfo = db.getCollection('server_user').aggregate([
    {$match: {upOneUserId: {$gt: 0}}},
    {
        $group: {
            _id: '$upOneUserId',
            userInfo: {$addToSet: {id: '$id', creatTime: '$createdAt'}}
        }
    },
    //   {$match: {'userInfo.10': {$exists: true}}},
    //   {$match: {'userInfo.20': {$exists: false}}},
    {$sort: {'_id': 1}},
]);



// searchInfo.shellPrint()



mapObj = new Map();
var compareTime = 3 * 60 * 1000;

while (searchInfo.hasNext()) {
    var doc = searchInfo.next();
    var diffcount = 0;

    //  排序
    doc.userInfo.sort(function (a, b) {
        return a.creatTime.getTime() - b.creatTime.getTime()
    });

    for (let i = 1; i < doc.userInfo.length; i++) {
        var diff = doc.userInfo[i].creatTime.getTime() -
            doc.userInfo[i - 1].creatTime.getTime();
        //         print(doc._id.toString())
        //         print(doc.userInfo[i].creatTime.getTime())
        //         print(doc.userInfo[i-1].creatTime.getTime())
        //         print(diff)
        if (diff < 0) {
            print('时间差值有错误！')
        }
        //         计算数量

        if (diff < compareTime) {
            diffcount++
        }
    }
    if (diffcount > 0) {
        mapObj[doc._id.valueOf()] = diffcount
    }
}
//     print(mapObj)
// 转化为数组
var listObj = [];

for (var key in mapObj) {
    //   if (key != '_data') {
    listObj.push([key, mapObj[key]]);
    //   }
}

// 排序，大的在前
listObj.sort(function (a, b) {
    return b[1] - a[1]
});

// 打印出来
print(listObj);
