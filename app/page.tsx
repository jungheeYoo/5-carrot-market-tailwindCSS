// //////////////////////////////////////////////////
// // ✅ 3-1. IntelliSense

// export default function Home() {
//   return <main></main>;
// }

// //////////////////////////////////////////////////
// // ✅ 3-2. Card Component

// // ✨ h-screen 은 화면의 높이인 100% viewport height 를 제공

// export default function Home() {
//   return (
//     <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
//       <div className="bg-white shadow-lg p-5 rounded-2xl w-full">
//         <div className="flex justify-between items-center">
//           <div className="flex flex-col">
//             <span className="text-gray-600 font-semibold -mb-1">
//               In transit
//             </span>
//             <span className="text-4xl font-semibold">Coolblue</span>
//           </div>
//           <div className="size-12 rounded-full bg-orange-400" />
//         </div>
//         <div className="my-2 flex items-center gap-2">
//           <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full ">
//             Today
//           </span>
//           <span>9:30-10:30</span>
//         </div>
//         <div className="relative">
//           <div className="bg-gray-200 absolute rounded-full w-full h-2" />
//           <div className="bg-green-400 absolute rounded-full w-2/3 h-2" />
//         </div>
//         <div className="flex justify-between items-center mt-5 text-gray-600">
//           <span>Expected</span>
//           <span>Sorting center</span>
//           <span>In transit</span>
//           <span className="text-gray-400">Delivered</span>
//         </div>
//       </div>
//     </main>
//   );
// }

// //////////////////////////////////////////////////
// // ✅ 3-3. Modifiers

// // ✨ Modifiers 는 다크 모드나 라이트 모드에 반응할 수 있게 만들어줌
// // 🔶 modifiers 사용 방법
// // 스페이스를 치는 순간 modifiers 를 확인할 수 있다
// // modifiers 는 항상 끝에 : 콜론을 갖고 있다
// // modifier 는 특정 조건이고 그 뒤에 따라오는 것이 그 조건이 참일 때 적용될 CSS 가 되는 것
// // 🔶 Tailwind CSS 에는 두 가지의 다크 모드 사용 방법이 있음
// // 1. 사용자의 기본 설정을 따라가는 것. 사용자의 시스템이 다크라면 다크 모드로 따라가는 것
// // 2. class 의 이름을 통해서 구현하는 방법

// export default function Home() {
//   return (
//     <main className="bg-gray-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600">
//         <div className="flex justify-between items-center">
//           <div className="flex flex-col">
//             <span className="text-gray-600 font-semibold -mb-1 dark:text-gray-300">
//               In transit
//             </span>
//             <span className="text-4xl font-semibold dark:text-white">
//               Coolblue
//             </span>
//           </div>
//           <div className="size-12 rounded-full bg-orange-400" />
//         </div>
//         <div className="my-2 flex items-center gap-2">
//           <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full transition hover:bg-green-500 hover:scale-125">
//             Today
//           </span>
//           <span className="dark:text-gray-100">9:30-10:30</span>
//         </div>
//         <div className="relative">
//           <div className="bg-gray-200 absolute rounded-full w-full h-2" />
//           <div className="bg-green-400 absolute rounded-full w-2/3 h-2" />
//         </div>
//         <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300 ">
//           <span>Expected</span>
//           <span>Sorting center</span>
//           <span>In transit</span>
//           <span className="text-gray-400 dark:text-gray-500">Delivered</span>
//         </div>
//       </div>
//     </main>
//   );
// }

//////////////////////////////////////////////////
// ✅ 3-4. Tailwind Variables
// 검색창 컴포넌트 구현
// input 스타일 꾸미기
// focus, active state
// ring class
// 가상 요소 선택 (placeholder 같은 것..)

// ✨ Tailwind 에는 변수를 지정하는 class 타입도 존재한다.
// 마우스 올렸을 때 --tw 라고 적힌 것을 본다면 대부분의 경우 직접 조정할 수 있다

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 ">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
        <input
          className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none">
          Search
        </button>
      </div>
    </main>
  );
}
