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

// //////////////////////////////////////////////////
// // ✅ 3-4. Tailwind Variables
// // 검색창 컴포넌트 구현
// // input 스타일 꾸미기
// // focus, active state
// // ring class
// // 가상 요소 선택 (placeholder 같은 것..)

// // ✨ Tailwind 에는 변수를 지정하는 class 타입도 존재한다.
// // 마우스 올렸을 때 --tw 라고 적힌 것을 본다면 대부분의 경우 직접 조정할 수 있다

// export default function Home() {
//   return (
//     <main className="bg-gray-100 h-screen flex items-center justify-center p-5 ">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
//         <input
//           className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
//           type="text"
//           placeholder="Search here..."
//         />
//         <button className="bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none">
//           Search
//         </button>
//       </div>
//     </main>
//   );
// }

// //////////////////////////////////////////////////
// // ✅ 3-5. Responsive Modifiers
// // 반응형 만들기
// // 사이즈에 따른 배경화면 색상 바꾸면서 반응형 해보기

// export default function Home() {
//   return (
//     <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5 ">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
//         <input
//           className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
//           type="text"
//           placeholder="Search here..."
//         />
//         <button className="bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none md:px-10">
//           Search
//         </button>
//       </div>
//     </main>
//   );
// }

// //////////////////////////////////////////////////
// // ✅ 3-6. Form Modifiers
// // gradient
// // invalid
// // peer - 형제 같은 것

// export default function Home() {
//   return (
//     <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5 ">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
//         <input
//           className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
//           type="email"
//           required
//           placeholder="Email address"
//         />
//         <span className="text-red-500 font-medium hidden peer-invalid:block">
//           Email is required.
//         </span>
//         <button className=" text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none md:px-10 bg-black peer-required:bg-green-500">
//           Log in
//         </button>
//       </div>
//     </main>
//   );
// }

// //////////////////////////////////////////////////
// // ✅ 3-7. State Modifiers
// // 자식 선택자
// // *:
// // has

// export default function Home() {
//   return (
//     <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
//       <div
//         className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none ring ring-transparent transition-shadow
//       has-[:invalid]:ring-red-100"
//       >
//         <input
//           className="w-full rounded-full h-10 bg-gray-200 pl-5  ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
//           type="text"
//           required
//           placeholder="Email address"
//         />
//         <span className="text-red-500 font-medium hidden peer-invalid:block ">
//           Email is required.
//         </span>
//         <button className="text-white py-2 rounded-full active:scale-90  transition-transform font-medium  md:px-10 bg-black ">
//           Log in
//         </button>
//       </div>
//     </main>
//   );
// }

// //////////////////////////////////////////////////
// // ✅ 3-8. Lists and Animations
// // Modifiers
// // odd: , even: 홀짝 스타일 주기
// // first, last
// // empty state : 만약에 비어있다면 무엇을 한다 skeleton 을 만들 수 있음

// // animate
// // animate-bounce
// // animate-spin
// // animate-pulse : skeleton : loaing state 같은 것을 의미, text 가 도착하기 전의 UI의 모습을 보여줌
// // animate-ping : notifications 같은 것에 사용

// export default function Home() {
//   return (
//     <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-3">
//         {['Nico', 'Me', 'You', 'Yourself', ''].map((person, index) => (
//           <div key={index} className="flex items-center gap-5 ">
//             <div className="size-10 bg-blue-400 rounded-full " />
//             <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300">
//               {person}
//             </span>
//             <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative">
//               <span className="z-10">{index}</span>
//               <div className="size-6 bg-red-500 rounded-full absolute animate-ping"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

//////////////////////////////////////////////////
// ✅ 3-9. Group Modifiers
// 부모 state에 따라 자식 스타일을 수정
// group-hover:
// group-focus-within:
// 그룹이 내부에 포커스 된 input을 갖고 있을 때만 true가 됨

export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
        {/* ✨ group-focus-within: */}
        <div className="group flex flex-col">
          <input
            className="bg-gray-100 w-full"
            placeholder="Write your email"
          />
          <span className="group-focus-within:block hidden">
            Make sure it tis a valid email...
          </span>
          <button>Submit</button>
        </div>
        {/* ✨ group-hover: */}
        {/* {['Nico', 'Me', 'You', 'Yourself', ''].map((person, index) => (
          <div key={index} className="flex items-center group gap-5 ">
            <div className="size-10 bg-blue-400 rounded-full " />
            <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300 group-hover:text-red-500">
              {person}
            </span>
            <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative">
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping"></div>
            </div>
          </div>
        ))} */}
      </div>
    </main>
  );
}
