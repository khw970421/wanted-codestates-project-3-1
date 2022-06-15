# [Project3] 페이히어 과제

## 🚀 배포 링크

https://github-repo-issue.vercel.app/

## 💿 실행 방법

```cmd
$ git clone https://github.com/pre-onboarding-team3/wanted-codestates-project-3-7.git

$ npm install

$ npm run start
```

## 😎 3팀

- 김경봉: Repo 저장&삭제(local캐싱)(팀장)
- 도지현: 페이지네이션
- 김남경: Repo, issue 조회
- 김형욱: 검색 기능
- 노학민: 노티피케이션
- 이산하: 메뉴 탭, 상세보기 컴포넌트
- 양윤성: API & 리덕스

## 🎇사용 기술스택

- Javascript
- React
- React-query
- Redux(thunk)
- axios
- styled-components

## 👩‍💻구현

### Repository 검색 및 페이지네이션

![1](https://user-images.githubusercontent.com/62285862/158803786-08652607-b42f-49a6-bb53-40c492c8009f.gif)

- React-query, axios를 사용하여 데이터를 받는다.(GitHub Open API)

### Repository 등록, 삭제

![2](https://user-images.githubusercontent.com/62285862/158803938-ebb8b2ac-e188-4ea5-8bd2-88a8a5b4f607.gif)

- localStorage를 사용한 등록, 삭제
- 등록, 삭제, 초과 시 안내 메시지를 보여준다.

### Repository 이슈

![3](https://user-images.githubusercontent.com/62285862/158803977-079354fe-cef8-48f0-b087-5f63e0d1a3fe.gif)

- 해당 issue를 클릭하면 Github의 상세 페이지로 이동
- issue 페이지네이션
