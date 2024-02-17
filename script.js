const person ={
  status:"succses" 
} 


const request = new Promise((resolve, reject)=>{

    if(person.status === 'succses'){
        person.dedline = '12:00' // obj ichiga yangi malumot kiritildi
        resolve(person)     // resolve orqali obj malumotlarini then ga yuboramiz
    }else{
        person.otmen = "topshiriq bajarilmagan"
        reject(person)   // false
    }
})

request.then((data)=>{      // data orqali person ichidagi malumotlarni ovolamiz 
    data.project = 'market'
    return data
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error); // ERROR
}).finally(()=>{
    console.log("topshiriq toliq tugallanmagan"); 
})