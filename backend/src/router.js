const express = require("express");

const router = express.Router();

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const vehiclesControllers = require("./controllers/vehiclesControllers");
const userControllers = require("./controllers/userControllers");
const reservationControllers = require("./controllers/reservationControllers");

router.post("/api/register", hashPassword, userControllers.register);
router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/api/reservation", verifyToken, reservationControllers.browse);
router.get("/api/reservation/:id", reservationControllers.read);
router.post("/api/reservation", verifyToken, reservationControllers.add);
router.put("/api/reservation/:id", verifyToken, reservationControllers.edit);
router.delete(
  "/api/reservation/:id",
  verifyToken,
  reservationControllers.destroy
);
router.get("/api/vehicles", vehiclesControllers.browse);
router.get("/api/vehicles/:id", vehiclesControllers.read);
router.post("/api/vehicles", vehiclesControllers.add);
router.put("/api/vehicles/:id", verifyToken, vehiclesControllers.edit);
router.delete("/api/vehicles/:id", verifyToken, vehiclesControllers.destroy);

router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post("/api/users", hashPassword, verifyToken, userControllers.add);
router.put("/api/users/:id", hashPassword, verifyToken, userControllers.edit);
router.delete("/api/users/:id", verifyToken, userControllers.destroy);

module.exports = router;
