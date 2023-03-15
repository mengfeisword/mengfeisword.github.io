db.getCollection('media_base').aggregate([
  {$sort: {'video.total_profit': -1}}, {$limit: 3}, {
    $project: {
      total_profit: '$video.total_profit',
      userid: '$user.owner',
    }
  },
  {
    //        $lookup:{
    //            "localField":   "userid",
    //            "from":         "media_base",
    //            "foreignField": "user.owner",
    //            "as":           "user_details",
    //        },
    $lookup: {
      'from': 'media_base',
      'pipeline': {
        {'$match': {'user.owner': 'userid'}},
        {'$sort': {'video.total_profit': -1}},
      },
      'as': 'user_details',
    },

    //				{$sort: {'user_details.video.total_profit':
    //-1}},
  },
  //		{$sort: {'user_details.video.total_profit': -1}},
]);



db.getCollection('media_base').aggregate([
  {$sort: {'video.total_profit': -1}}, {$limit: 3}, {
    $project: {
      total_profit: '$video.total_profit',
      userid: '$user.owner',
    }
  },
  {
    $lookup: {
      'from': 'media_base',
      'pipeline': {
        {'match': {'user.owner': '$userid'}},
      },
      'as': 'user_details',
    },

    //				{$sort: {'user_details.video.total_profit':
    //-1}},
  },
  //   //		{$sort: {'user_details.video.total_profit': -1}},
]);



db.getCollection('media_base').aggregate([
  {$sort: {'video.total_profit': -1}},
  {$limit: 3},
  {
    $project: {
      total_profit: '$video.total_profit',
      userid: '$user.owner',
    }
  },
  {
    $lookup: {
      'from': 'media_base',
      'pipeline': [
        {'match': {'user.owner': 'userid'}},
      ],
      'as': 'user_details',
    },
  },
]);



db.getCollection('media_base').aggregate([
  {$sort: {'video.total_profit': -1}},
  {$limit: 3},
  {
    $project: {
      total_profit: '$video.total_profit',
      userid: '$user.owner',
    }
  },
  {
    $lookup: {
      //                "localField":   "userid",
      //								'left':{"$user.owner":"$userid"},
      'from': 'media_base',
      //                "foreignField": "user.owner",
      //								"pipeline":[]
      //								$sort:
      //{'video.total_profit':
      //-1}}
      //								],
      'pipeline': [{'$sort': {'video.total_profit': -1}}],
      'as': 'user_details',
    },

    //    $lookup: {
    //      'from': 'media_base',
    //      'pipeline': [
    //        {'match': {'user.owner': 'userid'}},
    //      ],
    //      'as': 'user_details',
    //    },
  },
]);



db.getCollection('media_base').aggregate([
  {$sort: {'video.total_profit': -1}},
  {$limit: 3},
  {
    $project: {
      total_profit: '$video.total_profit',
      userid: '$user.owner',
    }
  },
  {
    $lookup: {
      'from': 'media_base',
      'let': {'id': '$userid'},
      'pipeline': [
        {'$match': {'$expr': {'$eq': ['$user.owner', '$$id']}}},
        {'$sort': {'video.total_profit': -1}},
        {'$limit': 2},
      ],

      'as': 'user_details',
    },
  },
]);