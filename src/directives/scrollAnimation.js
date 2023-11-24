// const animatedScrollObserver = new IntersectionObserver(
//     (entries, animatedScrollObserver) => {
//         entries.forEach((entry) => {
//             console.log('Intersection Observer triggered:', entry);

//             if(entry.isIntersecting) {
//                 console.log('Element is intersecting!');

//                 console.log("ennnnnn");
//                 entry.target.classList.remove('before-enter');
//                 entry.target.classList.add('enter');
//                 animatedScrollObserver.unobserve(entry.target);
//             }
//         });
//     }
// );

// export default {
//     bind(el){
//         el.classList.add("before-enter");
//         animatedScrollObserver.observe(el);
//     }
// };

