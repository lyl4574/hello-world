--������ѯ
db.getCollection('bond_quotes').find({"_id":31533});
db.getCollection('bond_quotes').find({"instShort":"����","userName":"��11"});

db.getCollection('bond_quotes').find({"_id":{$gt:31528}});
db.getCollection('bond_quotes').find({"_id":{$lt:31529}});
--in or
db.getCollection('bond_quotes').find({"_id":{$in:[31529,31528]}});
db.getCollection('bond_quotes').find({$or:[{"_id":31528},{"_id":31529}]});

--��ȡ���б�
db.getCollectionInfos();
--��ȡ����
db.bond_quotes.count();
db.bond_quotes.find({"_id":{$in:[31529,31528]}});
db.bond_quotes.find({"_id":{$gt:22,$lt:35}});

--���� 1����-1����
db.bond_quotes.find().sort({"_id":-1}).limit(10,5);
--��ҳ
db.bond_quotes.find().sort({_id:-1}).limit(5).skip(5);

--����
db.bond_quotes.aggregate([{$group:{_id:"$userName",num:{$sum:1}}}])
db.bond_quotes.aggregate({$group:{_id:"$userName",num:{$sum:1}}})

--distinct
db.bond_quotes.distinct('userName')

-��ʾ���ݿ��б�
show dbs

--�鿴�Ƿ���master
db.isMaster()





