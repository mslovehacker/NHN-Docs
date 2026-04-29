# TOAST Cloud DOCUMENT 작성 Guide

### 문서 위치 및 배포 가이드

##### 언어에 따라 repo 가 다름.  
* ko : https://github.nhnent.com/TOASTCloud/DOCUMENT
* en : https://github.nhnent.com/TOASTCloud/DOCUMENT_en (아직 생성 전)

##### alpha / beta / real 문서 수정
* alpha : alpha QA 단계에서 alpha 문서 수정 (개발자 진행)
* beta : beta QA 단계에서 alpha branch merge (개발자 진행)
* real : real 적용 전 플랫폼사업팀에서 merge

##### alpha / beta / real 문서 배포
###### alpha / beta
* WDI_RTD_Alpha_Beta project 생성됨.
* deploy 를 통한 배포
* 각 개발 담당자들이 deploy 수행
> [참고]
> 배포를 위해서는 deploy 할 alpha / beta 장비에 커버로스 등록이 되어 있어야 합니다.
> linux 접근 권한 상신을 통해 추가해 주세요.

> [참고]
> console.cloud.toast.com 접근 후 project list 에 WDI_RTD_Alpha_Beta 가 보이지 않으면 플랫폼사업팀에 추가 요청해 주세요.

###### real
* WDI_RTD_Real project 생성 됨
* deploy 를 통한 배포
* 플랫폼사업팀이 deploy 수행

##### alpha / beta / real 문서 검수
* alpha / beta : 각 개발팀 및 기술전략팀에서 문서 검수
* real : 플랫폼사업팀에서 문서 검수

### 문서 작성 가이드

##### 문서 종류

###### overview
* 상품의 특장점 및 기능 등을 작성함.

###### Getting Started
* console 을 통한 초기 설정및 전체적인 사용시의 workflow 등에 대한 가이드를 작성함.

###### Developer's Guide
* API 나 SDK 를 제공하는 경우 이에 대한 가이드를 작성함.
* 문서가 매우 길어지는 경우 "[종류] Developer's Guide" 등의 제목으로 가이드를 분리함.
* (예, Promotion Developer's Guide / iOS Developer's Guide)

##### 문서 제목
* 문서의 hierarchy 와 제목은 문서의 맨 앞에 넣는다.
* readthedocs 의 특성상 문서 선택 후 hierarchy 가 눈에 보이지 않아 이런 방법을 사용한다.
* 신규로 추가되는 문서는 기존 문서를 참고하여 작성한다.

##### 목차 레벨
* 큰 목차(##), 작은 목차(###) 로 구성함. (하위 목차가 더 필요한 경우 상황에 맞게 사용함)
* 목차에는 숫자를 붙이지 않음. (예, ## 1.인프라 구성)

##### 문서 내의 그림
* 그림내의 문구는 모두 영어로 작성함.
* 그림은 CDN 에 업로드함.
* CDN FTP 정보 (개발팀 공용)

|id|description|
|---|---|---|
|IP|133.186.131.124|
|Port|22 (사내에서 접속하는 경우)|
|File Protocol|SFTP|
|ID|tcdev|
|PWD|tcdev!@#123|
|foler structure|신규 상품의 경우 folder 생성을 Dooray의 "(TOASTCloud)-개발-문의"(링크) 로 올려주세요.</br>"Doc Image CDN 폴더 생성 요청" 템플릿으로 이슈 등록</br>예) prod_<상품명>|

#####  표/그림 제목
* 표나 그림의 아래-중앙 에 제목을 입력함.
* 표나 그림의 제목에는 숫자를 함께 명기함 (예, [그림1] 프로젝트 상세 화면)

##### 표 작성
* 표는 아래와 같이 | 구분으로 작성함.
* 예시

|컬럼1|컬럼2|컬럼3|
|---|---|---|
|내용1|내용2|내용3</br>내용3-1</br>내용3-2|

##### sample code 삽입
* 추가할 코드의 앞 뒤로 ``` 를 추가함.

```
코드부분
```

##### 주의 / 참고 삽입
* 참고나 주의의 경우 "[참고]" 또는 "[주의]" 를 첫줄에 넣어준다.

> [참고]  
> 참고할 내용을 적습니다.
