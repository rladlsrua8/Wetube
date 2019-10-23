import express from "express";
import routes from "../routes";
import { upload, videoDetail, editVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
