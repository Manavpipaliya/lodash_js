import _ from 'lodash'


//  /// array  methods 





// // const details = [{"id":1,"first_name":"Andriette","last_name":"Juste","email":"ajuste0@domainmarket.com","gender":"Female","ip_address":"128.205.224.237"},
// // {"id":2,"first_name":"Maureene","last_name":"Hinchcliffe","email":"mhinchcliffe1@over-blog.com","gender":"Female","ip_address":"70.164.240.79"},
// // {"id":3,"first_name":"Peyton","last_name":"Mahody","email":"pmahody2@mashable.com","gender":"Male","ip_address":"233.105.163.80"},
// // {"id":4,"first_name":"Hobard","last_name":"Chesney","email":"hchesney3@smugmug.com","gender":"Male","ip_address":"18.121.187.124"},
// // {"id":5,"first_name":"Lennie","last_name":"Crinage","email":"lcrinage4@moonfruit.com","gender":"Male","ip_address":"11.209.28.193"}]


// // connsole.log(_.countBy(details,"gender"))

// //  console.log(_.chunk(details,2))

// //   console.log (_.map(details, (value, key) => value.first_name + ' ' + value.email))


// //  console.log(_.concat(details, {id: 11, first_name: 'John', last_name: 'Doe', email: 'johndoe ', ip_address: '192.168.89'}));
 

// // //   console.log(_.differenceBy(details, [{id: 11, first_name: 'John', last_name: 'Doe', email: 'johndoe ', ip_address: '192.168.89'}], 'id'));




// //  console.log(_.groupBy(details, 'gender'));


// //   console.log( _.map)

//  const mydata = [{"id":1,"first_name":"Bobbee","last_name":"Lemoir","email":"blemoir0@time.com","gender":"Female","ip_address":"255.165.110.14","product":"Dollar","city":"Shreveport","country":"United States"},
//  {"id":2,"first_name":"Tad","last_name":"Rylance","email":"trylance1@boston.com","gender":"Agender","ip_address":"123.189.91.16","product":"Real","city":"Chã Grande","country":"Brazil"},
//  {"id":3,"first_name":"Wilmer","last_name":"Jaqueme","email":"wjaqueme2@yahoo.co.jp","gender":"Male","ip_address":"95.14.57.17","product":"Franc","city":"Oussivo","country":"Comoros"},
//  {"id":4,"first_name":"Kora","last_name":"Butfield","email":"kbutfield3@storify.com","gender":"Female","ip_address":"103.139.15.243","product":"Baht","city":"Nong Hin","country":"Thailand"},
//  {"id":5,"first_name":"Marcille","last_name":"Hull","email":"mhull4@free.fr","gender":"Female","ip_address":"89.139.92.237","product":"Yuan Renminbi","city":"Jangdam","country":"China"},
//  {"id":6,"first_name":"Edeline","last_name":"Cartan","email":"ecartan5@ustream.tv","gender":"Non-binary","ip_address":"73.33.135.232","product":"Dong","city":"Cần Giờ","country":"Vietnam"},
//  {"id":7,"first_name":"Edee","last_name":"Pach","email":"epach6@google.ru","gender":"Genderfluid","ip_address":"200.52.74.254","product":"Hryvnia","city":"Klembivka","country":"Ukraine"},
//  {"id":8,"first_name":"Alane","last_name":"Joan","email":"ajoan7@mozilla.org","gender":"Female","ip_address":"211.144.233.191","product":"Real","city":"Igarapé Açu","country":"Brazil"},
//  {"id":9,"first_name":"Rees","last_name":"Leat","email":"rleat8@eepurl.com","gender":"Male","ip_address":"114.250.37.235","product":"Zloty","city":"Sieniawa","country":"Poland"},
//  {"id":10,"first_name":"Huntlee","last_name":"Feckey","email":"hfeckey9@indiegogo.com","gender":"Male","ip_address":"75.13.153.111","product":"Real","city":"Mococa","country":"Brazil"}]



//  const addmydata = (_.concat(mydata, {id: 11, first_name: 'manav', last_name: 'pipaliya', email: 'manavpipaliya105@gmail.com ', ip_address: '192.168.89' , gender :'male', product:'mobile', city:'surat', country :'india'}))

