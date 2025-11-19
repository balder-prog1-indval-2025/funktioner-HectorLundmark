/*
function summa(Tal1: number, Tal2: number, Tal3:number){
return Tal1+Tal2+Tal3
}
write (summa(1, 7, 9))
*/
/*
function dist(Tal1: number, Tal2: number){
    if(Tal1>Tal2)
        return Tal1-Tal2
    if(Tal1<Tal2)
        return Tal2-Tal1
}
write(dist(67, 10))
*/
/*
function dist(x1, y1, x2, y2){
    const x= x2-x1
    const y= y2-y1
    return Math.sqrt(x*x+y*y)
}
write(dist(1, 2, 4, 6))
*/
/*
function ascending(Tal1,Tal2,Tal3,Tal4){
    if(Tal1<=Tal2&&Tal2<=Tal3&&Tal3<=Tal4)
        return true
    else{
        return false
    }
}
write(ascending(1,3,6,2))
write(ascending(5,8,9,10))
write(ascending(6,7,41,67))
write(ascending(4312,653,14,7865))
*/
/*
function min(...numbers){
let minsta=numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if(numbers[i] < minsta){
        minsta=numbers[i]
         }
     }
    return minsta
}
write(min(4, 3, 6, 8))
write(min(67, 37, 54, 21, 41))
write(min(6, 7, 10, 8, 3, 7, 2))
*/
/*
function prod(...numbers){
let product = 1;
for (let i = 0; i < numbers.length; i++){
    product *= numbers[i]
}
return product
}
write(prod(3, 6, 8, 3, 9))
write(prod(2, 3, 4))
write(prod(21, 41, 67))
*/
/*
let lista = [6, 2, 7]

function includes(search, list){
    for (let i = 0; i < list.length; i++) { 
        if(list[i] == search){
            return true
        } 
    }
    return false
}
write(lista.includes(6))
write(includes(6, [5, 2, 7]))
write(includes(6, [6, 2, 7]))
*/
/*
function visaRepeterat(ord:string, antal:number){
    for (let i = 0; i < antal; i++) {
        write(ord)
    }
}
visaRepeterat("Hej", 3)
visaRepeterat("Balder", 2)

function visaUppdelat(ord:string, tecken:string){
    for (let i = 0; i < ord.length; i++) {
        if (ord[i] == tecken) {
            write("\n", "")
        }else{
            write(ord[i], "")
        }
    }
    write();
}

visaUppdelat("a-b-c-d", "-");
visaUppdelat("Apple/Microsoft/Google", "/")


function antalMellanslag(ord:string){
    let antal1= 0
    for (let i = 0; i < ord.length; i++){
        if (ord[i] === " "){
            antal1++
        }
    }
    return antal1
}
write(antalMellanslag("Hej på dig!"));
write(antalMellanslag("Balder."))
*/

