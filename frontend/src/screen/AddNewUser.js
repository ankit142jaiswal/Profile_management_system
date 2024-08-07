import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function AddNewUser() {

    const [name, setName] = useState("");
    const [hireable, setHireable] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [date, setDate] = useState("");
    const [github, setGithub] = useState("");
    const [website, setWebsite] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");
    // const [picture, setPicture] = useState("");
    const [fieldofinterest, setFieldofinterest] = useState([]);
    const [seeking, setSeeking] = useState([]);
    const [techstack, setTechstack] = useState([]);

    let navigate = useNavigate();
    const collectData = async (e) => {
        e.preventDefault();
        console.log(name, hireable, password, password1, email, date, github, website, location, bio, fieldofinterest, seeking, techstack);
        let result = await fetch("https://profile-management-system.onrender.com/api/addnewuser", {
            method: 'POST',
            body: JSON.stringify({ name, hireable, password, password1, email, date, github, website, location, bio, fieldofinterest, seeking, techstack }),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        const data = await result.json();
        console.log(data);


        if (!data.success) {
            window.alert("Enter the valid Credential");
        }
        if (data.success) {
            window.alert("New User Added Successfully !!");
            navigate('/browseprofile');

        }

    }


    return (
        <div className='container mt-5'>
            <form>
                <div className='row' style={{ textAlign: "center", fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                    <h1 style={{ textAlign: "center" }} className='mb-5 pt-5'>Add New User <hr /></h1>
                    <div className='col-7 p-5'>
                        <div className="mb-3 row  ">
                            <div className='col-2'>

                                <label htmlFor="name" className="form-label">Name</label>
                            </div>
                            <div className='col-auto' >

                                <input type="name" className="form-control" id="name" placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='col-2 '>
                                <label htmlFor="hireable" className="form-label">Hireable</label>

                            </div>
                            <div className='col-auto'>
                                <input type="checkbox" data-toggle="toggle" value={hireable} onChange={(e) => setHireable(e.target.checked)} ></input>

                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className='col-2'>

                                <label htmlFor="email" className="form-label">Email</label>
                            </div>
                            <div className='col-auto'>
                                <input type="email" className="form-control" id="email" placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                        </div>

                        <div className="mb-3 row">
                            <div className='col-2'>

                                <label htmlFor="date" className="form-label">Date of Graduation</label>
                            </div>
                            <div className='col-auto'>

                                <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                        </div>
                        <div className='mb-3 row'>

                            <div className='col-2'>

                                <label htmlFor="github" className="form-label">Github</label>
                            </div>
                            <div className='col-auto'>

                                <input type="github" className="form-control" id="github" placeholder='enter username' value={github} onChange={(e) => setGithub(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className='col-2'>

                                <label htmlFor="website" className="form-label">Website</label>
                            </div>
                            <div className='col-auto'>

                                <input type="website" className="form-control" id="website" placeholder='enter the url' value={website} onChange={(e) => setWebsite(e.target.value)} />
                            </div>
                            <div className="col-2">
                                <label htmlFor="location" className="form-label">Location</label>
                            </div>
                            <div className='col-auto'>
                                <select className="form-select" aria-label="Default select example" id="location" value={location} onChange={(e) => setLocation(e.target.value)} >
                                    <option selected value="0">Select the location</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Noida">Noida</option>
                                    <option value="Ghaziabad">Ghaziabad</option>
                                    <option value="Other">Other</option>

                                </select>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <div className='col-2'>

                                <label htmlFor="bio" className="form-label">Bio</label>
                            </div>
                            <div className='col-10'>

                                <textarea type="bio" className="form-control" id="bio" placeholder='Free textfield' rows="4" value={bio} onChange={(e) => setBio(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className='col-5 p-5'>
                        <div className='mb-3 row'>
                            <div className='col-4'>
                                <label htmlFor="picture" className="form-label">Upload Profile Picture</label>
                            </div>

                            <div className='col-auto'>
                                <div className="d-flex justify-content-center">
                                    <div data-mdb-button-init data-mdb-ripple-init className="btn btn-secondary btn-rounded">
                                        <label className="form-label text-white m-1" htmlFor="customFile1">Choose file</label>
                                        <input type="file" className="form-control d-none" id="customFile1" onchange="displaySelectedImage(event, 'selectedImage')" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto' >

                                <div className="mb-4 d-flex justify-content-center">
                                    <img id="selectedImage" src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                                        alt="example placeholder " style={{ width: "100px", height: "100px" }} />
                                </div>

                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <div className='col-4'>

                                <label htmlFor="fieldofinterest" className="form-label">Field of Intrest</label>
                            </div>
                            <div className='col-auto'>

                                <select className="form-select" id='fieldofinterest' value={fieldofinterest} onChange={(e) => setFieldofinterest([e.target.value])}>
                                    <option selected value="Select the Field">Select the Field</option>
                                    <option value="Security">Security</option>
                                    <option value="Information Technology">Information Technology</option>
                                    <option value="Bussiness Developement">Bussiness Developement</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className='mb-3 row'>
                            <div className='col-4'>
                                <label htmlFor="seeking" className="form-label">Seeking</label>

                            </div>
                            <div className='col-auto'>
                                <select className="form-select" multiple size="4" id='seeking' value={seeking} onChange={(e) => setSeeking([e.target.value])} >
                                    <option value="Internship" >Internship</option>
                                    <option value="Remote">Remote</option>
                                    <option value="FT Position">FT Position</option>
                                    <option value="Not seeking">Not seeking</option>
                                </select>
                            </div>

                        </div>

                        <div className='mb-3 row'>
                            <div className='col-4'>
                                <label htmlFor="techstack" className="form-label">Tech Stack</label>

                            </div>
                            <div className='col-auto'>

                                <select className="form-select" multiple size="4" id='techstack' value={techstack} onChange={(e) => setTechstack([e.target.value])}  >
                                    <option value="Ruby">Ruby</option>
                                    <option value="React.js">Reactjs</option>
                                    <option value="Rail">Rail</option>
                                    <option value="JavaScripts">Javascripts</option>
                                    <option value="HTML/CSS">HTML/CSS</option>
                                    <option value="Python">Python</option>
                                    <option value="Laravel">Laravel</option>
                                    <option value="Flutter">Flutter</option>
                                    <option value="Java">Java</option>


                                </select>
                            </div>
                        </div>

                    </div>
                    <div className='mb-5 row' style={{justifyContent: 'center'}}>

                        <div className='col-auto'>

                            <Link to='/browseprofile' className="btn btn-info">Back</Link>
                        </div>
                        <div className='col-auto'>
                            <button type="button" className="btn btn-success" onClick={collectData}>Add New User</button>

                        </div>

                    </div>
                </div>
            </form>
        </div >
    )
}

export default AddNewUser