// //  console.log(addmydata);


//   const groupbycountry = (_.groupBy(mydata, 'country'));

// //   console.log(groupbycountry);

//   const groupbycity = (_.groupBy(mydata, 'city'));

// //    console.log(groupbycity);


//  const  groupbyproduct = (_.groupBy(mydata, 'product'));

// //  console.log(groupbyproduct);

//  const countnum = (_.countBy (mydata, 'country'));
// //  console.log(countnum);



//  const  countnum1 = (_.countBy (mydata, 'city'));

// //   console.log(countnum1);

//  const take3 = (_.take(mydata ,3));

// //   console.log(take3);



//  const mapdata = (_.map(mydata, "first_name"));

// //  console.log(mapdata);

//  const mapdata1 = (_.map(mydata, (value , key )=> value.first_name + ' ' + value.email));

// //   console.log(mapdata1);

//  // array methods 



//  const chunk = (_.chunk(mydata, 5));
// //  console.log(chunk);


//  const compact  = (_.compact(mydata));
// //  console.log(compact);


 


// const concat =  (_.concat(mydata, {id: 11, first_name: 'manav', last_name: 'pipaliya', email: 'manavpipaliya105@gmail.com ', ip_address: '192.168.89' , gender :'male', product:'mobile', city:'surat', country :'india'}))
// // console.log(concat);


//  const differences = (_.difference(mydata) , {id: 11, first_name: 'manav', last_name: 'pipaliya'});
// // console.log(differences);


//  const drop = (_.drop(mydata, 3));
// //   console.log(drop);

//  const dropRight = (_.dropRight(mydata, 3));

// //   console.log(dropRight);
// var users = [
//     { 'user': 'barney',  'active': false },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': true }
//   ];

//   // dropRightWhile - iteratee is invoked with three arguments: (value, index, array). is use to drop elements from the end of array until the iteratee returns truey. The iteratee is invoked with three arguments: (value, index, array).
//  const dropRightWhile = (_.dropRightWhile(users, 3)); 
// //   console.log(dropRightWhile);



// //     const dropWhile = (_.dropWhile(users, 3));  
// //   console.log(dropWhile);

//  const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //   const fill = (_.fill(myarray , 'm', 0, myarray.length));
// //    console.log(fill);

// //  const fill = (_.fill(myarray , 'manav', 0 , 4));
// //   console.log(fill);

// //  const findindex = (_.findIndex(myarray, ));
// //   console.log(findindex);

// //  const flatten = (_.flatten(myarray));
// //   console.log(flatten);

//  const  array = [1, [2, [3, [4]], 5]];
//   const flattenDeep = (_.flattenDeep(array)); 
// //   console.log(flattenDeep);

//   const  flattenDepth = (_.flattenDepth(array, 2)); 
// //   console.log(flattenDepth);

//  const obj1 = [{ 'a': 1, 'b': 2, 'c': 3 }];
//   const obj2 = [{ 'a': 4, 'b': 5, 'c': 6 }];

// //    const frompairs = (_.fromPairs ,[obj1, obj2]);
// //   console.log(frompairs);


//  const Head = (_.head(myarray));
// //   console.log(Head);


//  const indexOf = (_.indexOf(myarray, 5));
// //   console.log(indexOf);

//     const initial = (_.initial(myarray)); // return all the elements except last element
// //   console.log(initial);

//     // const intersection = (_.intersection([2, 1], [2, 3]));
//     // console.log(intersection);


//      const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//      const arr2 = [11, 34, 2, 5 ,7, 46 , 78 ,97 ];
//       const intersection = (_.intersection(arr1, arr2));
// //   console.log(intersection);

// //  const intersectionBy = (_.intersectionBy(arr1,arr2 , Math.floor));
// //   console.log(intersectionBy);

  

//  const abc = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//   const join = (_.join(abc, '$&*'));
// //   console.log(join);
 
//     const last = (_.last(abc));
// //   console.log(last);

//  const lastIndexOf = (_.lastIndexOf(abc, 'ab' , 3)); 
// //   console.log(lastIndexOf);
 

