export default class UserRepository {
  findById(id: string){
    return {
      id: 'wtorres',
      email: 'wtorres@palaceresort.com',
      name: 'Willam Jesus Torres Flota',
      password: 'P4ssw0rd',
      status: true
    }
  }

  create(user: {
    name:string,
    email:string,
    password: string,
    status:boolean}){
      try {
        return {...user, id: "wtorres"}
      } catch (error) {
        return error;
      }
      finally{
        // tslint:disable-next-line:no-console
        console.log("disconected")
      }
    }
}