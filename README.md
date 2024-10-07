# 목차
1. [폴더 구조](##-📂-폴더-구조)
2. [개발 기간](##-🕰️-개발-기간)
3. [챔피언 리스트](###-1-챔피언-정보-제공)
   1. [챔피언 리스트](####-1-1-챔피언-리스트)
   2. [챔피언 상세페이지](####-1-2-챔피언-상세페이지)
4. [아이템 정보 제공](###-2-아이템-정보-제공)
5. [로테이션 챔피언 리스트](###-3-로테이션-챔피언-리스트)
6. [API 호출](##-🔗-API-호출)

7. 
# 롤 정보 제공 사이트

Next.js와 TypeScript를 사용하고 라이엇 API를 활용한 챔피언 정보 및 아이템 정보를 제공해주는 프로젝트

![캡처ㅁㄴㅇㄴㅁ](https://github.com/user-attachments/assets/419f0a4d-f564-4f5a-8a16-435b529fe51b)

## 🕰️ 개발 기간

2024.10-01 ~ 2024.10.08 -> 추가 업데이트 예정

## 📂 폴더 구조
```
src
├── app
│   ├── api
│   │   └── rotation
│   │       └── route.ts
│   ├── champions
│   │   ├── [id]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── items
│   │   └── page.tsx
│   ├── rotation
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── champion
│   │   ├── ChampionCard.tsx
│   │   ├── ChampionList.tsx
│   │   ├── ChampionSkill.tsx
│   │   └── ChampionSkin.tsx
│   └── item
│       ├── ItemClient.tsx
│       ├── ItemList.tsx
│       ├── ItemTree.tsx
│       └── SelectedItemDetail.tsx
├── server
│   ├── ChampAction.ts
│   └── ItemActions.ts
├── types
│   ├── Champion.ts
│   ├── ChampionRotation.ts
│   └── Item.ts
└── utils
    └── API.ts
```


## 기능

### 1 챔피언 정보 제공

#### 1-1 챔피언 리스트

![ㅁㅇㄴ](https://github.com/user-attachments/assets/71e55825-f999-46e8-90ca-73d308307ee5)

League of Legend 에서 사용 가능한 챔피언의 리스트를 전부 확인 가능합니다

#### 1-2 챔피언 상세페이지 
![상세](https://github.com/user-attachments/assets/4b524dd3-9ce6-4543-8cb5-969a3656183b)

챔피언의 대한 배경을 확인 가능하며

![상세2](https://github.com/user-attachments/assets/0cf754cd-076f-4e7c-a08a-336e5cb6bc53)

챔피언의 스킬 또한 확인이 가능합니다

![상세3](https://github.com/user-attachments/assets/80e06d72-8537-46ad-a271-8d6eb28fa6c1)

각 챔피언의 스킨 일러스트 또한 확인할 수 있습니다.

### 2 아이템 정보 제공

![아이템](https://github.com/user-attachments/assets/1cf52111-8b15-4deb-b1a3-a7e54ebe19fb)

소환사의 협곡에서 사용 가능한 아이템의 리스트를 제공하며 

각 아이템의 상위 아이템과 하위 아이템을 보여줍니다

상위 아이템 혹은 하위 아이템을 클릭해도 해당하는 아이템의 정보를 확인할 수 있습니다.

### 3 로테이션 챔피언 리스트

![로테이션](https://github.com/user-attachments/assets/34a9220b-c5fd-44b2-90ff-bd85736879d4)

매주 라이엇에서 제공하는 무료 챔피언의 리스트 또한 확인이 가능합니다

```
  const API_KEY = process.env.RIOT_API_KEY;
  const URL = "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";

  const response = await fetch(URL, {
    headers: {
      "X-Riot-Token": API_KEY,
    },
    cache: "no-store",
  });

```

라이엇에서 제공하는 API Key를 발급 받아서 헤더 옵션에 설정을 넣어주고 데이터를 받아왔습니다.
