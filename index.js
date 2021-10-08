function rotation(arr, rot){

    const data = arr
    const dataLength = data.length

    for(let i = 0; i < rot; i++){

        const lastElm = data[dataLength-1]
        
        data.unshift(lastElm)
        data.pop()
        console.log(data);

    }

}

rotation([3,2,4,7,8], 3)