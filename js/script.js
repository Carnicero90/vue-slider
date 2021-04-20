var app = new Vue({
  el: '#root',
  data: {
   currentImage: 0,
   carouselImages: [
     'campagna.jpg',
     'cascate.webp',
     'fiori.jpeg',
     'montagne.webp'
   ],
  },
  methods: {
    slideRight() {
      const next = this.currentImage === this.carouselImages.length - 1 ? 0 : this.currentImage + 1;
      this.currentImage = next;
    },
    slideLeft() {
      const next = this.currentImage === 0 ? this.carouselImages.length - 1 : this.currentImage - 1;
      this.currentImage = next;
    },
    resetTimer() {
      clearInterval(timer);
      timer = setInterval(() => {
        this.slideRight()
      }, 5000)
    }
  },
  created() {
   timer = 
   setInterval(() => {
      this.slideRight()
    }, 5000)
  }
})