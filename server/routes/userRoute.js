import express from 'express';
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavourites, toFav } from '../controllers/userCntrl.js';
import jwtcheck from '../config/auth0Config.js';
const router = express.Router()

router.post("/register", jwtcheck, createUser)
router.post("/bookVisit/:id", bookVisit)
router.post("/allbookings", getAllBookings)
router.post("/removeBooking/:id", cancelBooking)
router.post("/toFav/:rid", toFav)
router.post("/allFav", getAllFavourites)
export {router as userRoute};


