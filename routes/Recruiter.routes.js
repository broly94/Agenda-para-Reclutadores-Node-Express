import { Router } from "express";
const router = Router();

import { getRecruiter, postRecruiter, putRecruiter, deleteRecruiter, getRecruiters } from '../controllers/recruiterController.js';

router
    .route('/')
    .get(getRecruiters)
    .post(postRecruiter)
    
    
router
    .route('/:id')
    .get(getRecruiter)
    .put(putRecruiter)
    .delete(deleteRecruiter)

export {
    router as recruiterRoutes
}