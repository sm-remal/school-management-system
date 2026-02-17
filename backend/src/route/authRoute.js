import express from 'express';
import { 
  registerUser, 
  loginUser, 
  logoutUser, 
  refreshAccessToken 
} from '../controllers/authController.js';

const router = express.Router();

// Authentication Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/refresh', refreshAccessToken); // Refresh Token encript

export default router;