import { db, auth } from '../components/firestore'
import { getDoc, doc } from 'firebase/firestore'

import React, { useEffect, useState } from 'react'

const Home = () => {
  const [profile, setProfile] = useState()

    const loadCurrentUser = async () => {
        await auth.onAuthStateChanged(async (user) => {

            if (user == null) {
                window.location.href = "/"
            }

            const result = await getDoc(doc(db, "users", user.uid))
            setProfile(result.data())

        })
    }

    useEffect(() => {
        loadCurrentUser()
    }, [])

    const logout = async () => {
        await auth.signOut()
        window.location.href = "/"
    }

    return <><div className="row">
        {profile ? <div className="col-4 card mx-auto mt-3 p-3">
            <h1>Welcome, {profile.uname}</h1>
            <hr />
            <p>
                <h3>Username : {profile.uname}</h3>
                <h3>Phone : {profile.phone}</h3>
                <h3>Email : {profile.email}</h3>
            </p>

        </div> : <div className="col-4 card mx-auto mt-3 p-3">
            <div class="spinner-grow" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
        }
    </div>
        <div className="row">
            <div className="col-4 card mx-auto mt-3 p-3">
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </div>
    </>
}

export default Home

