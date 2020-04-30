import React, { useContext } from 'react';
import { View, Image,Text } from 'react-native';

import Diamond from '../../../assets/diamond.png'

import styles from './styles';

import {LightContext} from '../../../contexts/lightContext'

export default function Window({ arr, pos }) {

    const context = useContext(LightContext)
    const {select} = context
    return (
        <View style={styles.container}>
            <View style={styles.windowBox}>
                {arr[pos] &&
                    <>

                        <Image
                            source={{ uri: `${arr[pos].img}` }}
                            style={{ width: '100%', height: select ? '60%' : '100%' }}
                            resizeMode="contain"
                        />
                        {select 
                            && 

                            <View style={{ flex: 1,borderBottomStartRadius: 20,borderBottomEndRadius: 20, backgroundColor: '#444' }}>
                                <Text style={{alignSelf:'center',marginTop: 10,color: '#fff', fontSize: 30, fontWeight: 'bold'}}>{arr[pos].name}</Text>
                                <View style={{flexDirection: "row",marginTop: 10, justifyContent: 'center', alignItems:'center'}}>
                                <Image source={Diamond} style={{width: 20, height: 20, marginRight: 10}}/>
                                <Text style={{alignSelf:'center',color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{arr[pos].id}</Text>
                                </View>
                                <Text style={{alignSelf:'center',marginTop: 10,color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{arr[pos].type[0].type.name}</Text>
                            </View>
                            
                        }
                        
                    </>
                }
            </View>
        </View>
    );
}
