const image = [
  1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];

const filter = [
  4, 6, 7, 3, 6, 55, 64, 3, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 4, 5, 6, 1, 2, 0
];
let m = 6;
let n = 7;
let newImage = [];
let trackIndex = [8, 9, 10, 11, 12];
for (let i = 0; i < 20; i++) { //6 if 3*3
  let res = trackIndex[i] + n;
  trackIndex.push(res);
}

for (let i = 0; i < image.length; i++) {
  if (trackIndex[i] || trackIndex[i] == 0) {
    let x = image[trackIndex[i]];
    newImage.push(x);
  }
}

let sum = 0;
for (let i = 0; i < newImage.length; i++) {
  let result = newImage[i] * filter[i];
  sum += result;
}
console.log(sum);
