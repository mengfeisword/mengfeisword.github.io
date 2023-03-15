
db.getCollection('server_user_trans').aggregate([
  {$match: {'tranType': 6}},
  {$group: {_id: {'videoId': '$videoId'}, count: {$sum: 1}}},
]);



db.getCollection('server_user_trans').aggregate([
  {$match: {'tranType': 6}},
  {$group: {_id: {'videoId': '$videoId'}, count: {$sum: 1}}},

  {$sort: {'count': -1}},
  {
    $project: {
      userId: '$_id.videoId',
      sumcount: '$count',
    }
  },
]);



db.getCollection('server_user_trans').aggregate([
  {$match: {'tranType': 6, 'videoId': 347238}},
  {$group: {_id: {'isDed': '$isDed'}, count: {$sum: 1}}},
  {$sort: {'count': -1}},
  {
    $project: {
      userId: '$_id.isDed',
      sumcount: '$count',
    }
  },
]);



db.getCollection('server_user_trans').aggregate([
  {$match: {'tranType': 6, 'userId': 347238}},
  {$group: {_id: '$isDed', count: {$sum: 1}}},
  {$sort: {'count': -1}},
  {
    $project: {
      userId: '$_id.isDed',
      sumcount: '$count',
    }
  },
]);



db.getCollection('server_user_trans').aggregate([
  {$match: {'tranType': 6, 'userId': 347238}},
  {$group: {_id: nil, count: {$sum: 1}}},
]);