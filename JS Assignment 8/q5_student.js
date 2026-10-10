let student1 = {
    name:"Ayesha",
    class:"10th",
    chemistry:78,
    mathematics:85,
    urdu:90,
    english:82,
    getResult:function() {
        let total = this.chemistry + this.mathematics + this.urdu + this.english;
        let percentage = (total / 400) * 100;
        return { total:total, percentage:percentage };
    }
};
console.log("Name=", student1.name);
console.log("Class=", student1.class);
console.log("Chemistry marks=", student1["chemistry"]);
let result1 = student1.getResult();
console.log(student1.name + " scored " + result1.percentage + "% (Total=" + result1.total + "/400)");
let student2 = {
    name:"Hamza",
    class:"10th",
    chemistry:65,
    mathematics:70,
    urdu:75,
    english: 80,

    getResult:function() {
        let total=this.chemistry + this.mathematics + this.urdu + this.english;
        let percentage=(total / 400) * 100;
        return { total:total, percentage:percentage };
    }
};
let result2 = student2.getResult();
console.log(student2.name + " scored " + result2.percentage + "% (Total=" + result2.total + "/400)");
delete student2.english;
console.log("Final student2=", student2);