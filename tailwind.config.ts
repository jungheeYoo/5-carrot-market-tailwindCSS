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

// // ---------------------------------------------------------
// // 3-10
// // JIT - just in time
// // Tailwind CSS 작동 방식
// // just in time compiler
// // Tailwind CSS 파일이 아니라 compiler 이다
// // 우리가 파일을 저장할 때마다 Tailwind 는 파일을 스캔해서 class name들을 추출하고
// // 추출한 것을 CSS 코드로 변환한다. 그래서 class name을 생성할 수 있는 것이다
// // arbitrary value(대체 값)
// // 원하는 스타일을 찾을 수 없거나, 사이즈 등을 찾을 수 없을 때 [] 대괄호 안헤 필요한 것을 넣음
// // theme 확장 가능

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

// // content: []
// // Tailwind compiler 가 class name을 찾을 위치를 알고 있는 이유는
// // 여기서 just in time compiler 에게
// // pages, components, app 경로에서 검색하도록 지시함
// // 어느 폴더든, 어느 파일이든, 확장자가 js,ts,jsx,tsx,mdx 인 것
// // 따라서 컴퍼일러는 이 장소들의 안을 보게 되고
// // 그리고 찾아낸 모든 class name에 대해 생성을 시도 함
// // 이것이 tailwind.config.ts에 존재하는 이유이다
// // just in time 컴파일러 덕분에 우리만의 class name을 생성할 수 있다

// ---------------------------------------------------------
// 3-12
// Plugins

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

// plugin 이 하는 일은
// base layer 와 utilities layer 와 components layer를 확장한다
// 만약 누군가가 tailwind를 사용하여 좋은 components를 공유하고 싶다면
// components를 여기에 복사 붙여넣기 하는 대신
// plugin을 설치만 하면 된다
// 그럼 plugin은 자동으로 새 components 나 유틸리티 베이스 reset을 주입할 것이다
