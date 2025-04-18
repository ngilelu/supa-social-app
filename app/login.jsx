import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import BackButton from '../components/BackButton'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helper/common'
import Welcome from './welcome'
import Input from '../components/Input'
import Button from '../components/Button'
import { Alert } from 'react-native'
import { supabase } from '../lib/superbase'

const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);


  const onSubmit = async() => {
    if(!emailRef.current || !passwordRef.current){
      Alert.alert('Login', 'please fill all the tabs.')
      return;
    }

    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();

    setLoading(true);

    const {error} = await supabase.auth.signInWithPassword({
      email,
      password
    })

    setLoading(false)

    if(error){
      Alert.alert('Login', error.message)
    }

  }

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark"/>
      <View style={styles.container}>
        <BackButton  router={router}/>

        <View>
          <Text style={styles.WelcomeText}>Hey,</Text>
          <Text style={styles.WelcomeText}>Welcome Back</Text>
        </View>

        <View style={styles.form}>
          <Text style={{fontSize: hp(1.5), color:theme.colors.text}}>
            Please login to continue
          </Text>
      
          <Input
            icon={<Icon name="email" size={26} strockWidth={1.6} />}
            placeholder='Enter your Email'
            onChangeText={value=>emailRef.current = value}
          />
      
          <Input
            icon={<Icon name="lock" size={26} strockWidth={1.6} />}
            placeholder='Enter your Paswword'
            secureTextEntry
            onChangeText={value=>passwordRef.current = value}
          />

          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>

          <Button title={'Login'} loading={loading} onPress={onSubmit} />
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have account?
            </Text>
          
            <Pressable onPress={()=> router.push('signUp')}>
              <Text style={[styles.footerText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>Sign Up</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  WelcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  }
})
