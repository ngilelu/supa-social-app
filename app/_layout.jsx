import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { AuthProvider, useAuth } from '../constants/AuthContext'
import { supabase } from '../lib/superbase'
import { getUserData } from '../services/userService'

const _layout = ()=>{
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}
const MainLayout = () => {
  const {setAuth, setUserData} = useAuth();
  const router = useRouter();

  useEffect(()=>{
    supabase.auth.onAuthStateChange((_event, session) => {
      if(session){
        setAuth.session?.user
        updateUserData(session?.user, session?.user?.email);
        router.replace('/home')
      }else{     
        setAuth(null)
        router.replace('/welcome')
      }
    })
  }, []);

  const updateUserData = async (user, email) =>{
    let res = await getUserData(user?.id);
    if(res.success) setUserData({...res.data, email})
  }
  return (
    <Stack 
        screenOptions={{
            headerShown: false
        }} 
    />
  )
}

export default _layout

const styles = StyleSheet.create({})