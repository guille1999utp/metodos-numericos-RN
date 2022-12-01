import React,{useState, useCallback} from 'react'
import { StyleSheet,Text,View } from 'react-native';
import { Input, Stack, Center, Button, FormControl} from "native-base";
import { useFormik } from 'formik';
import { useFocusEffect } from '@react-navigation/native';

interface results {
  error: number;
  errorRelativo: number;
  errorAbsoluto:number;
}

const MetodoError = () => {

  const [mostrar, setMostrar] = useState<boolean>(false);
  const [result, setResult] = useState<results>({
    error:0,
    errorRelativo:0,
    errorAbsoluto:0
  });

  const {values,setFieldValue,handleSubmit} = useFormik({
    initialValues:{
      valueTrue:"0",
      valueFalse:"0",
    },
    onSubmit: value =>{
      console.log(value)
      let error = parseFloat(value.valueTrue) - parseFloat(value.valueFalse);
      let errorRelativo = error / parseFloat(value.valueTrue);
      let errorAbsoluto = errorRelativo * 100;
      setResult({
        error,
        errorRelativo,
        errorAbsoluto
      })
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
            <FormControl.Label>Valor Verdadero</FormControl.Label>
            <Input defaultValue="0" placeholder="Valor Verdadero" value={values.valueTrue} onChangeText={text => setFieldValue("valueTrue",text)} />
            <FormControl.ErrorMessage>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          <FormControl.Label>Valor Aproximado</FormControl.Label>
            <Input defaultValue="0" placeholder="Valor Aproximado" value={values.valueFalse} onChangeText={text => setFieldValue("valueFalse",text)}/>
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
              Error:
            </Text>
            <Text>
              {result.error}
            </Text>
          </View>
          <View style={style.containerResults}>
            <Text style={style.titleResults}>
              Error Absoluto:
            </Text>
            <Text>
              {result.errorAbsoluto}
            </Text>
          </View>
          <View style={style.containerResults}>
            <Text style={style.titleResults}>
              Error Relativo:
            </Text>
            <Text>
              {result.errorRelativo}
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

export default MetodoError;
