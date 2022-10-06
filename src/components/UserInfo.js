export class UserInfo {
    constructor({ titleSelector, subtitleSelector, avatarSelector }){
        this.name = document.querySelector(titleSelector);
        this.about = document.querySelector(subtitleSelector);
        this.avatarSelector = document.querySelector(avatarSelector);
    }
    makeAvatar(data){
        this.avatarSelector.src = data.avatar
    }
    getUserInfo(){
        const info = {
            name: this.name.textContent,
            about: this.about.textContent,
        }
        return info;
    }
    setUserInfo(data){
        if(data.name) {
            this.name.textContent = data.name;
            this.about.textContent = data.about;
        }
    }
    getUserID(){
        return this.id;
    }
    setID(el){
        this.id = el._id;
    }
}