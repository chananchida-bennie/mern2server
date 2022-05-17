const express = require("express")
const router = express.Router()
const {create,getAllblogs,singleBlog} =require("../controllers/blogController")

router.post('/create',create)
//การเรียกใช้งาน
router.get('/blogs',getAllblogs)
router.get('/blog/:slug',singleBlog)


module.exports=router