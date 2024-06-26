import { useRecoilState } from 'recoil';
import Card from '../../components/Card/Card';
import SignupForm from '../../components/SignupForm/SignupForm';
import DarkModeSwitch from '../../components/DarkModeSwitch/DarkModeSwitch';
import { useNavigate } from 'react-router-dom';
import { validAtom } from '../../store/validAtom';
import SideCard from '../../components/SideCard/SideCard';
import { BASE_URL, getCookie } from '../../App';
import { useEffect } from 'react';

function Signup() {
    const navigate = useNavigate();
    const [valid, setValid] = useRecoilState(validAtom)

    // useEffect(() => {
    //     fetch(`${BASE_URL}/cookie`, {
    //         method: "POST",
    //         credentials: "include",
    //         headers: {
    //             "Content-type": 'application/json',
    //             "Cookie": `sessionid=${getCookie('sessionid')}`
    //         },
    //     })
    //         .then( async function(res) {
    //             const json = await res.json();

    //             if (res.status == 200) {
    //                 navigate("/feed")
    //             }
    //         })
    // }, [])

    function handleSubmit(e) {
        const pass = document.getElementsByName('password')[0].value;
        const confirm = document.getElementsByName('confirm')[0].value;
        
        e.preventDefault();

        if (pass == confirm) {
            const formData = new FormData(e.target);

            const data = {
                username: formData.get('username'),
                password: formData.get('password'),
                roll: formData.get('roll'),
            }

            fetch(`${BASE_URL}/signup`, {
                method: "POST",
                // credentials: "include",
                headers: {
                    "Content-type": "application/json",
                    "Cookie": `sessionid=${getCookie('sessionid')}`,
                },
                body: JSON.stringify(data),
            })
                .then(async function(res) {
                    const status = res.status;
                    const json = await res.json();

                    if (status == 200) {
                        navigate('/profile/details');
                        setValid({
                            username: true,
                            password: true,
                            roll: true
                        })

                        localStorage.setItem("userId", json.userId);

                    } else if(status == 409) {
                        if (json.data == "username") {
                            setValid({
                                username: false,
                                password: true,
                                roll: true
                            })
                            alert('Username Taken');
                        } else if (json.data == "roll") {
                            setValid({
                                username: true,
                                password: true,
                                roll: false
                            })
                            alert('Roll Number Taken');
                        }
                    }
                })
        }
    }

    return (
        <div className='main'>
            <Card id='signup-card'>
                <SignupForm handleSubmit={ handleSubmit }></SignupForm>
            </Card>

            <SideCard title='SIGNUP'></SideCard>
            {/* <DarkModeSwitch></DarkModeSwitch> */}
        </div>
    )
}

export default Signup;