export default function(arr, id){
    let obj;
    arr.forEach((item) => {
        item.products.forEach((item) => {
            if(+item.id === +id){
                obj = item
            }
        })
    })
    return obj || false
}