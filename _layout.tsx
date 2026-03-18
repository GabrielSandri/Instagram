import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Publicacao } from "./Publicacao.tsx";

const publicacoes = [
  {
    id: 1,
    nomePerfil: "Neymar.ofc",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReA6LeDUvcvkIPnWfAMBvvu3wEae2KMjtBXA&s",
    fotoPost: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3750602:1773709919/55148815152_3afc6a5c27_k_Easy-Resize.com.webp?f=16x9&h=574&w=1020&$p$f$h$w=fe13f12",
    curtidas: 120,
    comentarios: 15
  },
  {
    id: 2,
    nomePerfil: "Cr7.ofc",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8cOe4LPWrX_u53tf504zIjljZ3Qa2Pdz0w&s",
    fotoPost: "https://assets.goal.com/images/v3/blt2aaca933046f8b00/Cristiano%20Ronaldo%20Portugal%202024%20(4).jpg?auto=webp&format=pjpg&width=3840&quality=60",
    curtidas: 85,
    comentarios: 4
  }
];

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView> 
        <View style={styles.estruturaBasicaPagina}>
          {publicacoes.map(function(item) {
            return (
              <Publicacao 
                key={item.id}
                nomePerfil={item.nomePerfil}
                fotoPerfil={item.fotoPerfil}
                fotoPost={item.fotoPost}
                numeroCurtidas={item.curtidas}
                numeroComentarios={item.comentarios}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  estruturaBasicaPagina: {
    
    marginHorizontal: 0, 
    marginTop: 10
  }
});