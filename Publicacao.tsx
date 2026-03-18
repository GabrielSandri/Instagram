import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Publicacao({ nomePerfil, fotoPerfil, fotoPost, numeroCurtidas, numeroComentarios }) {
   
    const [curtido, setCurtido] = useState(false);

    return (
        <View style={styles.containerPost}>
          
            <View style={styles.header}>
                <Image source={{ uri: fotoPerfil }} style={styles.fotoPerfil} />
                <Text style={styles.nomePerfil}>{nomePerfil}</Text>
            </View>

           
            <Image source={{ uri: fotoPost }} style={styles.fotoPost} />

            
            <View style={styles.areaInteracao}>
                <View style={styles.linhaBotoes}>
                    <TouchableOpacity onPress={() => setCurtido(!curtido)}>
                        <Text style={styles.emoji}>{curtido ? "❤️" : "🤍"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.emoji}>💬</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.emoji}>✈️</Text>
                    </TouchableOpacity>
                </View>

              
                <Text style={styles.textoContador}>
                    {curtido ? numeroCurtidas + 1 : numeroCurtidas} curtidas
                </Text>
                
                <Text style={styles.textoComentarios}>
                    Ver todos os {numeroComentarios} comentários
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPost: {
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    fotoPerfil: {
        width: 35,
        height: 35,
        borderRadius: 17.5, 
        marginRight: 10,
        borderWidth: 2,           
        borderColor: 'green',
    },
    nomePerfil: {
        fontWeight: 'bold',
        fontSize: 14
    },
    fotoPost: {
        width: '100%',
        aspectRatio: 1, 
    },
    areaInteracao: {
        padding: 10
    },
    linhaBotoes: {
        flexDirection: 'row',
        marginBottom: 8
    },
    emoji: {
        fontSize: 22,
        marginRight: 15
    },
    textoContador: {
        fontWeight: 'bold',
        fontSize: 14
    },
    textoComentarios: {
        color: 'gray',
        marginTop: 5,
        fontSize: 13
    }
});