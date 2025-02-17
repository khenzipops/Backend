import { Router } from "express";
import ApiResponse from "../interfaces/ApiResponse";
import mailRouter from "./mail/mail.route";

const router = Router();

router.get<ApiResponse>("/", (req, res) => {
    res.json({
        message: "API - 👋🌎🌍🌏"
    });
});

router.use("/mail", mailRouter);

export default router;
