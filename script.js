const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let sum=0
	x=[];
	y=[]
	for(let a of arr){
		sum =sum+a;
		if(sum<=n){
			y.push(a);
		}
		else{
			x.push(y)
			y=[a]
		}
	}
	return x;
  // Write your code here
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

