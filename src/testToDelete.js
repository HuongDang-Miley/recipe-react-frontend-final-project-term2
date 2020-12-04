let parent = [
    {meat: 'beef', name: 'beef0 stir fir'},
    {meat: 'chicken', name: 'chicken stir fry'},
    {meat: 'pork', name: 'porkchop'  },
    {meat: 'beef', name: 'beef4 stir fir'  },
    {meat: 'beef', name: 'beef3stir fir'  },
    {meat: 'chicken', name: 'stewed chicken thigh'},
    {meat: 'beef', name: 'beef1 stir fir'  },
    {meat: 'beef', name: 'beef2 stir fir'  },
]
let child = []

let chicken = parent.filter(item => item.meat ==='chicken')
let beef = parent.filter(item => item.meat ==='beef')
let pork = parent.filter(item => item.meat ==='pork')

child = [...child, ...chicken]
child
child = [...child,...beef, ...pork]
child