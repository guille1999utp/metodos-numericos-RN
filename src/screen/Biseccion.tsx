import React,{useState, useCallback} from 'react'
import { StyleSheet,Text,View } from 'react-native';
import { Input, Stack, Center, Button, FormControl} from "native-base";
import { useFormik } from 'formik';
import { useFocusEffect } from '@react-navigation/native';
import { calcBiseccion } from '../utils/OperacionesMatlab';

interface results {
  raiz: number;
}



const Biseccion = () => {

  const [mostrar, setMostrar] = useState<boolean>(false);
  const [result, setResult] = useState<results>({
    raiz:0
  });

  const {values,setFieldValue,handleSubmit} = useFormik({
    initialValues:{
      function:"0",
      limiteSuperior:"0",
      limiteInferior:"0",
    },
    onSubmit: value =>{
      const funcion = JSON.stringify(`function(x){ return ${value.function} }`)
      const raiz = calcBiseccion(parseInt(value.limiteInferior),parseInt(value.limiteSuperior),funcion)
      setResult({raiz});
      setMostrar(true);
    }
  });

  useFocusEffect(
    useCallback(() => {
      return () => {
        setMostrar(false);
        setFieldValue("valueTrue","0");
        setFieldValue("valueFalse","0");
      };
    }, [])
  );
  
  return (
    <Center flex={1} px="3">
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        <FormControl isRequired>
            <FormControl.Label>Ingrese la funcion</FormControl.Label>
            <Input defaultValue="0" placeholder="function" value={values.function} onChangeText={text => setFieldValue("function",text)} />
            <FormControl.ErrorMessage>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
            <FormControl.Label>Limite Inferior</FormControl.Label>
            <Input defaultValue="0" placeholder="limite Inferior" value={values.limiteInferior} onChangeText={text => setFieldValue("limiteInferior",text)} />
            <FormControl.ErrorMessage>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          <FormControl.Label>Limite Superior</FormControl.Label>
            <Input defaultValue="0" placeholder="limite Superior" value={values.limiteSuperior} onChangeText={text => setFieldValue("limiteSuperior",text)}/>
            <FormControl.ErrorMessage>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          <Button style={style.botton} onPress={handleSubmit}>
            Calcular
          </Button>
        </FormControl>
        {
        mostrar &&
        <View style={style.container}>
          <View style={style.containerResults}>
            <Text style={style.titleResults}>
              la raiz es:
            </Text>
            <Text>
              {result.raiz}
            </Text>
          </View>
        </View>
        }
      </Stack>
    </Center>
  )
}

const style = StyleSheet.create({
  botton:{
    marginTop:20
  },
  containerResults:{
    flexDirection:"row"
  },
  titleResults:{
    fontWeight:"bold",
    marginRight:10,
    fontSize:17
  },
  container:{
    flexDirection:"column",
    marginTop:20
  }

})

export default Biseccion;
