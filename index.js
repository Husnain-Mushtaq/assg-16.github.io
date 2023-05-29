let products = [

];


let input1 = parseInt(prompt('Enter How much card you want to print'))

for(let i = 0; i < input1; i++){

    let prompt1 = prompt('Enter Your Name')

    let prompt2 = prompt('imgae url')

    let obj1 = { Name:prompt1, Image:prompt2}
   

    products.push(obj1)

}