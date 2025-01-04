// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(numberA, numberB, numberC ) {

        if ((numberA >= numberB) && (numberA >= numberC) ) {
    
            return numberA
    
        } else if ((numberB >= numberC) && (numberB >= numberA)) {
    
            return numberB
    
        } else {
    
            return numberC
    
        }
    
    }
