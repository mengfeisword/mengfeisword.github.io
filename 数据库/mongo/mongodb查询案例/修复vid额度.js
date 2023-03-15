// 初始化三个表的税额

var tables = ['stat_district', 'stat_disc_acc', 'stat_disc_merge']
tables.forEach(
    table => {db.getCollection(table).find({}).forEach(
        doc => {db.getCollection(table).updateOne({_id: doc._id}, {
          $set: {
            'buyVIDTaxAmount': NumberDecimal(0),
            'directBuyVIDTaxAmount': NumberDecimal(0),
            'fissionBuyVIDTaxAmount': NumberDecimal(0),
            'deductibleItems.buyVIDTaxAmount': NumberDecimal(0),
            'deductibleItems.directBuyVIDTaxAmount': NumberDecimal(0),
            'deductibleItems.fissionBuyVIDTaxAmount': NumberDecimal(0),
          }
        })})})



//删除stat_record
db.getCollection('stat_record').deleteMany({'item': 'buyVIDTaxAmount'})
db.getCollection('stat_record').deleteMany({'item': 'directBuyVIDTaxAmount'})
db.getCollection('stat_record').deleteMany({'item': 'fissionBuyVIDTaxAmount'})
db.getCollection('stat_record').deleteMany({
  'item': 'deductibleItems.buyVIDTaxAmount'
})
db.getCollection('stat_record').deleteMany({
  'item': 'deductibleItems.directBuyVIDTaxAmount'
})
db.getCollection('stat_record').deleteMany({
  'item': 'deductibleItems.fissionBuyVIDTaxAmount'
})
