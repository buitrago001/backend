class Persona{
    static especie = 'humano'
    #password=''

    constructor(name, lastName, emai password){
        this.name
        this.lastName
        this.email
        this.#password
    }

    static verEspecie(){
        return Personaersona.especie()
    }

    verNombreCompleto(){
        return "el nombre completo es " + this.name + " " + this.lastName 
    }

    setNombre(name){
        this.name = name
    }

    verPassword(){
        return this.#password
    }
}


//manager
class UserManager{
    
    constructor(){
        this.users=[]
    }

    createUsers(name, email){
        let exist=this.users.find(u=>u.email==email)
        if(exist){
            console.log("user already exist")
            return
        }
        this.users.push({
            nombre, email
        })
    }
}

const userManager = new UserManager()
userManager.createUsers('User1', 'email@email.com')