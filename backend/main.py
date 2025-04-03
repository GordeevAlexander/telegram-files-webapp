from fastapi import FastAPI, UploadFile
import os

app = FastAPI()

@app.post("/upload")
async def upload_file(file: UploadFile):
    os.makedirs("user_files", exist_ok=True)
    with open(f"user_files/{file.filename}", "wb") as buffer:
        buffer.write(await file.read())
    return {"status": "ok"}
