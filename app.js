const express=require('express')
const app=express()
const fs=require('fs')
const path = require('path')
const url=require('url')
// 设置页面模板的位置
// __dirname 代表程序运行的根目录
app.set('views',path.join(__dirname,'views'))
// d:workplace\Ajax\views
// 模板引擎设置为ejs
app.set('view engine','ejs')


app.get('/',(req,res)=>{
  res.render('index')
})
app.get('/api',(req,res)=>{
  //  let data={
  //   name:'小飞侠',
  //   city:'北京',
  //   company:'新浪'
  // }
  // // 发送一个json数据作为相应结果 跟res.send作用一样
  // res.json(data)
  // res.render('index')
  console.log(req.url)
  // url.parse解析url
  let query=url.parse(req.url).query;
  console.log(query);
  let sex=query[query.length-1];
  console.log(sex)
  let users=[];
  if(sex==1){
    users.push({
     name: '小飞侠',
     city: '北京',
     company: '新浪'
   })
  }else{
    users.push({
     name: '谢苗',
     city: '广州',
     company: '微信'
   })

  }
  // console.log(users);
 
  res.json(users)
})
app.listen(3000);
