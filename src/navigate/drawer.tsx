import React from "react";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import PuntoFijo from '../screen/PuntoFijo';
import Biseccion from "../screen/Biseccion";
import GaussSeidel from "../screen/GaussSeidel";
import IntegracionNumerica from "../screen/IntegracionNumerica";
import NewtonRaphson from "../screen/NewtonRaphson";
import DiferenciacionNumerica from "../screen/DiferenciacionNumerica";
import MetodoError from "../screen/MetodoError";
import PolinomioLagrange from "../screen/PolinomioLagrange";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

function DrawerControll() {
  return (
    <Drawer.Navigator
    drawerContent={ (props)=><DrawerContent {...props}/>}
    
    >
      <Drawer.Screen name="puntofijo"  component={PuntoFijo} />
      <Drawer.Screen name="gaussseidel"  component={GaussSeidel} />
      <Drawer.Screen name="integracionnumerica"  component={IntegracionNumerica} />
      <Drawer.Screen name="newtonraphson"  component={NewtonRaphson} />
      <Drawer.Screen name="diferenciacionnumerica"  component={DiferenciacionNumerica} />
      <Drawer.Screen name="metodorrror"  component={MetodoError} />
      <Drawer.Screen name="biseccion" component={Biseccion} />
      <Drawer.Screen name="polinomiolagrange" component={PolinomioLagrange} />
    </Drawer.Navigator>
  );
}

const DrawerContent = ( {navigation}: DrawerContentComponentProps ) =>{

    const activado = navigation.getState().index;

    return (
        <DrawerContentScrollView style={{backgroundColor:"rgb(44,44,44)"}}>
            <View style={styles.avatarContainer}>
                <Image 
                    style={styles.avatar}
                    source={require("../assets/avatarMetodos.jpg")}
                />
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity
                style={activado === 0 ? styles.activado:styles.menuBoton}
                onPress={()=>navigation.navigate("puntofijo")}
                >
                    <Text style={activado === 0 ? styles.textActivado:styles.menuText}>
                        Punto Fijo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={activado === 1 ? styles.activado:styles.menuBoton}
                onPress={()=>navigation.navigate("gaussseidel")}
                >
                    <Text style={activado === 1 ? styles.textActivado:styles.menuText}>
                        Gauss Seidel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={activado === 2 ? styles.activado:styles.menuBoton}
                onPress={()=>navigation.navigate("integracionnumerica")}
                >
                    <Text style={activado === 2 ? styles.textActivado:styles.menuText}>
                        Integracion Numerica
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={activado === 3 ? styles.activado:styles.menuBoton}
                onPress={()=>navigation.navigate("newtonraphson")}
                >
                    <Text style={activado === 3 ? styles.textActivado:styles.menuText}>
                        Newton Raphson
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={activado === 4 ? styles.activado:styles.menuBoton}
                onPress={()=>navigation.navigate("diferenciacionnumerica")}
                >
                    <Text style={activado === 4 ? styles.textActivado:styles.menuText}>
                        Diferenciacion Numerica
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={activado === 5 ? styles.activado:styles.menuBoton}
                onPress={()=>navigation.navigate("metodorrror")}
                >
                    <Text style={activado === 5 ? styles.textActivado:styles.menuText}>
                        Metodo del Error
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={activado === 6 ? styles.activado:styles.menuBoton}
                onPress={()=>navigation.navigate("biseccion")}
                >
                    <Text style={activado === 6 ? styles.textActivado:styles.menuText}>
                        Biseccion
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={activado === 7 ? styles.activado:styles.menuBoton}
                onPress={()=>navigation.navigate("polinomiolagrange")}
                >
                    <Text style={activado === 7 ? styles.textActivado:styles.menuText}>
                        Polinomio de Lagrange
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )

}

const styles = StyleSheet.create({
    avatarContainer:{
        alignItems:"center",
        marginTop:20
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100
    },
    menuContainer:{
        marginVertical:30,
        marginHorizontal:20
    },
    menuBoton:{
        marginVertical:10,
        paddingHorizontal:10
    },
    menuText:{
        fontSize:15,
        fontWeight:"bold",
        color:"white",
        textAlign:"center"
    },
    activado:{
        backgroundColor:"white",
        padding:10,
        borderRadius:20
    },
    textActivado:{
        color:"black",
        fontWeight:"bold",
        textAlign:"center"
    }
})

export default DrawerControll;