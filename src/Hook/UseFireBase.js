import initializeFireBase from "../Pages/LogIn/FireBase/FireBase.initialize"
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFireBase();
const UseFireBase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const userCreateAccount = (email, password, UserName) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: UserName };
                setUser(newUser);
                // save our user on DB 
                saveUser(email, UserName,'POST');
                // set our user name 
                updateProfile(auth.currentUser, {
                    displayName: UserName
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                }).finally(() => setIsLoading(false));
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });
    }
    const userLogin = (email, password) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...
                console.log(userCredential);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            }).finally(() => setIsLoading(false));
    }
    const UserLogOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://fathomless-headland-44349.herokuapp.com/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        isLoading,
        userCreateAccount,
        userLogin,
        UserLogOut
    }


}
export default UseFireBase;