//  const nth = (_.nth(abc, 3)); 
// //   console.log(nth);

//     const pull = (_.pull(abc, 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'));
//     // console.log(pull);


//     const pullAll = (_.pullAll(abc, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']));
//     // console.log(pullAll);

//     //  const pulled1 = _.pullAt(abc, [1, 3]);
//     // console.log(pulled1);


//     var array1 = ['a', 'b', 'c', 'd'];
//     // var pulled = _.pullAt(array1, [1, 3]);
//     //  console.log(pulled);


//     const reverse = (_.reverse(array1)); 
//     // console.log(reverse); 


//     // const sortedIndex = (_.sortedIndex([4, 5, 6, 7], 5));
//     // console.log(sortedIndex);


//      const  value1 = [2, 3 , 2, 4, 3, 2, 6 , 8 , 6 ,8 ,9, ]
//     const uniq = (_.uniq(value1));
//     // console.log(uniq);


//      const tail = (_.tail(value1));  // return all the elements except first element
//     // console.log(tail);


//      const take = (_.take(value1, 3));
//     // console.log(take);   // return first 3 elements

//     const takeRight = (_.takeRight(value1, 3));
//     // console.log(takeRight); // return last 3 elements   


//      const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//         const ar2 = [11, 34, 2, 5 ,7, 46 , 78 ,97 ];

//          const union = (_.union(ar1, ar2)); 
//         // console.log(union); // 


//             const uniqBy = (_.uniqBy(ar1, Math.floor));
//         // console.log(uniqBy); /

//          const zip = (_.zip(ar1, ar2)); 
//         // console.log(zip); // return unique elements from both array
        

//         //  const unzip = (_.unzip(zip));
//         // // console.log(unzip);

// //          const without = (_.without(ar1, 1, 2, 3, 4));
// //         // console.log(without);   // return unique elements from both array

// //          const xor = (_.xor(ar1, ar2)); 
// //         // console.log(xor);  // xor   



// //             const zipObject = (_.zipObject(['a', 'b'], [1, 2]));
// //         // console.log(zipObject); 
          
         



//          /// collection methods 

//           const  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

         


//         //   const countBy = (_.countBy(array, (val)=>{
//         //     return val % 2 == 0 ? 'even': 'odd';
//         //     }));
//         //    console.log(countBy);
          

//         //  const count  = (_.countBy(array , 'length'))  
//         //   console.log(count);


//           const every = (_.every(array, (val)=>{
//             // return val > 0 ;
// }));
  
// //  console.log(every); // return true if all the elements are greater than 5 
 
//   const every1  = (_.every(array, (val)=>{
//    // return val > 2;


//   }) );
// //   console.log(every1);


//  const filter = (_.filter(array, (val)=> {
//     return val >5;
// }));
// //  console.log(filter); // return all the elements greater than 5  filter method


//  const find = (_.find(array, (val)=> { 
//     return val <10;
// }));

// //  console.log(find); // return first element which is less than 5 if not found return undefined


//  const  findlast = (_.findLast( array , (val) => {
//     return val <10;
//  }))
// //   console.log(findlast); // return last element which is  less than 10 if not found return undefined

//   const flatMap = (_.flatMap(array, (val)=> { 
//     return val * 2;
// }));
// //  console.log(flatMap); // flat map method return all the elements after multiplying by 2


// //  const  flatmapDeep = (_.flatMapDeep(array, (val)=> { 
// //     return val * 2;
// // }));
// //  console.log(flatmapDeep);  // flat map deep method return all the elements after multiplying by 2
 
// //  const foreach  = (_.forEach( array , ( key,val)=>{
// //     return val * 2;
// //     console.log(key);
// //  }));
// //  console.log(foreach); // return all the elements after multiplying by 2


//  // group method 

//     // const groupBy = (_.groupBy(array, (val)=> { 
//     //     return val % 2 == 0 ? 'even': 'odd';
//     // }));
//     //  console.log(groupBy); // return all the elements after multiplying by 2
     
// //  const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //      const  includes = (_.includes(myarray , 5));
//     //  console.log(includes);  // return true if the element is present in the array

