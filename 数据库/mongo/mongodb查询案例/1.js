db.getCollection('server_user_trans').aggregate([{
    $match: {
      'districtCode': 'TSD',
      'tranType': 6
    }
  },
  {
    $group: {
      _id: null,
      count: {
        $sum: '$systemProfit'
      }
    }
  },
]);



// 充值统计
db.getCollection('server_user_trans').aggregate([{
    $match: {
      'districtCode': 'TSD',
      'tranType':
    }
  },
  {
    $group: {
      _id: null,
      count: {
        $sum: '$systemProfit'
      }
    }
  },
]);


// todo

// TODO




db.getCollection("mw_role").aggregate([{
  "$match": {}
}, {
  "$sort": {
    "_id": -1
  }
}, {
  "$skip": 10
}, {
  "$limit": 10
}, {
  "$lookup": {
    "as": "onlyRole",
    "foreignField": "roleId",
    "from": "mw_acc",
    "localField": "_id"
  }
}, {
  "$project": {
    "_id": 1,
    "acccount": {
      "$size": "$onlyRole"
    },
    "apiMenus": 1,
    "createdAt": 1,
    "desc": 1,
    "isEnb": 1,
    "name": 1,
    "updatedAt": 1
  }
}])