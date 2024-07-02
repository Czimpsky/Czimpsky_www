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
})
.component('photo-element',{
    template: '#photo-template',
    props: ['label', 'technique', 'source'],
    data(){
        return{
            isModalOpen: false,
            currentImage: '',
        }
    },
    methods:{
        openModal(src){
            this.currentImage = this.drawings.source;
            this.isModalOpen = true;
        },
        closeModal(){
            this.isModalOpen = false;
        }
    }
})
.mount('#app-czimpsky')




