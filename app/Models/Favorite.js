'use strict'

const Model = use('Model')

class Favorite extends Model {

  tweet () {
    return this.belongsTo('App/Models/Tweet')
  }
  
}

module.exports = Favorite
