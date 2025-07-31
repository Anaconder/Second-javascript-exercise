// Part 1: Growing Pains
// const Pi=3.1415;
// const r=5;
// const area=Pi*r*r;
// const parea=0.8;
// const numpl=20;
// const wks=3;


// if((numpl*parea*(2**wks))<=(area*0.5)){
//   console.log('More plants should be planted')
// }else if((numpl*parea*(2**wks))<=(area*0.8)){
//   console.log('The plants should be monitored')
// }else{
//   console.log('The plants should be pruned')
// }

// Part 2: Thinking Bigger
// const Pi=3.1415;
// const r=5;
// const area=Pi*r*r;
// const parea=0.8;
// const numpl=100;
// const wks=10;


// if((numpl*parea*(2**wks))<=(area*0.5)){
//   console.log('More plants should be planted')
// }else if((numpl*parea*(2**wks))<=(area*0.8)){
//   console.log('The plants should be monitored')
// }else{
//   console.log('The plants should be pruned')
//   let newarea=(numpl*parea*(2**wks))
//   console.log(`The new area is ${newarea} square meters`)
//   let diff= newarea-area
//   console.log(`The amount of additional space required is ${diff} square meters`)
//   newradiusq=(newarea/Pi)
//   newradius=Math.sqrt(newradiusq)
//   console.log(`The radius of the expanded garden is ${newradius} meters`)
// }

// Part 3: Errors in Judgement
const Pi=3.1415;
const r=5;
const area=Pi*r*r;
const parea=0.8;
const numpl=100;
const wks=1;
let newarea=(numpl*parea);




try {
  if(newarea<=(area*0.5)){
    console.log('More plants should be planted')
  }else if(newarea<=(area*0.8)){
    console.log('The plants should be monitored')
  }else{
  throw "Error - This exceeds the capacity of the current garden";
}

} catch (err) {
	console.log(err);
} finally {
	console.log('The plants should be pruned');
}