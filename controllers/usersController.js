const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const userListPath = path.resolve(__dirname,"../database/users.json");
const userList = JSON.parse(fs.readFileSync(userListPath,'utf-8'));

const usersController = {
    allUsers : (req,res)=>{
        res.render("users/login", { users : userList })
    },
    profile : (req,res)=>{
        //muestra el detalle de un usero especifico.
        const id = req.params.id;
        //buscamos en el array el usero que coincida con el que llega por parametro.
        const filteredUser = userList.find((user) => {
          return user.id == id;
        });
           res.render("users/profile", {filteredUser});
        },
    // crea un usero y lo guarda
    createUser : (req , res) => {
        res.render("users/register");
    },
    storeUser : (req , res) => {
      //generamos un id
      const id = uuidv4();
      //capturamos lo que llega del formulario
      const newuser = req.body;
      //le asignamos el id al usero
      newuser.id = id;
      // le asignamos el array de imagenes
    //   newuser.images = req.files;
      //agregamos el nuevo usero al array de useros
      userList.push(newuser);
      //sobreescribimos el json con la nueva info
      fs.writeFileSync(userListPath,JSON.stringify(userList,null,2));
      // redirigimos al inicio
      res.redirect("index");
    },
    //------------------------
    // edita un user y hace un update
    // editUser : (req , res) => {
    //     const id = req.params.id;
    //     const filteredUser = userList.find((user) => user.id == id); 
    //     res.render("users/edit", {user : filteredUser});
            
    //     },
    updateUser : (req , res) => {
        const id = req.params.id;
        const { nombre, descripcion, precio, enVenta} = req.body;
        const userActualizar = userList.find((user) => user.id == id);
        userActualizar.nombre = nombre;
        userActualizar.descripcion = descripcion;
        userActualizar.precio = precio;
        userActualizar.enVenta = enVenta;
        fs.writeFileSync(userListPath,JSON.stringify(userList,null,2));
        res.redirect("/users/profail");
    },
    // ------------------------
    // borra un usero segun el id pasado
    deleteUser : (req , res) => {
        let id = req.params.id;
        let user = userList.find(user => user.id == id);
        res.render("users/deleteUser", {user : user});
    
    }
}

module.exports = usersController;
