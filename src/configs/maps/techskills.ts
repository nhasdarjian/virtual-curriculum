import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord } from '../../utils/grid';
import miniMeAnimations from '../sprites/miniMe';

export const techskills = {
    lowerImageSrc: "../images/backgrounds/museum.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(6),
            y: getGridPosition(16),
            isPlayer: true,
            hasShadow: true,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/characters/sprite-vasco.png',
                    width: 16,
                    height: 32,
                    imageWidth: 16,
                    imageHeight: 32,
                    animations: miniMeAnimations
                },
                shadow: {
                    src: '../images/characters/shadow.png',
                    width: 32,
                    height: 32,
                    imageWidth: 64,
                    imageHeight: 64
                }
            }
        }),
        // avatarJs2: new GameObject({
        //     x: getGridPosition(1),
        //     y: getGridPosition(11),
        //     hasShadow: false,
        //     width: getGridPosition(2),
        //     height: getGridPosition(4),
        //     sprite: {
        //         object: {
        //             src: '../images/objects/js-object.png',
        //             width: getGridPosition(2),
        //             height: getGridPosition(4),
        //             imageWidth: 32,
        //             imageHeight: 64
        //         },
        //     },
        //     interactions: [
        //         {
        //             events: [{type: 'message', text: 'Javascript'}]
        //         }
        //     ]
        // }),
        avatarJs: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/js-avatar2.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactions: [
                {
                    events: [{type: 'message', text: 'Javascript'}]
                }
            ]
        }),
        avatarNode: new GameObject({
            x: getGridPosition(4),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/node-avatar2.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'NodeJS'}
                    ]
                }
            ],
        }),
        avatarGit: new GameObject({
            x: getGridPosition(8),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/git-avatar2.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            interactions: [
                {
                    events: [
                        {type: 'message', text: `Git - Version Control System`},
                    ]
                }
            ]
        }),
        avatarDocker: new GameObject({
            x: getGridPosition(11),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/docker-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Docker'}
                    ]
                }
            ],
        }),
        avatarReact: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/react-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'React'}
                    ]
                }
            ],
        }),
        avatarDevtools: new GameObject({
            x: getGridPosition(4),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/chromedev-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Chrome DevTools'}
                    ]
                }
            ],
        }),
        avatarCss: new GameObject({
            x: getGridPosition(8),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/css-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'CSS'}
                    ]
                }
            ],
        }),
        avatarTypescript: new GameObject({
            x: getGridPosition(11),
            y: getGridPosition(6),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/typescript-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Typescript'}
                    ]
                }
            ],
        }),
        avatarWebpack: new GameObject({
            x: getGridPosition(2),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/webpack-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Webpack'}
                    ]
                }
            ],
        }),
        avatarJest: new GameObject({
            x: getGridPosition(6),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/jest-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Jest - Unit Tests'}
                    ]
                }
            ],
        }),
        avatarPerformance: new GameObject({
            x: getGridPosition(10),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/performance-avatar.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    imageWidth: 32,
                    imageHeight: 48
                },
            },
            
            interactions: [
                {
                    events: [
                        {type: 'message', text: 'Website Performance'}
                    ]
                }
            ],
        }),
    },
    limits: {
        xMin: 6 * 16,
        yMin: 4 * 16,
        xMax: 6 * 16,
        yMax: 12 * 16 // don't forget getGridPosition
    },
    walls: {},
    actionSpaces: {
        [getGridCoord(6,16)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ],
        [getGridCoord(7,16)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ]
    },
};