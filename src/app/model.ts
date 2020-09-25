export class model{
    user;
    items;

    constructor(){
        this.user="Serpil";
        this.items=[
            new TodoItem("kahvaltı",true),
            new TodoItem("Spor",false),
            new TodoItem("Kitap okuma",false),
            new TodoItem("Yürüyüş",false)

        ];
    }

}
export class TodoItem{
    description;
    action;

    constructor(description,action){
        this.description=description;
        this.action=action;
    }
}