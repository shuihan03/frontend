let ipconfig=require("./ipconfig.js")
let apis={
    getLifeList:"life",
    getUserList:"user",
}
for(var item in apis)
{
   
    apis[item]=ipconfig.ip+"/"+apis[item];
}

module.exports=apis;