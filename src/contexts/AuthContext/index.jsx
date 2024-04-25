import { createContext, useEffect, useState } from "react";
import { auth, firestore } from '../../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext({})

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(true)

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@devapp')
            if (storageUser) setUser(JSON.parse(storageUser))
            setLoadingAuth(false)
        }

        loadStorage()
    }, [])

    async function signUp(inputs) {
        setLoading(true)
        const { name, email, password } = inputs
        try {
            const newUser = await createUserWithEmailAndPassword(auth, email, password)
            const uid = newUser.user.uid
            await setDoc(doc(firestore, "users", uid), {
                nome: name,
                createdAt: new Date()
            })
            const data = {uid: uid, nome: name, email: email}
            setUser(data)
            storageUser(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    async function signIn(inputs) {
        setLoading(true)
        const {email, password} = inputs
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            const uid = user.user.uid
            const userProfile = await getDoc(doc(firestore, "users", uid))
            const data = { uid: uid, nome: userProfile.data().nome, email: email }
            setUser(data)
            storageUser(data)

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    async function logout() {
        await signOut(auth)
        await AsyncStorage.removeItem('@devapp')
        setUser(null)
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('@devapp', JSON.stringify(data))
    }



    return (
        <AuthContext.Provider value={{signed: !!user, user, loading, loadingAuth, signUp, signIn, logout}}>
            {children}
        </AuthContext.Provider>
    )
}