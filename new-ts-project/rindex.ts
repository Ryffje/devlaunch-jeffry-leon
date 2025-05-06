function simplifyPath(path: string): string{
  
  const stack: string[] = []
  let simplifiedPath = ""

  path.split('/').forEach((item) => {
    if(item !== ''){
      stack.push(item);
  
    }
  });

  simplifiedPath = '/' + stack.pop()

  console.log(stack)
  console.log(path)



  return simplifiedPath

}

const path1 = '/home/'

console.log(simplifyPath(path1))
