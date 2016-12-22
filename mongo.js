--条件查询
db.getCollection('bond_quotes').find({"_id":31533});
db.getCollection('bond_quotes').find({"instShort":"建行","userName":"杨11"});

db.getCollection('bond_quotes').find({"_id":{$gt:31528}});
db.getCollection('bond_quotes').find({"_id":{$lt:31529}});
--in or
db.getCollection('bond_quotes').find({"_id":{$in:[31529,31528]}});
db.getCollection('bond_quotes').find({$or:[{"_id":31528},{"_id":31529}]});

--获取所有表
db.getCollectionInfos();
--获取数量
db.bond_quotes.count();
db.bond_quotes.find({"_id":{$in:[31529,31528]}});
db.bond_quotes.find({"_id":{$gt:22,$lt:35}});

--排序 1升序，-1降序
db.bond_quotes.find().sort({"_id":-1}).limit(10,5);
--分页
db.bond_quotes.find().sort({_id:-1}).limit(5).skip(5);

--分组
db.bond_quotes.aggregate([{$group:{_id:"$userName",num:{$sum:1}}}])
db.bond_quotes.aggregate({$group:{_id:"$userName",num:{$sum:1}}})

--distinct
db.bond_quotes.distinct('userName')

-显示数据库列表
show dbs

--查看是否是master
db.isMaster()





