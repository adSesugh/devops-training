from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get('/')
def root():
    return 'TALENT PLUS'

if __name__ == "__main__":
    uvicorn.run(host='0.0.0.0')
