function findShortestStringRecursive(arr) {
  // type your code here
  if (arr[1] == undefined){
    return arr[0]
  }

  if (arr[0].length <= arr[1].length ){
    arr.splice(1,1)
    findShortestStringRecursive(arr)
  } else{
    arr.splice(0,1)
    findShortestStringRecursive(arr)
  }
  return arr[0]
}

function arrMaker(){
  let arr = []
  let str = 'a'
  for(let i = 0; i < 50; i++){
    arr.push(str.repeat(Math.floor(20 * (Math.random(0)))))
  }
  return arr
}


if (require.main === module) {
  let myarr = arrMaker()

  startTime = Date.now()
  for(let i = 0; i < 10000; i++){
    arrcpy =[...myarr]
    findShortestStringRecursive(arrcpy)
  }
  console.log(Date.now() - startTime)

  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

