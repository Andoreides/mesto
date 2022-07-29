export class UserInfo {
    constructor(name, job){
        this.name = name;
        this.job = job;
    }
    getUserInfo(){
        const info = {
            name: this.name.textContent,
            job: this.job.textContent
        }
        return info;
    }
    setUserInfo(el){
        this.name.textContent = el.nameProf;
        this.job.textContent = el.job;
    }
}