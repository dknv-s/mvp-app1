Vue.component('tmrs', {
    template: '#tmrs',
    props: ['presentationName'],
    methods: {
        editField: function(fieldName) {
            this.$emit('edit-field', fieldName);
        }
    },
    created() {
        console.log('sadfasdf');
    }
});

new Vue({
    el: '#app',
    template: '#trms-presentation-main',
    data: {
        presentationName:
            'АНАЛИЗ РАБОТЫ БРИГАД ОТКРС по СК «РУСВЬЕТПЕТРО» за 6 месяцев 2018 г.',
        heroImgSrc: './img/tmrs_presentation_hero.png'
    },
    methods: {
        onClick: function(e) {
            console.log(e);
        },
        userInput: function() {
            var newName = prompt();
            if (newName) {
                this.presentationName = newName;
            }
            console.log('object');
        }
    }
});
