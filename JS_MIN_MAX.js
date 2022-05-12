let no=[1,21,31,24,155,0,124,100,{no:1200}];

let mini=Minarra(no);
console.log(mini);

function Minarra(arr) {
    
    let len=no.length;
    let min=Infinity;
    while (len--) {
        if (arr[len]<min) {
            min=arr[len];
        }
    }
    return min;

}

const maxi=maxarra(no);
console.log(maxi);

function maxarra(arr) {
    let len=no.length;
    let max=-Infinity;
    while (len--) {
        if (arr[len]>max) {
            max=arr[len];

        }
    }   
    return max
}

