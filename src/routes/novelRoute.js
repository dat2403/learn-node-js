import express from "express";
import NovelModel from "../models/NovelModel.js";
import createResponse from "../utils/BaseResponse.js";
import {successMessage} from "../utils/Const.js";

const router = express.Router()


router.get('/', async (req, res) => {
    const novels = await NovelModel.find({})
    res.json(createResponse(successMessage, novels))
})

export default router
