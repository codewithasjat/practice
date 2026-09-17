// let data = [
//     {name:"Abhishek","mobile":"000000000",state:{city:"Pune"}},
//     {name:"Alin","mobile":"000000000",state:{city:"Mumbai"}},
//     {name:"Rohit","mobile":"000000000",state:{city:"Nashik"}},
//     {name:"Anirudh","mobile":"000000000",state:{city:"Pune"}},
//     {name:"Avnish","mobile":"000000000",state:{city:"Nashik"}},
// ]

// let datas = [
//     {
//         "firstName": "John",
//         "lastName": "Doe",
//         "email": "john.doe@example.com",
//         "department": "Engineering"
//     },
//     {
//         "firstName": "Emily",
//         "lastName": "Smith",
//         "email": "emily.smith@example.com",
//         "department": "Engineering"
//     },
//     {
//         "firstName": "Michael",
//         "lastName": "Johnson",
//         "email": "michael.johnson@example.com",
//         "department": "Finance"
//     },
//     {
//         "firstName": "Sophia",
//         "lastName": "Williams",
//         "email": "sophia.williams@example.com",
//         "department": "Finance"
//     },
//     {
//         "firstName": "David",
//         "lastName": "Brown",
//         "email": "david.brown@example.com",
//         "department": "Sales"
//     }
// ]
// const groupDepartment = (datas) => {

//     let result = [];

//     for (let data of datas) {

//         let department = data.department;

//         if (!result[department]) {
//             result[department] = [];
//         }

//         result[department].push(data.firstName);
//     }

//     console.log(result);
// };

// groupDepartment(datas);



// let arr1=[1,2,3,4]
// let arr2=[12,5,2]
// let st = new Set(arr1)
// for (let elemnt of arr2){
//     if(st.has(elemnt)){
//         console.log(elemnt);
//     }
// }

// let arr = [8,3,5,1,4,2,7]

// function mergeSort(arr,l,h){
//    if(l>= h) return
//    let mid = Math.floor((l+h)/2)
//    mergeSort(arr,l,mid)
//    mergeSort(arr,mid+1,h)
//    merge(arr,l,mid,h)

// }

//  function merge(arr,l,mid,h){
//    let left = l
//    let right = mid +1
//    let temp =[]
//    while(left<=mid && right<= h){
//       if(arr[left]<=arr[right]){
//          temp.push(arr[left])
//          left++
//       }
//       else{
//          temp.push(arr[right])
//          right++
//       }
//    }
//    while(left<= mid){
//       temp.push(arr[left])
//       left++
      
//    }
//    while(right<= h){
//       temp.push(arr[right])
//       right++
      
//    }
//    for(let i=l; i<=h ;i++){
//       arr[i]=temp[i-l]
//    }

// }

// mergeSort(arr,0,arr.length-1)
// console.log(arr);

// let arr = [1,2,3,4,5]

// function maximumNumber(arr){
//    if (arr.length ===0) return 

//    maximumNumber(arr[])

// }
// maximumNumber(arr)


// let arr2 = [1,2,3,5,3]
// function isSorted(arr2,i){
//    if(i == arr.length) return true;
//    if(arr[i]<arr[i-1]) return false;
//     return isSorted(arr2 ,i+1)
 
// }
// console.log(isSorted(arr2,1));

// function Palindrome(str,left ,right){
//    if(str[left]===str[right]) true ;
//    if(!str[left] === str[right]){
//       left++
//       right--
//    }





// }

// console.log(Palindrome("rer",0,str.length-1 ));





//   let arr3 =[5,3,2,1,4,5,3,2]
// function mergeSort(arr,l,h){
//    if(l>=h)return
//    let mid = Math.floor((l+h)/2)
//    mergeSort(arr,l,mid)
//    mergeSort(arr,mid+1,h)
//    merge(arr,l,mid,h)

// }
// function merge(arr,l,mid,h){
//    let left=l
//    let right = mid +1
//    let temp = []
//    while(left<=mid && right<=h)
//       if(arr[left]<=arr[right]){
//          temp.push(arr[left])
//          left++
//       }
//       else{
//          temp.push(arr[right])
//          right++
//       }

//       while(left<=mid){
//          temp.push(arr[left])
//          left++
//       }
//       while(right<=h){
//          temp.push(arr[right])
//          right++
//       }
//       for(let i=l ; i<=h ; i++){
//          arr[i] = temp[i-l]
//       }

// }

// mergeSort(arr3,0,arr3.length-1)
// console.log(arr3);
 

//  let arr =[10, 5, 8, 20, 15];
// function findUnique(arr){
//    let largest =arr[0]
//    let secodn = 9
//    for(let i=0 ; i<=arr.length-1 ; i++){
//       if(arr[i]<largest){
//          secodn = largest
//          largest = arr[i]
//       }
//       else if(arr[i]<secodn && arr[i]>largest){
//          secodn = arr[i]
//       }
//    }
//   return secodn
// }
//  console.log(findUnique(arr ));

// let arr =[4,2,3,5,1,2,6]
//  function mergeSort(arr,l,h){
//    if(l>=h) return;
//    let mid = Math.floor((l+h)/2)
//    mergeSort(arr,l,mid)
//    mergeSort(arr,mid+1,h)
//    merge(arr,l,mid,h)

//  }
// function merge(arr,l,mid,h){
//    let left =l
//    let temp=[]
//    let right = mid+1
//    while (left<=mid && right<=h){
//    if(arr[left]<=arr[right]){
//       temp.push(arr[left])
//       left++
//    }
//    else{
//       temp.push(arr[right])
//       right++
//    }}

//    while(left<=mid){
//       temp.push(arr[left])
//       left++
//    }
//    while(right<=h){
//       temp.push(arr[right])
//       right++
//    }
//    for(let i=l ; i<=h ;i++){
//       arr[i]=temp[i-l]
//    }
// }

//  mergeSort(arr,0,arr.length-1)
//  console.log(arr);


//  function mergeSort(arr,l,h){
//    if(l>=h) return ;
//    let mid = Math.floor((l+h)/2)
//    mergeSort(arr,l,mid)
//    mergeSort(arr,mid+1,h)
//    merge(arr,l,mid,h)

//  }
//   function merge(arr,l,mid,h){
//    let left =l
//    let right = mid+1
//    let temp =[]
//    while(left<=mid && right <=h){
//       if(arr[left]<= arr[right]){
//          temp.push(arr[left])
//          left++
//       }
//       else{
//          temp.push(arr[right])
//          right++
//       }
//    }
//   while(left<=mid){
//    temp.push(arr[left])
//    left++
//   }
//   while(right<=h){
//    temp.push(arr[right])
//    right++
//   }
// for(let i=l ; i<=h ; i++ ){
//    arr[i]=temp[i-l]
// }
//  }
//  mergeSort(arr,0,arr.length-1)
//  console.log(arr);

 let arr = [3,4,1,7,2];

for (let j=0 ;j<arr.length ; j++){


 for(let i=j+1 ; i<arr.length ;i++ ){
   if(arr[i]>arr[j]){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j]=temp


   }
 }
}
 console.log(arr);




