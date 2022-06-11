let a = prompt().split(" ")
let n = []
let m = []
let result = []
for (let i=0;i<a[0];i++){
    let s = prompt().split(" ")
    n.push(s)
}
for(let i=0;i<a[1];i++){
    let s = prompt().split(" ")
    m.push(s)
    result.push(0)
}

for (let i=0;i<m.length;i++){
    let mm = m[i]
    console.log(mm)
    for (let j=0;j<n.length;j++){
        let nn = n[j]
        console.log(nn)
        if(mm[0] <= nn[0] && mm[1] <= n[1] && mm[2] >= nn[0] && mm[3] >= nn[1]){
            result[i]++
        }
    }
}

for (let i=0;i<result.length;i++){
    console.log(result[i])
}