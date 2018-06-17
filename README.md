## Exam frontend client

[![Build Status](https://travis-ci.org/Vasary/exam_frontend.svg?branch=master)](https://travis-ci.org/Vasary/exam_frontend) [![CodeFactor](https://www.codefactor.io/repository/github/vasary/exam_frontend/badge)](https://www.codefactor.io/repository/github/vasary/exam_frontend)

### Features
- Registration
- Login
- Repeatable test
- Test result
- Show advertisement


### Install on production
```
version: '3'

services:
  nginx:
    container_name: exam-nginx
    image: vasary/exam-frontend:latest
    ports:
      - 80:80
      - 443:443
    command: nginx -g "daemon off;"

```