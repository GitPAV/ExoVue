new Vue({
    el:'#screenshot-carusel',
    data: {
        images : ['img/screen/screen1.jpg', 'img/screen/screen2.jpg', 'img/screen/screen3.jpg','img/screen/screen4.jpg',
        'img/screen/screen5.jpg', 'img/screen/screen6.jpg', 'img/screen/screen7.jpg']
    }
})

new Vue({
    el:'#section-faq',
    data: {
        faq: {
            currentQuestion : 0,
            questions: [
                {
                    sentence: 'Started several mistake joy say painful removed reached end',
                    answer: 'Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                },
                {
                    sentence: 'Although moreover mistaken kindness me feelings do be marianne?',
                    answer: 'Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                },
                {
                    sentence: 'By in no ecstatic wondered disposal my speaking?',
                    answer: 'Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the.Widow downs you new shade drift hopes small.So otherwise commanded sweetness we improving.'
                }
            ]
        }
    }
})