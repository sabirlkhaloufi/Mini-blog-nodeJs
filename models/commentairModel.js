
const {Sequelize,DataTypes} = require ("sequelize");

//cnx

            const sequelize = new Sequelize(
            'users',
            'root',
            '',
            {
                host: 'localhost',
                dialect: 'mysql'
            }
            );
            sequelize.authenticate().then(() => {

                    console.log('Connection has been established successfully.');

            }).catch((error) => {

                    console.error('Unable to connect to the database: ', error);

            });
//creat Table

            const commentairModel = sequelize.define("commentairModel", {
                id:{
                    type:DataTypes.INTEGER,
                    primaryKey:true,
                    autoIncrement:true
                },
            Name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Comment: {
                type: DataTypes.STRING,
                allowNull: false
            
            }
            });

            sequelize.sync().then(() => {

            console.log('commante Table table created successfully!');

            }).catch((error) => {
                    console.error('Unable to create table : ', error);
            });


// creat comment

            commentairModel.sync({ alter : true}).then(()=>{

                const commentair= commentairModel.build({Name:'hamza', Comment:'hahahaaa'});
                return commentair.save();
            
            }).then((data)=> {
                    console.log(data.toJSON())
                    console.log("user added to table");

            }).catch((err)=>{

                    console.log(err);

            });


//findAll  => select all

            commentairModel.sync({alter :true}).then(()=>{

                return commentairModel.findAll();

            }).then((data) => {

                data.forEach((Element) => {

                    console.log(Element.toJSON());
                })
            })
            .catch((err) => {

                    console.log(err);

            });

//update commtr

            commentairModel.update({
                Name:"amina"
            },{
                    where:{
                        id:266
                    }
            })

            .then((data) => {

                    console.log("cmnt update");
                
            })
            .catch((err) => {

                    console.log(err);
            });

//destroy

            commentairModel.destroy({

                    where:{Name:"aya"},
            });
















