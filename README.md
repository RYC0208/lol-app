# 롤 정보 제공 사이트

Next.js와 TypeScript를 사용하고 라이엇 API를 활용한 챔피언 정보 및 아이템 정보를 제공해주는 프로젝트

![캡처ㅁㄴㅇㄴㅁ](https://github.com/user-attachments/assets/419f0a4d-f564-4f5a-8a16-435b529fe51b)

## 🕰️ 개발 기간

2024.10-01 ~ 2024.10.08 -> 추가 업데이트 예정

##📂 폴더 구조
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

1. [프로젝트 소개](#프로젝트-소개)
2. [기능](#기능)



