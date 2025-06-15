class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username ${this.username}`);
    }

    static createId(){
        return  `123`
    }
}

const tejas = new user("tejas")
console.log(tejas.createId())

/*  static prop access restrict krt mhnjech te access det nhi kuthlya object la ani  jri aapn inherit kel tri access kru shkt nhi*/