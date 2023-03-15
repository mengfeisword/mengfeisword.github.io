# ssh root@211.149.189.65 -p 22000
# 登录:5hqpenxe

# scp -P 22000 ../ReplicaSet/mongodb_p.conf root@211.149.189.65:/opt/mongodb5
# scp -P 22000 ../ReplicaSet/mongodb_s1.conf root@211.149.189.65:/opt/mongodb5
# scp -P 22000 ../ReplicaSet/mongodb_s2.conf root@211.149.189.65:/opt/mongodb5


# 上传key
# scp -P 22000 ../ReplicaSet/mt.key root@211.149.189.65:/opt/mongodb5


# firewall-cmd --zone=public --add-port=47007/tcp --permanent
# firewall-cmd --zone=public --add-port=47008/tcp --permanent
# firewall-cmd --zone=public --add-port=47009/tcp --permanent

# 查找进程
# ps -ef|grep mongod


mongo -port 47007 --host IP 211.149.189.65

mongodb://211.149.189.65:47007



./mongo mongodb://211.149.189.65:47007
./mongo mongodb://211.149.189.65:47007/?compressors=disabled&gssapiServiceName=mongodb


./mongo mongodb://mtadmin:adminmt@211.149.189.65:47007

mongodb://admin:0pHHVMJE9C7MCczp@202.60.250.137:47017,202.60.250.137:47018,202.60.250.137:47019/local?replicaSet=paofu&maxPoolSize=200&connectTimeout=30

mongodb://admin:0pHHVMJE9C7MCczp@211.149.189.65:47007,211.149.189.65:47008,211.149.189.65:47009/local?replicaSet=repmore&maxPoolSize=200&connectTimeout=30

mongodb://admin:0pHHVMJE9C7MCczp@211.149.189.65:47007,211.149.189.65:47008,211.149.189.65:47009/local?replicaSet=repmore&maxPoolSize=200&connectTimeout=30





mongodump -h 211.149.189.65:47019 -d mtapp -o back

mongoexport -h 211.149.189.65:47019 -uroot -proot --authenticationDatabase admin -d app -c vast -o /home/mongod/backup/vasts.dat

./mongoexport -h 211.149.189.65:47019 -u mtappadmin -p cluNPP2P6JR5ogKB -d mtapp -o ./test



./mongodump -h 211.149.189.65:47019 -u mtappadmin -p cluNPP2P6JR5ogKB -d mtapp -o ./test

./mongorestore -h 211.149.189.65:47007 -u appadmin -p cluNPP2P6JR5ogKB  ./test