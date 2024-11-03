const arrOfNumbers: number[] = [1, 2, 3, 4]

// const arrOfStrings : string[] = ['1', '2', '3', '4']

// type conversion through map
const arrOfStrings : string[] = arrOfNumbers.map((number) => number.toString())

console.log(arrOfStrings)



type AreaNumber = {
    height: number;
    width: number;
} 

type Height = AreaNumber["height"]

type AreaString<T>= {
    // [key in "height" | "width"]: string
    [key in keyof T] : T[key]
}

const area1 : AreaString<{height: string; width: number}> = {
    height: "10",
    width:  50,
}





