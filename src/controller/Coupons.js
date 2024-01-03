const coupons = [
    {
      name: "pongal sale coupon",
      code: "FRGT-JJNV",
      ValidityStarts: "2024-01-03",
      Validityends: "2024-01-14",
      status: "active",
      value: 100,
      discout: 10,
    },
    {
      name: "new year sale coupon",
      code: "FRFR-JDDV",
      ValidityStarts: "2024-01-01",
      Validityends: "2024-01-03",
      status: "active",
      value: 50,
      discout: 5,
    }
  ];

  const getAllCoupons=(req, res) => {
    res.status(200).send({ message: "data fetched successfulley",
    count:coupons.length,
     coupons });
  };

  const getCouponbyId=(req, res) => {
    let id = Number(req.params.id);
    if (id !== NaN && id < coupons.length) {
      res
        .status(200)
        .send({ message: "Data fetched sucessfully", coupon: coupons[id]
      });
    } 
    else 
    {
      res.status(400).send({
        message: "invalid id",
      });
    }
  };

  const createCoupon=(req,res)=>{
    let data = req.body
    let filteredData = coupons.filter((e)=>e.code===data.code)
    if(filteredData.length===0)
    {
        coupons.push(data)
        res.status(201).send({
            message:"Coupon created successfully"
        })
    }
    else
    {
        res.status(400).send({
            message:"Coupon Code Already Exists" 
        })
    }
}

  const editCoupon=(req, res) => {
    let id = Number(req.params.id);
    if (id < coupons.length && id !== NaN) {
      coupons.splice(id, 1, req.body);
      res.status(201).send({ message: "coupon edited sucessfully" });
    } else {
      res.status(400).send({ message: "invalid action" });
    }
  };

  const deleteCoupon=(req, res) => {
    let id = Number(req.params.id);
    if (id < coupons.length && id !== NaN) {
      coupons.splice(id, 1);
      res.status(201).send({ message: "coupon deleted sucessfully" });
    } else {
      res.status(400).send({ message: "invalid action" });
    }
  }

  module.exports = {
    getAllCoupons,
    getCouponbyId,
    createCoupon,
    editCoupon,
    deleteCoupon
}