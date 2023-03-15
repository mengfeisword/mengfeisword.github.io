db.getCollection('stat_district')
  .find({
    newAndRechargeOrderCount: {
      $type: 'decimal'
    }
  })
  .forEach(function (x) {
    x.newAndRechargeOrderCount = NumberLong(x.newAndRechargeOrderCount);
    db.getCollection('stat_district').save(x)
  })


// 处理stat_district
db.getCollection('stat_district').find({}).forEach(function (x) {
  x.newAndRechargeOrderCount = NumberLong(x.newAndRechargeOrderCount);
  x.deductibleItems.newAndRechargeOrderCount =
    NumberLong(x.deductibleItems.newAndRechargeOrderCount);
  x.newAndRechargeAmount = NumberDecimal(x.newAndRechargeAmount);
  x.deductibleItems.newAndRechargeAmount =
    NumberDecimal(x.deductibleItems.newAndRechargeAmount);
  db.getCollection('stat_district').save(x)
})



// 处理stat_disc_acc
db.getCollection('stat_disc_acc').find({}).forEach(function (x) {
  x.newAndRechargeOrderCount = NumberLong(x.newAndRechargeOrderCount);
  x.deductibleItems.newAndRechargeOrderCount =
    NumberLong(x.deductibleItems.newAndRechargeOrderCount);
  x.newAndRechargeAmount = NumberDecimal(x.newAndRechargeAmount);
  x.deductibleItems.newAndRechargeAmount =
    NumberDecimal(x.deductibleItems.newAndRechargeAmount);
  db.getCollection('stat_disc_acc').save(x)
})


// 处理stat_disc_merge
db.getCollection('stat_disc_merge').find({}).forEach(function (x) {
  x.newAndRechargeOrderCount = NumberLong(x.newAndRechargeOrderCount);
  x.deductibleItems.newAndRechargeOrderCount =
    NumberLong(x.deductibleItems.newAndRechargeOrderCount);
  x.newAndRechargeAmount = NumberDecimal(x.newAndRechargeAmount);
  x.deductibleItems.newAndRechargeAmount =
    NumberDecimal(x.deductibleItems.newAndRechargeAmount);
  db.getCollection('stat_disc_merge').save(x)
})





//////////////////////////////////////////////////////////////////
db.getCollection('wdrl_disc_order').find({}).forEach(function (x) {
  x.payMoney2222 = x.payMoney
  db.getCollection("wdrl_disc_order").save(x);
});



db.getCollection('wdrl_disc_order').find({
  payMoney2222: {
    $type: "decimal"
  }
}).forEach(function (x) {
  x.payMoney2222 = parseFloat(x.payMoney2222.toJSON()["$numberDecimal"])
  db.getCollection("wdrl_disc_order").save(x);
});

//////////////////////////////////////////////////
db.getCollection('wdrl_disc_order').find({
  payMoney: {
    $type: "decimal"
  }
}).forEach(function (x) {
  x.payMoney1111 = parseFloat(x.payMoney.toJSON()["$numberDecimal"])
  db.getCollection("wdrl_disc_order").save(x);
});



db.getCollection('wdrl_disc_order').find({
  payMoney: {
    $type: "decimal"
  }
}).forEach(function (x) {
  x.payMoney = NumberLong(parseInt(x.payMoney.toJSON()["$numberDecimal"]))
  print(x.payMoney)
  db.getCollection("wdrl_disc_order").save(x);
});