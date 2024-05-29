const {
  GetStylistServices,
  GetStylistServiceById,
  CreateStylistService,
} = require("./StylistServiceController");
const router = require("express").Router();

router.get("/getStylistServices", GetStylistServices);
router.get("/getStylistServiceById/:id", GetStylistServiceById);
router.post("/createStylistService", CreateStylistService);
module.exports = router;
