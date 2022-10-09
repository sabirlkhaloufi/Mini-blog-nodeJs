const Model = require("../models/commentairModel.js")


const Commentaire = require("../models/commentairModel");


// ! affichage
const afficher=(req,res)=>{
      Model.findAll()
      .then(comment =>{res.render('commenter',{ comment : comment })})
    
      .catch((error) =>
      {console.log(error);})
}

// ! ajouter
const ajouter=(req,res)=>{
      const {body} = req;
      Model.create({...body})
      .then(
      res.redirect('/afficher')
  )
  .catch()
}

// ! modifier 

const edit=(req,res)=>{
      const {id} = req.body
      Model.findByPk(id)
      .then(m=>{
        res.render('modifier' , { m :m })
      })
  .catch()
}
const modifier=(req,res)=>{
      const {body} =req // return just id *
      const id = body.id
      Model.findByPk(id) // return obj contain name and id 
      .then(obj=>{

      obj.Name = body.Name
      obj.comment = body.comment

      obj.save()
      .then( res.redirect('/afficher'))
      .catch()

  })
  .catch()

}

// ! supprimer

const supprimer=(req,res)=>{
      const {id} = req.body
      Model.destroy({where : { id : id}})
      .then(res.redirect('/afficher'))
      .catch()
}



module.exports= {afficher,ajouter,modifier,supprimer,edit}