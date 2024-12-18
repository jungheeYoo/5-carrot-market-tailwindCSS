// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {},
//   plugins: [],
// };
// export default config;

// //////////////////////////////////////////////////
// // ✅ 3-10. JIT - just in time

// // 🔶 content: []
// // Tailwind compiler 가 class name을 찾을 위치를 알고 있는 이유는
// // 여기서 just in time compiler 에게
// // pages, components, app 경로에서 검색하도록 지시함
// // 어느 폴더든, 어느 파일이든, 확장자가 js,ts,jsx,tsx,mdx 인 것
// // 따라서 컴퍼일러는 이 장소들의 안을 보게 되고
// // 그리고 찾아낸 모든 class name에 대해 생성을 시도 함
// // 이것이 tailwind.config.ts에 존재하는 이유이다
// // 만약 여길 지우면, 컴파일러는 class name 을 검색하고 있지 않음
// // 그래서 그 코드의 어떤 것이든 전혀 생성되지 않는다
// // ✨ 또한 just in time 컴파일러 덕분에 나만의 class name을 생성할 수 있다

// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       margin: {
//         tomato: '120px',
//       },
//       borderRadius: {
//         'sexy-name': '11.11px',
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

//////////////////////////////////////////////////
// ✅ 3-12. Plugins

// plugin 이 하는 일은
// base layer 와 utilities layer 와 components layer를 확장한다
// 만약 누군가가 tailwind를 사용하여 좋은 components를 공유하고 싶다면
// components를 globals.css여기에 복사 붙여넣기 하는 대신
// 여기서 plugin을 설치만 하면 된다
// 그럼 plugin은 자동으로 새 components 나 유틸리티 베이스 reset을 주입할 것이다
// ✨ daisyUI 추천

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      margin: {
        tomato: '120px',
      },
      borderRadius: {
        'sexy-name': '11.11px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;

// npm i @tailwindcss/forms 설치 후 플러그인에 넣으면 됨
