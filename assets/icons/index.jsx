import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../../constants/theme';
import Home from './Home';
import User from './User';
import Back from './Back';
import Image from './Image';
import Plus from './Plus';
import Setting from './Setting';
import Search from './Search';
import Email from './Email';
import Lock from './Lock';
import Heart from './Heart';
import Logout from './Logout';
import Edit from './Edit';
import Call from './Call';
import Camera from './Camera';
import Location from './Location';

const icons = {
    home: Home,
    user: User,
    back: Back,
    image: Image,
    plus: Plus,
    seting: Setting,
    search: Search,
    email: Email,
    lock: Lock,
    heart: Heart,
    logout: Logout,
    edit: Edit,
    call: Call,
    camera: Camera,
    location: Location
}


const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];

  return (
    <IconComponent
        height= {props.size || 24}
        width= {props.size || 24}
        strockWidth={props.strockWidth || 1.9}
        color={theme.colors.textLight}
        {...props}
    />
    
  )
}

export default Icon

const styles = StyleSheet.create({})