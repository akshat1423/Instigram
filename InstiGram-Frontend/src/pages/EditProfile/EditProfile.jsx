import { useRecoilValue } from "recoil";
import ImageInput from "../../components/ImageInput/ImageInput";
import SideNav from "../../components/NavBar/SideNav";
import PopupCard from "../../components/PopupCard/PopupCard";
import SelectInput from "../../components/SelectInput/SelectInput";
import { darkModeAtom } from "../../store/darkModeAtom";
import './EditProfile.css';

export default function EditProfile() {
    const darkMode = useRecoilValue(darkModeAtom);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        
        const userId = localStorage.getItem('userId');

        const data = {
            userId: userId,
            username: username,
            bio: formData.get('bio'),
            department: formData.get('department'),
            degree: formData.get('degree'),
            year: formData.get('year'),
            profileImage: image,
        }

        fetch("http://localhost:8000/profile/edit", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(async function(res) {
                const status = res.status;
                const json = await res.json();
                // console.log(data)
                console.log(json);

                if(status == 200) {
                    navigate('/feed');
                } else if (status == 409) {
                    alert("Username Taken");
                }
            })
    }

    return (
        <>
            <SideNav></SideNav>
            <PopupCard>
                <div className="details-title">
                    Edit Profile
                </div>
                <form className="setup-form" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor='bio' className='dark' >Bio: </label>
                    <ImageInput name="image" id="image" />
                    <div className="form-inputs">
                        <label htmlFor="username-edit" className="username-label">Username: </label>
                        <input type="text" id="username-edit" className="username-edit" name="username" />
                        <label htmlFor='bio' className='bio-label dark'>Bio: </label>
                        <textarea name='bio' id='bio' cols="30" rows="10" className='dark' />
                        <SelectInput placeholder="Department" name="department" id="department" type="text" required />
                        <div className="details">
                            <SelectInput placeholder="Degree" name="degree" id="degree" type="text" required />
                            <SelectInput placeholder="Year" name="year" id="year" type="text" required />
                        </div>

                        <div className="submit-div">
                            <button type="submit" className={"submit " + (darkMode ? "dark" : "")}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </PopupCard>
        </>
    )
}