//     //   const  invokeMap = (_.invokeMap(myarray, String.prototype.split, ''));
//     //  console.log(invokeMap);  // return all the elements after splitting

//     //   const invoke = [345, 64537 , 376452, 273862 , 88];

//     //    const invokemap = (_.invokeMap( invoke, String.prototype.split , ''));
//     //    console.log(invokemap);  // return all the elements after splitting
  
//     //   const keymap = [345, 64537 , 376452, 273862 , 88];

//     //    const keyby = (_.keyBy(keymap, (val)=> {
//     //     return val % 2 == 0 ? 'even': 'odd';
//     // }));
//     //  console.log(keyby);   // keyby method using keyby method we can group the elements based on the condition 


     
// //  const map = (_.map(invoke, (val)=>{
// //     return val * 2;
// //  }));

// //   console.log(map);


// // orderby 


//  const myarray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  const order = (_.orderBy(myarray1 , (val) =>{
//     return val ;
// }, ['asc']));

// //  console.log(order);
  

 

//   // partition method 
//  const partation = (_.partition (myarray1, (val) => {
//     return val < 5;
//  }))
// //   console.log(partation);  // return two arrays based on the condition
    

//  // reduce method 

//   const array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //  const reduce = array12.reduce((acc, val )=>{
// //     return acc  + val ;

// //  })
// //  console.log(reduce);  // return sum of all the elements in the array
 
//  const reduce  = (_.reduce(array12, (acc, val) => {
//     return acc + val ;

//  }))

// //   console.log(reduce);  // return sum of all the elements in the array



//  const reduceRight = (_. reduceRight(array12, (acc, val) => {
//     return acc + val ;
//  }));
// //   console.log(reduceRight);  // return sum of all the elements in the array from right to left

//  const reject = (_.reject(array12, (val) => {
//     return val > 5;
//  }  
//     ));

//     // console.log(reject);

//      const sample = (_.sample(array12));
//     // console.log(sample);  // return random elements from the array
 
//     const sampleSize = (_.sampleSize(array12, 3));
//     // console.log(sampleSize);  // return random elements from the array based on the size


//      const shuffle = (_.shuffle(array12));
//     // console.log(shuffle);  // return random elements from the array  shuffle method





//      const size = (_.size(array12));
//     // console.log(size);  // return size of the array

//      const some = (_.some(array12, (val) => {
//         return val > 5;
//     }));
//     // console.log(some);  // return true if any one of the element is greater than 5


//      const sortBy = (_.sortBy(shuffle, (val) => { 
//         return val;
//     }));
//     // console.log(sortBy);  // return sorted array in ascending order


//     // const sortedIndex = (_.sortedIndex(array12, 5)); 



//      // date methods

//       const date = (_.now());

//       // console.log(date);

      /// function Methods 

      //  const  manav= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      //  const after  = (_.after(3, (val) => {
      //    return val;
      //    }));
      //     console.log(after);  // return function after the given number of times


      //  const ary = (_.ary(manav , (val)=>{
      //    return val * 2;
      //  }))


       // ary method




// curry method 

var abc = function(a, b, c) {
   return [a, b, c];
 };
  
   
 // flip method

 const flip = (_.flip(abc));
//  console.log(flip(1, 2, 3)); 
 
 // return [3, 2, 1]

//  memoize  method

const memoize1 = (_.memoize(abc));
// console.log(memoize1(1, 2, 3)); // is use to cache the function

// negate method

//  const negate = (_.negate(abc));
//  console.log(negate(1, 2, 3)); // return false if the function is true



// math  method 

 const add = (_.add(1, 2));
//  console.log(add);

 const ceil  = (_.ceil(4.006 , 2) );
//  console.log( ceil);  // return the nearest integer greater than the given number

  const divide = (_.divide(6,4));

//   console.log(divide);  // return the quotient of the given numbers
 const floor = (_.floor(4.006 )); 
//  console.log(floor);  // return the nearest integer less than the given number

