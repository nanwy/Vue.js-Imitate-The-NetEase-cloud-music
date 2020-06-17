var express = require('express');
var router = express.Router();
const { login1,loginInfo } = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/resModel')

/* GET home page. */
router.post('/login', function(req, res, next) {
  const { username,password } = req.body
  // const { username,password } = req.query
  const result = login1(username,password)
  return result.then(data => {
    if(data.username){
      //操作cookie
      // res.setHeader('Set-Cookie',`userId=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
      req.session.username = data.username
      req.session.realname = data.realname
      // set(req.sessionId, req.session)
      // console.log('session',req.session);
      
      res.json(new SuccessModel(data.username))
      return
    }
    res.json(new ErrorModel('登录失败'))
  })
});

router.get('/userinfo', function(req, res, next) {
  console.log('name',req.session.username);
  
  const result = loginInfo(req.session.username)
  return result.then(data => {
    if(data.isadmin === 'admin'){
      req.session.isadmin = data.isadmin
      // req.session.username = data.username
      res.json(new SuccessModel(data.isadmin))
      return
    }
    res.json(new ErrorModel('登录失败'))
  })

});

router.get('/logout', function(req, res, next){
  // 备注：这里用的 session-file-store 在destroy 方法里，并没有销毁cookie
  // 所以客户端的 cookie 还是存在，导致的问题 --> 退出登陆后，服务端检测到cookie
  // 然后去查找对应的 session 文件，报错
  // session-file-store 本身的bug  
 
  req.session.destroy(function(err) {
    if(err){
      res.json({ret_code: 2, ret_msg: '退出登录失败'});
      return;
    }
     
    // req.session.loginUser = null;
    // console.log(identityKey);
    
    res.clearCookie('identityKey');
    res.redirect('/');
  });
});
// router.get('/login-test', (req,res,next) => {
//   if(req.session.username){
//     res.json({
//       errno:0,
//       msg:'登陆成功'
//     })
//     return
//   }
//   res.json({
//     erron:-1,
//     msg:'未登录'
//   })
// })
// router.get('/session-test', (req,res,next) => {
//   const session = req.session
//   if(session.viewNum == null){
//     session.viewNum = 0
//   }

//   session.viewNum++
//   res.json({
//     viewNum:session.viewNum
//   })
// })

module.exports = router;