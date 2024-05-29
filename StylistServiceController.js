const StylistService = require("./StylistServiceModel");

const GetStylistServices = async (req, res) => {
  try {
    const response = await StylistService.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Stylist services are not found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetStylistServiceById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await StylistService.findById(id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Stylist service is not found by ID" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const CreateStylistService = async (req, res) => {
  try {
    const { name, shortDescription, fullDescription, price } = req.body;

    const existingStylistService = await StylistService.findOne({ name });

    if (existingStylistService) {
      return res
        .status(404)
        .json({ message: "Stylist service already exists", success: false });
    }

    const createdStylistService = new StylistService({
      name,
      shortDescription,
      fullDescription,
      price,
    });

    await createdStylistService.save();

    return res.status(201).json({
      message: "StylistService successfully created",
      success: true,
      data: createdStylistService,
    });
  } catch (error) {
    return res.status(404).send({ success: false, msg: error });
  }
};

module.exports = {
  GetStylistServices,
  GetStylistServiceById,
  CreateStylistService,
};
