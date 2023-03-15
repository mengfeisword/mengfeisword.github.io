var searchInfo = db.getCollection('invit_stat').find({})
//        var searchInfo = statDb.invit_stat.find()

function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

// print("sfsaf")
while (searchInfo.hasNext()) {
    var doc = searchInfo.next();

    //             print(doc.uid)
    doc.lv1Count = 0
    var num = GetRandomNum(10000, 25000);

    print(num)
}












// function GetRandomNum(Min, Max) {
//     var Range = Max - Min;
//     var Rand = Math.random();
//     return (Min + Math.round(Rand * Range));
// }

// db.getCollection('user_stat').find({
//     "uid": {
//         "$lt": 3000000
//     },
//     "item": "vidIncome",
//     "count": {
//         "$gt": 1180000
//     }
// }).sort({
//     "count": -1
// }).limit(53).forEach(function (x) {
//     x.count = GetRandomNum(200, 50000);
//     db.getCollection('user_stat').save(x)
// })



// db.getCollection('invit_stat').find({
//     "uid": {
//         "$lt": 3000000
//     },
//     "lv1Count": {
//         "$gt": 25000
//     }
// }).sort({
//     "lv1Count": -1
// }).limit(53).forEach(function (x) {
//     x.lv1Count = GetRandomNum(10000, 25000);
//     db.getCollection('invit_stat').save(x)
// })


//////////////////

// 推广达人更改
function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

db.getCollection('invit_stat').find({
    "uid": {
        "$lt": 3000000
    }
}).sort({
    "lv1Count": -1
}).limit(53).forEach(function (x) {
    x.lv1Count = GetRandomNum(10000, 25000);
    db.getCollection('invit_stat').save(x)
})

// 收益达人更改

function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

db.getCollection('user_stat').find({
    "uid": {
        "$lt": 3000000
    },
    "item": "vidIncome"
}).sort({
    "count": -1
}).limit(53).forEach(function (x) {
    x.count = GetRandomNum(50000, 1180000);
    db.getCollection('user_stat').save(x)
})


// NO1、 203112 桃花岛工作室
// NO2、 203117 猫耳社
// NO3、 203099 盗撮人工作室
// NO4、 200045 麻豆传媒映画


{
    "item": "vidIncome",
    "uid": NumberLong("203112"),
    "count": NumberLong("1197595"),
    "createdAt": ISODate("2020-05-08T09:20:30.645Z"),
    "recordAt": ISODate("2019-11-05T16:00:00.000Z"),
    "updatedAt": ISODate("2020-05-08T09:20:30.645Z")
}


{
    "item": "vidIncome",
    "uid": NumberLong("203117"),
    "count": NumberLong("1196695"),
    "createdAt": ISODate("2020-05-08T09:20:30.645Z"),
    "recordAt": ISODate("2019-11-05T16:00:00.000Z"),
    "updatedAt": ISODate("2020-05-08T09:20:30.645Z")
}

{
    "item": "vidIncome",
    "uid": NumberLong("203099"),
    "count": NumberLong("1194598"),
    "createdAt": ISODate("2020-05-08T09:20:30.645Z"),
    "recordAt": ISODate("2019-11-05T16:00:00.000Z"),
    "updatedAt": ISODate("2020-05-08T09:20:30.645Z")
}


{
    "item": "vidIncome",
    "uid": NumberLong("200045"),
    "count": NumberLong("1191595"),
    "createdAt": ISODate("2020-05-08T09:20:30.645Z"),
    "recordAt": ISODate("2019-11-05T16:00:00.000Z"),
    "updatedAt": ISODate("2020-05-08T09:20:30.645Z")
}