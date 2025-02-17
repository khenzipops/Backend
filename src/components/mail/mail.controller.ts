import { Request, Response, NextFunction } from "express";
import { sendEmail } from "../../utils/mailer";
import createError from "http-errors";

export const sendMail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { message, subject, recipients } = req.body;

        const mail = await sendEmail(recipients, subject, message);

        if (mail) {
            return res.status(200).json({ status: 200, message: "Email sent successfully" });
        } else {
            return res.status(400).json({ status: 400, message: "Failed to send email" });
        }
    } catch (e) {
        const error = createError(400, (e as Error).message);
        return next(error);
    }
};
