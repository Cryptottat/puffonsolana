from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

# 정적 파일을 서빙하기 위한 경로 설정
app.mount("/static", StaticFiles(directory="static"), name="static")

# Jinja2 템플릿 엔진 설정
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    # index.html을 렌더링하여 반환
    return templates.TemplateResponse("index.html", {"request": request})