import { atom } from 'recoil';

export const feedAtom=atom({
    key:"feedAtom",
    default:[
        {
            _id: 20,
            auth: "string",
            authId: 6,
            profileImage: null,
            likes: 2,
            isLiked: false,
            comments: [{
                commentId:1,
                commentAuth:'gaurav',
                commentContent:'hello',

            },
            {   commentId:2,
                commentAuth:'paul',
                commentContent:'bonjour',

            }],
            caption: 'Lol',
            postImage: 'data:image/jpeg;base64,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',
    
        },
        {
            _id: 21,
            auth: 'DEF',
            authId: 5,
            profileImage: null,
            likes: 3,
            isLiked: false,
            comments: [
                {    commentId:3,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:4,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:5,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:6,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:7,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                },
                {    commentId:3,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:4,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:5,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:6,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:7,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                },
                {    commentId:3,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:4,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:5,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:6,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:7,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                },
                {    commentId:3,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:4,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:5,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:6,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:7,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                },
                {    commentId:3,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:4,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:5,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:6,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:7,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
            ],
            caption: 'string',
            postImage: null,
        },
        {
            _id: 22,
            auth: 'Paul',
            authId: 5,
            profileImage: null,
            likes: 3,
            isLiked: false,
            comments: [,
                {    commentId:3,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:4,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:5,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {   commentId:6,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
                ,
                {    commentId:7,
                    commentAuth:'paul',
                    commentContent:'bonjour',
    
                }
            ],
            caption: 'string',
            postImage: null,
        }
    ]
})

