import express from "express";
import Property from "../Models/properties";
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    if(!properties){
        return res.status(200).json({message:"Not Property found"})
    }
    res.json(properties);
  } catch (err) {
    console.log(err)
    res.status(500).json({  message: "something Went Wrong" });
  }
});
router.post("/", async (req, res) => {
  const property = new Property({
    imageUrl: req.body.imageUrl,
    isPopular: req.body.isPopular,
    title: req.body.title,
    location: req.body.location,
    hours: req.body.hours,
    meetingRooms: req.body.meetingRooms,
    facilities: req.body.facilities,
    price: req.body.price,
    currency: req.body.currency,
    isFavorite: req.body.isFavorite,
  });
  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (err) {
    console.log(err)
    res.status(500).json({  message: "something Went Wrong" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property)
      return res.status(404).json({ message: "Property not found" });

    property.imageUrl = req.body.imageUrl;
    property.isPopular = req.body.isPopular;
    property.title = req.body.title;
    property.location = req.body.location;
    property.hours = req.body.hours;
    property.meetingRooms = req.body.meetingRooms;
    property.facilities = req.body.facilities;
    property.price = req.body.price;
    property.currency = req.body.currency;
    property.isFavorite = req.body.isFavorite;

    const updatedProperty = await property.save();
    res.json(updatedProperty);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "something Went Wrong" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property)
      return res.status(404).json({ message: "Property not found" });

    await property.deleteOne({ _id: req.params.id });
    res.json({ message: "Property deleted" });
  } catch (err) {
    res.status(500).json({ message: "something Went Wrong" });
  }
});

export default router;
