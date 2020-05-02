import React from 'react';
import { View, Image,Text } from 'react-native';

import Diamond from '../../../assets/diamond.png'

import styles from './styles';

import { useLight } from '../../../contexts/lightContext'
import { useHunt } from '../../../contexts/huntContext';

export default function Window({ pos }) {

    const { arr } = useHunt()
    const {select} = useLight()

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
                                <Text style={{alignSelf:'center',color: '#fff', fontSize: 22, fontWeight: 'bold'}}>{arr[pos].name}</Text>
                                <View style={{width: 100,alignSelf:'center',borderWidth: 2,borderRadius: 10, borderColor: '#00ffff',flexDirection: "row",marginTop: 10, justifyContent: 'center', alignItems:'center'}}>
                                    <Image source={Diamond} style={{width: 15, height: 15, marginRight: 10}}/>
                                    <Text style={{alignSelf:'center',color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{arr[pos].id}</Text>
                                </View>
                                <Text style={{borderWidth: 2,borderRadius: 10, borderColor: '#777',paddingHorizontal: 10,alignSelf:'center',marginTop: 10,color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{arr[pos].type[0].type.name}</Text>
                            </View>
                            
                        }
                        
                    </>
                }
            </View>
        </View>
    );
}