//   var myobj =  { 'n': 1, 'n': 2, 'n': 1 };
   
   // const maxby = (_.max (myobj , '2'));
   // console.log(maxby);  // return the maximum value in the object

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

     const mean = (_.mean(arr));
   //   console.log(mean);

   //  const meanby = (_.meanBy(arr, (val)=>{
   //       return val * 2;
   //  }))

   //   console.log(meanby);

   //  const min = (_.min(arr));
   // //  console.log(min)
    
   //  const minby = (_.minBy(arr, (val)=>{
   //    return val *5 ;

   //  })); 
   //   console.log(minby);

// number method 

  const inRange = (_.inRange(67, 89));
//   console.log(inRange);  // return true if the given number is in the range

 const random = (_.random(100, 10000));
//  console.log(random);  // return random number between the given range


 // string method 


 const camel = (_.camelCase(' MANAV PIPALIYA '));

//   console.log(camel);  // return the string in camel case

  const capitalize1 = (_.capitalize('manavPIpalya  ASHOkbhai  pipaliya  '));


   // console.log(capitalize1);  // return the string in capitalize case first letter of the string is in capital 


   //  const deburr = (_.deburr(' '));
   //  console.log(deburr);  // return the string without any accent

    const endswith = (_.endsWith('manav pipaliya ashokbhai' , 'v' , 5));
   //  console.log(endswith);  // return true if the string ends with the given string

   //  const escape = (_.escape('manav &   pipaliya'));
   //  console.log(escape);  // return the string with escape character


    const escapeRegExp = (_.escapeRegExp('manav &   pipaliya'));
   //  console.log(escapeRegExp);  // return the string with escape character


   const kebabCase = (_.kebabCase('manav & pipaliya'));
   //  console.log(kebabCase);  // return the string in kebab case means all the words are separated by - 

    const lowerCase = (_.lowerCase('MANAV  Pipaliya')); 
   //  console.log(lowerCase);  // return the string in lower case

     const upperCase = (_.upperCase('manav pipaliya '));

      // console.log(upperCase);


       const lowerFirst = (_.lowerFirst('Manav Pipaliya'));

      //  console.log(lowerFirst);
       const upperFirst = (_.upperFirst('manav pipaliya'));

      //   console.log(upperFirst);

       const pad = (_.pad('manav', 10, '___'));
      //  console.log(pad);

      
       const padEnd = (_.padEnd('manav', 10, '___'));
      //  console.log(padEnd); // return the string with the given length and the string is padded at the end of the string
         

        const padStart = (_.padStart('manav', 15, '++++++'));

         // console.log(padStart);  // return the string with the given length and the string is padded at the start of the string

         const repeat = (_.repeat('manav', 5));
         //  console.log(repeat);  // return the string with the given number of times

          const  parseInt = (_.parseInt ('67868.00'))
         //  console.log(parseInt);  // return the string in integer

       const replace = (_.replace('manav pipaliya', 'manav', 'ashokbhai'));
         //  console.log(replace);  // return the string with the replaced string   


          const snakeCase = (_.snakeCase('manav _pipaliya'));
         //  console.log(snakeCase);  // return the string in snake case means all the words are separated by _


         //   console.log(_.snakeCase('ManavPipaliya'));

 const split = (_.split('manav pipaliya', ''));
         //  console.log(split);  // return the string in array

          const startCase = (_.startCase('manav pipaliya'));

         //  console.log(startCase);  // return the string in start case means first letter of the word is in capital

          const StartWith  = (_.startsWith("manav _pipaliya " , "n" , 2));
         //  console.log(StartWith);  // return true if the string starts with the given string

         const trim1 = (_.trim("      manav pipaliya           "));
         //  console.log(trim1);  // return the string without any space

          const trimEnd = (_.trimEnd("manav      pipaliya              "))
           console.log(trimEnd);  // return the string without any space at the end of the string

             const trimStart = (_.trimStart("      manav pipaliya"));
            //   console.log(trimStart);  // return the string without any space at the start of the string



             const words  = (_.words("manav pipaliya ashokbhai  "));

            //  console.log(words);  // return the string in array   


             const toLower = (_.toLower("MANAV PIPALIYA")); 
             console.log(toLower);  // return the string in lower case