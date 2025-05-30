import { use } from "react";
import { supabase } from "../lib/superbase";

export const getUserData = async (userId)=>{
    try{
        const {data, error} = await supabase
        .from('users')
        .select()
        .eq('id', userId)
        .single();

        if(error){
            return {success: false, msg: error?.message}
        }else{
            return {success: true, data}
        }

    }catch(error){
        console.log('got error: ', error);
        return {success: false, msg: error.message}
    }
}

export const updateUser = async (userId, data)=>{
    try{
        const {error} = await supabase
        .from('users')
       .update(data)
       .eq('id', userId)

        if(error){
            return {success: false, msg: error?.message}
        }else{
            return {success: true, data}
        }

    }catch(error){
        console.log('got error: ', error);
        return {success: false, msg: error.message}
    }
}