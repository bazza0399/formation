const request = require('request');

const url = `https://jsonplaceholder.typicode.com/users`;

request({url:url, json : true},(error,response)=>{
	if(error){
		console.log(error);
	}else{
		console.log(response.body);
	}
} )
console.log('test')
console.log('test2')

console.log('from second branch')