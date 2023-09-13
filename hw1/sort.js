 const arr = [1,5,2,4,9,0,1];

function sortMin(){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(arr[i]<arr[j]){
                const temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;

            }
            
        }
        
    }
    console.log(arr);
}