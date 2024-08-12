# React 시작하기

```

1. Node.js 설치하기

2. 프로젝트를 생성하려는 곳에서 => cd ~/Documents/my-app
npx create-react-app 프로젝트이름 --template typescript

// 폴더 권한 주기
sudo chown -R $USER /Users/jacob/Documents/my-app

// 워닝 없애기
yarn add -D @babel/plugin-proposal-private-property-in-object --legacy-peer-deps --save

// yarn 설치
sudo npm install -g yarn

// typescript
yarn add typescript @types/node @types/react @types/react-dom @types/jest

//typescript init
npx tsc --init

// react route 설치
yarn add react-router-dom

```

# 폴더 구조

```

- public
	- img
	- fonts

- src
	- components
	- interface
	- pages (홈, 로그인, 등)
	- styles (전체적으로 쓰는 스타일)

```

# tsconfig.json

```

{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "CommonJS",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "noImplicitAny": false,
    "typeRoots": ["../node_modules/@types", "../@types"]
  },
  "include": ["src", "tsconfig.paths.json"],
  "extends": "./tsconfig.paths.json",
  "exclude": ["node_modules", "env"]
}


```

# tsconfig.path.json

```

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@pages/*": ["./src/pages/*"],
      "@img/*": ["./public/*"],
      "@root/*": ["./*"]
    },
    "typeRoots": ["./@types", "./node_modules/@types"]
  }
}

```
