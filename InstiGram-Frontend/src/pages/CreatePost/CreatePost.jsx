import React, { useEffect } from 'react';
import './CreatePost.css';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { createAtom } from '../../store/pageAtoms';
import { motion } from 'framer-motion';
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm';
import SideNav from '../../components/NavBar/SideNav';
import { createPostAtom } from '../../store/createPostAtom';
import { postAtom } from '../../store/postAtom';
import { BASE_URL, getCookie } from '../../App';
import { useNavigate } from 'react-router-dom';
import { feedAtom } from '../../store/feedAtom';

const mainVariant = {
    initial: {
        y: '100vh',
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        y: '100vh',
    }
}

const overlayVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        delay: 0.5,
    },
    exit: {
        opacity: 0,
    }
}

export default function CreatePost() {
    const setCreate = useSetRecoilState(createAtom);
    const [createPost, setCreatePost] = useRecoilState(createPostAtom);
    const setPosts = useSetRecoilState(feedAtom);
    const [profilePosts, setProfilePosts] = useRecoilState(postAtom);
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch(`${BASE_URL}/cookie`, {
    //         method: "POST",
    //         credentials: "include",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //     })
    //         .then(async function(res) {
    //             const status = res.status;
    //             const json = await res.json();

    //             if (status == 401) {
    //                 navigate('/signin')
    //             }
    //         })
        
    // }, [])

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        
        const userId = localStorage.getItem('userId');

        const data = {
            userId: userId,
            postImage: createPost,
            caption: formData.get('caption'),
            likes: 0,
            comments: 0,
        }

        if (createPost != null) {
            fetch(`${BASE_URL}/post/create`, {
                method: "POST",
                // credentials: "include",
                headers: {
                    "Content-type": "application/json",
                    "Cookie": `sessionid=${getCookie('sessionid')}`,
                },
                body: JSON.stringify(data),
            })
                .then(async function(res) {
                    const json = await res.json();
                    console.log(data)
                    console.log(json);
    
                    if (res.status == 200) {
                        setProfilePosts([
                            ...profilePosts,
                            data,
                        ]);
                        
                        navigate('/feed');
                        fetch(`${BASE_URL}/feed`, {
                            method: "POST",
                            // credentials: "include",
                            headers: {
                            "Content-type": 'application/json',
                            "Cookie": `sessionid=${getCookie('sessionid')}`
                            },
                            body: JSON.stringify(data),
                        })
                            .then(async function(res) {
                                const json = await res.json();
                                
                                if (res.status == 200) {
                                    setPosts(json);
                                } else if (res.status == 401) {
                                    navigate('/signin');
                                }
                            })
                    }
                })
        }
    }

    useEffect(() => {
        setCreate(true);
        setCreatePost(null);
    
        return () => {
            setCreate(false);
        }
    }, [])

    return (
        <>
            <motion.div className="create-overlay"
            variants={overlayVariant}
            initial='initial'
            animate='animate'
            exit='exit'
            >
                <SideNav className='create-sidebar'></SideNav>
                <motion.div className="create-animate-container" 
                variants={mainVariant}
                >
                    <div className="scrollable-container">
                        <CreatePostForm handleSubmit={ handleSubmit }></CreatePostForm>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}