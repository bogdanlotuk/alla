const {
  createApp
} = Vue

createApp({
  data() {
    return {
      message: 'Привіт, Alla',
      answersKeys: [],
      correctanswersKeys: ['is', 'are', 'is', 'is', 'are'],
    }
  },

  methods: {
    isCorrect() {
        this.answersKeys = [];
        for(let i = 0; i < 5; i++) {
          let indexArr = 'id' + i;
          let select = document.getElementById(indexArr);
          let value = select.options[select.selectedIndex].value;
          this.answersKeys.push(value)
        }

        for(let i = 0; i < 5; i++) {
          if(this.answersKeys[i] === this.correctanswersKeys[i]){
            let pId = "p" + i;
            document.getElementById(pId).style.color = "green";
          } else {
            let pId = "p" + i;
            document.getElementById(pId).style.color = "red";
          }
        }
      
    }
  }
}).mount('#app')