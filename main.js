var app = new Vue({
  el: "#root" ,
  data: {
    currentImgIndex: 0,

    pathImmagini: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg',
      'https://images.wired.it/wp-content/uploads/2020/09/01135456/2448_Blue_Moon_Airplane_1280.jpg',
      'https://www.columbusassicurazioni.it/media/31932/vacanze-mare-estero.jpg?width=800'
    ],
  },
  methods:{
      ciao: function(){
        alert('ciao');
      },
      ImgIndexAdd: function(){
        if (this.currentImgIndex < this.pathImmagini.length-1){
          this.currentImgIndex += 1;
        }
      },
      ImgIndexSub: function(){
        if (this.currentImgIndex>=1){
          this.currentImgIndex -= 1;
        }
      },
      // Da fare
      updateCurrentIndex: function(){
        alert('cliccato');
      }



  }
  // /Data


});
// /Vue
// Abilita i dev tools
Vue.config.devtools = true;
