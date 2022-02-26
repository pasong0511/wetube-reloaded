import express from "express";
import morgan from "morgan";
//라우더 임포트
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";

const app = express();
const PORT = 4000;

//1. morgan logger 생성 및 설정
const logger = morgan("dev");

//pug 사용
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);         //loger함수는 middleware를 return

//2. 라우터 사용
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);




//서버 시작
const handleListenig = () => console.log(`Server listenig on port http://localhost:${PORT} 🚀`);

app.listen(4000, handleListenig);