class Humain {
    name;
    job;
    skills=[];   
    
    getJob(x){
        this.job=x;
    }
    leaveJob(){
        return this.job="unemployed"
    }
   learnNewSkill(skills){
       this.skills.push(skills);
    }
   forgetSkill(skill){
       let index=this.skills.indexOf(skill);
       this.skills.splice(index,1);
    }
   }
   export default Humain