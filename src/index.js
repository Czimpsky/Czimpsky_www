import './styles.scss';

Vue.createApp({
    data(){
        return{
            drawings:[
                {label: 'SOLIDS', technique: 'pencil & watercolor', source: '/src/assets/drawings/1.jpg'},
                {label: 'CHARLES BRIDGE', technique: 'watercolor', source: '/src/assets/drawings/2.jpg'},
                {label: 'ROBOTS', technique: 'markers', source: '/src/assets/drawings/3.jpg'},
                {label: 'BAROQUE CHURCH', technique: 'markers', source: '/src/assets/drawings/4.jpg'},
                {label: 'CORINTHIAN CAPITAL', technique: 'pencil', source: '/src/assets/drawings/5.jpg'},
                {label: 'DON QUIXOTE', technique: 'markers', source: '/src/assets/drawings/6.jpg'},
                {label: 'FOREST', technique: 'markers & watercolor', source: '/src/assets/drawings/7.jpg'},
                {label: 'BUST', technique: 'pencil', source: '/src/assets/drawings/8.jpg'},
                {label: 'THE WIECH PASSAGE', technique: 'markers', source: '/src/assets/drawings/9.jpg'},
                {label: 'PINES', technique: 'markers', source: '/src/assets/drawings/10.jpg'},
                {label: 'OAKS', technique: 'markers', source: '/src/assets/drawings/11.jpg'},
                {label: 'HOBBIT', technique: 'markers & watercolor', source: '/src/assets/drawings/12.jpg'},
                {label: 'HELL', technique: 'markers', source: '/src/assets/drawings/13.jpg'},
                {label: "UNIVERSITY OF ARNHEM", technique: 'pencil', source: '/src/assets/drawings/14.jpg'},
            ],
        }
    },
    methods: {
    }
})
.component('photo-element', {
    template: '#photo-template',
    props: ['label', 'technique', 'source', 'index', 'drawings'],
    data() {
        return {
            isModalOpen: false,
            currentImage: '',
            currentIndex: 0,
        };
    },
    methods: {
        openModal(image, index) {
            this.currentImage = image;
            this.isModalOpen = true;
            this.currentIndex = index;
            this.$nextTick(() => {
                this.$refs.modal.focus();
            });
        },

        closeModal() {
            this.isModalOpen = false;
        },

        swipeModalLeft(){
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
            } else {
                this.currentIndex = this.drawings.length - 1;
            }
            this.currentImage = this.drawings[this.currentIndex].source;
        },

        swipeModalRight(){
            if (this.currentIndex < this.drawings.length - 1) {
                this.currentIndex += 1;
            } else {
                this.currentIndex = 0;
            }
            this.currentImage = this.drawings[this.currentIndex].source;
        },
    },
})
.mount('#app-czimpsky')




