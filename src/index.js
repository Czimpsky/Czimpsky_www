import './styles.scss';

Vue.createApp({
    data(){
        return{
            drawings:[
                {label: 'SOLIDS', technique: 'pencil & watercolor', source: '/src/assets/drawings/1.jpg', type: 'draw'},
                {label: 'CHARLES BRIDGE', technique: 'watercolor', source: '/src/assets/drawings/2.jpg', type: 'draw'},
                {label: 'ROBOTS', technique: 'markers', source: '/src/assets/drawings/3.jpg', type: 'draw'},
                {label: 'BAROQUE CHURCH', technique: 'markers', source: '/src/assets/drawings/4.jpg', type: 'draw'},
                {label: 'CORINTHIAN CAPITAL', technique: 'pencil', source: '/src/assets/drawings/5.jpg', type: 'draw'},
                {label: 'DON QUIXOTE', technique: 'markers', source: '/src/assets/drawings/6.jpg', type: 'draw'},
                {label: 'FOREST', technique: 'markers & watercolor', source: '/src/assets/drawings/7.jpg', type: 'draw'},
                {label: 'BUST', technique: 'pencil', source: '/src/assets/drawings/8.jpg', type: 'draw'},
                {label: 'THE WIECH PASSAGE', technique: 'markers', source: '/src/assets/drawings/9.jpg', type: 'draw'},
                {label: 'PINES', technique: 'markers', source: '/src/assets/drawings/10.jpg', type: 'draw'},
                {label: 'OAKS', technique: 'markers', source: '/src/assets/drawings/11.jpg', type: 'draw'},
                {label: 'HOBBIT', technique: 'markers & watercolor', source: '/src/assets/drawings/12.jpg', type: 'draw'},
                {label: 'HELL', technique: 'markers', source: '/src/assets/drawings/13.jpg', type: 'draw'},
                {label: "UNIVERSITY OF ARNHEM", technique: 'pencil', source: '/src/assets/drawings/14.jpg', type: 'draw'},
                {label: 'ROLLS ROYCE PHANTOM II', technique: 'pencil', source: '/src/assets/drawings/15.jpg', type: 'draw'},
                {label: 'BMW M6 CABRIO', technique: 'crayons', source: '/src/assets/drawings/16.jpeg', type: 'draw'},
                {label: "PORSCHE GT2", technique: 'pencil', source: '/src/assets/drawings/17.jpg', type: 'draw'},
                {label: 'Janczewice', technique: ' Urban Plan', source: '/src/assets/projects/1.jpg', type: 'proj'},
                {label: 'Janczewice', technique: ' Urban Plan', source: '/src/assets/projects/2.jpg', type: 'proj'},
                {label: 'Janczewice', technique: ' Urban Plan', source: '/src/assets/projects/3.jpg', type: 'proj'},
                {label: 'Janczewice', technique: ' Urban Plan', source: '/src/assets/projects/4.jpg', type: 'proj'},
                {label: 'Janczewice', technique: ' Urban Plan', source: '/src/assets/projects/5.jpg', type: 'proj'},
                {label: 'Janczewice', technique: ' Urban Plan', source: '/src/assets/projects/6.jpg', type: 'proj'},
                {label: 'Janczewice', technique: ' Urban Plan', source: '/src/assets/projects/7.jpg', type: 'proj'},
                {label: 'Janczewice', technique: ' Urban Plan', source: '/src/assets/projects/8.jpg', type: 'proj'},
                {label: 'S&C Centre', technique: 'Architecture', source: '/src/assets/projects/9.jpg', type: 'proj'},
                {label: 'S&C Centre', technique: 'Architecture', source: '/src/assets/projects/10.jpg', type: 'proj'},
                {label: 'S&C Centre', technique: 'Architecture', source: '/src/assets/projects/11.jpg', type: 'proj'},
                {label: 'S&C Centre', technique: 'Architecture', source: '/src/assets/projects/12.jpg', type: 'proj'},
                {label: 'S&C Centre', technique: 'Architecture', source: '/src/assets/projects/13.jpg', type: 'proj'},
                {label: 'S&C Centre', technique: 'Architecture', source: '/src/assets/projects/14.jpg', type: 'proj'},
                {label: 'S&C Centre', technique: 'Architecture', source: '/src/assets/projects/15.jpg', type: 'proj'},
                {label: 'S&C Centre', technique: 'Architecture', source: '/src/assets/projects/16.jpg', type: 'proj'},
            ],
            categoryDisplayed: 'draw',
            scrolledDown: false,
            isModalOpen: false,
            isMenuOpen: false
        }
    },

    computed: {
        getFilteredDrawings() {
            return this.drawings.filter(drawing => drawing.type === this.categoryDisplayed);
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        toggleToDrawings(){
            this.categoryDisplayed = 'draw';
        },

        toggleToProjects(){
            this.categoryDisplayed = 'proj';
        },

        toggleToFrontend(){
            this.categoryDisplayed = 'front';
        },

        handleScroll() {
            if (window.scrollY > 100) {
                this.scrolledDown = true;
            } else {
                this.scrolledDown = false;
            }
        },

        handleModalOpen() {
            this.isModalOpen = !this.isModalOpen;
        },

        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },

        closeMenu() {
            this.isMenuOpen = false;
        }
    }
})
.component('gallery-element', {
    template: '#gallery-template',
    props: ['label', 'technique', 'source', 'type', 'index', 'getFilteredDrawings'],
    emits: ['update:isModalOpen'],
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
            this.$emit('update:isModalOpen', true);
            this.currentIndex = index;
            this.$nextTick(() => {
                this.$refs.modal.focus();
            });
        },

        closeModal() {
            this.isModalOpen = false;
            this.$emit('update:isModalOpen', false);
        },

        swipeModalLeft(){
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
            } else {
                this.currentIndex = this.getFilteredDrawings.length - 1;
            }
            this.currentImage = this.getFilteredDrawings[this.currentIndex].source;
        },

        swipeModalRight(){
            if (this.currentIndex < this.getFilteredDrawings.length - 1) {
                this.currentIndex += 1;
            } else {
                this.currentIndex = 0;
            }
            this.currentImage = this.getFilteredDrawings[this.currentIndex].source;
        },
    },
})
.mount('#app-czimpsky');




