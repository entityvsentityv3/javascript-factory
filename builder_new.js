'use strict';

class User {

    constructor(builderUser){
        this.name = builderUser.name;
        this.id = builderUser.id;
    }
    
}

User.BuilderUser = class BuilderUser {
    constructor() {
        this.name = '';
        this.id = '';
        this.user = null;
    }

    setName(name){
         this.name = name;
         return this;
    }

    setId(id){
        this.id = id;
        return this;
   }

   build(){
        this.user = new User(this);
        return this.user;
   }

}

let user = new User.BuilderUser().setId('1').setName('One').build();
console.log(user);