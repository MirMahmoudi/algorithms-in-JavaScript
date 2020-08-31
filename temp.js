// Constructor function
// function Person(firstName, lastName, dob){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }
// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// }
// Person.prototype.getBirthYear = function(){
//   return this.dob.getFullYear();
// }

//class
// class Person {
//   constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear(){
//     return this.dob.getFullYear();
//   }
//   getFullName(){
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1989');
// const person2 = new Person('Jack', 'Hare', '4-3-1987');
// console.log(person2);
// console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person2.getFullName());

// for JQuery

// $(document).ready(function(){
//   $('button').click(function(){
//     alert('Hello World!');
//   })
// });

//---------------------------------------------------------------------
// function get_joke(){
//   var my_div = $('.my_div');
//   let xml = new XMLHttpRequest();
//   xml.open('GET', 'https://official-joke-api.appspot.com/random_ten');
//   xml.send();
//   xml.responseType = 'json'
//   xml.onreadystatechange = function(){
//     if(this.readyState === 4 && xml.status === 200){
//       let results = this.response; 
//       for(let i = 0; i < results.length; i++){
//         let joke = document.createElement('p');
//         joke.innerHTML = results[i]['setup'];
//         my_div.append(joke);
//       };
//     }
//   };
// };


// $('#btn').click(function(){
//   get_joke();
// });
//---------------------------------------------------------------------
// creat event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText(){
  //create XHR object
  var xhr = new XMLHttpRequest();
  // open => type, url/file, async
  xhr.open('GET', 'temp.txt', true);
  xhr.onload = function(){
    if( xhr.status === 200){
      // console.log(this.responseText);
      document.getElementById('text').innerHTML = this.responseText;
    }else if (this.status == 404){
      document.getElementById('text').innerHTML = 'Not Found';
    };
  };
  // xhr.onreadystatechange = function(){
  //   if(xhr.readyState == 4 && xhr.status == 200){
  //     // console.log(this.responseText);
  //     document.getElementById('text').innerHTML = this.responseText;
  //   };
  // };
  //send request
  xhr.send();
};


//---------------------------------------------------------------------
