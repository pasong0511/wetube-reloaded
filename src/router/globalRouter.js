import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";
//export const로 꺼내온 실제 이름을 그대로 써야함

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

//글로벌 라우터 익스포트 : 
//누구든 globalRouter.js를 임포트 하면 globalRouter 자체를 임포트 하게 된다.
export default globalRouter;