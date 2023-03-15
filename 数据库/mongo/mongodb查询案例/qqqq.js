内部赋值

db.getCollection('ad_conf').find().forEach(function(item){
    db.getCollection('ad_conf').update({"id":item.id},{ $set:{"sort":item.id}})
})