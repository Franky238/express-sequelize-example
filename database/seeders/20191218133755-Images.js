'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Images', [{
      title: 'Some Image',
      subtitle: 'Some subtitle',
      url: 'http://lensmagazine.net/wp-content/uploads/2015/11/311.jpg',
      likes_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: 'Some Image',
      subtitle: 'Some subtitle',
      url: 'https://static.wixstatic.com/media/d976b5_7c8f59ae40484fe598ab6c06384a6f15~mv2_d_4800_3200_s_4_2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/file.jpg',
      likes_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: 'Some Image',
      subtitle: 'Some subtitle',
      url: 'https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg',
      likes_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: 'Some Image',
      subtitle: 'Some subtitle',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0haEZbUyMHdwWySr_D7oBtP3I3u_dorvu0fbukeW0Vxj82YAJ9A&s',
      likes_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: 'Some Image',
      subtitle: 'Some subtitle',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5gl6cKXhJc6bzWPzpD0hJuPmVr83fnm1e8EwqdqhnuWju75q&s',
      likes_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: 'Some Image',
      subtitle: 'Some subtitle',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg',
      likes_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: 'Some Image',
      subtitle: 'Some subtitle',
      url: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg',
      likes_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: 'Some Image',
      subtitle: 'Some subtitle',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFoR4f2MMbYthFAH5X0E1vvLfe5lew-Qz9-XkCgs1mM8hwZXgfQ&s',
      likes_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: 'Some Image',
      subtitle: 'Some subtitle',
      url: 'https://www.woodstockvt.com/sites/default/files/styles/hero_x_large/public/media-images/snowmobiletrail.jpg?itok=8mrgv-Vw',
      likes_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
