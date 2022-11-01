
'use strict'

// *************** 3-dars Array *******************

// M-1
// let n = +prompt('n = ')
// const arr = []
// for (let i = 1; i <= n; i++) {
//     arr.push(i)
// }
// console.log(arr);

// M-2
// let n = +prompt('n = ')
// const arr = []
// for (let i = 1; i <= n; i++) {
//     arr.push(Math.pow(2,i))
// }
// console.log(arr);

// M-3
// let n = +prompt('n = ');
// const arr = []
// let k = 0;
// for (let i = 1; i <= n; i++) {
//     arr.push(i)
//     console.log(`a[${i-1}]: ${arr[i-1]}`);
//     k+=i;
// }
// console.log(k);

// M-4
// let n = +prompt('n = ')
// const arr = [];
// let s=0, k=0;
// for (let i = 0; i <= n; i++) {
//     arr.push(i*10)
//     if(i%2 == 1){
//         s+=arr[i]
//     }
//     if(i%2 == 0 ){
//         k-=arr[i]
//     }
// }
// console.log(arr);
// console.log(s);
// console.log(k);

// M-5
// let n = +prompt('n = ')
// const arr = []
// let s = 0
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`a[${i}] = `))
//     s+=arr[i]
// }
// console.log(arr);
// console.log(s);

// M-6
// let n = +prompt('n = ')
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`a[${i}] = `))
// }
// for (let j = 1; j <= n; j++) {
//     console.log(arr[n-j])    
// }

// M-7
// let ism1 = prompt('a[ism] = ')
// let yosh1 = +prompt('a[yosh] = ')
// let a = [ism1, yosh1]
// let ism2 = prompt('b[ism] = ')
// let yosh2 = +prompt('b[yosh] = ')
// let b = [ism2, yosh2]
// let ism3 = prompt('c[ism]= ')
// let yosh3 = +prompt('c[yosh] = ')
// let c = [ism3, yosh3]
// console.log(a)
// console.log(b)
// console.log(c)
// let farq = Math.abs(a[1] - b[1] - c[1])
// console.log(farq)



// M-8
// let n = +prompt('n = ');
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`a[${i}] = `))
// }
// let k = +prompt('k = ')
// let l = +prompt('l = ')
// let s = 0;
// for (let j = k+1; j < l; j++) {
//        s+=arr[j]
// }   
// console.log(arr)
// console.log(s)

// M-9
// let n = +prompt('n = ')
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`a[${i}] = `))
// }
// console.log(arr)
// let t = arr[0];
// for (let j = 0; j < n; j+=2) {
//    if(arr[j] > t){
//         t=arr[j];
//    }
// }
// console.log(t)

// M-10
// let n = +prompt('n = ')
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`a[${i}] = `))
// }
// console.log(arr)
// let t = arr[0];
// for (let j = 0; j < n; j+=2) {
//    if(arr[j] < t){
//         t=arr[j];
//    }
// }
// console.log(t)

// M-11
// let n = +prompt('n = ')
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`a[${i}] = `))
// }
// console.log(arr)
// let t = arr[1];
// for (let j = 1; j < n; j+=2) {
//    if(arr[j] > t){
//         t=arr[j];
//    }
// }
// console.log(t)

// M-12
// let n = +prompt('n = ')
// const arr = []
// let t = 0;
// let s = null;
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`a[${i}] = `))
//     t+=arr[i]
// }
// s = (t/n)
// console.log(arr)
// console.log(s)

// M-13
// let n = +prompt('n = ')
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`a[${i}] = `))
//     if(i%2 != 0){
//         console.log(arr[i])
//     }
// }
// console.log(arr)

// M-14
// let n = 30;
// let s = 0;
// let arr = []
// for (let i = 1; i <= n; i++) {
//     arr.push(i)
// }
// console.log(arr);
// for (let i = 0; i < n; i++) {
//     for (let j = 1; j <= arr[n-1]; j++) {
//         if(arr[i]%j == 0 && arr[i] != 0){
//             s++;
//         }
//     }
//     if(s > 2){
//       console.log(`a[${i}] = ${arr[i]}`);
//     }
//     s=0;
// }

// M-15
// let n = 30;
// let arr = []
// for (let i = 1; i <= n; i++) {
//     arr.push(i)
// }
// console.log(arr)
// for (let j = 0; j < n; j++) {
//     if(arr[j]%2 != 0){
//         console.log(arr[j])
//     }
// }

// M-16
// let n = prompt('n = ')
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr.push(prompt(`a[${i}] = `))
// }
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]*1 != arr[i]){
//         console.log(arr[i])
//     }
// }


// M-17
// let arr = [2,4,6,7,2,8,11,6];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr.length; j++) {
//         if(i != j && arr[i] == arr[j]){
//             console.log(arr[i])
//             arr.splice(i,1)
//         }
//    }
// }
// console.log(arr);

// M-18
// let n = +prompt('n = ')
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`arr[${i}] = `))
// }
// console.log(arr)

// M-19
// let n = +prompt('n = ')
// const arr = []
// let s = 0
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`arr[${i}] = `))
//     s+=arr[i]
// }
// console.log(arr)
// console.log(s)

// M-20
// let n = +prompt('n = ')
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(`arr[${i}] = `))
// }
// let t = prompt('juft yoki toq')
// console.log(arr)
// if(t=='juft'){
//     for (let i = 0;i  < n;i+=2) {
//        console.log(`arr[${i}] = ${arr[i]}`);
//     }
// }
//  else if(t =='toq'){
//     for (let i = 1;i  < n;i+=2) {
//        console.log(`arr[${i}] = ${arr[i]}`);
//     }
// }

// M-21
// let n = +prompt('n = ')
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(prompt(`arr[${i}] = `))
// }
// console.log(arr)
// console.log(arr[n-1])

// M-22
// let arr = [2,4,6,7,2,8,11,6];
// console.log(arr);
// let s=0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if(i != j && arr[i] == arr[j]){
//             console.log(arr[i])
//             s++;
//         }       
//     }
//     if(s==1){
//         arr.splice(i,1)
//         s=0;
//     }
// }
// console.log(arr)
