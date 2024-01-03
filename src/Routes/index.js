const express= require('express')//importing express library into this file 
const router= express.Router()//to handling routes creating a new object 

const CouponRoutes=require('./Coupons')//importing coupons routes in this varaible
const userRoutes=require('./User')

router.use('/coupons',CouponRoutes)//if this route hit by a user it calls coupon route handler
router.use('/user',userRoutes)

module.exports=router