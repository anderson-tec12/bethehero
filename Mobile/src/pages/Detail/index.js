import React from 'react'
import {View,FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native'
import { Feather} from '@expo/vector-icons'
import LogoImg from '../../assets/logo.png'
import styles from './style'
import * as MailComposer from 'expo-mail-composer'

//  import  * as MailComposer from 'expo-email-composer'
//  import  * as MailComposer from 'expo-'

import { useNavigation, useRoute} from '@react-navigation/native'

export default function Detail(){
    const Route =useRoute()

    const incident = Route.params.incident

    const navigation = useNavigation()
    const msg = `Ola ${ incident.name} estou entrando em contado pois gostaria de 
    ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}`

    function navigateBack(){
        navigation.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject:`Herói do caso: ${incident.title}`,
            recipients:['anderson.tec12@gmail.com'],
            body: msg
        })
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=5511900000000&text=${msg}`)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg} />
                <TouchableOpacity style={styles.detailsButton} onPress={ navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>  

            <View style={styles.incident} >
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{ incident.name} de {incident.city} / {incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox} >
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o hero desse caso.</Text>

                <Text style={styles.heroDescriptions}>Entre em cotato:</Text>


                <View style={styles.actions} >
                    <TouchableOpacity style={styles.action} onPress={ sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={ sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}